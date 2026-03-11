import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    supabaseResponse = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    supabaseResponse.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    supabaseResponse = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    supabaseResponse.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    // This will refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/server-side/nextjs
    const { data: { user } } = await supabase.auth.getUser()

    const { pathname } = request.nextUrl
    const isPublicRoute =
        pathname === '/login' ||
        pathname === '/signup' ||
        pathname === '/' ||
        pathname === '/privacidad' ||
        pathname === '/terminos' ||
        pathname.startsWith('/ayuda') ||
        pathname.startsWith('/distribuidores/login') ||
        pathname === '/distribuidores'

    if (!user && !isPublicRoute) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        // Pass the current page as a redirect param if needed
        url.searchParams.set('redirectedFrom', pathname)
        return NextResponse.redirect(url)
    }

    // Role-based protection could also be added here if needed
    // e.g., if (pathname.startsWith('/admin') && user.role !== 'admin') ...

    return supabaseResponse
}
