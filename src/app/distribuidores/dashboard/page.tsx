import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import DistributorClient from './DistributorClient'
import { prisma } from '@/lib/prisma'

export default async function DistributorPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Check if user is a distributor
    const distributor = await prisma.distributor.findFirst({
        where: { email: user.email! }
    })

    if (!distributor) {
        redirect('/')
    }

    return <DistributorClient />
}
