'use client'

import { useState, useEffect } from 'react'
import {
    Search, Package, Plus, PackageOpen, ChevronLeft, Settings, LogOut, Printer
} from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import { useCartStore, CartProduct } from '@/store/cartStore'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/shared/Logo'

import { AnimatePresence } from 'framer-motion'
import React, { useRef } from 'react'

const CATEGORIES = ['Kilo', 'Medio Kilo', 'Masa', 'Salsas', 'Bebidas']

export default function CatalogClient({ products }: { products: any[] }) {
    const { items, addItem, updateQuantity } = useCartStore()
    const [activeCategory, setActiveCategory] = useState('Todos')
    const [searchTerm, setSearchTerm] = useState('')
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsSettingsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const handleAddToCart = (p: any, qty: number = 1) => {
        const existing = items.find(i => i.id === p.id)
        if (existing) {
            updateQuantity(p.id, existing.quantity + qty)
        } else {
            const cartProduct: CartProduct = {
                id: p.id,
                name: p.name,
                pricePublic: p.pricePublic,
                unitType: p.unitType
            }
            addItem(cartProduct)
            if (qty !== 1) {
                useCartStore.getState().updateQuantity(p.id, qty)
            }
        }
    }

    const getRemainingStock = (p: any) => {
        const item = items.find(i => i.id === p.id)
        return p.stockQuantity - (item?.quantity || 0)
    }

    return (
        <div className="flex-1 flex flex-col w-full h-full bg-neutral-black overflow-hidden relative noise">
            {/* Nav */}
            <nav className="relative z-[60] flex items-center justify-between px-8 py-4 bg-secondary/40 backdrop-blur-2xl border-b border-white/5 shrink-0">
                <div className="flex items-center gap-8">
                    <Logo className="h-10 md:h-12 w-auto" variant="premium" />
                    <div className="h-8 w-px bg-white/10" />
                    <Link
                        href="/pos"
                        className="flex items-center gap-3 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-2xl border border-white/5 transition-all group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Volver a Terminal</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4 relative" ref={menuRef}>
                    <button
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        className={cn(
                            "p-3 rounded-xl transition-all border group",
                            isSettingsOpen
                                ? "bg-primary text-secondary border-primary"
                                : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border-white/5"
                        )}
                        title="Operaciones de Terminal"
                    >
                        <Settings className={cn("w-5 h-5 transition-transform", isSettingsOpen ? "rotate-90" : "group-hover:rotate-45")} />
                    </button>

                    <AnimatePresence>
                        {isSettingsOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className="absolute top-full right-0 mt-4 w-60 bg-secondary shadow-2xl border border-white/10 rounded-[2rem] p-3 z-[100] grid gap-2"
                            >
                                <button
                                    onClick={() => window.location.href = '/pos'}
                                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-white/40 hover:bg-white/5 hover:text-white"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Terminal
                                </button>
                                <div className="h-px bg-white/5 my-1" />
                                <button
                                    onClick={() => window.location.href = '/login'}
                                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-red-400 hover:bg-red-500/10"
                                >
                                    <LogOut className="w-4 h-4" /> Cerrar Sesión
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            <div className="flex-1 flex flex-col p-6 md:p-8 lg:p-12 overflow-hidden relative z-10 w-full max-w-[1600px] mx-auto">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 leading-none">Inventario Activo</p>
                        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Catálogo de <span className="text-primary">Productos</span></h2>
                    </div>
                    <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/5">
                        <PackageOpen className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{products.length} Items Disponibles</span>
                    </div>
                </div>

                {/* Optimized Search & Categories */}
                <div className="mb-8 flex flex-col md:flex-row items-center gap-6 bg-white/[0.02] p-4 rounded-3xl border border-white/[0.05]">
                    <div className="relative w-full md:w-72 group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="BUSCAR PRODUCTO..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-6 py-3.5 bg-neutral-black/40 border border-white/5 rounded-2xl text-[10px] font-black tracking-[0.2em] text-white focus:bg-white/5 focus:border-primary/40 transition-all outline-none placeholder:text-white/10"
                        />
                    </div>

                    <div className="h-8 w-px bg-white/5 hidden md:block" />

                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
                        <button
                            onClick={() => setActiveCategory('Todos')}
                            className={cn(
                                "px-5 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest transition-all whitespace-nowrap border",
                                activeCategory === 'Todos'
                                    ? "bg-primary text-secondary border-primary shadow-lg shadow-primary/10"
                                    : "bg-white/5 text-white/30 hover:bg-white/10 hover:text-white border-white/5"
                            )}
                        >
                            Todos
                        </button>
                        {CATEGORIES.map(c => (
                            <button
                                key={c}
                                onClick={() => setActiveCategory(c)}
                                className={cn(
                                    "px-5 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest transition-all whitespace-nowrap border",
                                    activeCategory === c
                                        ? "bg-primary text-secondary border-primary shadow-lg shadow-primary/10"
                                        : "bg-white/5 text-white/30 hover:bg-white/10 hover:text-white border-white/5"
                                )}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 pb-24 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {filteredProducts.map(p => {
                        const isKg = p.unitType?.toLowerCase().includes('kg') || p.unitType?.toLowerCase() === 'kilogramo';
                        const remStock = getRemainingStock(p);
                        const isLowStock = remStock <= p.minimumStockAlert;

                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                key={p.id}
                                className="group relative bg-secondary/30 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-6 transition-all hover:border-primary/20 hover:bg-secondary/50 shadow-2xl flex flex-col justify-between overflow-hidden"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary/10 transition-colors" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                            <Package className="w-7 h-7" />
                                        </div>
                                        <span className={cn(
                                            "text-[9px] px-3 py-1.5 rounded-full font-black uppercase tracking-widest shadow-lg",
                                            isLowStock ? 'bg-red-500/20 text-red-400 border border-red-500/10' : 'bg-primary/10 text-primary border border-primary/10'
                                        )}>
                                            {remStock} {p.unitType}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-1 leading-tight group-hover:text-primary transition-colors">
                                        {p.name}
                                    </h3>
                                    <p className="text-[10px] font-bold text-surface/20 uppercase tracking-[0.2em] mb-6">
                                        Precio Público
                                    </p>

                                    <div className="mb-8 font-mono">
                                        <span className="text-4xl font-black text-white tracking-tighter tabular-nums leading-none">
                                            {formatCurrency(Number(p.pricePublic))}
                                        </span>
                                        <span className="text-[10px] font-black text-surface/20 uppercase tracking-widest ml-2">/ {p.unitType}</span>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-3">
                                    {isKg ? (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleAddToCart(p, 0.5)}
                                                className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 active:scale-95"
                                            >
                                                ½ Kg
                                            </button>
                                            <button
                                                onClick={() => handleAddToCart(p, 1)}
                                                className="flex-1 py-4 bg-primary text-secondary rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/10 hover:scale-105 active:scale-95 transition-all"
                                            >
                                                1 Kg
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleAddToCart(p, 1)}
                                            className="w-full py-5 bg-primary text-secondary rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/10 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                                        >
                                            <Plus className="w-4 h-4" /> AGREGAR A VENTA
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
