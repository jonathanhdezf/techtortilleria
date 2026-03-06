'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Star, Award, Target, ChevronUp } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'

interface CajeroDashboardProps {
    shiftSummary: {
        totalVentas: number
        ventaMasGrande: number
        productoEstrella: string
    }
    dailyGoal: number
}

export const CajeroDashboard: React.FC<CajeroDashboardProps> = ({ shiftSummary, dailyGoal }) => {
    const progress = Math.min((shiftSummary.totalVentas / dailyGoal) * 100, 100)

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] w-full max-w-2xl px-4"
        >
            <div className="bg-secondary/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-4 shadow-2xl flex items-center gap-6">
                {/* Meta Diaria */}
                <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-end px-2">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <Target className="w-3 h-3" /> Meta Diaria
                        </span>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                            {progress.toFixed(0)}%
                        </span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="h-full bg-gradient-to-r from-primary to-emerald-400"
                        />
                    </div>
                </div>

                <div className="h-10 w-[1px] bg-white/5" />

                {/* Stats Rápidas */}
                <div className="flex items-center gap-8 pr-4">
                    <div className="text-center group">
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-1 group-hover:text-primary transition-colors">Venta Top</p>
                        <p className="text-sm font-black text-white italic tracking-tighter tabular-nums">
                            ${shiftSummary.ventaMasGrande.toFixed(2)}
                        </p>
                    </div>

                    <div className="text-center group">
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-1 group-hover:text-emerald-400 transition-colors">Top Producto</p>
                        <p className="text-sm font-black text-white italic tracking-tighter uppercase max-w-[100px] truncate">
                            {shiftSummary.productoEstrella || '---'}
                        </p>
                    </div>
                </div>

                <button title="Ver estadísticas detalladas" className="p-4 rounded-3xl bg-primary/10 text-primary hover:bg-primary/20 transition-all group">
                    <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </motion.div>
    )
}
