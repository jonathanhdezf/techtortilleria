"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden noise">
            {/* Abstract maize shapes */}
            <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center z-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                    <Star className="w-3 h-3 fill-accent" />
                    La Tortillería del Siglo XXI
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-secondary leading-[1.1] mb-6">
                    Donde la <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">Tradición</span> <br />
                    encuentra la <span className="italic font-light">Tecnología.</span>
                </h1>

                <p className="text-lg md:text-xl text-secondary/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Digitalizamos el alma de tu negocio. Una plataforma integral para puntos de venta,
                    gestión de distribuidores y presencia digital premium.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-surface rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-black transition-all shadow-xl hover:-translate-y-1">
                        Comenzar ahora
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-surface border-2 border-secondary/10 text-secondary rounded-xl font-bold hover:bg-secondary/5 transition-all">
                        Ver Demo
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative w-full max-w-5xl mx-auto px-2"
                >
                    <div className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm group">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <motion.img
                            src="/hero.png"
                            alt="TechTortilleria Dashboard & POS"
                            className="w-full h-auto object-cover rounded-[32px] shadow-2xl"
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Glossy overlay */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[32px]" />
                    </div>

                    {/* Background glow behind image */}
                    <div className="absolute -inset-4 bg-primary/20 blur-[60px] rounded-[40px] -z-10" />
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-12"
            >
                <ChevronDown className="text-secondary/30 w-8 h-8" />
            </motion.div>
        </section>
    );
}
