'use client'

import { useState, useEffect } from 'react'
import { X, Zap, ChevronRight, Scale, DollarSign } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, formatCurrency } from '@/lib/utils'
import Logo from '@/components/shared/Logo'

import { useModalAccessibility } from '@/hooks/useModalAccessibility'

interface AmountSaleModalProps {
    isOpen: boolean
    onClose: () => void
    product: any
    onAdd: (product: any, quantity: number) => void
}

export default function AmountSaleModal({ isOpen, onClose, product, onAdd }: AmountSaleModalProps) {
    const [amount, setAmount] = useState<string>('')
    const [calculatedQty, setCalculatedQty] = useState<number>(0)

    useModalAccessibility(isOpen, onClose)

    useEffect(() => {
        if (product && amount) {
            const val = parseFloat(amount)
            if (!isNaN(val) && product.pricePublic > 0) {
                // Calculate quantity based on amount and price
                const qty = val / product.pricePublic
                setCalculatedQty(parseFloat(qty.toFixed(3)))
            } else {
                setCalculatedQty(0)
            }
        } else {
            setCalculatedQty(0)
        }
    }, [amount, product])

    if (!isOpen || !product) return null

    const handleQuickAmount = (val: number) => {
        setAmount(val.toString())
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (calculatedQty > 0) {
            onAdd(product, calculatedQty)
            setAmount('')
            onClose()
        }
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 text-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-neutral-black/90 backdrop-blur-xl noise"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-secondary/80 border border-white/5 rounded-[3.5rem] p-10 md:p-14 max-w-xl w-full shadow-3xl backdrop-blur-3xl overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full -mr-24 -mb-24 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">Venta por Importe Directo</p>
                                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                                    {product.name}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-white transition-colors"
                                title="Cerrar"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-8">
                            {/* Quick Amounts */}
                            <div className="grid grid-cols-3 gap-4">
                                {[10, 20, 50].map((val) => (
                                    <button
                                        key={val}
                                        onClick={() => handleQuickAmount(val)}
                                        className="py-4 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-2xl border border-white/5 hover:border-primary/20 transition-all font-black text-xl italic"
                                    >
                                        ${val}
                                    </button>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] ml-6">
                                        Monto en Pesos (MXN)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary font-black text-3xl italic pointer-events-none">$</div>
                                        <input
                                            autoFocus
                                            type="number"
                                            step="0.01"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="block w-full pl-16 pr-8 py-8 bg-white/5 border border-white/5 rounded-[2.5rem] font-black text-4xl tabular-nums text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-primary/30 transition-all"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>

                                {/* Calculation Results */}
                                <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <Scale className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Cantidad Calculada</p>
                                            <p className="text-3xl font-black text-white italic uppercase tracking-tighter">
                                                {calculatedQty} <span className="text-xl text-white/40 not-italic">{product.unitType}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-1">Precio Unitario</p>
                                        <p className="text-sm font-black text-white/60 tabular-nums">{formatCurrency(product.pricePublic)}/{product.unitType}</p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={calculatedQty <= 0}
                                    className="w-full py-7 bg-primary text-secondary rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:grayscale disabled:opacity-50"
                                >
                                    <Zap className="w-6 h-6" />
                                    <span>Agregar a Venta</span>
                                </button>
                            </form>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Logo className="h-6 w-auto opacity-10 grayscale" variant="premium" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
