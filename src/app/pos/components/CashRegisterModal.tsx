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
    const [success, setSuccess] = useState(false)

    // For mandatory modals, we don't handle ESC/Back unless there's a specific exit path.
    useModalAccessibility(isOpen, () => {
        // Since this modal is mandatory to use the POS, "closing" it should probably mean
        // going back or logging out.
    })

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-secondary border border-white/10 rounded-[3rem] p-8 md:p-10 max-w-lg w-full shadow-3xl overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 blur-[80px] rounded-full -ml-24 -mb-24 pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                                    <div className="relative w-20 h-20 bg-primary/10 border border-primary/20 rounded-[2rem] flex items-center justify-center text-primary">
                                        <Store className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {!success ? (
                                    <motion.div key="opening-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <div className="mb-8 text-center">
                                            <p className="text-[9px] font-black text-primary uppercase tracking-[0.5em] mb-2">Iniciando Turno Operativo</p>
                                            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-1">Apertura de <span className="text-primary">Caja</span></h2>
                                            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Ingrese el fondo inicial para esta terminal</p>
                                        </div>

                                        <form onSubmit={async (e) => {
                                            e.preventDefault()
                                            setLoading(true)
                                            try {
                                                const formData = new FormData()
                                                formData.append('openingAmount', amount || '0')
                                                await openRegister(formData)
                                                setSuccess(true)
                                            } catch (error) {
                                                console.error('Error opening register:', error)
                                                alert('Error al abrir la caja')
                                            } finally {
                                                setLoading(false)
                                            }
                                        }} className="space-y-6 text-left">
                                            <div>
                                                <label className="block text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-3 ml-4" htmlFor="amount">
                                                    Fondo en Efectivo (MXN)
                                                </label>
                                                <div className="relative group">
                                                    <div className="absolute left-8 top-1/2 -translate-y-1/2 text-primary font-black text-2xl italic pointer-events-none">$</div>
                                                    <input
                                                        id="amount"
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        required
                                                        autoFocus
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                        className="block w-full pl-16 pr-8 py-6 bg-white/5 border border-white/5 rounded-[2rem] font-black text-3xl tabular-nums text-white placeholder-white/5 focus:outline-none focus:bg-white/10 focus:border-primary/30 transition-all shadow-inner"
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
                                                <div className="relative w-full py-6 bg-primary text-secondary rounded-[1.8rem] font-black text-base uppercase tracking-widest shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group-hover:scale-[1.02] active:scale-95 transition-all">
                                                    {loading ? (
                                                        <>
                                                            <div className="w-5 h-5 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                                                            <span>Abriendo...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Zap className="w-5 h-5" />
                                                            <span>Iniciar Terminal</span>
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="opening-success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-primary/20 rounded-[2.5rem] flex items-center justify-center mb-6 border border-primary/20">
                                            <Zap className="w-10 h-10 text-primary" />
                                        </div>
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.5em] mb-3">¡Turno Iniciado!</p>
                                        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">Terminal <span className="text-primary">Lista</span></h2>
                                        <p className="text-white/40 font-bold uppercase tracking-widest text-[9px]">Guardando configuración inicial...</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={async () => {
                                        const { logoutAction } = await import('@/app/actions/auth');
                                        await logoutAction();
                                    }}
                                    className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] hover:text-red-400 transition-colors py-2 px-4 rounded-xl hover:bg-red-500/5"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <Logo className="h-5 w-auto mx-auto opacity-20 grayscale" variant="premium" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
