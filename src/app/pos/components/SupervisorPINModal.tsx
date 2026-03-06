'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, X, Delete, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SupervisorPINModalProps {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
    correctPIN: string
}

export const SupervisorPINModal: React.FC<SupervisorPINModalProps> = ({ isOpen, onClose, onSuccess, correctPIN }) => {
    const [pin, setPin] = useState('')
    const [error, setError] = useState(false)

    const handleKey = (num: string) => {
        if (pin.length < 4) {
            const nextPin = pin + num
            setPin(nextPin)
            if (nextPin.length === 4) {
                if (nextPin === correctPIN) {
                    onSuccess()
                    onClose()
                    setPin('')
                } else {
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                        setPin('')
                    }, 500)
                }
            }
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full max-w-sm bg-secondary border border-red-500/20 rounded-[2.5rem] p-8 shadow-2xl text-center"
                    >
                        <div className="mb-8 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <ShieldCheck className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Autorización</h3>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Se requiere PIN de Supervisor</p>
                        </div>

                        <div className="flex justify-center gap-4 mb-10">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-4 h-4 rounded-full transition-all duration-300",
                                        pin.length > i ? "bg-primary scale-125 shadow-lg shadow-primary/50" : "bg-white/10",
                                        error && "bg-red-500 animate-shake"
                                    )}
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                                <button
                                    key={n}
                                    onClick={() => handleKey(n.toString())}
                                    className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xl font-black transition-all active:scale-95"
                                >
                                    {n}
                                </button>
                            ))}
                            <button onClick={onClose} title="Cerrar" className="h-16 rounded-2xl bg-white/5 text-white/40 flex items-center justify-center">
                                <X className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => handleKey('0')}
                                className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xl font-black transition-all active:scale-95"
                            >
                                0
                            </button>
                            <button onClick={() => setPin(pin.slice(0, -1))} title="Borrar" className="h-16 rounded-2xl bg-white/5 text-white/40 flex items-center justify-center">
                                <Delete className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
