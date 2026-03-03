'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/lib/prisma'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: (formData.get('email') as string).trim(),
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect(`/login?error=${encodeURIComponent(error.message)}`)
    }

    // Find user role to determine redirection
    const user = await prisma.user.findUnique({
        where: { email: data.email }
    })

    if (!user) {
        redirect('/login?error=User not found in database')
    }

    revalidatePath('/', 'layout')

    if (user.role === 'ADMIN') {
        redirect('/admin')
    } else if (user.role === 'DISTRIBUIDOR') {
        redirect('/distribuidores')
    } else {
        redirect('/pos')
    }
}
