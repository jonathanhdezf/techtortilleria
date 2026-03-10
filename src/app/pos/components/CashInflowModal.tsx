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
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const val = parseFloat(amount)
            if (isNaN(val) || val <= 0) throw new Error('Monto inválido')
            if (!description.trim()) throw new Error('La descripción es requerida')

            await createInflowAction(val, description)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                setAmount('')
                setDescription('')
                onClose()
            }, 2000)
        } catch (err: any) {
            setError(err.message || 'Error al registrar la entrada')
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-secondary border border-white/10 rounded-[2.5rem] p-6 md:p-8 max-w-lg w-full shadow-3xl overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full -ml-24 -mb-24 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-1.5">Entrada Manual</p>
                                    <h2 className="text-xl md:text-3xl font-black text-white italic uppercase tracking-tighter">Registrar <span className="text-emerald-400">Ingreso</span></h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    title="Cerrar modal"
                                    className="p-3 bg-white/5 rounded-xl text-white/20 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {!success ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-3 ml-4">
                                                    Monto del Ingreso (MXN)
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-400 font-black text-2xl italic pointer-events-none">$</div>
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        required
                                                        autoFocus
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                        className="block w-full pl-12 pr-6 py-6 bg-white/5 border border-white/5 rounded-[1.8rem] font-black text-3xl tabular-nums text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-emerald-500/30 transition-all font-mono"
                                                        placeholder="0.00"
                                                        title="Ingresa el monto de la entrada"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-3 ml-4">
                                                    Concepto / Descripción
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-6 top-6 text-white/10 pointer-events-none">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    <textarea
                                                        required
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        className="block w-full pl-16 pr-6 py-5 bg-white/5 border border-white/5 rounded-[1.8rem] font-bold text-base text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-primary/30 transition-all min-h-[100px] resize-none"
                                                        placeholder="EJ: FONDO ADICIONAL, DEVOLUCIÓN..."
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
                                            className="w-full py-6 bg-emerald-500 text-secondary rounded-[1.8rem] font-black text-base uppercase tracking-widest shadow-2xl shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:grayscale disabled:opacity-50"
                                        >
                                            {loading ? (
                                                <div className="w-5 h-5 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <ArrowDownCircle className="w-5 h-5" />
                                                    <span>Confirmar Ingreso</span>
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-emerald-500/20 rounded-[2.5rem] flex items-center justify-center text-emerald-400 mb-6 shadow-3xl shadow-emerald-500/10 border border-emerald-500/20">
                                            <Zap className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">¡Operación <span className="text-emerald-400">Exitosa</span>!</h3>
                                        <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Ingreso registrado correctamente</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex justify-center mt-8">
                                <Logo className="h-5 w-auto opacity-10 grayscale" variant="premium" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
