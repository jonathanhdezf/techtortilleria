"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, ArrowRight, Lock, Mail, ShieldCheck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/shared/Logo";

export default function DistributorLoginPage() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/distribuidores/dashboard");
    };

    return (
        <div className="min-h-screen bg-neutral-black flex flex-col items-center justify-center p-6 relative overflow-hidden noise">
            {/* Background Glows */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <Link href="/" className="fixed top-8 left-8 flex items-center gap-2 group z-20">
                <div className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-secondary transition-all">
                    <ChevronLeft className="w-6 h-6" />
                </div>
                <span className="font-black text-[10px] uppercase tracking-[0.2em] text-surface/40 group-hover:text-primary transition-colors">Volver al Inicio</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md z-10"
            >
                <div className="bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden shadow-black/40">
                    <div className="p-10">
                        <div className="flex justify-center mb-10">
                            <Logo className="h-16 w-auto text-white" />
                        </div>

                        <div className="space-y-2 text-center mb-10">
                            <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter">Portal de Socios</h1>
                            <p className="text-surface/40 font-bold text-xs uppercase tracking-widest leading-relaxed">Gestión estratégica de distribución y suministros</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black uppercase text-surface/20 ml-4 tracking-[0.2em]">
                                    Identificador de Socio
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-surface/20 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-surface/10 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all font-bold"
                                        placeholder="socio@techtortilleria.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[10px] font-black uppercase text-surface/20 ml-4 tracking-[0.2em]">
                                    Clave de Acceso
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-surface/20 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="block w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-surface/10 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all font-bold"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-3 py-5 px-6 border-none rounded-2xl shadow-xl text-sm font-black text-secondary bg-primary hover:bg-primary-dark active:scale-95 transition-all shadow-primary/20"
                            >
                                <ShieldCheck className="w-5 h-5" />
                                ACCEDER AL PORTAL
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                                    <Truck className="w-4 h-4 text-primary" />
                                    <span className="text-[9px] font-black text-surface/40 uppercase tracking-[0.2em]">Red de Distribución Premium</span>
                                </div>
                                <p className="text-[10px] text-surface/20 font-bold uppercase tracking-widest">
                                    ¿Deseas ser distribuidor? <Link href="/#contacto" className="text-primary hover:text-white transition-colors underline decoration-primary/20 underline-offset-4">Contáctanos aquí</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-surface/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} TechTortilleria &bull; Distribución v2.0
                </p>
            </motion.div>
        </div>
    );
}
