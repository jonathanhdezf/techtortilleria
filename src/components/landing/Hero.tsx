"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Terminal, Layers } from "lucide-react";
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-neutral-black noise">
            {/* Premium Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full -z-10 opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl w-full text-center z-10"
            >
                {/* Executive Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-2xl backdrop-blur-md"
                >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Terminal de Grado Ejecutivo v2.0
                </motion.div>

                {/* High-Impact Heading */}
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 italic uppercase tracking-tighter">
                    Re-imaginando la <br />
                    <span className="text-primary not-italic">Tradición.</span> <br />
                    <span className="text-white/20">Control Absoluto.</span>
                </h1>

                {/* Sales Copy */}
                <p className="text-lg md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
                    No es solo un punto de venta. Es una plataforma de <span className="text-white font-bold italic">alto rendimiento</span> diseñada para digitalizar, optimizar y escalar el alma de tu negocio.
                </p>

                {/* Premium CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
                    <Link href="/login" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-10 py-5 bg-primary text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_40px_rgba(250,204,21,0.2)] hover:-translate-y-1 active:scale-95 group">
                            Adquirir Sistema
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-md">
                        Ver Demo Ejecutiva
                    </button>
                </div>

                {/* Floating Status Badges (The "Sell") */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
                    {[
                        { icon: Zap, label: "Sync en Tiempo Real", status: "ACTIVO" },
                        { icon: ShieldCheck, label: "Grado Terminal", status: "SEGURO" },
                        { icon: Terminal, label: "Interfaz Ejecutiva", status: "READY" },
                        { icon: Layers, label: "Multi-Sucursal", status: "AUTO" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-2 backdrop-blur-sm"
                        >
                            <item.icon className="w-5 h-5 text-primary/40" />
                            <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">{item.label}</span>
                            <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] opacity-40">{item.status}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Premium Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="relative w-full max-w-6xl mx-auto px-4"
                >
                    <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-secondary/40 backdrop-blur-3xl group ring-1 ring-white/20">
                        {/* Interactive scanline effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(250,204,21,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline pointer-events-none opacity-20" />

                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-30 pointer-events-none" />

                        <div className="p-1 sm:p-2 md:p-4 bg-neutral-black/40">
                            <video
                                src="/techherovideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                poster="/videohero.webp"
                                className="w-full h-auto object-cover rounded-[32px] opacity-80 brightness-75 contrast-125"
                            />
                        </div>

                        {/* Glossy terminal frame decoration */}
                        <div className="absolute top-6 left-6 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                        </div>
                    </div>

                    {/* Background glow casting onto main content */}
                    <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-[100px] -z-20 opacity-30" />
                </motion.div>
            </motion.div>
        </section>
    );
}

