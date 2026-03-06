'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/utils/supabase/server'

async function getCurrentUser() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user?.email) throw new Error('No auth')

    const dbUser = await prisma.user.findUnique({ where: { email: user.email } })
    if (!dbUser) throw new Error('User not found')

    return dbUser
}

export async function openRegister(formData: FormData) {
    const user = await getCurrentUser()
    const openingAmount = Number(formData.get('openingAmount'))

    await prisma.cashRegister.create({
        data: {
            businessId: user.businessId,
            openedById: user.id,
            openingAmount
        }
    })

    revalidatePath('/pos')
}

export async function closeRegister(formData: FormData) {
    const user = await getCurrentUser()
    const closingAmount = Number(formData.get('closingAmount'))
    const expectedAmount = Number(formData.get('expectedAmount'))
    const discrepancyAmount = Number(formData.get('discrepancyAmount'))

    const openRegister = await prisma.cashRegister.findFirst({
        where: {
            openedById: user.id,
            closedAt: null
        }
    })

    if (!openRegister) throw new Error('No open register found')

    await prisma.$executeRaw`
        UPDATE cash_registers 
        SET 
            "closedAt" = ${new Date()},
            "closingAmount" = ${closingAmount},
            "expectedAmount" = ${expectedAmount},
            "discrepancyAmount" = ${discrepancyAmount},
            "closedById" = ${user.id}
        WHERE id = ${openRegister.id}
    `

    revalidatePath('/pos')
}

export async function processSale(
    items: { productId: string, quantity: number, price: number, subtotal: number }[],
    paymentMethod: string,
    totalAmount: number,
    customerId?: string,
    isCredit: boolean = false
) {
    const user = await getCurrentUser()

    // Using Raw SQL for the entire transaction to bypass Prisma Client sync issues in Windows dev environment
    try {
        const saleId = crypto.randomUUID()

        // 1. Create Sale
        await prisma.$executeRaw`
            INSERT INTO sales (id, "businessId", "userId", "totalAmount", "paymentMethod", "customerId", "isCredit", "createdAt")
            VALUES (${saleId}, ${user.businessId}, ${user.id}, ${totalAmount}, ${paymentMethod}, ${customerId || null}, ${isCredit}, ${new Date()})
        `

        // 2. Incremental updates for items and stock
        for (const item of items) {
            const itemId = crypto.randomUUID()
            await prisma.$executeRaw`
                INSERT INTO sale_items (id, "saleId", "productId", quantity, "unitPrice", subtotal)
                VALUES (${itemId}, ${saleId}, ${item.productId}, ${item.quantity}, ${item.price}, ${item.subtotal})
            `

            await prisma.$executeRaw`
                UPDATE products 
                SET "stockQuantity" = "stockQuantity" - ${item.quantity}
                WHERE id = ${item.productId}
            `

            await prisma.$executeRaw`
                INSERT INTO inventory_movements (id, "businessId", "productId", "movementType", quantity, "referenceId", "createdAt")
                VALUES (${crypto.randomUUID()}, ${user.businessId}, ${item.productId}, 'venta', ${item.quantity}, ${saleId}, ${new Date()})
            `
        }

        // 3. Update Customer Debt if Credit
        if (isCredit && customerId) {
            await prisma.$executeRaw`
                UPDATE customers
                SET "currentDebt" = "currentDebt" + ${totalAmount}
                WHERE id = ${customerId}
            `

            await prisma.$executeRaw`
                INSERT INTO credit_transactions (id, "customerId", amount, type, description, "createdAt")
                VALUES (${crypto.randomUUID()}, ${customerId}, ${totalAmount}, 'cargos', 'Venta a crédito', ${new Date()})
            `
        }

        revalidatePath('/pos')
        return { success: true, saleId }
    } catch (error) {
        console.error("Sale Processing Error:", error)
        throw error
    }
}

export async function createExpenseAction(amount: number, description: string) {
    const user = await getCurrentUser()

    const openRegister = await prisma.cashRegister.findFirst({
        where: {
            openedById: user.id,
            closedAt: null
        }
    })

    if (!openRegister) throw new Error('No hay una caja abierta para este usuario')

    await prisma.expense.create({
        data: {
            businessId: user.businessId,
            cashRegisterId: openRegister.id,
            amount,
            description
        }
    })

    revalidatePath('/pos')
    return { success: true }
}

export async function createInflowAction(amount: number, description: string) {
    const user = await getCurrentUser()

    const openRegister = await prisma.cashRegister.findFirst({
        where: {
            openedById: user.id,
            closedAt: null
        }
    })

    if (!openRegister) throw new Error('No hay una caja abierta para este usuario')

    await prisma.$executeRaw`
        INSERT INTO cash_inflows (id, "businessId", "cashRegisterId", amount, description, "createdAt")
        VALUES (${crypto.randomUUID()}, ${user.businessId}, ${openRegister.id}, ${amount}, ${description}, ${new Date()})
    `

    revalidatePath('/pos')
    return { success: true }
}

export async function getBusinessSettings() {
    const user = await getCurrentUser()
    const results = await prisma.$queryRaw<any[]>`
        SELECT "volumeDiscountActive", "volumeDiscountThreshold", "volumeDiscountPercentage"
        FROM businesses
        WHERE id = ${user.businessId}
        LIMIT 1
    `
    const business = results[0]

    return {
        ...business,
        volumeDiscountThreshold: Number(business?.volumeDiscountThreshold || 5),
        volumeDiscountPercentage: Number(business?.volumeDiscountPercentage || 5)
    }
}
