'use client'

import { useState, useEffect } from 'react'
import {
    ShoppingCart, Plus, Minus, Trash2, CreditCard, Banknote, PackageOpen, Loader2,
    X, CheckCircle, Search, ChevronRight, Package, Printer, Zap, ShieldCheck, User, Settings, LogOut
} from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import { useCartStore, CartProduct } from '@/store/cartStore'
import { createSaleAction, getSalesHistoryAction } from '@/app/actions/pos'
import { generateTicketPDF } from '@/lib/pdf'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useRef } from 'react'
import Logo from '@/components/shared/Logo'

import CashCloseModal from './CashCloseModal'

const CATEGORIES = ['Kilo', 'Medio Kilo', 'Masa', 'Salsas', 'Bebidas']

export default function POSClient({ products, userId, userName, businessId, activeRegister }: { products: any[], userId: string, userName?: string | null, businessId: string, activeRegister?: any }) {
    const { items, addItem, removeItem, updateQuantity, clearCart, getTotal } = useCartStore()
    const [paymentMethod, setPaymentMethod] = useState('efectivo')
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('Todos')

    // Modal state
    const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false)
    const [isCloseModalOpen, setIsCloseModalOpen] = useState(false)
    const [cashReceived, setCashReceived] = useState<string>('')
    const [saleComplete, setSaleComplete] = useState<{ success: boolean; change: number; saleItems: any[]; total: number } | null>(null)

    // Mobile state
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [view, setView] = useState<'terminal' | 'history'>('terminal')
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [salesHistory, setSalesHistory] = useState<any[]>([])
    const [fetchingHistory, setFetchingHistory] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const formatDate = (date: Date) => {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        return {
            day: days[date.getDay()],
            date: `${date.getDate()} ${months[date.getMonth()]}`,
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
        }
    }

    const timeData = formatDate(currentTime)

    const currentTotal = getTotal()
    const parsedCash = parseFloat(cashReceived) || 0
    const change = parsedCash - currentTotal

    const handleCheckout = async () => {
        if (items.length === 0) return
        if (paymentMethod === 'efectivo' && parsedCash < currentTotal) {
            alert('El monto ingresado es menor al total.')
            return
        }

        setLoading(true)
        try {
            const saleItems = items.map(i => ({
                productId: i.id,
                name: i.name,
                quantity: i.quantity,
                priceAtTime: Number(i.pricePublic),
                subtotal: i.subtotal
            }))

            const req = await createSaleAction({
                businessId,
                userId,
                items: saleItems,
                paymentMethod,
                total: currentTotal
            })

            if (!req.success) throw new Error(req.error)

            setSaleComplete({
                success: true,
                change: paymentMethod === 'efectivo' ? change : 0,
                saleItems: saleItems,
                total: currentTotal
            })
        } catch (err) {
            alert('Error procesando venta: ' + (err as Error).message)
        } finally {
            setLoading(false)
        }
    }

    const fetchHistory = async () => {
        setFetchingHistory(true)
        const history = await getSalesHistoryAction(businessId)
        setSalesHistory(history)
        setFetchingHistory(false)
    }

    useEffect(() => {
        if (view === 'history') {
            fetchHistory()
        }
    }, [view])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsSettingsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const finishSale = (printTicket: boolean) => {
        if (printTicket && saleComplete) {
            generateTicketPDF(saleComplete.saleItems, saleComplete.total)
        }

        clearCart()
        setSaleComplete(null)
        setCheckoutModalOpen(false)
        setIsCartOpen(false)
        setCashReceived('')
    }

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
            {/* Premium POS Navbar */}
            <nav className="relative z-[60] flex items-center justify-between px-8 py-4 bg-secondary/40 backdrop-blur-2xl border-b border-white/5 shrink-0">
                <div className="flex items-center gap-8">
                    <Logo className="h-10 md:h-12 w-auto" variant="premium" />
                    <div className="hidden md:flex items-center gap-6 border-l border-white/5 pl-8">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] leading-none mb-1">Terminal ID</span>
                            <span className="text-xs font-black text-white italic uppercase tracking-tighter">POS-001-EXEC</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-surface/20 uppercase tracking-[0.2em] leading-none mb-1">Ubicación</span>
                            <span className="text-xs font-black text-white/60 italic uppercase tracking-tighter">Planta Central</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-6 border-r border-white/5 pr-8 mr-4">
                        <div className="flex flex-col text-right">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] leading-none mb-1">Operador de Turno</span>
                            <span className="text-sm font-black text-white italic uppercase tracking-tighter">{userName || 'Cajero de Turno'}</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                            <User className="w-5 h-5 text-primary" />
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-6 border-r border-white/5 pr-8 mr-4">
                        <div className="flex flex-col text-right">
                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] leading-none mb-1">{timeData.day} {timeData.date}</span>
                            <span className="text-xl font-black text-white tabular-nums tracking-tighter leading-none">{timeData.time}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsCloseModalOpen(true)}
                        className={cn(
                            "px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3 border shadow-lg shadow-black/20 mr-2",
                            activeRegister
                                ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20"
                                : "text-red-400 bg-red-500/10 border-red-500/20 hover:bg-red-500/20"
                        )}
                    >
                        <div className={cn(
                            "w-2 h-2 rounded-full animate-pulse",
                            activeRegister ? "bg-emerald-500" : "bg-red-500"
                        )} />
                        <span>Caja 1 - {activeRegister ? 'Abierta' : 'Cerrada'}</span>
                        <div className="w-px h-4 bg-white/10 mx-1" />
                        <span className="opacity-60">CORTE DE CAJA</span>
                    </button>

                    <div className="hidden lg:flex items-center gap-2 relative" ref={menuRef}>
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
                                        onClick={() => window.location.href = '/pos/catalog'}
                                        className="flex items-center gap-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-white/40 hover:bg-white/5 hover:text-white"
                                    >
                                        <Package className="w-4 h-4" /> Catálogo
                                    </button>
                                    <button
                                        onClick={() => { setView('history'); setIsSettingsOpen(false); }}
                                        className={cn(
                                            "flex items-center gap-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                                            view === 'history' ? "bg-primary text-secondary" : "text-white/40 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <Printer className="w-4 h-4" /> Historial
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



                </div>
            </nav>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                {/* Background Glows */}
                <div className="absolute top-0 -left-20 w-[40rem] h-[40rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 -right-20 w-[60rem] h-[60rem] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

                {/* Modal de Cobro - Redesign */}
                <CashCloseModal
                    isOpen={isCloseModalOpen}
                    onClose={() => setIsCloseModalOpen(false)}
                    registerData={activeRegister}
                />

                <AnimatePresence>
                    {isCheckoutModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => !saleComplete && setCheckoutModalOpen(false)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="relative bg-secondary overflow-hidden border border-white/5 rounded-[3.5rem] p-8 md:p-12 max-w-xl w-full shadow-2xl"
                            >
                                {/* Modal Background Effect */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />

                                {!saleComplete ? (
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-center mb-10">
                                            <div>
                                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 leading-none">Cierre de Operación</p>
                                                <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Procesar <span className="text-primary">Pago</span></h2>
                                            </div>
                                            <button
                                                onClick={() => setCheckoutModalOpen(false)}
                                                className="p-4 bg-white/5 rounded-2xl text-surface/20 hover:text-white transition-colors"
                                                title="Cerrar modal"
                                                aria-label="Cerrar modal de pago"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>

                                        <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 mb-8">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-[10px] font-black text-surface/20 uppercase tracking-[0.3em]">Total a Liquidar</span>
                                                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[9px] font-black uppercase tracking-widest border border-primary/10">
                                                    {paymentMethod}
                                                </span>
                                            </div>
                                            <div className="text-6xl font-black text-primary tracking-tighter tabular-nums leading-none">
                                                {formatCurrency(Number(currentTotal))}
                                            </div>
                                        </div>

                                        {paymentMethod === 'efectivo' && (
                                            <div className="space-y-6 mb-10">
                                                <div>
                                                    <label className="block text-[10px] font-black text-surface/20 uppercase tracking-[0.4em] mb-4 ml-4">Monto Recibido</label>
                                                    <div className="relative">
                                                        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-primary font-black text-3xl italic">$</span>
                                                        <input
                                                            type="number"
                                                            inputMode="decimal"
                                                            value={cashReceived}
                                                            onChange={(e) => setCashReceived(e.target.value)}
                                                            className="w-full pl-16 pr-8 py-8 bg-white/5 border border-white/10 rounded-[2rem] text-white font-black text-4xl tabular-nums focus:border-primary focus:bg-white/10 transition-all outline-none"
                                                            placeholder="0.00"
                                                            autoFocus
                                                        />
                                                    </div>
                                                </div>
                                                <div className={cn(
                                                    "p-8 rounded-[2.5rem] border transition-all flex justify-between items-center overflow-hidden relative",
                                                    change >= 0 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'
                                                )}>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-50">Cambio a Devolver</p>
                                                        <div className={cn(
                                                            "text-4xl font-black tracking-tighter tabular-nums",
                                                            change >= 0 ? 'text-emerald-400' : 'text-red-400'
                                                        )}>
                                                            {formatCurrency(Math.max(0, change))}
                                                        </div>
                                                    </div>
                                                    <div className={cn(
                                                        "w-16 h-16 rounded-2xl flex items-center justify-center",
                                                        change >= 0 ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                                                    )}>
                                                        <Zap className="w-8 h-8" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            <button
                                                disabled={loading || (paymentMethod === 'efectivo' && change < 0)}
                                                onClick={handleCheckout}
                                                className="flex-1 py-6 bg-primary text-secondary rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-4"
                                            >
                                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                                                    <>
                                                        <CheckCircle className="w-6 h-6" />
                                                        Finalizar Venta
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative z-10 text-center py-6">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            className="w-32 h-32 bg-primary/20 text-primary rounded-[3rem] flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-primary/10"
                                        >
                                            <CheckCircle className="w-16 h-16" />
                                        </motion.div>

                                        <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] mb-4">Operación Finalizada</p>
                                        <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">¡VENTA <span className="text-primary">EXITOSA</span>!</h2>

                                        {paymentMethod === 'efectivo' && (
                                            <div className="bg-white/5 py-4 px-8 rounded-full border border-white/5 inline-flex items-center gap-4 mb-12">
                                                <span className="text-[10px] font-black text-surface/20 uppercase tracking-widest">Cambio Entregado:</span>
                                                <span className="font-black text-2xl text-primary tracking-tighter tabular-nums">{formatCurrency(saleComplete.change)}</span>
                                            </div>
                                        )}

                                        <div className="flex flex-col gap-4 max-w-xs mx-auto">
                                            <button
                                                onClick={() => finishSale(true)}
                                                className="w-full py-6 bg-white/5 hover:bg-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs border border-white/10 transition-all flex items-center justify-center gap-4 group"
                                            >
                                                <Printer className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                Imprimir Comprobante
                                            </button>
                                            <button
                                                onClick={() => finishSale(false)}
                                                className="w-full py-6 bg-primary text-secondary rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
                                            >
                                                Siguiente Operación
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Content Area: Terminal vs History */}
                <div className={cn(
                    "flex-1 flex flex-col p-6 md:p-8 lg:p-12 overflow-hidden transition-all duration-300 relative z-10",
                    isCartOpen ? "hidden md:flex opacity-0 lg:opacity-100" : "flex"
                )}>
                    {view === 'terminal' ? (
                        <div className="flex-1 flex flex-col items-center justify-center relative">
                            {/* Terminal Ready Visuals */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center relative z-10"
                            >
                                <div className="w-32 h-32 bg-primary/10 rounded-[3rem] border border-primary/20 flex items-center justify-center mx-auto mb-8 relative group">
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse group-hover:bg-primary/40 transition-colors" />
                                    <Logo className="h-12 w-auto relative z-10" variant="premium" />
                                </div>
                                <p className="text-[12px] font-black text-primary uppercase tracking-[0.6em] mb-4">Terminal Sincronizada</p>
                                <h1 className="text-6xl font-black text-white italic uppercase tracking-tighter mb-8 leading-none">
                                    Listo para <br />
                                    <span className="text-primary italic">Despachar</span>
                                </h1>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <button
                                        onClick={() => window.location.href = '/pos/catalog'}
                                        className="px-10 py-5 bg-primary text-secondary rounded-3xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
                                    >
                                        <PackageOpen className="w-4 h-4" /> Abrir Catálogo
                                    </button>
                                    <button
                                        onClick={() => setView('history')}
                                        className="px-10 py-5 bg-white/5 text-white/40 hover:text-white rounded-3xl font-black text-[11px] uppercase tracking-[0.2em] border border-white/5 hover:bg-white/10 transition-all flex items-center gap-4"
                                    >
                                        <Printer className="w-4 h-4" /> Ver Historial
                                    </button>
                                </div>
                            </motion.div>

                            {/* Decorative Background Elements for "Free" feeling */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="mb-8 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 leading-none">Operativa Ejecutiva</p>
                                    <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Historial de <span className="text-primary">Ventas</span></h2>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setView('terminal')}
                                        className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-2xl border border-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
                                    >
                                        Volver
                                    </button>
                                    <button
                                        onClick={fetchHistory}
                                        className="p-4 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-2xl border border-white/5 transition-all flex items-center gap-3 text-[10px] font-black uppercase tracking-widest"
                                    >
                                        <Zap className={cn("w-4 h-4", fetchingHistory && "animate-spin")} /> Actualizar
                                    </button>
                                </div>
                            </div>
                            {/* ... rest of history logic stays the same if I find the items below */}

                            <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                {fetchingHistory && salesHistory.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center py-40 gap-4 opacity-20">
                                        <Loader2 className="w-12 h-12 animate-spin text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Sincronizando Terminal...</span>
                                    </div>
                                ) : salesHistory.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center py-40 gap-6 opacity-20">
                                        <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-white flex items-center justify-center">
                                            <Printer className="w-8 h-8" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest">Sin registros recientes</span>
                                    </div>
                                ) : (
                                    salesHistory.map((sale: any) => (
                                        <motion.div
                                            key={sale.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex flex-col md:flex-row justify-between items-center gap-6 group hover:bg-white/10 transition-all"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                                    <span className="text-sm font-black text-primary tabular-nums">
                                                        {new Date(sale.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{sale.paymentMethod}</span>
                                                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Ref: {sale.id.slice(0, 8)}</span>
                                                    </div>
                                                    <p className="text-white/60 text-xs font-bold uppercase truncate max-w-[280px]">
                                                        {sale.saleItems.map((si: any) => `${si.quantity}${si.product.unitType} ${si.product.name}`).join(', ')}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                                <div className="text-right">
                                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Inversión Final</p>
                                                    <span className="text-3xl font-black text-white tracking-tighter tabular-nums">{formatCurrency(sale.totalAmount)}</span>
                                                </div>
                                                <button
                                                    onClick={() => generateTicketPDF(sale.saleItems, sale.totalAmount)}
                                                    className="p-5 bg-white/5 hover:bg-primary hover:text-secondary rounded-2xl transition-all border border-white/5"
                                                    title="Reimprimir Ticket"
                                                >
                                                    <Printer className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Cart Area */}
                <aside className={cn(
                    "fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-0 lg:w-[480px] bg-secondary/40 backdrop-blur-3xl border-l border-white/5 flex flex-col shrink-0 transition-transform duration-500 ease-out shadow-2xl shadow-black",
                    isCartOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
                )}>
                    {/* Cart Header */}
                    <div className="p-8 md:p-10 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsCartOpen(false)} className="lg:hidden p-3 bg-white/5 rounded-2xl text-surface/30" title="Cerrar ticket">
                                <X className="w-5 h-5" />
                            </button>
                            <div>
                                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">Registro Digital</p>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3">
                                    <ShoppingCart className="w-6 h-6 text-primary not-italic" />
                                    Resumen de <span className="text-primary">Venta</span>
                                </h2>
                            </div>
                        </div>
                        <button
                            onClick={clearCart}
                            className="p-4 rounded-2xl bg-white/5 text-surface/20 hover:bg-red-500/10 hover:text-red-500 transition-all active:scale-90"
                            disabled={items.length === 0}
                            title="Anular Resumen"
                        >
                            <Trash2 className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {items.map(item => (
                            <div key={item.id} className="relative group bg-white/5 border border-white/5 rounded-[2rem] p-6 transition-all hover:bg-white/10 overflow-hidden">
                                {/* Glow item */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mr-8 -mt-8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <div className="flex-1">
                                        <span className="font-black text-white block text-lg italic uppercase tracking-tight mb-1">{item.name}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-[10px] text-white/50 uppercase tracking-widest leading-none">
                                                {formatCurrency(Number(item.pricePublic))} {item.unitType === 'kg' ? 'X KG' : 'C/U'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-black text-xl text-primary tracking-tighter tabular-nums">${item.subtotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Cantidad Despachada</span>
                                    <div className="flex items-center gap-3 bg-secondary/80 p-1.5 rounded-2xl border border-white/5">
                                        <button
                                            title="Reducir"
                                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - (item.unitType === 'kg' ? 0.5 : 1)))}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all active:scale-90"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-10 text-center font-black text-lg text-primary tabular-nums">{item.quantity}</span>
                                        <button
                                            title="Aumentar"
                                            onClick={() => updateQuantity(item.id, item.quantity + (item.unitType === 'kg' ? 0.5 : 1))}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all active:scale-90"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {items.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center py-20 opacity-20 text-center space-y-6">
                                <div className="w-24 h-24 rounded-[3rem] border-2 border-dashed border-white/40 flex items-center justify-center rotate-12">
                                    <ShoppingCart className="w-10 h-10" />
                                </div>
                                <div>
                                    <p className="font-black uppercase tracking-[0.4em] text-[10px] mb-2">Resumen Vacío</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest max-w-[150px] mx-auto opacity-50">Esperando carga de productos para procesamiento.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pay Section */}
                    <div className="p-8 md:p-10 bg-secondary/60 backdrop-blur-3xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center px-4">
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Carga de Productos</span>
                                <span className="font-black text-white/60 tabular-nums font-mono">{formatCurrency(Number(currentTotal))}</span>
                            </div>
                            <div className="bg-primary p-8 rounded-[2.5rem] shadow-2xl shadow-primary/20 group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
                                <div className="flex justify-between items-center relative z-10">
                                    <div>
                                        <p className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.4em] mb-2 leading-none">Total Liquidación</p>
                                        <span className="text-5xl font-black text-secondary tracking-tighter tabular-nums leading-none">
                                            {formatCurrency(Number(currentTotal))}
                                        </span>
                                    </div>
                                    <Zap className="w-10 h-10 text-secondary/20" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button
                                onClick={() => setPaymentMethod('efectivo')}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-3 py-6 rounded-3xl border transition-all active:scale-95 group",
                                    paymentMethod === 'efectivo'
                                        ? "bg-secondary text-primary border-primary/20 shadow-xl shadow-black/40"
                                        : "bg-white/5 hover:bg-white/10 text-surface/20 hover:text-white border-white/5"
                                )}
                            >
                                <Banknote className={cn("w-6 h-6 transition-transform group-hover:scale-110", paymentMethod === 'efectivo' && "text-primary")} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Efectivo</span>
                            </button>
                            <button
                                onClick={() => setPaymentMethod('tarjeta')}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-3 py-6 rounded-3xl border transition-all active:scale-95 group",
                                    paymentMethod === 'tarjeta'
                                        ? "bg-secondary text-primary border-primary/20 shadow-xl shadow-black/40"
                                        : "bg-white/5 hover:bg-white/10 text-surface/20 hover:text-white border-white/5"
                                )}
                            >
                                <CreditCard className={cn("w-6 h-6 transition-transform group-hover:scale-110", paymentMethod === 'tarjeta' && "text-primary")} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tarjeta</span>
                            </button>
                        </div>

                        <button
                            disabled={items.length === 0 || loading}
                            onClick={() => setCheckoutModalOpen(true)}
                            className="w-full relative bg-primary disabled:bg-white/5 disabled:text-white/10 hover:bg-white text-secondary hover:text-secondary py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/20 disabled:shadow-none transition-all uppercase tracking-[0.2em] active:scale-95 group overflow-hidden"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-4">
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                                    <>
                                        <ShieldCheck className="w-6 h-6" />
                                        <span>CONSOLIDAR VENTA</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>
                </aside>

                {/* Mobile Footer Toggle - Redesign */}
                <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[280px]">
                    <button
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className={cn(
                            "w-full flex items-center justify-between px-8 py-6 rounded-[2.5rem] font-black uppercase text-[11px] tracking-[0.2em] shadow-3xl transition-all active:scale-95 group relative overflow-hidden",
                            isCartOpen
                                ? "bg-white text-secondary ring-[12px] ring-white/10"
                                : "bg-primary text-secondary ring-[12px] ring-primary/10 shadow-primary/20",
                            items.length > 0 && !isCartOpen ? "animate-bounce-subtle" : ""
                        )}
                    >
                        <div className="flex items-center gap-4 relative z-10">
                            {isCartOpen ? (
                                <>
                                    <Package className="w-5 h-5" />
                                    <span>Ver Productos</span>
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    <span>Ticket ({items.length})</span>
                                </>
                            )}
                        </div>
                        <div className="relative z-10 font-mono text-lg tracking-tighter">
                            {isCartOpen ? <ChevronRight className="w-6 h-6 rotate-90" /> : <ChevronRight className="w-6 h-6" />}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
