import { prisma } from '@/lib/prisma'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import POSClient from './components/POSClient'
import CashRegisterModal from './components/CashRegisterModal'

export const dynamic = 'force-dynamic'

export default async function POSPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user?.email) {
        redirect('/login')
    }

    const dbUser = await prisma.user.findUnique({ where: { email: user.email } })

    if (!dbUser) {
        redirect('/login')
    }

    // Check if open register exists
    const openRegister = await prisma.cashRegister.findFirst({
        where: {
            openedById: dbUser.id,
            closedAt: null
        }
    })

    // Fetch active products
    const products = await prisma.product.findMany({
        where: { active: true },
        orderBy: { category: 'asc' }
    })

    const serializedProducts = products.map(p => ({
        ...p,
        pricePublic: Number(p.pricePublic),
        priceDistributor: Number(p.priceDistributor),
        stockQuantity: Number(p.stockQuantity),
        minimumStockAlert: Number(p.minimumStockAlert)
    }))

    // Fetch shift summary if register is open
    let shiftSummary: {
        cashSales: number,
        cardSales: number,
        totalAbonos: number,
        abonosList: any[],
        totalExpenses: number,
        expensesList: any[],
        totalManualInflows: number,
        inflowsList: any[],
        totalVentas: number,
        ventaMasGrande: number,
        productoEstrella: string
    } = {
        cashSales: 0,
        cardSales: 0,
        totalAbonos: 0,
        abonosList: [],
        totalExpenses: 0,
        expensesList: [],
        totalManualInflows: 0,
        inflowsList: [],
        totalVentas: 0,
        ventaMasGrande: 0,
        productoEstrella: 'Ninguno'
    }
    if (openRegister) {
        const sales = await prisma.sale.findMany({
            where: {
                userId: dbUser.id,
                createdAt: { gte: openRegister.openedAt }
            }
        })

        const expenses = await prisma.expense.findMany({
            where: {
                cashRegisterId: openRegister.id
            },
            orderBy: { createdAt: 'desc' }
        })

        const abonosDetail = await prisma.$queryRaw<any[]>`
            SELECT t.id, t.amount, t."createdAt", t.description, c.name as "customerName"
            FROM credit_transactions t
            JOIN customers c ON t."customerId" = c.id
            WHERE t.type = 'abonos'
            AND t."createdAt" >= ${openRegister.openedAt}
            AND c."businessId" = ${dbUser.businessId}
            ORDER BY t."createdAt" DESC
        `

        const inflowsDetail = await prisma.$queryRaw<any[]>`
            SELECT id, amount, description, "createdAt"
            FROM cash_inflows
            WHERE "cashRegisterId" = ${openRegister.id}
            ORDER BY "createdAt" DESC
        `

        const saleItems = await prisma.saleItem.findMany({
            where: {
                sale: {
                    userId: dbUser.id,
                    createdAt: { gte: openRegister.openedAt }
                }
            },
            include: { product: true }
        })

        // Group by product to find star product
        const productStats = saleItems.reduce((acc: any, item: any) => {
            const name = item.product.name
            acc[name] = (acc[name] || 0) + Number(item.quantity)
            return acc
        }, {})

        const productoEstrella = Object.entries(productStats).sort((a: any, b: any) => b[1] - a[1])[0]?.[0] || 'Ninguno'
        const cashSales = sales.filter(s => s.paymentMethod === 'efectivo').reduce((acc: number, s: any) => acc + Number(s.totalAmount), 0)
        const cardSales = sales.filter(s => s.paymentMethod === 'tarjeta').reduce((acc: number, s: any) => acc + Number(s.totalAmount), 0)
        const totalAbonos = abonosDetail.reduce((acc: number, a: any) => acc + Number(a.amount), 0)
        const totalManualInflows = inflowsDetail.reduce((acc: number, i: any) => acc + Number(i.amount), 0)

        shiftSummary = {
            cashSales,
            cardSales,
            totalAbonos,
            abonosList: abonosDetail.map(a => ({ ...a, amount: Number(a.amount) })),
            totalManualInflows,
            inflowsList: inflowsDetail.map(i => ({ ...i, amount: Number(i.amount) })),
            totalExpenses: expenses.reduce((acc: number, e: any) => acc + Number(e.amount), 0),
            expensesList: expenses.map((e: any) => ({ ...e, amount: Number(e.amount) })),
            totalVentas: cashSales + cardSales + totalAbonos + totalManualInflows,
            ventaMasGrande: Math.max(0, ...sales.map(s => Number(s.totalAmount))),
            productoEstrella
        }
    }

    const serializedRegister = openRegister ? {
        ...openRegister,
        openingAmount: Number(openRegister.openingAmount),
        closingAmount: openRegister.closingAmount ? Number(openRegister.closingAmount) : null,
    } : null

    return (
        <>
            <CashRegisterModal isOpen={!openRegister} />
            <POSClient
                products={serializedProducts}
                userId={dbUser.id}
                userName={dbUser.name}
                businessId={dbUser.businessId}
                activeRegister={serializedRegister}
                shiftSummary={shiftSummary}
            />
        </>
    )
}
