import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/shared/Footer";
import { Coffee, Truck, LayoutDashboard, Calculator, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-black">
      <Navbar />
      <Hero />

      {/* Features Grid - PRODUCTOS */}
      <section id="productos" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Ecosistema de Soluciones
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-6">Módulos <span className="text-primary not-italic">Ejecutivos</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Arquitectura de alto rendimiento diseñada para la modernización integral de la industria de la tortillería.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Calculator className="w-8 h-8 text-primary" />}
            title="POS Terminal"
            description="Venta de alto impacto por peso o unidad, generación de tickets premium y control de caja ejecutivo."
          />
          <FeatureCard
            icon={<Truck className="w-8 h-8 text-primary" />}
            title="Distribución"
            description="Portal especializado para socios comerciales. Pedidos por volumen con sincronización en tiempo real."
          />
          <FeatureCard
            icon={<Coffee className="w-8 h-8 text-primary" />}
            title="Identidad Digital"
            description="Presencia premium en línea diseñada para atraer y retener grandes distribuidores."
          />
          <FeatureCard
            icon={<LayoutDashboard className="w-8 h-8 text-primary" />}
            title="Panel de Control"
            description="Métricas operativas, control de inventario y gestión de usuarios bajo grado terminal."
          />
        </div>
      </section>

      {/* Identity Section - HISTORIA */}
      <section id="historia" className="bg-white/5 border-y border-white/5 py-32 px-6 overflow-hidden relative noise">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              Nuestra Esencia
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] italic uppercase tracking-tighter">
              La tortillería <br />
              dejó de ser <span className="text-primary not-italic underline decoration-white/10 decoration-8 underline-offset-8">invisible.</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 leading-relaxed font-medium">
              En el Siglo XXI, su negocio tradicional merece la vanguardia tecnológica.
              Protegemos el alma del maíz mientras impulsamos su escala con datos y eficiencia terminal.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary italic">100%</span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Sincronizado</span>
              </div>
              <div className="w-px h-16 bg-white/10 self-center" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary italic">99.9%</span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Disponibilidad</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-full opacity-30 blur-[100px] absolute -inset-10" />
            <div className="relative aspect-video bg-neutral-black/80 rounded-[40px] border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] group ring-1 ring-white/20">
              <img
                src="/hero2.png"
                alt="Proceso de Maíz Premium"
                className="w-full h-full object-cover rounded-[40px] opacity-70 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 px-4 py-2 bg-neutral-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">PROCESO CERTIFICADO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - CONTACTO */}
      <section id="contacto" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              Contacto Directo
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] italic uppercase tracking-tighter">
              Fiberlink <br />
              <span className="text-primary not-italic">Labs.</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 font-medium leading-relaxed">
              Estamos listos para escalar su operación. Contacte con nuestro equipo de ingeniería técnica para una consultoría ejecutiva.
            </p>

            <div className="space-y-6">
              <ContactInfo icon={<Mail className="w-5 h-5" />} label="Email Ejecutivo" value="labs@fiberlink.com" />
              <ContactInfo icon={<Phone className="w-5 h-5" />} label="Línea Directa" value="+52 (55) 8902-3421" />
              <ContactInfo icon={<MapPin className="w-5 h-5" />} label="Hub Tecnológico" value="Fiberlink HQ, Santa Fe, CDMX" />
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Nombre</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Empresa</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="Nombre de tu negocio" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Mensaje</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="¿Cómo podemos ayudarte?" />
              </div>
              <button className="w-full py-5 bg-primary text-black rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-primary/10 group">
                Enviar Solicitud
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">{label}</p>
        <p className="text-white/80 font-bold uppercase tracking-widest text-sm">{value}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-16 h-16 bg-white/5 rounded-[22px] flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all border border-white/10 group-hover:border-primary/20">
        {icon}
      </div>
      <h3 className="text-sm font-black text-white mb-4 uppercase tracking-[0.3em]">{title}</h3>
      <p className="text-white/40 text-[13px] leading-relaxed font-medium">{description}</p>
    </div>
  );
}
