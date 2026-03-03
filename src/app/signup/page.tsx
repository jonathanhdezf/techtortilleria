import { signup } from './actions'
import { UserPlus } from 'lucide-react'

export default function SignupPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-8">
                <div className="flex justify-center mb-6">
                    <div className="bg-blue-500/10 p-4 rounded-full">
                        <UserPlus className="w-8 h-8 text-blue-500" />
                    </div>
                </div>

                <h2 className="text-xl font-bold text-center text-white mb-2">Registro de Empleados (Auth Seguro)</h2>
                <p className="text-zinc-400 text-center text-sm mb-6">
                    Registra el correo del Cajero o Admin en Supabase para vincularlo con la Base de Datos.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="email">
                            Correo Electrónico (El mismo del seed)
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="block w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="cajero@techtortilleria.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="block w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="caja123"
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
                        formAction={signup}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-zinc-950 bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-zinc-900 transition-colors"
                    >
                        Registrar en Supabase
                    </button>
                </form>
            </div>
        </div>
    )
}
