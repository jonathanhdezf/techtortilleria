'use client'

import { useState, useEffect } from 'react'
import {
    ShoppingCart, Plus, Minus, Trash2, CreditCard, Banknote, PackageOpen, Loader2,
    X, CheckCircle, Search, ChevronRight, Package, Printer, Zap, ShieldCheck, User, Settings, LogOut, TrendingUp
} from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import { useCartStore, CartProduct } from '@/store/cartStore'
import { createSaleAction, getSalesHistoryAction } from '@/app/actions/pos'
import { useRouter } from 'next/navigation'
import { generateTicketPDF } from '@/lib/pdf'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useRef } from 'react'
import Logo from '@/components/shared/Logo'
import { CustomerSearchModal } from './CustomerSearchModal'
import { getBusinessSettings, processSale } from '../actions'

import CashCloseModal from './CashCloseModal'
import AmountSaleModal from './AmountSaleModal'
import ExpenseModal from './ExpenseModal'
import CalendarModal from './CalendarModal'
import { CajeroDashboard } from './CajeroDashboard'
import { SupervisorPINModal } from './SupervisorPINModal'
import CreditPaymentModal from './CreditPaymentModal'
import CashInflowModal from './CashInflowModal'
import ShiftDetailsModal from './ShiftDetailsModal'

import { useModalAccessibility } from "@/hooks/useModalAccessibility";

const CATEGORIES = ['Kilo', 'Medio Kilo', 'Masa', 'Salsas', 'Bebidas']

