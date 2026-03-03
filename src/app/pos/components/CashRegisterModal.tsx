'use client'

import { useState } from 'react'
import { Store, Banknote } from 'lucide-react'
import { openRegister } from '../actions'

export default function CashRegisterModal({ isOpen }: { isOpen: boolean }) {
    const [amount, setAmount] = useState('0')
    const [loading, setLoading] = useState(false)

    if (!isOpen) return null

    const handleOpen = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('openingAmount', amount)
        await openRegister(formData)
        setLoading(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-8 relative">
                <div className="flex justify-center mb-6">
                    <div className="bg-emerald-500/10 p-4 rounded-full">
                        <Store className="w-8 h-8 text-emerald-500" />
                    </div>
                </div>

                <h2 className="text-xl font-bold text-center text-white mb-2">Apertura de Caja</h2>
                <p className="text-zinc-400 text-center text-sm mb-6">Ingresa el monto inicial para comenzar el turno.</p>

                <form onSubmit={handleOpen} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="amount">
                            Fondo de Caja (MXN)
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Banknote className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                id="amount"
                                type="number"
                                min="0"
                                step="0.01"
                                required
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="block w-full pl-10 px-3 py-3 font-mono text-lg border border-zinc-700 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-zinc-950 bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-zinc-900 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Abriendo caja...' : 'Abrir Caja'}
                    </button>
                </form>
            </div>
        </div>
    )
}
