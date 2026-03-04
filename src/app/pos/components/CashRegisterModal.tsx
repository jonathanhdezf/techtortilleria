'use client'

import { useState } from 'react'
import { Store, Banknote, X, Zap } from 'lucide-react'
import { openRegister } from '../actions'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/shared/Logo'

import { useModalAccessibility } from '@/hooks/useModalAccessibility'

export default function CashRegisterModal({ isOpen }: { isOpen: boolean }) {
    const [amount, setAmount] = useState('')
    const [loading, setLoading] = useState(false)

    // For mandatory modals, we don't handle ESC/Back unless there's a specific exit path.
    // However, the user asked for ESC/Back for ALL modals.
    // If we want to be safe, we could make ESC/Back trigger the Logout.
    useModalAccessibility(isOpen, () => {
        // Since this modal is mandatory to use the POS, "closing" it should probably mean
        // going back or logging out. But for now, let's keep it simple as requested.
        // If onClose is not provided, we won't close it to prevent a broken state.
    })

    if (!isOpen) return null

    const handleOpen = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('openingAmount', amount || '0')
        await openRegister(formData)
        setLoading(false)
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-neutral-black/90 backdrop-blur-xl noise"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="relative bg-secondary/80 border border-white/5 rounded-[3.5rem] p-10 md:p-14 max-w-lg w-full shadow-3xl backdrop-blur-3xl overflow-hidden"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 blur-[80px] rounded-full -ml-24 -mb-24 pointer-events-none" />

                    <div className="relative z-10 text-center">
                        <div className="flex justify-center mb-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                                <div className="relative w-24 h-24 bg-primary/10 border border-primary/20 rounded-[2rem] flex items-center justify-center text-primary">
                                    <Store className="w-12 h-12" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">Iniciando Turno Operativo</p>
                            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-2">Apertura de <span className="text-primary">Caja</span></h2>
                            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Ingrese el fondo inicial para esta terminal</p>
                        </div>

                        <form onSubmit={handleOpen} className="space-y-8 text-left">
                            <div>
                                <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-6" htmlFor="amount">
                                    Fondo en Efectivo (MXN)
                                </label>
                                <div className="relative group">
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
                                className="w-full relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                                <div className="relative w-full py-7 bg-primary text-secondary rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group-hover:scale-[1.02] active:scale-95 transition-all">
                                    {loading ? (
                                        <>
                                            <div className="w-6 h-6 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                                            <span>Abriendo...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Zap className="w-6 h-6" />
                                            <span>Iniciar Terminal</span>
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>

                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={async () => {
                                    const { logoutAction } = await import('@/app/actions/auth');
                                    await logoutAction();
                                }}
                                className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] hover:text-red-400 transition-colors py-2 px-4 rounded-xl hover:bg-red-500/5 mt-4"
                            >
                                Cerrar Sesión
                            </button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <Logo className="h-6 w-auto mx-auto opacity-20 grayscale" variant="premium" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

