import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-neutral-black noise overflow-hidden selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6 relative">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

                <div className="max-w-4xl mx-auto">
                    <header className="mb-16 text-center md:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                            Acuerdo de Licencia
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-4">
                            Términos y <span className="text-primary not-italic">Condiciones</span>
                        </h1>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Servicios de Terminal de Alto Rendimiento</p>
                    </header>

                    <div className="grid gap-8">
                        <LegalSection
                            title="Licencia de Operación"
                            content="Al utilizar la plataforma TechTortilleria, se le otorga una licencia limitada e intransferible para operar sus puntos de venta bajo nuestra infraestructura tecnológica optimizada."
                        />
                        <LegalSection
                            title="Responsabilidades del Usuario"
                            content="El operador es responsable de mantener la confidencialidad de sus credenciales de acceso y de asegurar el correcto uso de la terminal en cumplimiento con las regulaciones locales de comercio."
                        />
                        <LegalSection
                            title="Disponibilidad del Sistema"
                            content="Garantizamos un tiempo de actividad (uptime) del 99.9% para nuestras interfaces de gestión, asegurando que la masa nunca deje de producirse por fallas tecnológicas."
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
            <p className="text-white/60 leading-relaxed font-medium text-sm">
                {content}
            </p>
        </div>
    );
}
