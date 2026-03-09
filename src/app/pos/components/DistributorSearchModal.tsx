'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Truck, Phone, X, ChevronRight, Loader2 } from 'lucide-react'
import { searchDistributors } from '../customer_actions'
import { cn } from '@/lib/utils'

interface Distributor {
    id: string
    name: string
    contactName?: string
    phone?: string
    email?: string
    creditLimit: number
}

interface DistributorSearchModalProps {
    isOpen: boolean
    onClose: () => void
    onSelect: (distributor: Distributor) => void
}

export const DistributorSearchModal: React.FC<DistributorSearchModalProps> = ({ isOpen, onClose, onSelect }) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Distributor[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const handler = setTimeout(async () => {
            if (query.trim()) {
                setLoading(true)
                try {
                    const data = await searchDistributors(query)
                    setResults(data as any)
                } catch (error) {
                    console.error(error)
                } finally {
                    setLoading(false)
                }
            } else {
                setResults([])
            }
        }, 300)

        return () => clearTimeout(handler)
    }, [query])

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-lg bg-secondary border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Seleccionar Distribuidor</h3>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Precios Especiales y Mayoreo</p>
                            </div>
                            <button onClick={onClose} title="Cerrar modal" className="p-3 rounded-2xl bg-white/5 text-white/40 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="space-y-6">
                                <div className="relative group">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Buscar por nombre..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all font-bold"
                                    />
                                </div>

                                <div className="max-h-[300px] overflow-y-auto space-y-2 scrollbar-none">
                                    {loading && <div className="flex justify-center py-8"><Loader2 className="w-8 h-8 text-primary animate-spin" /></div>}

                                    {!loading && results.length > 0 && results.map(d => {
                                        return (
                                            <button
                                                key={d.id}
                                                onClick={() => onSelect(d)}
                                                className="w-full p-5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-3xl flex items-center justify-between transition-all group"
                                            >
                                                <div className="text-left">
                                                    <p className="font-black text-white uppercase italic tracking-tighter">{d.name}</p>
                                                    <div className="flex items-center gap-4 mt-1">
                                                        {d.phone && (
                                                            <span className="text-[10px] font-bold text-white/20 flex items-center gap-1">
                                                                <Phone className="w-3 h-3" />
                                                                {d.phone}
                                                            </span>
                                                        )}
                                                        <span className="text-[10px] font-bold text-primary/60 flex items-center gap-1">
                                                            <Truck className="w-3 h-3" />
                                                            Distribuidor Autorizado
                                                        </span>
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </button>
                                        )
                                    })}

                                    {!loading && query && results.length === 0 && (
                                        <div className="text-center py-8">
                                            <p className="text-white/20 font-bold uppercase text-xs">No se encontraron distribuidores</p>
                                        </div>
                                    )}

                                    {!loading && !query && (
                                        <div className="text-center py-8 opacity-20">
                                            <Truck className="w-12 h-12 mx-auto mb-4" />
                                            <p className="text-[10px] font-black uppercase tracking-widest">Ingresa un nombre para buscar</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
