import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import { HelpCircle, Terminal, LifeBuoy, Zap } from "lucide-react";

export default function AyudaPage() {
    return (
        <main className="min-h-screen bg-neutral-black noise overflow-hidden selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full -z-10 opacity-30" />

                <div className="max-w-5xl mx-auto text-center">
                    <header className="mb-20">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                            Soporte Técnico Especializado
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter mb-6">
                            Centro de <span className="text-primary not-italic">Ayuda</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-medium">Resolución de incidencias y guías de operación para su terminal e infraestructura corporativa.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <HelpCard
                            icon={<Terminal className="w-6 h-6 text-primary" />}
                            title="Operación POS"
                            description="Aprenda a realizar aperturas de caja, ventas por peso y cortes de turno de manera profesional."
                        />
                        <HelpCard
                            icon={<Zap className="w-6 h-6 text-primary" />}
                            title="Sincronización"
                            description="Guías para la sincronización multi-sucursal y gestión de datos en tiempo real."
                        />
                        <HelpCard
                            icon={<LifeBuoy className="w-6 h-6 text-primary" />}
                            title="Soporte VIP"
                            description="Contacto directo con nuestro equipo técnico para cuentas corporativas v2.0."
                        />
                        <HelpCard
                            icon={<HelpCircle className="w-6 h-6 text-primary" />}
                            title="FAQs"
                            description="Respuestas rápidas a las consultas más frecuentes sobre el hardware y software de TechTortilleria."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function HelpCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-10 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all group border-b-primary/20 border-b-2">
            <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{icon}</div>
            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-3">{title}</h3>
            <p className="text-white/40 leading-relaxed text-sm font-medium">
                {description}
            </p>
        </div>
    );
}
