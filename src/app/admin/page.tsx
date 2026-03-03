import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import AdminClient from './AdminClient'

export default async function AdminPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const dbUser = await prisma.user.findUnique({
        where: { email: user.email! }
    })

    if (!dbUser || dbUser.role !== 'ADMIN') {
        redirect('/')
    }

    return <AdminClient />
}
