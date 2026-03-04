import Link from 'next/link'
import { login } from './actions'
import { Store, User, Truck, ShieldCheck, Mail, Lock, ChevronLeft } from 'lucide-react'
import Logo from '@/components/shared/Logo'

export default function LoginPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-black p-6 relative overflow-hidden noise">
            {/* Background Glows */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Back Button */}
            <Link href="/" className="fixed top-8 left-8 flex items-center gap-2 group z-20">
                <div className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-secondary transition-all">
                    <ChevronLeft className="w-6 h-6" />
                </div>
                <span className="font-black text-[10px] uppercase tracking-[0.2em] text-surface/40 group-hover:text-primary transition-colors">Volver al Inicio</span>
            </Link>

            <div className="w-full max-w-md z-10">
                <div className="bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden shadow-black/40">
                    <div className="p-10">
                        <div className="flex justify-center mb-10">
                            <Logo className="h-16 w-auto text-white" />
                        </div>

                        <div className="space-y-2 text-center mb-10">
                            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Bienvenido</h2>
                            <p className="text-surface/40 font-bold text-xs uppercase tracking-widest">Inicia sesión en el ecosistema digital</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black uppercase text-surface/20 ml-4 tracking-[0.2em]" htmlFor="email">
                                    Identificador Operativo
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-surface/20 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="block w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-surface/10 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all font-bold"
                                        placeholder="usuario@techtortilleria.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[10px] font-black uppercase text-surface/20 ml-4 tracking-[0.2em]" htmlFor="password">
                                    Clave de Seguridad
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-surface/20 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-surface/10 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all font-bold"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            {searchParams?.error && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
                                    <p className="text-red-400 text-[10px] font-black uppercase tracking-widest text-center italic">
                                        {searchParams.error}
                                    </p>
                                </div>
                            )}

                            <button
                                formAction={login}
                                className="w-full flex justify-center items-center gap-3 py-5 px-6 border-none rounded-2xl shadow-xl text-sm font-black text-secondary bg-primary hover:bg-primary-dark active:scale-95 transition-all shadow-primary/20"
                            >
                                <ShieldCheck className="w-5 h-5" />
                                ACCEDER AL SISTEMA
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="flex flex-col items-center group cursor-help">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                                        <Store className="w-4 h-4 text-surface/10 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-[8px] font-black text-surface/20 uppercase tracking-widest">POS</span>
                                </div>
                                <div className="flex flex-col items-center group cursor-help">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                                        <User className="w-4 h-4 text-surface/10 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-[8px] font-black text-surface/20 uppercase tracking-widest">Admin</span>
                                </div>
                                <div className="flex flex-col items-center group cursor-help">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                                        <Truck className="w-4 h-4 text-surface/10 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-[8px] font-black text-surface/20 uppercase tracking-widest">Entregas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-surface/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} TechTortilleria &bull; v2.0 Premium
                </p>
            </div>
        </div>
    )
}
