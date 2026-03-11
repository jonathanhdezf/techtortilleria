import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import { HelpCircle, Terminal, Calculator, Users, MessageCircle, ArrowUpRight, Search, PlayCircle, BookCheck } from "lucide-react";

export default function AyudaPage() {
    return (
        <main className="min-h-screen bg-neutral-black">
            <Navbar />
            
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />

                <div className="text-center mb-20 relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                        Centro de Soporte
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black text-white mb-6 leading-[0.9] italic uppercase tracking-tighter">
                        ¿Cómo podemos <br />
                        <span className="text-primary not-italic underline decoration-white/10 decoration-8 underline-offset-8">asistirlo?</span>
                    </h1>
                    
                    <div className="max-w-2xl mx-auto mt-12 relative">
                        <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-3xl px-10 py-6 text-white text-lg font-black uppercase tracking-widest focus:outline-none focus:border-primary/50 transition-all placeholder-white/20"
                            placeholder="Buscar en la documentación..."
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-primary text-black p-3 rounded-2xl shadow-lg">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
                    <HelpCard 
                        icon={<Terminal className="w-8 h-8" />}
                        title="POS Terminal"
                        description="Aprenda a operar el punto de venta, realizar arqueos y arqueeo de caja de forma eficiente."
                        link="/ayuda/pos"
                    />
                    <HelpCard 
                        icon={<Calculator className="w-8 h-8" />}
                        title="Auditoría"
                        description="Entienda el flujo de caja, los abonos a crédito y la reconciliación financiera en administración."
                        link="/ayuda/auditoria"
                    />
                    <HelpCard 
                        icon={<Users className="w-8 h-8" />}
                        title="Distribuidores"
                        description="Gestione las rutas de entrega y los saldos de deudores para sus socios comerciales premium."
                        link="/ayuda/distribuidores"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="p-10 md:p-14 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
                        <h3 className="text-2xl md:text-4xl font-black text-white italic mb-6">Preguntas <span className="text-primary">Frecuentes.</span></h3>
                        <div className="space-y-6">
                            <FaqItem question="¿Cómo iniciar sesión en la terminal?" answer="Simplemente acceda al botón 'Entrar' en el menú principal e ingrese sus credenciales corporativas asignadas en el despliegue." />
                            <FaqItem question="¿El sistema funciona sin internet?" answer="TechTortillería v2.0 cuenta con sincronización offline. Puede seguir vendiendo y los datos se guardarán localmente hasta recuperar la conexión." />
                            <FaqItem question="¿Cómo registrar abonos de distribuidores?" answer="En el buscador del POS, localice al distribuidor y seleccione 'Abonar a Deuda'. El movimiento quedará registrado en su estado de cuenta de forma inmediata." />
                            <FaqItem question="¿Por qué mi arqueo de caja no cuadra?" answer="Asegúrese de registrar todos los gastos y entradas manuales. El sistema calcula la diferencia entre el esperado y el contado de forma automática." />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-10 rounded-[40px] bg-primary text-black flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-2xl shadow-primary/20">
                            <div>
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter">Consultoría en Vivo</h4>
                                <p className="font-bold text-sm opacity-60">Soporte vía WhatsApp para emergencias críticas 24/7.</p>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-black/10 border border-black/10 flex items-center justify-center group-hover:bg-primary transition-all">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <StatBox icon={<PlayCircle className="w-6 h-6" />} label="Video Tutoriales" value="24" />
                            <StatBox icon={<BookCheck className="w-6 h-6" />} label="Guías Escritas" value="12" />
                        </div>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/5 rounded-[40px] p-12 backdrop-blur-3xl">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">Ingeniería Técnica</p>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight italic uppercase tracking-tighter italic">
                        ¿Continúa <span className="text-primary not-italic underline decoration-white/10 decoration-8 underline-offset-8">sin respuesta?</span>
                    </h3>
                    <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.3em] mb-8">Nuestros ingenieros en Fiberlink Labs están listos para guiarlo.</p>
                    
                    <a 
                        href="mailto:soporte@fiberlink.com" 
                        className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-3xl font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl active:scale-95 group"
                    >
                        Contactar Soporte Técnico
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function HelpCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
    return (
        <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl group hover:border-primary/40 transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                {icon}
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-4">{title}</h3>
            <p className="text-white/40 text-xs leading-relaxed font-medium mb-8">{description}</p>
            <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Explorar Documentación <ArrowUpRight className="w-4 h-4" />
            </div>
        </div>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="border-b border-white/5 pb-6 group cursor-pointer">
            <h4 className="text-white/80 font-black uppercase tracking-widest text-xs mb-3 group-hover:text-primary transition-colors">{question}</h4>
            <p className="text-white/30 text-xs leading-relaxed font-medium overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">{answer}</p>
        </div>
    );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 text-center group">
            <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
            <p className="text-3xl font-black text-white italic mb-1 uppercase tracking-tighter italic">{value}</p>
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{label}</p>
        </div>
    );
}
