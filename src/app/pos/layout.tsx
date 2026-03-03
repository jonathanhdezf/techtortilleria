import { ReactNode } from 'react'
import { Store, User, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function POSLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col">
            {/* Header POS */}
            <header className="bg-zinc-900 border-b border-zinc-800 h-16 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-2 text-emerald-500">
                    <Store className="w-6 h-6" />
                    <h1 className="text-xl font-bold tracking-tight text-white">TechTortilleria <span className="text-emerald-500/50 text-sm font-medium">POS</span></h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm font-medium text-zinc-300 shadow-sm">Caja 1 - Abierta</span>
                    </div>

                    <div className="h-6 w-px bg-zinc-800 mx-2" />

                    <div className="flex items-center gap-3">
                        <div className="text-right flex flex-col justify-center">
                            <span className="text-sm font-medium text-white leading-none">Cajero Activo</span>
                            <span className="text-xs text-zinc-500">Turno Matutino</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <User className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>
                    <Link href="/login" className="ml-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
                        <LogOut className="w-5 h-5" />
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex overflow-hidden">
                {children}
            </main>
        </div>
    )
}
