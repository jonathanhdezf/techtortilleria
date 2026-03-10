'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, Filter, ArrowUpCircle, ArrowDownCircle, User, Calendar, DollarSign, FileText } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import Logo from '@/components/shared/Logo'

interface ShiftDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    shiftSummary: {
        expensesList: any[]
        inflowsList: any[]
        abonosList: any[]
    }
}

type Tab = 'gastos' | 'entradas' | 'abonos'

export default function ShiftDetailsModal({ isOpen, onClose, shiftSummary }: ShiftDetailsModalProps) {
    const [activeTab, setActiveTab] = useState<Tab>('gastos')

    const formatDate = (date: any) => {
        return new Date(date).toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    const tabs = [
        { id: 'gastos', label: 'Gastos', icon: ArrowUpCircle, color: 'text-red-400', bg: 'bg-red-400/10' },
        { id: 'entradas', label: 'Entradas', icon: ArrowDownCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
        { id: 'abonos', label: 'Abonos', icon: User, color: 'text-primary', bg: 'bg-primary/10' },
    ]

    const getActiveList = () => {
        switch (activeTab) {
            case 'gastos': return shiftSummary.expensesList
            case 'entradas': return shiftSummary.inflowsList
            case 'abonos': return shiftSummary.abonosList
            default: return []
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
                        className="relative bg-secondary border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 max-w-4xl w-full shadow-3xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-32 -mt-32 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">Auditoría Operativa</p>
                                    <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Detalle de <span className="text-primary">Movimientos</span></h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    title="Cerrar modal"
                                    className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Tabs Navigation */}
                            <div className="flex gap-4 mb-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as Tab)}
                                        className={cn(
                                            "flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl border transition-all font-black uppercase text-[10px] tracking-widest",
                                            activeTab === tab.id
                                                ? `${tab.bg} border-${tab.id === 'abonos' ? 'primary' : tab.id === 'gastos' ? 'red-500' : 'emerald-500'}/30 ${tab.color} scale-[1.05]`
                                                : "bg-white/5 border-transparent text-white/20 hover:bg-white/10 hover:text-white/40"
                                        )}
                                    >
                                        <tab.icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                {getActiveList().length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center py-20 text-white/10">
                                        <FileText className="w-16 h-16 mb-4 opacity-10" />
                                        <p className="font-black uppercase tracking-widest text-xs">Sin movimientos en esta categoría</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {getActiveList().map((item) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                key={item.id}
                                                className="bg-white/5 border border-white/5 rounded-3xl p-6 flex justify-between items-center group hover:bg-white/10 transition-all"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-2xl flex items-center justify-center",
                                                        activeTab === 'gastos' ? 'bg-red-400/10 text-red-400' :
                                                            activeTab === 'entradas' ? 'bg-emerald-400/10 text-emerald-400' :
                                                                'bg-primary/10 text-primary'
                                                    )}>
                                                        <DollarSign className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <p className="text-lg font-black text-white italic truncate max-w-[300px] uppercase tracking-tighter shrink-0">
                                                            {activeTab === 'abonos' ? item.customerName : item.description}
                                                        </p>
                                                        <div className="flex items-center gap-4 mt-1">
                                                            <span className="text-[10px] font-bold text-white/20 flex items-center gap-1 uppercase tracking-widest">
                                                                <Calendar className="w-3 h-3" /> {formatDate(item.createdAt)}
                                                            </span>
                                                            {activeTab === 'abonos' && item.description && (
                                                                <span className="text-[10px] font-bold text-white/20 italic lowercase">
                                                                    — {item.description}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className={cn(
                                                        "text-2xl font-black tabular-nums tracking-tighter",
                                                        activeTab === 'gastos' ? 'text-red-400' : 'text-emerald-400'
                                                    )}>
                                                        {activeTab === 'gastos' ? '-' : '+'}{formatCurrency(item.amount)}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center mt-10">
                                <Logo className="h-6 w-auto opacity-10 grayscale" variant="premium" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
