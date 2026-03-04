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

    const openRegister = await prisma.cashRegister.findFirst({
        where: {
            openedById: user.id,
            closedAt: null
        }
    })

    if (!openRegister) throw new Error('No open register found')

    await prisma.cashRegister.update({
        where: { id: openRegister.id },
        data: {
            closedAt: new Date(),
            closedById: user.id,
            closingAmount
        }
    })

    revalidatePath('/pos')
}

export async function processSale(items: { productId: string, quantity: number, price: number, subtotal: number }[], paymentMethod: string, totalAmount: number) {
    const user = await getCurrentUser()

    await prisma.$transaction(async (tx) => {
        // 1. Create Sale
        const sale = await tx.sale.create({
            data: {
                businessId: user.businessId,
                userId: user.id,
                totalAmount,
                paymentMethod,
                saleItems: {
                    create: items.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        unitPrice: item.price,
                        subtotal: item.subtotal
                    }))
                }
            }
        })

        // 2. Decrement Stock & Create Inventory Movements
        for (const item of items) {
            await tx.product.update({
                where: { id: item.productId },
                data: {
                    stockQuantity: { decrement: item.quantity }
                }
            })

            await tx.inventoryMovement.create({
                data: {
                    businessId: user.businessId,
                    productId: item.productId,
                    movementType: 'venta',
                    quantity: item.quantity,
                    referenceId: sale.id
                }
            })
        }
    })

    revalidatePath('/pos')
    return { success: true }
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
