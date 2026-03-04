import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-neutral-black py-16 px-6 border-t border-white/5 noise relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -bottom-1/2 -z-10" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Logo className="h-10 w-auto" variant="premium" isStatic={true} />
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mt-2">
                        Fiberlink Labs v2.0 © 2026 • Executive Terminal
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex flex-col gap-4">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2">Legal</span>
                        <Link href="/privacidad" className="text-xs font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Privacidad</Link>
                        <Link href="/terminos" className="text-xs font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Términos</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2">Soporte</span>
                        <Link href="/ayuda" className="text-xs font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Centro de Ayuda</Link>
                        <Link href="/login" className="text-xs font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Acceso Terminal</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Sistemas Operativos</span>
                    </div>
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">LATAM • CENTRAL</span>
                </div>
            </div>
        </footer>
    );
}
