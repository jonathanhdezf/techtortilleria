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

export async function createCustomer(formData: FormData) {
    const user = await getCurrentUser()
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const creditLimit = Number(formData.get('creditLimit'))
    const id = crypto.randomUUID()

    await prisma.$executeRaw`
        INSERT INTO customers (id, "businessId", name, phone, email, "creditLimit", "currentDebt", active, "createdAt")
        VALUES (${id}, ${user.businessId}, ${name}, ${phone}, ${email}, ${creditLimit}, 0, true, ${new Date()})
    `

    revalidatePath('/pos')
    return { id, name }
}

export async function searchCustomers(query: string) {
    const user = await getCurrentUser()
    const customers = await prisma.$queryRaw<any[]>`
        SELECT * FROM customers
        WHERE "businessId" = ${user.businessId}
        AND name ILIKE ${'%' + query + '%'}
        AND active = true
    `
    return customers.map(c => ({
        ...c,
        creditLimit: Number(c.creditLimit),
        currentDebt: Number(c.currentDebt)
    }))
}

export async function addCreditPayment(customerId: string, amount: number, description: string) {
    const user = await getCurrentUser()

    await prisma.$executeRaw`
        INSERT INTO credit_transactions (id, "customerId", amount, type, description, "createdAt")
        VALUES (${crypto.randomUUID()}, ${customerId}, ${amount}, 'abonos', ${description}, ${new Date()})
    `

    await prisma.$executeRaw`
        UPDATE customers
        SET "currentDebt" = "currentDebt" - ${amount}
        WHERE id = ${customerId}
    `

    revalidatePath('/pos')
    return { success: true }
}

export async function getCustomerStats(customerId: string) {
    const results = await prisma.$queryRaw<any[]>`
        SELECT * FROM customers WHERE id = ${customerId} LIMIT 1
    `
    const customer = results[0]

    const transactions = await prisma.$queryRaw<any[]>`
        SELECT * FROM credit_transactions 
        WHERE "customerId" = ${customerId} 
        ORDER BY "createdAt" DESC 
        LIMIT 5
    `

    return {
        ...customer,
        creditLimit: Number(customer.creditLimit),
        currentDebt: Number(customer.currentDebt),
        transactions: transactions.map(t => ({
            ...t,
            amount: Number(t.amount)
        }))
    }
}
export async function searchDistributors(query: string) {
    const user = await getCurrentUser()
    const distributors = await prisma.$queryRaw<any[]>`
        SELECT * FROM distributors
        WHERE "businessId" = ${user.businessId}
        AND name ILIKE ${'%' + query + '%'}
        AND active = true
    `
    return distributors.map(d => ({
        ...d,
        creditLimit: Number(d.creditLimit),
        currentDebt: Number(d.currentDebt || 0)
    }))
}
