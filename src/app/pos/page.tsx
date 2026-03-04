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
            />
        </>
    )
}
