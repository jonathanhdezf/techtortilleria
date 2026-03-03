"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, ArrowRight, Lock, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DistributorLoginPage() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/distribuidores/dashboard");
    };

    return (
        <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 noise">
            <Link href="/" className="fixed top-8 left-8 flex items-center gap-2 group">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-primary">
                    <Truck className="w-5 h-5" />
                </div>
                <span className="font-bold text-secondary">TechTortilleria</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-secondary/5"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-secondary mb-2">Portal de Socios</h1>
                    <p className="text-secondary/50">Ingresa para gestionar tus pedidos de distribución</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary flex items-center gap-2">
                            <User className="w-4 h-4 text-accent" /> Correo Electrónico
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full px-5 py-4 bg-surface rounded-xl border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="soci@empresa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary flex items-center gap-2">
                            <Lock className="w-4 h-4 text-accent" /> Contraseña
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full px-5 py-4 bg-surface rounded-xl border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-secondary text-surface rounded-xl font-black flex items-center justify-center gap-3 hover:bg-neutral-black transition-all shadow-xl hover:-translate-y-1"
                    >
                        ENTRAR AL PANEL
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-secondary/40">
                    ¿Deseas ser distribuidor? <Link href="/#contacto" className="text-accent font-bold underline">Contáctanos aquí</Link>
                </p>
            </motion.div>
        </div>
    );
}
