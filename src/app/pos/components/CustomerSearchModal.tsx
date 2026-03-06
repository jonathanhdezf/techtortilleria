'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, UserPlus, Phone, Mail, CreditCard, X, ChevronRight, Loader2 } from 'lucide-react'
import { searchCustomers, createCustomer } from '../customer_actions'
import { cn } from '@/lib/utils'

interface Customer {
    id: string
    name: string
    phone?: string
    email?: string
    creditLimit: number
    currentDebt: number
}

interface CustomerSearchModalProps {
    isOpen: boolean
    onClose: () => void
    onSelect: (customer: Customer) => void
}

export const CustomerSearchModal: React.FC<CustomerSearchModalProps> = ({ isOpen, onClose, onSelect }) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Customer[]>([])
    const [loading, setLoading] = useState(false)
    const [isCreating, setIsCreating] = useState(false)
    const [newCustomer, setNewCustomer] = useState({ name: '', phone: '', creditLimit: '1000' })

    useEffect(() => {
        const handler = setTimeout(async () => {
            if (query.trim()) {
                setLoading(true)
                try {
                    const data = await searchCustomers(query)
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

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', newCustomer.name)
            formData.append('phone', newCustomer.phone)
            formData.append('creditLimit', newCustomer.creditLimit)

            const customer = await createCustomer(formData)
            onSelect({ id: customer.id, name: customer.name, creditLimit: Number(newCustomer.creditLimit), currentDebt: 0 })
            onClose()
        } catch (error) {
            alert('Error creando cliente')
        } finally {
            setLoading(false)
        }
    }

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
                                <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Seleccionar Cliente</h3>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Gestión de Crédito / Fiado</p>
                            </div>
                            <button onClick={onClose} title="Cerrar modal" className="p-3 rounded-2xl bg-white/5 text-white/40 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-8">
                            {!isCreating ? (
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

                                        {!loading && results.length > 0 && results.map(c => {
                                            const disponible = Number(c.creditLimit) - Number(c.currentDebt)
                                            return (
                                                <button
                                                    key={c.id}
                                                    onClick={() => onSelect(c)}
                                                    className="w-full p-5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-3xl flex items-center justify-between transition-all group"
                                                >
                                                    <div className="text-left">
                                                        <p className="font-black text-white uppercase italic tracking-tighter">{c.name}</p>
                                                        <div className="flex items-center gap-4 mt-1">
                                                            <span className="text-[10px] font-bold text-white/20 flex items-center gap-1">
                                                                <CreditCard className="w-3 h-3" />
                                                                Disp: ${disponible.toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                                </button>
                                            )
                                        })}

                                        {!loading && query && results.length === 0 && (
                                            <div className="text-center py-8">
                                                <p className="text-white/20 font-bold uppercase text-xs">No se encontraron clientes</p>
                                                <button
                                                    onClick={() => setIsCreating(true)}
                                                    className="mt-4 text-primary font-black uppercase text-[10px] tracking-widest hover:underline"
                                                >
                                                    + Crear Nuevo Cliente
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setIsCreating(true)}
                                        className="w-full py-5 border-2 border-dashed border-white/5 rounded-3xl text-white/20 hover:text-white/40 hover:border-white/10 transition-all font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2"
                                    >
                                        <UserPlus className="w-4 h-4" />
                                        Registrar Nuevo Cliente
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleCreate} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-white/20 uppercase tracking-widest">Nombre Completo</label>
                                            <input
                                                required
                                                type="text"
                                                title="Nombre"
                                                placeholder="Ej: Juan Pérez"
                                                value={newCustomer.name}
                                                onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })}
                                                className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-bold"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-white/20 uppercase tracking-widest">Teléfono (WhatsApp)</label>
                                            <input
                                                type="text"
                                                title="Teléfono"
                                                placeholder="771..."
                                                value={newCustomer.phone}
                                                onChange={e => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                                                className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-bold"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-white/20 uppercase tracking-widest">Límite de Crédito</label>
                                            <input
                                                type="number"
                                                title="Límite de crédito"
                                                placeholder="1000"
                                                value={newCustomer.creditLimit}
                                                onChange={e => setNewCustomer({ ...newCustomer, creditLimit: e.target.value })}
                                                className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-bold"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setIsCreating(false)}
                                            className="flex-1 py-5 rounded-3xl bg-white/5 text-white/40 font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex-1 py-5 rounded-3xl bg-primary text-secondary font-black uppercase text-[10px] tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                        >
                                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                                            Guardar y Seleccionar
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
