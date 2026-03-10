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

    // Fetch active products using Raw SQL to bypass client sync issues
    const products: any[] = await prisma.$queryRaw`
        SELECT * FROM products WHERE active = true ORDER BY name ASC
    `

    // Fetch active categories using Raw SQL
    const categories: any[] = await prisma.$queryRaw`
        SELECT * FROM categories WHERE active = true ORDER BY name ASC
    `

    const serializedProducts = products.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        pricePublic: Number(p.pricePublic),
        priceDistributor: Number(p.priceDistributor),
        unitType: p.unitType,
        stockQuantity: Number(p.stockQuantity),
        minimumStockAlert: Number(p.minimumStockAlert),
        categoryName: p.categoryName || p.category || '',
        categoryId: p.categoryId || '',
        active: p.active
    }))

    // Fetch shift summary if register is open
    let shiftSummary: any = {
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
        const [sales, expenses, saleItems] = await Promise.all([
            prisma.sale.findMany({
                where: {
                    userId: dbUser.id,
                    createdAt: { gte: openRegister.openedAt }
                }
            }),
            prisma.expense.findMany({
                where: { cashRegisterId: openRegister.id },
                orderBy: { createdAt: 'desc' }
            }),
            prisma.saleItem.findMany({
                where: {
                    sale: {
                        userId: dbUser.id,
                        createdAt: { gte: openRegister.openedAt }
                    }
                },
                include: { product: { select: { name: true } } }
            })
        ])

        const abonosDetail = await prisma.$queryRaw<any[]>`
            SELECT t.id, t.amount, t."createdAt", t.description, 
                   COALESCE(c.name, d.name) as "customerName"
            FROM credit_transactions t
            LEFT JOIN customers c ON t."customerId" = c.id
            LEFT JOIN distributors d ON t."distributorId" = d.id
            WHERE t.type = 'abonos'
            AND t."createdAt" >= ${openRegister.openedAt}
            AND (c."businessId" = ${dbUser.businessId} OR d."businessId" = ${dbUser.businessId})
            ORDER BY t."createdAt" DESC
        `

        const inflowsDetail = await prisma.$queryRaw<any[]>`
            SELECT id, amount, description, "createdAt"
            FROM cash_inflows
            WHERE "cashRegisterId" = ${openRegister.id}
            ORDER BY "createdAt" DESC
        `

        // Group by product to find star product
        const productStats = saleItems.reduce((acc: any, item: any) => {
            const name = (item.product as any).name
            acc[name] = (acc[name] || 0) + Number(item.quantity)
            return acc
        }, {})

        const productoEstrella = Object.entries(productStats)
            .sort((a: any, b: any) => (b[1] as number) - (a[1] as number))[0]?.[0] || 'Ninguno'
            
        const cashSales = sales.filter(s => s.paymentMethod === 'efectivo').reduce((acc: number, s: any) => acc + Number(s.totalAmount), 0)
        const cardSales = sales.filter(s => s.paymentMethod === 'tarjeta').reduce((acc: number, s: any) => acc + Number(s.totalAmount) || 0, 0)
        const totalAbonos = abonosDetail.reduce((acc: number, a: any) => acc + Number(a.amount), 0)
        const totalManualInflows = inflowsDetail.reduce((acc: number, i: any) => acc + Number(i.amount), 0)

        const ventaMasGrande = sales.reduce((max: number, s: any) => {
            const val = Number(s.totalAmount)
            return val > max ? val : max
        }, 0)

        shiftSummary = {
            cashSales,
            cardSales,
            totalAbonos,
            abonosList: abonosDetail.map(a => ({ 
                id: a.id, 
                amount: Number(a.amount), 
                description: a.description || '', 
                createdAt: a.createdAt,
                customerName: a.customerName || 'Cliente'
            })),
            totalManualInflows,
            inflowsList: inflowsDetail.map(i => ({ 
                id: i.id, 
                amount: Number(i.amount), 
                description: i.description || '', 
                createdAt: i.createdAt 
            })),
            totalExpenses: expenses.reduce((acc: number, e: any) => acc + Number(e.amount), 0),
            expensesList: expenses.map((e: any) => ({ 
                id: e.id, 
                amount: Number(e.amount), 
                description: e.description || '', 
                createdAt: e.createdAt 
            })),
            totalVentas: cashSales + cardSales + totalAbonos + totalManualInflows,
            ventaMasGrande,
            productoEstrella
        }
    }

    const serializedRegister = openRegister ? {
        id: openRegister.id,
        openedAt: openRegister.openedAt,
        openingAmount: Number(openRegister.openingAmount),
        closingAmount: openRegister.closingAmount ? Number(openRegister.closingAmount) : null,
        discrepancyAmount: openRegister.discrepancyAmount ? Number(openRegister.discrepancyAmount) : null,
        expectedAmount: openRegister.expectedAmount ? Number(openRegister.expectedAmount) : null,
    } : null

    return (
        <>
            <CashRegisterModal isOpen={!openRegister} />
            <POSClient
                products={serializedProducts}
                categories={categories}
                userId={dbUser.id}
                userName={dbUser.name}
                businessId={dbUser.businessId}
                activeRegister={serializedRegister}
                shiftSummary={shiftSummary}
            />
        </>
    )
}
