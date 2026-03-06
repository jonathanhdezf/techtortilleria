'use client'

import { useState } from 'react'
import {
    X,
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isToday
} from 'date-fns'
import { es } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import Logo from '@/components/shared/Logo'
import { useModalAccessibility } from '@/hooks/useModalAccessibility'

interface CalendarModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
    const [currentDate, setCurrentDate] = useState(new Date())

    useModalAccessibility(isOpen, onClose)

    if (!isOpen) return null

    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    })

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

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
                    className="relative bg-secondary/80 border border-white/5 rounded-[3.5rem] p-8 md:p-12 max-w-lg w-full shadow-3xl backdrop-blur-3xl overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <CalendarIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-1">Calendario de Turnos</p>
                                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                                        Explorar <span className="text-primary">Fechas</span>
                                    </h2>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 bg-white/5 rounded-2xl text-white/20 hover:text-white transition-colors"
                                title="Cerrar"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-8 bg-white/5 p-4 rounded-3xl border border-white/5">
                            <button
                                onClick={(e) => { e.stopPropagation(); prevMonth(); }}
                                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/40 hover:text-white"
                                type="button"
                                title="Mes Anterior"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white">
                                {format(currentDate, 'MMMM yyyy', { locale: es })}
                            </h3>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextMonth(); }}
                                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/40 hover:text-white"
                                type="button"
                                title="Mes Siguiente"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 mb-8 text-center">
                            {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, idx) => (
                                <div key={idx} className="text-[10px] font-black text-white/20 uppercase tracking-widest pb-4">
                                    {day}
                                </div>
                            ))}
                            {calendarDays.map((day, idx) => {
                                const isCurrentMonth = isSameMonth(day, monthStart)
                                const isTodayDate = isToday(day)

                                return (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "aspect-square flex items-center justify-center rounded-2xl text-xs font-black transition-all",
                                            !isCurrentMonth ? "opacity-[0.05]" : "opacity-100",
                                            isTodayDate ? "bg-primary text-secondary shadow-lg shadow-primary/20 scale-105" : "hover:bg-white/5 text-white/60"
                                        )}
                                    >
                                        {format(day, 'd')}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex justify-center pt-8 border-t border-white/5">
                            <Logo className="h-5 w-auto opacity-10 grayscale" variant="premium" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