export default function POSClient({ products, userId, userName, businessId, activeRegister, shiftSummary }: { products: any[], userId: string, userName?: string | null, businessId: string, activeRegister?: any, shiftSummary?: any }) {
    const router = useRouter()
    const { items, addItem, removeItem, updateQuantity, clearCart, getTotal } = useCartStore()
    const [paymentMethod, setPaymentMethod] = useState('efectivo')
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('Todos')

    // Modal state
    const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false)
    const [isCloseModalOpen, setIsCloseModalOpen] = useState(false)
    const [cashReceived, setCashReceived] = useState<string>('')
    const [saleComplete, setSaleComplete] = useState<{ success: boolean; change: number; saleItems: any[]; total: number } | null>(null)
    const [isAmountModalOpen, setIsAmountModalOpen] = useState(false)
    const [selectedProductForAmount, setSelectedProductForAmount] = useState<any>(null)
    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false)
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
    const [businessSettings, setBusinessSettings] = useState<any>(null)
    const [isSupervisorModalOpen, setIsSupervisorModalOpen] = useState(false)
    const [supervisorAction, setSupervisorAction] = useState<any>(null)
    const [isAbonoMode, setIsAbonoMode] = useState(false)
    const [isCreditPaymentModalOpen, setIsCreditPaymentModalOpen] = useState(false)
    const [customerForAbono, setCustomerForAbono] = useState<any>(null)
    const [isInflowModalOpen, setIsInflowModalOpen] = useState(false)
    const [isShiftDetailsModalOpen, setIsShiftDetailsModalOpen] = useState(false)

    // Mobile state
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [view, setView] = useState<'catalog' | 'history'>('catalog')
    const [searchTerm, setSearchTerm] = useState('')
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [salesHistory, setSalesHistory] = useState<any[]>([])
    const [fetchingHistory, setFetchingHistory] = useState(false)
    const [offlineQueue, setOfflineQueue] = useState<any[]>([])
    const [isOnline, setIsOnline] = useState(true)

    const menuRef = useRef<HTMLDivElement>(null)
    const userMenuRef = useRef<HTMLDivElement>(null)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
    const [showDashboard, setShowDashboard] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    // Modal Accessibility Hooks
    useModalAccessibility(isUserMenuOpen, () => setIsUserMenuOpen(false))
    useModalAccessibility(isSettingsOpen, () => setIsSettingsOpen(false))
    useModalAccessibility(isCheckoutModalOpen, () => setCheckoutModalOpen(false))
    useModalAccessibility(isAmountModalOpen, () => setIsAmountModalOpen(false))
    useModalAccessibility(isExpenseModalOpen, () => setIsExpenseModalOpen(false))
    useModalAccessibility(isCloseModalOpen, () => setIsCloseModalOpen(false))
    useModalAccessibility(isCalendarOpen, () => setIsCalendarOpen(false))
    useModalAccessibility(isInflowModalOpen, () => setIsInflowModalOpen(false))
    useModalAccessibility(isShiftDetailsModalOpen, () => setIsShiftDetailsModalOpen(false))

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const getRemainingStock = (p: any) => {
        const item = items.find(i => i.id === p.id)
        return p.stockQuantity - (item?.quantity || 0)
    }

    useEffect(() => {
        const savedDashboard = localStorage.getItem('pos_show_dashboard')
        if (savedDashboard !== null) {
            setShowDashboard(savedDashboard === 'true')
        }
        setIsMounted(true)

        const timer = setInterval(() => setCurrentTime(new Date()), 1000)

        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsSettingsOpen(false)
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false)
            }
        }

        function handleKeyDown(event: any) {
            // Checkout Modal Shortcuts
            if (isCheckoutModalOpen) {
                if (!saleComplete) {
                    if (event.key === "F1") {
                        event.preventDefault();
                        if (!loading && (paymentMethod !== 'efectivo' || change >= 0)) {
                            handleCheckout();
                        }
                    }
                    if (event.key === "F2") {
                        event.preventDefault();
                        setCheckoutModalOpen(false);
                    }
                    if (event.key === "Enter") {
                        // Enter handles checkout if amount is valid
                        if (!loading && (paymentMethod !== 'efectivo' || change >= 0)) {
                            handleCheckout();
                        }
                    }
                } else {
                    if (event.key === "F1") {
                        event.preventDefault();
                        finishSale(true);
                    }
                    if (event.key === "F2") {
                        event.preventDefault();
                        finishSale(false);
                    }
                }
            }

            if (event.key === "F12") {
                event.preventDefault();
                if (items.length > 0 && !loading && !isCheckoutModalOpen) {
                    setCheckoutModalOpen(true);
                }
            }

            // Keyboard Quantity Controls (+ / -)
            if (!isCheckoutModalOpen) {
                if (event.key === "+" || event.key === "-" || event.key === "Add" || event.key === "Subtract") {
                    const activeId = selectedItemId || (items.length > 0 ? items[items.length - 1].id : null);
                    if (activeId) {
                        const item = items.find(i => i.id === activeId);
                        if (item) {
                            event.preventDefault();
                            const step = item.unitType === 'kg' ? 0.5 : 1;
                            if (event.key === "+" || event.key === "Add") {
                                updateQuantity(activeId, item.quantity + step);
                            } else {
                                updateQuantity(activeId, Math.max(0, item.quantity - step));
                            }
                        }
                    }
                }
            }
        }

        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        setIsOnline(navigator.onLine)

        // Load offline queue from localStorage
        const savedQueue = localStorage.getItem(`offline_sales_${businessId}`)
        if (savedQueue) {
            setOfflineQueue(JSON.parse(savedQueue))
        }

        return () => {
            clearInterval(timer)
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [items, loading, isCheckoutModalOpen, selectedItemId, businessId])

    // Background Sync Logic
    useEffect(() => {
        if (isOnline && offlineQueue.length > 0) {
            const syncOfflineSales = async () => {
                const salesToSync = [...offlineQueue]
                for (const sale of salesToSync) {
                    try {
                        await createSaleAction(sale)
                        // Remove from queue if successful
                        setOfflineQueue(prev => {
                            const newQueue = prev.filter(s => s !== sale)
                            localStorage.setItem(`offline_sales_${businessId}`, JSON.stringify(newQueue))
                            return newQueue
                        })
                    } catch (error) {
                        console.error("Failed to sync offline sale", error)
                        break; // Stop syncing if one fails
                    }
                }
            }
            syncOfflineSales()
        }
    }, [isOnline, offlineQueue, businessId])

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

    useEffect(() => {
        async function loadSettings() {
            const settings = await getBusinessSettings()
            setBusinessSettings(settings)
        }
        loadSettings()
    }, [])

    const currentTotal = businessSettings ? getTotal({
        active: businessSettings.volumeDiscountActive,
        threshold: businessSettings.volumeDiscountThreshold,
        percentage: businessSettings.volumeDiscountPercentage
    }) : getTotal()
    const parsedCash = parseFloat(cashReceived) || 0
    const change = parsedCash - currentTotal

    const handleCheckout = async () => {
        if (items.length === 0) return
        if (paymentMethod === 'efectivo' && parsedCash < currentTotal) {
            alert('El monto ingresado es menor al total.')
            return
        }

        if (paymentMethod === 'crédito' && !selectedCustomer) {
            alert('Por favor, selecciona un cliente para la venta a crédito.')
            setIsCustomerModalOpen(true)
            return
        }

        setLoading(true)
        const saleItems = items.map(i => ({
            productId: i.id,
            name: i.name,
            quantity: i.quantity,
            priceAtTime: Number(i.pricePublic),
            subtotal: i.subtotal
        }))

        const saleData = {
            businessId,
            userId,
            items: saleItems,
            paymentMethod,
            total: currentTotal,
            customerId: selectedCustomer?.id,
            isCredit: paymentMethod === 'crédito'
        }

        try {
            if (!isOnline) {
                // Queue the sale locally
                const newQueue = [...offlineQueue, saleData]
                setOfflineQueue(newQueue)
                localStorage.setItem(`offline_sales_${businessId}`, JSON.stringify(newQueue))

                setSaleComplete({
                    success: true,
                    change: paymentMethod === 'efectivo' ? change : 0,
                    saleItems: saleItems,
                    total: currentTotal
                })
                setSelectedCustomer(null)
                setPaymentMethod('efectivo')
                return
            }

            const req = await processSale(
                saleItems.map(i => ({
                    productId: i.productId,
                    quantity: i.quantity,
                    price: i.priceAtTime,
                    subtotal: i.subtotal
                })),
                paymentMethod,
                currentTotal,
                selectedCustomer?.id,
                paymentMethod === 'crédito'
            )

            if (!req.success) throw new Error('Error al procesar la venta');

            router.refresh()

            setSaleComplete({
                success: true,
                change: paymentMethod === 'efectivo' ? change : 0,
                saleItems: saleItems,
                total: currentTotal
            })
            setSelectedCustomer(null)
            setPaymentMethod('efectivo')
        } catch (err) {
            if (!isOnline) {
                // Fallback if network fails during request
                const newQueue = [...offlineQueue, saleData]
                setOfflineQueue(newQueue)
                localStorage.setItem(`offline_sales_${businessId}`, JSON.stringify(newQueue))
                setSaleComplete({ success: true, change: paymentMethod === 'efectivo' ? change : 0, saleItems, total: currentTotal })
            } else {
                alert('Error procesando venta: ' + (err as Error).message)
            }
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
        setSelectedItemId(p.id)
    }

    return (
        <div className="flex-1 flex flex-col w-full h-full bg-neutral-black overflow-hidden relative noise">
            {/* Premium POS Navbar */}
            <nav className="relative z-[60] flex items-center justify-between px-8 py-4 bg-secondary/40 backdrop-blur-2xl border-b border-white/5 shrink-0">
                <div className="flex items-center gap-8">
                    <Logo className="h-10 md:h-12 w-auto" variant="premium" />
                    <div className="hidden lg:flex items-center gap-6 border-r border-white/5 pr-8 mr-4">
                        <div className="flex flex-col text-right">
                            <div className="flex items-center justify-end gap-2 mb-1">
                                {!isOnline && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />}
                                {offlineQueue.length > 0 && (
                                    <span className="text-[8px] px-2 py-0.5 bg-primary/20 text-primary border border-primary/20 rounded-full font-black animate-pulse">
                                        SYNC: {offlineQueue.length}
                                    </span>
                                )}
                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Estado Sincronía</span>
                            </div>
                            <span className="text-xs font-black text-white italic uppercase tracking-tighter">
                                {isOnline ? 'Online - Full Sync' : 'Offline - Local Queue'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 relative" ref={userMenuRef}>
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            className={cn(
                                "flex items-center gap-6 border-r border-white/5 pr-8 mr-4 hover:bg-white/5 py-2 px-4 rounded-2xl transition-all group",
                                isUserMenuOpen ? "bg-white/10" : ""
                            )}
                        >
                            <div className="flex flex-col text-right">
                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] leading-none mb-1">Operador de Turno</span>
                                <span className="text-sm font-black text-white italic uppercase tracking-tighter truncate max-w-[120px]">{userName || 'Cajero de Turno'}</span>
                            </div>
                            <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center border transition-all",
                                isUserMenuOpen ? "bg-primary border-primary text-secondary" : "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary/20"
                            )}>
                                <User className="w-5 h-5" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isUserMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="absolute top-full left-0 mt-4 w-64 bg-secondary shadow-2xl border border-white/10 rounded-[2.5rem] p-4 z-[100] grid gap-3"
                                >
                                    <div className="px-4 py-2 border-b border-white/5 mb-1">
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Gestión de Sesión</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(false);
                                            setIsShiftDetailsModalOpen(true);
                                        }}
                                        className="flex items-center gap-4 px-5 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-white/60 hover:bg-white/10 border border-transparent hover:border-primary/20"
                                    >
                                        <PackageOpen className="w-5 h-5 text-primary" />
                                        <div className="text-left">
                                            <span className="block italic">Ver Movimientos</span>
                                            <span className="text-[8px] opacity-40 lowercase not-italic tracking-normal">Detalle de abonos, entradas y gastos</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(false);
                                            setIsInflowModalOpen(true);
                                        }}
                                        className="flex items-center gap-4 px-5 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20"
                                    >
                                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                                        <div className="text-left">
                                            <span className="block italic">Registrar Entrada</span>
                                            <span className="text-[8px] opacity-40 lowercase not-italic tracking-normal">Ingreso manual de efectivo</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(false);
                                            setIsExpenseModalOpen(true);
                                        }}
                                        className="flex items-center gap-4 px-5 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
                                    >
                                        <Banknote className="w-5 h-5" />
                                        <div className="text-left">
                                            <span className="block">Registrar Gasto</span>
                                            <span className="text-[8px] opacity-40 lowercase not-italic tracking-normal">Salida de efectivo de caja</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(false);
                                            setIsAbonoMode(true);
                                            setIsCustomerModalOpen(true);
                                        }}
                                        className="flex items-center gap-4 px-5 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        <div className="text-left">
                                            <span className="block">Abonar a Cliente</span>
                                            <span className="text-[8px] opacity-40 lowercase not-italic tracking-normal">Pago de deuda de cliente</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(false);
                                            setIsCloseModalOpen(true);
                                        }}
                                        className="flex items-center gap-4 px-5 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-white/40 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                                    >
                                        <ShieldCheck className="w-5 h-5" />
                                        <div className="text-left">
                                            <span className="block">Cambiar Cajero</span>
                                            <span className="text-[8px] opacity-40 lowercase not-italic tracking-normal">Haciendo corte de caja</span>
                                        </div>
                                    </button>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="hidden lg:flex items-center gap-6 border-r border-white/5 pr-8 mr-4">
                        <button
                            onClick={() => setIsCalendarOpen(true)}
                            className="flex flex-col text-right hover:opacity-70 transition-opacity"
                            title="Ver Calendario"
                        >
                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">
                                {isMounted ? `${timeData.day} ${timeData.date}` : '-- --'}
                            </span>
                            <span className="text-xl font-black text-white tabular-nums tracking-tighter leading-none">
                                {isMounted ? timeData.time : '00:00:00'}
                            </span>
                        </button>
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
                        <span className="hidden sm:inline">Caja 1 - </span>
                        <span>{activeRegister ? 'Abierta' : 'Cerrada'}</span>
                        <div className="hidden sm:block w-px h-4 bg-white/10 mx-1" />
                        <span className="opacity-60 hidden sm:inline">CORTE DE CAJA</span>
                        <span className="opacity-60 sm:hidden">CORTE</span>
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
                                        onClick={() => { setView('catalog'); setIsSettingsOpen(false); }}
                                        className={cn(
                                            "flex items-center gap-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                                            view === 'catalog' ? "bg-primary text-secondary" : "text-white/40 hover:bg-white/5 hover:text-white"
                                        )}
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
                                        onClick={() => {
                                            const newVal = !showDashboard;
                                            setShowDashboard(newVal);
                                            localStorage.setItem('pos_show_dashboard', String(newVal));
                                        }}
                                        className="flex items-center justify-between px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-white/40 hover:bg-white/5 hover:text-white"
                                    >
                                        <div className="flex items-center gap-4">
                                            <TrendingUp className="w-4 h-4" /> Dashboard
                                        </div>
                                        <div className={cn(
                                            "w-8 h-4 rounded-full relative transition-colors p-1",
                                            showDashboard ? "bg-primary" : "bg-white/10"
                                        )}>
                                            <motion.div
                                                animate={{ x: showDashboard ? 16 : 0 }}
                                                className="w-2 h-2 bg-secondary rounded-full"
                                            />
                                        </div>
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
            </nav >

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                {/* Background Glows */}
                <div className="absolute top-0 -left-20 w-[40rem] h-[40rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 -right-20 w-[60rem] h-[60rem] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

                {/* Modal de Cobro - Redesign */}
                <CashCloseModal
                    isOpen={isCloseModalOpen}
                    onClose={() => setIsCloseModalOpen(false)}
                    registerData={{ ...activeRegister, ...shiftSummary }}
                />

                <AmountSaleModal
                    isOpen={isAmountModalOpen}
                    onClose={() => setIsAmountModalOpen(false)}
                    product={selectedProductForAmount}
                    onAdd={handleAddToCart}
                />

                <ExpenseModal
                    isOpen={isExpenseModalOpen}
                    onClose={() => setIsExpenseModalOpen(false)}
                />

                <CalendarModal
                    isOpen={isCalendarOpen}
                    onClose={() => setIsCalendarOpen(false)}
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
                                className="relative bg-secondary overflow-y-auto border border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 max-w-md w-full shadow-2xl max-h-[90vh] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
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
                                                className="p-4 bg-white/5 rounded-2xl text-surface/20 hover:text-white transition-colors flex items-center gap-3 group"
                                                title="Cerrar modal (F2)"
                                                aria-label="Cerrar modal de pago"
                                            >
                                                <span className="text-[10px] font-black opacity-0 group-hover:opacity-40 transition-opacity whitespace-nowrap">DESCARTAR (F2)</span>
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
                                                        Finalizar Venta (F1 o ENTER)
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
                                                Imprimir Comprobante (F1)
                                            </button>
                                            <button
                                                onClick={() => finishSale(false)}
                                                className="w-full py-6 bg-primary text-secondary rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
                                            >
                                                Siguiente Operación (F2)
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
                    {view === 'catalog' ? (
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {/* Simplified Header - Removed redundant text and count */}

                            {/* Optimized Search & Categories for Laptop/Desktop */}
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

                            {/* Grid - Optimized for Laptop (md/lg/xl) */}
                            <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 pb-24 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                {filteredProducts.map(p => {
                                    const isKg = p.unitType?.toLowerCase().includes('kg') || p.unitType?.toLowerCase() === 'kilogramo';
                                    const remStock = getRemainingStock(p);
                                    const isLowStock = remStock <= p.minimumStockAlert;

                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={isLowStock ? {
                                                opacity: 1,
                                                scale: 1,
                                                borderColor: ["rgba(251, 191, 36, 0.1)", "rgba(251, 191, 36, 0.4)", "rgba(251, 191, 36, 0.1)"],
                                                boxShadow: ["0 0 0 rgba(251, 191, 36, 0)", "0 0 20px rgba(251, 191, 36, 0.1)", "0 0 0 rgba(251, 191, 36, 0)"]
                                            } : { opacity: 1, scale: 1 }}
                                            transition={isLowStock ? {
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            } : {}}
                                            key={p.id}
                                            className={cn(
                                                "group relative bg-secondary/30 backdrop-blur-3xl border rounded-[2.5rem] p-5 md:p-7 hover:border-primary/20 hover:bg-secondary/50 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[320px]",
                                                isLowStock ? "border-amber-500/20" : "border-white/5"
                                            )}
                                        >
                                            {/* Decorative Glow */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary/10 transition-colors" />

                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-4">
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
                                                <p className="text-[10px] font-bold text-surface/20 uppercase tracking-[0.2em] mb-3">
                                                    Precio Público
                                                </p>

                                                <div className="mb-6 font-mono">
                                                    <span className="text-4xl font-black text-white tracking-tighter tabular-nums leading-none">
                                                        {formatCurrency(Number(p.pricePublic))}
                                                    </span>
                                                    <span className="text-[10px] font-black text-surface/20 uppercase tracking-widest ml-2">/ {p.unitType}</span>
                                                </div>
                                            </div>

                                            <div className="relative z-10 space-y-3 mt-auto">
                                                {isKg ? (
                                                    <div className="flex flex-col gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedProductForAmount(p);
                                                                setIsAmountModalOpen(true);
                                                            }}
                                                            className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-primary border border-primary/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                                                        >
                                                            Venta por Importe
                                                        </button>
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
                    ) : (
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="mb-8 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 leading-none">Operativa Ejecutiva</p>
                                    <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Historial de <span className="text-primary">Ventas</span></h2>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setView('catalog')}
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
                                                        {sale.saleItems.map((si: any) => `${si.quantity} ${si.product.unitType?.toUpperCase() || ''} ${si.product.name}`).join(', ')}
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
                        {items.map((item, idx) => {
                            const isActive = selectedItemId === item.id || (!selectedItemId && idx === items.length - 1);
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedItemId(item.id)}
                                    className={cn(
                                        "relative group bg-white/5 border rounded-[2rem] p-6 transition-all hover:bg-white/10 overflow-hidden cursor-pointer",
                                        isActive ? "border-primary ring-1 ring-primary/20 bg-primary/5" : "border-white/5"
                                    )}
                                >
                                    {/* Active Indicator */}
                                    {isActive && (
                                        <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse z-20" title="Seleccionado" />
                                    )}

                                    {/* Glow item */}
                                    <div className={cn(
                                        "absolute top-0 right-0 w-16 h-16 rounded-full -mr-8 -mt-8 blur-xl transition-opacity",
                                        isActive ? "bg-primary/20 opacity-100" : "bg-primary/5 opacity-0 group-hover:opacity-100"
                                    )} />

                                    <div className="relative z-10 flex justify-between items-start mb-6">
                                        <div className="flex-1">
                                            <span className={cn(
                                                "font-black block text-lg italic uppercase tracking-tight mb-1 transition-colors",
                                                isActive ? "text-primary" : "text-white"
                                            )}>{item.name}</span>
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
                            );
                        })}
                        {items.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center py-20 text-center space-y-6">
                                <div className="w-24 h-24 rounded-[3rem] border-2 border-dashed border-white/40 flex items-center justify-center rotate-12 opacity-20">
                                    <ShoppingCart className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-2">Resumen Vacío</p>
                                    <p className="text-white text-[9px] font-bold uppercase tracking-widest max-w-[150px] mx-auto">Esperando carga de productos para procesamiento.</p>
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

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <button
                                onClick={() => {
                                    setPaymentMethod('efectivo')
                                    setSelectedCustomer(null)
                                }}
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
                                onClick={() => {
                                    setPaymentMethod('tarjeta')
                                    setSelectedCustomer(null)
                                }}
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
                            <button
                                onClick={() => setIsCustomerModalOpen(true)}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-3 py-6 rounded-3xl border transition-all active:scale-95 group relative overflow-hidden",
                                    paymentMethod === 'crédito'
                                        ? "bg-secondary text-primary border-primary/20 shadow-xl shadow-black/40"
                                        : "bg-white/5 hover:bg-white/10 text-surface/20 hover:text-white border-white/5"
                                )}
                            >
                                <User className={cn("w-6 h-6 transition-transform group-hover:scale-110", paymentMethod === 'crédito' && "text-primary")} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Crédito</span>
                                {selectedCustomer && (
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                                )}
                            </button>
                        </div>

                        {selectedCustomer && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <User className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">Cliente Seleccionado</p>
                                        <p className="text-xs font-bold text-white uppercase italic">{selectedCustomer.name}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedCustomer(null)
                                        setPaymentMethod('efectivo')
                                    }}
                                    title="Quitar cliente"
                                    className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-red-500 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}

                        <button
                            disabled={items.length === 0 || loading}
                            onClick={() => setCheckoutModalOpen(true)}
                            className="w-full relative bg-primary disabled:bg-white/5 disabled:text-white/10 hover:bg-white text-secondary hover:text-secondary py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/20 disabled:shadow-none transition-all uppercase tracking-[0.2em] active:scale-95 group overflow-hidden"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-4">
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                                    <>
                                        <ShieldCheck className="w-6 h-6" />
                                        <span>REALIZAR VENTA <span className="text-[10px] opacity-60 ml-2">(F12)</span></span>
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

            <CustomerSearchModal
                isOpen={isCustomerModalOpen}
                onClose={() => {
                    setIsCustomerModalOpen(false);
                    setIsAbonoMode(false);
                }}
                onSelect={(customer) => {
                    if (isAbonoMode) {
                        setCustomerForAbono(customer);
                        setIsCreditPaymentModalOpen(true);
                        setIsCustomerModalOpen(false);
                        setIsAbonoMode(false);
                    } else {
                        setSelectedCustomer(customer)
                        setPaymentMethod('crédito')
                        setIsCustomerModalOpen(false)
                    }
                }}
            />

            <CreditPaymentModal
                isOpen={isCreditPaymentModalOpen}
                customer={customerForAbono}
                onClose={() => setIsCreditPaymentModalOpen(false)}
                onSuccess={() => {
                    // Logic to refresh or just rely on revalidatePath
                }}
            />

            <CashInflowModal
                isOpen={isInflowModalOpen}
                onClose={() => setIsInflowModalOpen(false)}
            />

            <ShiftDetailsModal
                isOpen={isShiftDetailsModalOpen}
                onClose={() => setIsShiftDetailsModalOpen(false)}
                shiftSummary={shiftSummary}
            />

            {/* Phase 2: Supervisor Authorization Modal */}
            <SupervisorPINModal
                isOpen={isSupervisorModalOpen}
                onClose={() => {
                    setIsSupervisorModalOpen(false)
                    setSupervisorAction(null)
                }}
                onSuccess={() => {
                    if (supervisorAction) supervisorAction()
                    setIsSupervisorModalOpen(false)
                    setSupervisorAction(null)
                }}
                correctPIN={businessSettings?.supervisorPIN || '1234'}
            />

            {/* Module 2: Cashier Dashboard - Statistics floating bar */}
            {shiftSummary && showDashboard && (
                <CajeroDashboard
                    shiftSummary={{
                        totalVentas: shiftSummary.totalVentas || 0,
                        ventaMasGrande: shiftSummary.ventaMasGrande || 0,
                        productoEstrella: shiftSummary.productoEstrella || 'Ninguno'
                    }}
                    dailyGoal={Number(businessSettings?.dailyGoal || 10000)}
                />
            )}
        </div >
    );
}
