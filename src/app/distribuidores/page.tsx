import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/lib/prisma'

export default async function DistribuidoresIndex() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
        // Find user role
        const dbUser = await prisma.user.findUnique({
            where: { email: user.email! }
        })

        if (dbUser?.role === 'DISTRIBUIDOR') {
            redirect('/distribuidores/dashboard')
        }
    }

    redirect('/distribuidores/login')
}
