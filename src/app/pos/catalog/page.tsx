import { prisma } from '@/lib/prisma'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import CatalogClient from './components/CatalogClient'

export const dynamic = 'force-dynamic'

export default async function CatalogPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user?.email) {
        redirect('/login')
    }

    const dbUser = await prisma.user.findUnique({ where: { email: user.email } })

    if (!dbUser) {
        redirect('/login')
    }

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

    return <CatalogClient products={serializedProducts} />
}
