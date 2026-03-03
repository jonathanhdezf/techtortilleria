'use client'

import { useState } from 'react'
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Banknote, PackageOpen, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore, CartProduct } from '@/store/cartStore'
import { createSaleAction } from '@/app/actions/pos'
import { generateTicketPDF } from '@/lib/pdf'

const CATEGORIES = ['Kilo', 'Medio Kilo', 'Masa', 'Salsas', 'Bebidas']

export default function POSClient({ products, userId, businessId }: { products: any[], userId: string, businessId: string }) {
    const { items, addItem, removeItem, updateQuantity, clearCart, getTotal } = useCartStore()
    const [paymentMethod, setPaymentMethod] = useState('efectivo')
    const [loading, setLoading] = useState(false)

    // Modal state
    const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false)
    const [cashReceived, setCashReceived] = useState<string>('')
    const [saleComplete, setSaleComplete] = useState<{ success: boolean; change: number; saleItems: any[]; total: number } | null>(null)

    // Mobile state
    const [isCartOpen, setIsCartOpen] = useState(false)

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

            // Instead of generating ticket, update state to show Success screen
            setSaleComplete({
                success: true,
                change: paymentMethod === 'efectivo' ? change : 0,
                saleItems: saleItems,
                total: currentTotal
            })

            // Don't clear cart or close modal yet, wait for user choice.
        } catch (err) {
            alert('Error procesando venta: ' + (err as Error).message)
        } finally {
            setLoading(false)
        }
    }

    const finishSale = (printTicket: boolean) => {
        if (printTicket && saleComplete) {
            generateTicketPDF(saleComplete.saleItems, saleComplete.total)
        }

        clearCart()
        setSaleComplete(null)
        setCheckoutModalOpen(false)
        setIsCartOpen(false) // Close cart on mobile after sale
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
                // update amount immediately for half kilos
                useCartStore.getState().updateQuantity(p.id, qty)
            }
        }
    }

    const getRemainingStock = (p: any) => {
        const item = items.find(i => i.id === p.id)
        return p.stockQuantity - (item?.quantity || 0)
    }

    return (
        <div className="flex-1 flex flex-col lg:flex-row w-full h-full bg-zinc-950 overflow-hidden relative">
            {/* Modal de Cobro */}
            {isCheckoutModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl">
                        {!saleComplete ? (
                            <>
                                <h2 className="text-2xl font-bold text-white mb-6 text-center md:text-left">Procesar Pago</h2>

                                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-6 font-mono">
                                    <div className="flex justify-between items-center text-xs text-zinc-400 mb-1">
                                        <span>TOTAL A PAGAR</span>
                                        <span className="uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded">{paymentMethod}</span>
                                    </div>
                                    <div className="text-3xl font-bold text-emerald-400 text-center md:text-left">${currentTotal.toFixed(2)}</div>
                                </div>

                                {paymentMethod === 'efectivo' && (
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Efectivo Recibido</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-mono text-xl">$</span>
                                                <input
                                                    type="number"
                                                    inputMode="decimal"
                                                    value={cashReceived}
                                                    onChange={(e) => setCashReceived(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-4 bg-zinc-950 border border-zinc-700 rounded-xl text-white font-mono text-xl focus:border-emerald-500 focus:outline-none transition-colors"
                                                    placeholder="0.00"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                        <div className={`p-4 rounded-xl border transition-colors ${change >= 0 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                                            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Cambio a entregar</div>
                                            <div className={`text-2xl font-mono font-bold ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                                ${change >= 0 ? change.toFixed(2) : '0.00'}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row gap-3">
                                    <button
                                        onClick={() => setCheckoutModalOpen(false)}
                                        className="w-full md:flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-bold transition-all"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        disabled={loading || (paymentMethod === 'efectivo' && change < 0)}
                                        onClick={handleCheckout}
                                        className="w-full md:flex-1 py-4 bg-emerald-500 disabled:bg-zinc-800 disabled:text-zinc-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/10 group"
                                    >
                                        {loading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <Loader2 className="w-4 h-4 animate-spin" /> Procesando
                                            </span>
                                        ) : 'Confirmar'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-center">
                                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ShoppingCart className="w-10 h-10 text-emerald-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2 italic tracking-tight">¡VENTA EXITOSA!</h2>

                                {paymentMethod === 'efectivo' && (
                                    <p className="text-zinc-400 mb-8 font-medium">
                                        Cambio entregado: <span className="font-mono font-bold text-emerald-400">${saleComplete.change.toFixed(2)}</span>
                                    </p>
                                )}

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => finishSale(true)}
                                        className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-all border border-zinc-700 shadow-md shadow-black/20"
                                    >
                                        Imprimir Ticket
                                    </button>
                                    <button
                                        onClick={() => finishSale(false)}
                                        className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black rounded-xl transition-all shadow-lg shadow-emerald-500/20 uppercase tracking-widest text-sm"
                                    >
                                        Siguiente Cliente (Cerrar)
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Product Grid Area */}
            <div className={`flex-1 flex flex-col p-4 md:p-6 overflow-hidden transition-all duration-300 ${isCartOpen ? 'hidden md:flex opacity-0 lg:opacity-100 lg:w-0' : 'flex'}`}>
                {/* Categories / Search */}
                <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    <button className="px-5 py-2.5 rounded-full bg-emerald-500 text-zinc-950 font-black uppercase text-[10px] tracking-widest whitespace-nowrap shadow-lg shadow-emerald-500/20">
                        Todos
                    </button>
                    {CATEGORIES.map(c => (
                        <button key={c} className="px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 font-bold uppercase text-[10px] tracking-widest whitespace-nowrap transition-all">
                            {c}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-3 pb-24">
                    {products.map(p => {
                        const isKg = p.unitType?.toLowerCase().includes('kg') || p.unitType?.toLowerCase() === 'kilogramo';
                        const remStock = getRemainingStock(p);
                        const isLowStock = remStock <= p.minimumStockAlert;

                        return (
                            <div key={p.id} className="group flex flex-col items-stretch bg-zinc-900 border border-zinc-800 rounded-3xl transition-all relative overflow-hidden active:scale-95 hover:border-emerald-500/30">
                                <span className={cn(
                                    "absolute top-3 left-3 text-[9px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-md z-10",
                                    isLowStock ? 'bg-red-500/20 text-red-500' : 'bg-black/50 text-zinc-500 backdrop-blur-sm'
                                )}>
                                    Stock: {remStock} {p.unitType}
                                </span>

                                <button
                                    onClick={() => handleAddToCart(p, 1)}
                                    className="flex-1 flex flex-col items-center justify-center p-3 pt-10 transition-colors"
                                >
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl flex items-center justify-center border-2 mb-3 md:mb-4 group-hover:scale-110 transition-transform bg-zinc-950 border-zinc-800 group-hover:border-emerald-500/50">
                                        <PackageOpen className="w-6 h-6 md:w-8 md:h-8 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <span className="font-bold text-zinc-200 text-sm md:text-base text-center leading-tight mb-1">{p.name}</span>
                                    <span className="text-emerald-400 font-mono font-black text-xs md:text-sm tracking-tighter">${Number(p.pricePublic).toFixed(2)} / {p.unitType}</span>
                                </button>

                                {isKg && (
                                    <div className="p-1 px-3 pb-3 flex gap-2">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleAddToCart(p, 0.5); }}
                                            className="flex-1 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white hover:bg-zinc-800 py-2 rounded-xl transition-all border border-zinc-800"
                                        >
                                            ½ Kg
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleAddToCart(p, 1); }}
                                            className="flex-1 text-[10px] font-black uppercase tracking-widest bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-xl transition-all"
                                        >
                                            1 Kg
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Mobile Floating Tab Integration Point (Fake space for the button) */}
                <div className="h-16 md:hidden"></div>
            </div>

            {/* Cart Area */}
            <div className={cn(
                "fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-0 lg:w-[400px] border-l border-zinc-800 bg-zinc-950 lg:bg-zinc-900/50 flex flex-col shrink-0 transition-transform duration-300 ease-in-out",
                isCartOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
            )}>
                <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900 lg:bg-transparent">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsCartOpen(false)} className="lg:hidden p-2 -ml-2 text-zinc-400 hover:text-white" title="Cerrar ticket">
                            <Plus className="w-6 h-6 rotate-45" />
                        </button>
                        <h2 className="font-black text-lg uppercase tracking-tight flex items-center gap-2 text-white italic">
                            <ShoppingCart className="w-5 h-5 text-emerald-500 not-italic" />
                            Ticket de Venta
                        </h2>
                    </div>
                    <button onClick={clearCart} className="text-zinc-500 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-500/10 active:scale-90" disabled={items.length === 0} title="Vaciar carrito">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-3">
                    {items.map(item => (
                        <div key={item.id} className="bg-zinc-950 border text-white border-zinc-800 rounded-2xl p-3 md:p-4 flex flex-col gap-3 shadow-xl">
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm md:text-base tracking-tight">{item.name}</span>
                                <span className="font-mono font-black text-emerald-400 text-base md:text-lg tracking-tighter">${item.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">${Number(item.pricePublic).toFixed(2)} {item.unitType === 'kg' ? 'x Kg' : 'c/u'}</span>
                                <div className="flex items-center gap-2 md:gap-3 bg-zinc-900 rounded-xl p-1 border border-zinc-800">
                                    <button
                                        title="Reducir Cantidad"
                                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - (item.unitType === 'kg' ? 0.5 : 1)))}
                                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors"
                                    >
                                        <Minus className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                    <span className="w-6 md:w-8 text-center font-black font-mono text-sm md:text-base">{item.quantity}</span>
                                    <button
                                        title="Incrementar Cantidad"
                                        onClick={() => updateQuantity(item.id, item.quantity + (item.unitType === 'kg' ? 0.5 : 1))}
                                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors"
                                    >
                                        <Plus className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4 opacity-30 mt-10">
                            <div className="w-16 h-16 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center">
                                <ShoppingCart className="w-6 h-6" />
                            </div>
                            <p className="font-black uppercase tracking-[0.2em] text-[10px]">Carrito Vacío</p>
                        </div>
                    )}
                </div>

                {/* Pay Section */}
                <div className="p-4 md:p-6 bg-zinc-900 border-t border-zinc-800 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
                    <div className="space-y-2 mb-6 font-bold">
                        <div className="flex justify-between text-zinc-500 text-[10px] uppercase tracking-widest">
                            <span>Subtotal Bruto</span>
                            <span className="font-mono">${currentTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-white text-2xl lg:text-3xl font-black italic tracking-tighter">
                            <span>TOTAL</span>
                            <span className="font-mono text-emerald-400 not-italic">${currentTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <button
                            onClick={() => setPaymentMethod('efectivo')}
                            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl border transition-all ${paymentMethod === 'efectivo' ? 'bg-emerald-500 text-zinc-950 border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-500 border-zinc-800'}`}
                        >
                            <Banknote className="w-5 h-5 mb-0.5" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Efectivo</span>
                        </button>
                        <button
                            onClick={() => setPaymentMethod('tarjeta')}
                            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl border transition-all ${paymentMethod === 'tarjeta' ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20' : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-500 border-zinc-800'}`}
                        >
                            <CreditCard className="w-5 h-5 mb-0.5" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Tarjeta</span>
                        </button>
                    </div>

                    <button
                        disabled={items.length === 0 || loading}
                        onClick={() => setCheckoutModalOpen(true)}
                        className="w-full relative bg-emerald-500 disabled:bg-zinc-800 disabled:text-zinc-500 hover:bg-emerald-400 text-zinc-950 text-base md:text-lg font-black py-4 md:py-5 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] disabled:shadow-none transition-all uppercase tracking-widest active:scale-[0.98]"
                    >
                        Pagar ${currentTotal.toFixed(2)}
                    </button>
                </div>
            </div>

            {/* Mobile Footer Toggle */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[200px] flex justify-center">
                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className={cn(
                        "flex items-center gap-3 px-6 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl transition-all active:scale-95 group",
                        isCartOpen ? "bg-zinc-100 text-zinc-950 ring-4 ring-white/10" : "bg-primary text-secondary ring-4 ring-primary/20",
                        items.length > 0 && !isCartOpen ? "animate-bounce" : ""
                    )}
                >
                    {isCartOpen ? (
                        <>Ver Productos</>
                    ) : (
                        <>
                            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Carrito ({items.length})</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}
