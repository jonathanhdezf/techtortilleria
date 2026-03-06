'use client'

import { useState } from 'react'
import { X, Zap, DollarSign, FileText, AlertCircle, ArrowDownCircle } from 'lucide-react'
import { createInflowAction } from '../actions'
import { cn, formatCurrency } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/shared/Logo'

import { useModalAccessibility } from '@/hooks/useModalAccessibility'

interface CashInflowModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function CashInflowModal({ isOpen, onClose }: CashInflowModalProps) {
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    useModalAccessibility(isOpen, onClose)
    const [error, setError] = useState<string | null>(null)

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const val = parseFloat(amount)
            if (isNaN(val) || val <= 0) throw new Error('Monto inválido')
            if (!description.trim()) throw new Error('La descripción es requerida')

            await createInflowAction(val, description)
            setAmount('')
            setDescription('')
            onClose()
        } catch (err: any) {
            setError(err.message || 'Error al registrar la entrada')
        } finally {
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-neutral-black/95 backdrop-blur-xl noise"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-secondary/80 border border-white/5 rounded-[3.5rem] p-8 md:p-14 max-w-xl w-full shadow-3xl backdrop-blur-3xl overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -ml-32 -mt-32 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.5em] mb-4">Entrada de Efectivo</p>
                                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Registrar <span className="text-emerald-400">Ingreso</span></h2>
                            </div>
                            <button
                                onClick={onClose}
                                title="Cerrar modal"
                                className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-6">
                                        Monto del Ingreso (MXN)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-emerald-400/50 font-black text-3xl italic pointer-events-none">$</div>
                                        <input
                                            type="number"
                                            step="0.01"
                                            required
                                            autoFocus
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="block w-full pl-16 pr-8 py-8 bg-white/5 border border-white/5 rounded-[2.5rem] font-black text-4xl tabular-nums text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-emerald-500/30 transition-all font-mono"
                                            placeholder="0.00"
                                            title="Ingresa el monto de la entrada"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-6">
                                        Concepto / Descripción
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-8 top-8 text-white/10 pointer-events-none">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <textarea
                                            required
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            className="block w-full pl-20 pr-8 py-7 bg-white/5 border border-white/5 rounded-[2.5rem] font-bold text-lg text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-primary/30 transition-all min-h-[120px] resize-none"
                                            placeholder="EJ: CAMBIO INICIAL, APORTACIÓN SOCIO..."
                                            title="Ingresa el concepto de la entrada"
                                        />
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-bold"
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {error}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={loading || !amount || !description}
                                className="w-full py-7 bg-emerald-500 text-secondary rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:grayscale disabled:opacity-50"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <ArrowDownCircle className="w-6 h-6" />
                                        <span>Confirmar Ingreso</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="flex justify-center mt-12">
                            <Logo className="h-6 w-auto opacity-10 grayscale" variant="premium" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
