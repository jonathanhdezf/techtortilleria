"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Terminal, Layers, X, Check, Sparkles, AlertTriangle, Rocket, Crown, BadgeCheck, ChevronRight, Mail } from "lucide-react";

export default function Hero() {
    const [showPricingModal, setShowPricingModal] = useState(false);

    return (
        <>
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-neutral-black noise">
            {/* Premium Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full -z-10 opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl w-full text-center z-10"
            >
                {/* Executive Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 rounded-2xl bg-white/5 border border-white/10 text-primary text-[8px] xs:text-[10px] font-black uppercase tracking-[0.2em] xs:tracking-[0.4em] mb-10 shadow-2xl backdrop-blur-md max-w-full"
                >
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full animate-pulse flex-shrink-0" />
                    <span className="truncate xs:whitespace-normal">Terminal de Grado Ejecutivo v2.0</span>
                </motion.div>

                {/* High-Impact Heading */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-8xl font-black text-white leading-[0.95] md:leading-[0.9] mb-8 italic uppercase tracking-tighter break-words overflow-hidden">
                    Re-imaginando la <br className="hidden md:block" />
                    <span className="text-primary not-italic">Tradición.</span> <br />
                    <span className="text-white/20">Control Absoluto.</span>
                </h1>

                {/* Sales Copy */}
                <p className="text-base md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight px-2 md:px-0">
                    No es solo un punto de venta. Es una plataforma de <span className="text-white font-bold italic">alto rendimiento</span> diseñada para digitalizar, optimizar y escalar el alma de tu negocio.
                </p>

                {/* Premium CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
                    <button 
                        onClick={() => setShowPricingModal(true)}
                        className="w-full sm:w-auto px-10 py-5 bg-primary text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_40px_rgba(250,204,21,0.2)] hover:-translate-y-1 active:scale-95 group"
                    >
                        Adquirir Sistema
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-md">
                        Ver Demo Ejecutiva
                    </button>
                </div>

                {/* Floating Status Badges (The "Sell") */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
                    {[
                        { icon: Zap, label: "Sync en Tiempo Real", status: "ACTIVO" },
                        { icon: ShieldCheck, label: "Grado Terminal", status: "SEGURO" },
                        { icon: Terminal, label: "Interfaz Ejecutiva", status: "READY" },
                        { icon: Layers, label: "Multi-Sucursal", status: "AUTO" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-1.5 md:gap-2 backdrop-blur-sm"
                        >
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary/40" />
                            <span className="text-[9px] md:text-[10px] font-black text-white/80 uppercase tracking-widest">{item.label}</span>
                            <span className="text-[7px] md:text-[8px] font-black text-primary uppercase tracking-[0.3em] opacity-40">{item.status}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Premium Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="relative w-full max-w-6xl mx-auto px-4"
                >
                    <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-secondary/40 backdrop-blur-3xl group ring-1 ring-white/20">
                        {/* Interactive scanline effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(250,204,21,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline pointer-events-none opacity-20" />

                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-30 pointer-events-none" />

                        <div className="p-1 sm:p-2 md:p-4 bg-neutral-black/40">
                            <video
                                src="/techherovideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                poster="/videohero.webp"
                                className="w-full h-auto object-cover rounded-[32px] opacity-80 brightness-75 contrast-125"
                            />
                        </div>

                        {/* Glossy terminal frame decoration */}
                        <div className="absolute top-6 left-6 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                        </div>
                    </div>

                    {/* Background glow casting onto main content */}
                    <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-[100px] -z-20 opacity-30" />
                </motion.div>
            </motion.div>
        </section>

        {/* =============== PRICING MODAL =============== */}
        <AnimatePresence>
            {showPricingModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[999] flex items-center justify-center p-4"
                    onClick={(e) => { if (e.target === e.currentTarget) setShowPricingModal(false); }}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[40px] bg-[#0a0b0f] border border-white/10 shadow-[0_60px_200px_rgba(250,204,21,0.15)] custom-scrollbar"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPricingModal(false)}
                            aria-label="Cerrar modal"
                            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:text-white transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Header with Problem Statement */}
                        <div className="relative p-8 md:p-14 pb-0 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                                    <Sparkles className="w-3 h-3" />
                                    Propuesta Comercial 2026
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight italic uppercase tracking-tighter">
                                    El software que tu <br className="hidden md:block" />
                                    negocio <span className="text-primary not-italic">necesitaba.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Problem Section */}
                        <div className="px-8 md:px-14 py-8 md:py-10">
                            <div className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 md:p-10 mb-10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                        <AlertTriangle className="w-7 h-7 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">El Problema en México</h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                                            En México, <span className="text-white font-bold">no existe software especializado</span> para la industria tortillera ni para miles de micro y pequeños negocios de alimentos. 
                                            Los sistemas genéricos disponibles en el mercado están diseñados para cadenas o tiendas de conveniencia, obligando a los pequeños productores a adaptarse a herramientas que <span className="text-accent font-bold">no reflejan su operación real</span>.
                                        </p>
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            Venta por peso, rutas de distribución, crédito a clientes y proveedores, control de producción artesanal... Todas estas necesidades quedan <span className="text-white/80 font-semibold">fuera del alcance</span> de los sistemas convencionales. El resultado: pérdida de dinero, falta de control y estancamiento operativo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Solution Section */}
                            <div className="bg-white/[0.03] border border-primary/10 rounded-[32px] p-8 md:p-10 mb-10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <Rocket className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">Nuestra Solución: Tecnología de Última Generación</h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                                            Desarrollamos un <span className="text-primary font-bold">ecosistema digital completo</span>, construido desde cero con la tecnología más avanzada del mercado (Next.js, React, PostgreSQL, Supabase Realtime) 
                                            y diseñado específicamente para la operación real de negocios de producción y distribución de alimentos.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {[
                                                "POS Terminal de grado ejecutivo",
                                                "Venta por peso y por unidad",
                                                "Control de crédito (fiado) inteligente",
                                                "Portal de distribuidores en tiempo real",
                                                "Panel administrativo con métricas avanzadas",
                                                "Gestión de inventario automatizada",
                                                "Cortes de caja con auditoría financiera",
                                                "Landing page corporativa incluida",
                                                "Sincronización en tiempo real multi-dispositivo",
                                                "Interfaz premium, oscura y profesional"
                                            ].map((f, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[12px] text-white/60 font-semibold">
                                                    <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-primary" />
                                                    </div>
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Market Value Section */}
                            <div className="text-center mb-10">
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-3">Valor de Mercado Estimado</p>
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="text-2xl md:text-3xl font-black text-white/20 line-through decoration-accent/60 decoration-2">$180,000 — $350,000 MXN</span>
                                </div>
                                <p className="text-white/30 text-xs font-medium max-w-xl mx-auto">
                                    Un sistema con estas funcionalidades, desarrollado a la medida con tecnología de punta, tiene un valor comercial de entre <span className="text-white/50">$180,000 y $350,000 MXN</span> en el mercado mexicano. Nosotros lo hacemos accesible.
                                </p>
                            </div>

                            {/* Pricing Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {/* Deployment Card */}
                                <div className="relative bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 overflow-hidden group hover:border-primary/20 transition-all">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                                <BadgeCheck className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Pago Único</p>
                                                <h4 className="text-sm font-black text-white uppercase tracking-tight">Despliegue Inicial</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-end gap-2 mb-6">
                                            <span className="text-5xl font-black text-primary tracking-tighter">$14,999</span>
                                            <span className="text-sm font-black text-white/20 uppercase tracking-widest pb-2">MXN</span>
                                        </div>

                                        <p className="text-white/40 text-xs leading-relaxed mb-6">
                                            Incluye la configuración completa del sistema, personalización de marca, capacitación del equipo, migración de datos y despliegue en la nube con tu dominio propio.
                                        </p>

                                        <div className="space-y-3">
                                            {[
                                                "Instalación y configuración completa",
                                                "Personalización con tu marca y logo",
                                                "Capacitación presencial o remota",
                                                "Dominio y hosting primer mes incluido",
                                                "Soporte técnico prioritario 30 días"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[11px] text-white/50 font-medium">
                                                    <ChevronRight className="w-3 h-3 text-primary/60 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Subscription Card */}
                                <div className="relative bg-gradient-to-br from-primary/10 via-white/[0.03] to-white/[0.03] border border-primary/20 rounded-[32px] p-8 md:p-10 overflow-hidden group hover:border-primary/40 transition-all">
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-black text-[8px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg shadow-primary/20">
                                        Recomendado
                                    </div>
                                    <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <Crown className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-primary/40 uppercase tracking-[0.3em]">Mensual</p>
                                                <h4 className="text-sm font-black text-white uppercase tracking-tight">Suscripción Ejecutiva</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-end gap-2 mb-6">
                                            <span className="text-5xl font-black text-primary tracking-tighter">$1,499</span>
                                            <span className="text-sm font-black text-white/20 uppercase tracking-widest pb-2">MXN / MES</span>
                                        </div>

                                        <p className="text-white/40 text-xs leading-relaxed mb-6">
                                            Mantén tu sistema siempre actualizado, seguro y respaldado. Incluye soporte técnico continuo, actualizaciones de funcionalidades y hosting en la nube.
                                        </p>

                                        <div className="space-y-3">
                                            {[
                                                "Hosting en la nube de alto rendimiento",
                                                "Actualizaciones y nuevas funciones",
                                                "Respaldos automáticos diarios",
                                                "Soporte técnico dedicado 24/7",
                                                "Certificado SSL y seguridad avanzada",
                                                "Acceso a nuevos módulos sin costo extra"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[11px] text-white/50 font-medium">
                                                    <ChevronRight className="w-3 h-3 text-primary/60 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Final */}
                            <div className="text-center bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-12">
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">¿Listo para transformar tu negocio?</p>
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 italic uppercase tracking-tighter">
                                    Agenda tu <span className="text-primary not-italic">consultoría gratuita</span>
                                </h3>
                                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                                    Nuestro equipo de ingeniería te dará una demostración personalizada y resolverá todas tus dudas sin compromiso. Escríbenos y comienza hoy.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="mailto:fiberlinkserviciostic@gmail.com?subject=Consulta%20-%20Adquirir%20Sistema%20TechTortillería"
                                        className="w-full sm:w-auto px-10 py-5 bg-primary text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-primary/20 active:scale-95 group"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Contactar Ahora
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a
                                        href="https://wa.me/522331072438?text=Hola%2C%20me%20interesa%20adquirir%20el%20sistema%20TechTortiller%C3%ADa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-10 py-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-500/20 transition-all active:scale-95"
                                    >
                                        WhatsApp Directo
                                    </a>
                                </div>
                                <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.3em] mt-6">
                                    Fiberlink Labs • Teziutlán, Puebla, México • +52 233 107 2438
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}
