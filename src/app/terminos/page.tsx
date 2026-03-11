import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import { BookOpen, Scale, FileText, Gavel, FileLock } from "lucide-react";

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-neutral-black">
            <Navbar />
            
            <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto relative">
                {/* Background Decorations */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                        Marco Operativo
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.9] italic uppercase tracking-tighter italic">
                        Términos y <br />
                        <span className="text-primary not-italic underline decoration-white/10 decoration-8 underline-offset-8">Condiciones.</span>
                    </h1>
                    <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Última actualización: 11 de Marzo de 2026</p>
                </div>

                <div className="space-y-12 relative z-10">
                    <div className="p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl">
                        <div className="flex items-start gap-6 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tighter">Acuerdo de Servicio</h2>
                        </div>
                        <p className="text-white/50 leading-relaxed font-medium mb-6">
                            Al utilizar los servicios de Fiberlink Labs y su plataforma TechTortillería v2.0, usted acepta estar sujeto a los siguientes términos y condiciones diseñados para proteger tanto su operación como nuestra infraestructura técnica.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Licencia de uso bajo suscripción",
                                "Propiedad intelectual de Fiberlink Labs",
                                "Responsabilidad de datos operativos",
                                "Soporte técnico preferencial"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-[11px] font-black text-white/40 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <Scale className="w-4 h-4 text-primary opacity-40 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-10">
                        <section>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                                <FileText className="w-5 h-5 text-primary" /> 1. Uso de la Licencia
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                El acceso a la terminal POS y el panel de administración se otorga bajo una licencia personal, no transferible y revocable, sujeta al cumplimiento de la suscripción mensual acordada en el despliegue inicial. El uso indebido para propósitos ilegales resultará en la baja inmediata del servicio.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                                <Gavel className="w-5 h-5 text-primary" /> 2. Limitación de Responsabilidad
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                Fiberlink Labs proporciona herramientas de cálculo y auditoría financiera; sin embargo, la veracidad de los datos ingresados es responsabilidad exclusiva del cajero y administrador de la terminal. No nos hacemos responsables por pérdidas derivadas de errores humanos en la captura de ventas o créditos.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                                <FileLock className="w-5 h-5 text-primary" /> 3. Propiedad de los Datos
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                Todos los datos de ventas y clientes pertenecen al usuario final. Fiberlink Labs actúa únicamente como procesador de datos y custodio de la infraestructura. El código fuente de la plataforma TechTortillería es propiedad intelectual exclusiva de Fiberlink Labs.
                            </p>
                        </section>
                    </div>

                    <div className="p-8 rounded-[32px] bg-primary text-black text-center">
                        <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">¿Necesita asistencia legal?</p>
                        <p className="text-sm font-bold opacity-70">Envíe un aviso formal a: <span className="underline">legal@fiberlink.com</span></p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
