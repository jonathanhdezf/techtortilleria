'use client'

import { useState } from 'react'
import { Store, Banknote, X, Zap, PieChart, TrendingUp, DollarSign } from 'lucide-react'
import { closeRegister } from '../actions'
import { cn, formatCurrency } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/shared/Logo'

import { useModalAccessibility } from '@/hooks/useModalAccessibility'

interface CashCloseModalProps {
    isOpen: boolean
    onClose: () => void
    registerData: any // This would typically be active shift stats
}

export default function CashCloseModal({ isOpen, onClose, registerData }: CashCloseModalProps) {
    const [amount, setAmount] = useState('')
    const [loading, setLoading] = useState(false)

    useModalAccessibility(isOpen, onClose)

    if (!isOpen) return null

    const handleClose = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        let success = false
        try {
            const formData = new FormData()
            formData.append('closingAmount', amount || '0')
            await closeRegister(formData)
            success = true
        } catch (error) {
            console.error('Error closing register:', error)
            alert('Error al cerrar la caja')
        } finally {
            setLoading(false)
        }

        if (success) {
            // Logout after closing the register to allow a different user to log in
            // Move outside try-catch because redirect() throws an internal exception
            const { logoutAction } = await import('@/app/actions/auth')
            onClose()
            await logoutAction()
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
                    className="absolute inset-0 bg-neutral-black/90 backdrop-blur-xl noise"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="relative bg-secondary/80 border border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-14 max-w-2xl w-full shadow-3xl backdrop-blur-3xl overflow-hidden"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full -ml-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full -mr-24 -mb-24 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">Finalizando Turno Operativo</p>
                                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Corte de <span className="text-primary">Caja</span></h2>
                            </div>
                            <button
                                onClick={onClose}
                                title="Cerrar modal"
                                aria-label="Cerrar modal"
                                className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {/* Stats Card */}
                            <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Resumen de Turno</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center px-2">
                                        <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Base de Caja</span>
                                        <span className="text-xl font-black text-white tabular-nums">{formatCurrency(registerData?.openingAmount || 0)}</span>
                                    </div>
                                    <div className="flex justify-between items-center px-2">
                                        <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Ventas Efectivo (+)</span>
                                        <span className="text-xl font-black text-emerald-400 tabular-nums">{formatCurrency(registerData?.cashSales || 0)}</span>
                                    </div>
                                    <div className="flex justify-between items-center px-2">
                                        <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Gastos Caja (-)</span>
                                        <span className="text-xl font-black text-red-400 tabular-nums">{formatCurrency(registerData?.totalExpenses || 0)}</span>
                                    </div>
                                    <div className="h-px bg-white/5 w-full" />
                                    <div className="flex justify-between items-center px-2 bg-primary/5 py-4 rounded-2xl border border-primary/10">
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Total Esperado</span>
                                        <span className="text-2xl font-black text-primary tabular-nums">
                                            {formatCurrency(
                                                (registerData?.openingAmount || 0) +
                                                (registerData?.cashSales || 0) -
                                                (registerData?.totalExpenses || 0)
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center px-2 mt-4 opacity-40">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Ventas Tarjeta (No Suma)</span>
                                        <span className="text-sm font-black text-white tabular-nums">{formatCurrency(registerData?.cardSales || 0)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Closing Input */}
                            <div className="flex flex-col justify-center">
                                <form onSubmit={handleClose} className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-6" htmlFor="amount">
                                            Efectivo Real en Caja (MXN)
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary font-black text-3xl italic pointer-events-none">$</div>
                                            <input
                                                id="amount"
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                required
                                                autoFocus
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="block w-full pl-16 pr-8 py-8 bg-white/5 border border-white/5 rounded-[2.5rem] font-black text-4xl tabular-nums text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-primary/30 transition-all shadow-inner"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading || !amount}
                                        title="Cerrar turno operativo"
                                        aria-label="Cerrar turno operativo"
                                        className="w-full py-7 bg-primary text-secondary rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                < Zap className="w-6 h-6" />
                                                <span>Cerrar Turno</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Logo className="h-6 w-auto opacity-10 grayscale" variant="premium" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
