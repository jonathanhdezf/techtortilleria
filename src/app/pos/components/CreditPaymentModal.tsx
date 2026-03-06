'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, DollarSign, Loader2, CheckCircle, User, CreditCard } from 'lucide-react'
import { addCreditPayment } from '../customer_actions'
import { formatCurrency } from '@/lib/utils'

interface CreditPaymentModalProps {
    isOpen: boolean
    onClose: () => void
    customer: {
        id: string
        name: string
        currentDebt: number
    } | null
    onSuccess: () => void
}

export default function CreditPaymentModal({ isOpen, onClose, customer, onSuccess }: CreditPaymentModalProps) {
    const router = useRouter()
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('Abono en caja')
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState<'form' | 'success'>('form')

    if (!customer) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const numAmount = parseFloat(amount)
        if (isNaN(numAmount) || numAmount <= 0) {
            alert('Por favor ingresa un monto válido')
            return
        }

        setLoading(true)
        try {
            await addCreditPayment(customer.id, numAmount, description)
            setStep('success')
            router.refresh()
            setTimeout(() => {
                onSuccess()
                handleClose()
            }, 2000)
        } catch (error) {
            console.error(error)
            alert('Error al registrar el abono')
        } finally {
            setLoading(false)
        }
    }

    const handleClose = () => {
        setAmount('')
        setDescription('Abono en caja')
        setStep('form')
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-secondary border border-white/10 rounded-[2.5rem] p-8 md:p-10 max-w-md w-full shadow-2xl"
                    >
                        {step === 'form' ? (
                            <>
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2">Crédito / Fiado</p>
                                        <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Registrar <span className="text-primary">Abono</span></h2>
                                    </div>
                                    <button onClick={handleClose} title="Cerrar modal" className="p-3 bg-white/5 rounded-2xl text-white/20 hover:text-white transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="bg-white/5 p-6 rounded-3xl border border-white/5 mb-8 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">Cliente</p>
                                        <p className="text-lg font-black text-white italic uppercase tracking-tighter">{customer.name}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] font-bold text-red-400">Deuda: {formatCurrency(customer.currentDebt)}</span>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-4">Monto a Recibir</label>
                                        <div className="relative">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-black text-2xl italic">$</span>
                                            <input
                                                autoFocus
                                                type="number"
                                                step="0.01"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                title="Monto del abono"
                                                className="w-full pl-12 pr-6 py-6 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-3xl focus:border-primary focus:bg-white/10 outline-none transition-all tabular-nums"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-3 ml-4">Descripción (Opcional)</label>
                                        <input
                                            type="text"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            title="Descripción del abono"
                                            placeholder="Descripción opcional"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-primary transition-all outline-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading || !amount}
                                        className="w-full py-6 bg-primary text-secondary rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                                    >
                                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                                            <>
                                                <DollarSign className="w-6 h-6" />
                                                Cobrar Abono
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
                                >
                                    <CheckCircle className="w-12 h-12" />
                                </motion.div>
                                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">¡Pago Recibido!</h3>
                                <p className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">El saldo ha sido actualizado</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
