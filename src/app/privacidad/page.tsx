import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/shared/Footer";
import { Shield, Lock, Eye, Server, RefreshCw } from "lucide-react";

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-neutral-black">
            <Navbar />
            
            <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto relative">
                {/* Background Decorations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                        Seguridad Ejecutiva
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.9] italic uppercase tracking-tighter italic">
                        Política de <br />
                        <span className="text-primary not-italic underline decoration-white/10 decoration-8 underline-offset-8">Privacidad.</span>
                    </h1>
                    <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Última actualización: 11 de Marzo de 2026</p>
                </div>

                <div className="space-y-12 relative z-10">
                    <div className="p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl">
                        <div className="flex items-start gap-6 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tighter">Compromiso de Datos</h2>
                        </div>
                        <p className="text-white/50 leading-relaxed font-medium mb-6">
                            En Fiberlink Labs, la privacidad es un pilar fundamental de nuestra arquitectura de grado terminal. Entendemos que su negocio se basa en datos sensibles y nuestra misión es protegerlos bajo los más altos estándares de cifrado.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Cifrado de grado militar (AES-256)",
                                "Backups automáticos cada 24 horas",
                                "Acceso restringido por roles ejecutivos",
                                "Transparencia absoluta en recolección"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-[11px] font-black text-white/40 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <Lock className="w-4 h-4 text-primary opacity-40 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-10">
                        <section>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                                <Eye className="w-5 h-5 text-primary" /> 1. Información Recolectada
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                Recopilamos datos estrictamente operativos para el funcionamiento del Punto de Venta (POS): nombres de usuarios, correos electrónicos corporativos, registros de ventas e inventarios. No vendemos, intercambiamos ni transferimos su información a terceros para fines publicitarios.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                                <Server className="w-5 h-5 text-primary" /> 2. Almacenamiento en la Nube
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                Sus datos se almacenan en servidores seguros alojados en la infraestructura de Supabase y AWS, garantizando una disponibilidad del 99.9% y protección contra ataques externos mediante firewalls de última generación.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                                <RefreshCw className="w-5 h-5 text-primary" /> 3. Sus Derechos
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                Usted mantiene control total sobre sus datos. En cualquier momento puede solicitar la exportación completa de sus registros de ventas o la eliminación de su cuenta y base de datos asociada, siguiendo los protocolos de seguridad de Fiberlink Labs.
                            </p>
                        </section>
                    </div>

                    <div className="p-8 rounded-[32px] bg-primary text-black text-center">
                        <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">¿Dudas sobre su privacidad?</p>
                        <p className="text-sm font-bold opacity-70">Contacte a nuestro Oficial de Protección de Datos: <span className="underline">privacidad@fiberlink.com</span></p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
