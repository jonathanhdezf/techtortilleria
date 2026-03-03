'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: (formData.get('email') as string).trim(),
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/signup?error=' + error.message)
    }

    // Redirect to login after successful signup
    redirect('/login?message=Usuario registrado en Supabase. Ahora puedes iniciar sesión.')
}
