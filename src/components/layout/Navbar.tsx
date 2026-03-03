"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Terminal } from "lucide-react";
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

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "glass py-3 shadow-md" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <Logo className={cn(
                        "h-16 md:h-20 w-auto transition-all duration-300",
                        isScrolled ? "text-white" : "text-secondary"
                    )} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#historia" className="text-sm font-medium hover:text-accent transition-colors">Historia</Link>
                    <Link href="#productos" className="text-sm font-medium hover:text-accent transition-colors">Productos</Link>
                    <Link href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">Contacto</Link>
                    <div className="h-6 w-px bg-secondary/10 mx-2" />
                    <Link
                        href="/pos"
                        className="text-sm font-semibold px-4 py-2 rounded-lg bg-secondary text-surface hover:bg-neutral-black transition-all shadow-md"
                    >
                        Terminal POS
                    </Link>
                    <Link
                        href="/distribuidores/login"
                        className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-secondary hover:bg-primary-dark transition-all shadow-md"
                    >
                        Portal Distribuidores
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-secondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-secondary/10 p-6 flex flex-col gap-4 shadow-xl">
                    <Link href="#historia" onClick={() => setMobileMenuOpen(false)}>Historia</Link>
                    <Link href="#productos" onClick={() => setMobileMenuOpen(false)}>Productos</Link>
                    <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
                    <Link href="/pos" className="w-full text-center py-3 bg-secondary text-surface rounded-lg">Terminal POS</Link>
                    <Link href="/distribuidores/login" className="w-full text-center py-3 bg-primary text-secondary rounded-lg">Portal Distribuidores</Link>
                </div>
            )}
        </nav>
    );
}
