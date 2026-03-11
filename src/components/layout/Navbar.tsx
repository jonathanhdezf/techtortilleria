"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Historia", href: "#historia" },
        { name: "Productos", href: "#productos" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 max-w-[100vw] overflow-x-hidden",
                isScrolled ? "bg-neutral-black/95 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
                <Link href="/" className="flex-shrink min-w-0 group">
                    <Logo className="h-10 md:h-16 w-[180px] xs:w-[220px] md:w-auto object-contain transition-transform group-hover:scale-105" variant="premium" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8 mr-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-black text-white/40 hover:text-primary uppercase tracking-[0.3em] transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                        <Link
                            href="/pos"
                            className="text-[10px] font-black px-5 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest flex items-center gap-2"
                        >
                            <Terminal className="w-3 h-3 text-primary" />
                            Terminal POS
                        </Link>
                        <Link
                            href="/distribuidores"
                            className="text-[10px] font-black px-5 py-2.5 rounded-xl bg-primary text-black hover:bg-white transition-all shadow-lg shadow-primary/10 uppercase tracking-widest"
                        >
                            SOY DISTRIBUIDOR
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle - High Visibility */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="p-3 bg-primary text-black rounded-xl shadow-xl shadow-primary/20 active:scale-90 transition-all flex items-center justify-center border-2 border-primary/20"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-neutral-black/98 backdrop-blur-3xl border-b border-white/10 p-6 md:p-8 flex flex-col gap-6 shadow-2xl noise w-screen md:w-full"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xs font-black text-white/60 hover:text-primary uppercase tracking-[0.3em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                            <Link href="/pos" className="text-[10px] font-black text-center py-4 bg-white/5 text-white rounded-2xl border border-white/10 uppercase tracking-widest">POS</Link>
                            <Link href="/distribuidores" className="text-[10px] font-black text-center py-4 bg-primary text-black rounded-2xl uppercase tracking-widest">SOY DISTRIBUIDOR</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

