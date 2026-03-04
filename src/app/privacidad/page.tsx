import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-neutral-black noise overflow-hidden selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6 relative">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

                <div className="max-w-4xl mx-auto">
                    <header className="mb-16 text-center md:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                            Documento Legal v1.0
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-4">
                            Política de <span className="text-primary not-italic">Privacidad</span>
                        </h1>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Última actualización: Marzo 2026</p>
                    </header>

                    <div className="grid gap-8">
                        <LegalSection
                            title="Recopilación de Datos"
                            content="En TechTortilleria, la seguridad de la información es nuestra prioridad. Recopilamos datos mínimos necesarios para la operación de la terminal, incluyendo registros de ventas, inventarios y perfiles de usuario autenticados."
                        />
                        <LegalSection
                            title="Uso de la Información"
                            content="Su información se utiliza exclusivamente para la optimización de procesos internos, generación de reportes ejecutivos y sincronización en tiempo real entre sucursales y centros de distribución."
                        />
                        <LegalSection
                            title="Seguridad de Grado Terminal"
                            content="Implementamos protocolos de cifrado AES-256 para toda la data en tránsito y reposo. Su infraestructura está protegida bajo estándares internacionales de ciberseguridad."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function LegalSection({ title, content }: { title: string, content: string }) {
    return (
        <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 backdrop-blur-3xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">{title}</h3>
            <p className="text-white/60 leading-relaxed font-medium">
                {content}
            </p>
        </div>
    );
}
