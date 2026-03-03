import { login } from './actions'
import { Store, User, Truck } from 'lucide-react'

export default function LoginPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <div className="flex justify-center mb-6">
                        <div className="bg-emerald-500/10 p-4 rounded-full">
                            <Store className="w-10 h-10 text-emerald-500" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center text-white mb-2">TechTortilleria</h2>
                    <p className="text-zinc-400 text-center text-sm mb-8">Inicia sesión para acceder a tu panel de control</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full pl-10 px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="usuario@techtortilleria.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-medium text-zinc-300" htmlFor="password">
                                    Contraseña
                                </label>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        {searchParams?.error && (
                            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                                <p className="text-red-500 text-sm text-center font-medium">
                                    {searchParams.error}
                                </p>
                            </div>
                        )}

                        <button
                            formAction={login}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-zinc-950 bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-zinc-900 transition-colors"
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-zinc-800">
                        <div className="grid grid-cols-3 gap-2 text-center text-xs text-zinc-500">
                            <div className="flex flex-col items-center">
                                <Store className="w-4 h-4 mb-1" />
                                <span>POS</span>
                            </div>
                            <div className="flex flex-col items-center border-l border-zinc-800">
                                <User className="w-4 h-4 mb-1" />
                                <span>Admin</span>
                            </div>
                            <div className="flex flex-col items-center border-l border-zinc-800">
                                <Truck className="w-4 h-4 mb-1" />
                                <span>Distribuidores</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
