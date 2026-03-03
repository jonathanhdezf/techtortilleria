import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import { Coffee, Truck, LayoutDashboard, Calculator } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />

      {/* Features Grid */}
      <section id="modulos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Módulos Integrados</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Todo lo que necesitas para operar tu tortillería de manera eficiente y moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Calculator className="w-8 h-8 text-secondary" />}
            title="POS Mostrador"
            description="Venta rápida por peso o unidad, generación de tickets y corte de caja instantáneo."
          />
          <FeatureCard
            icon={<Truck className="w-8 h-8 text-secondary" />}
            title="Portal Distribuidores"
            description="Tus socios comerciales pueden hacer pedidos por volumen y rastrear su entrega."
          />
          <FeatureCard
            icon={<Coffee className="w-8 h-8 text-secondary" />}
            title="Landing Digital"
            description="Presencia profesional en línea para atraer más clientes y distribuidores."
          />
          <FeatureCard
            icon={<LayoutDashboard className="w-8 h-8 text-secondary" />}
            title="Panel Admin"
            description="Métricas en tiempo real, control de inventario y gestión de usuarios centralizada."
          />
        </div>
      </section>

      {/* Identity Section */}
      <section className="bg-secondary text-surface py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              La tortillería <br />
              dejó de ser <span className="text-primary italic">invisible.</span>
            </h2>
            <p className="text-surface/70 text-lg mb-8 leading-relaxed">
              En el Siglo XXI, tu negocio tradicional merece lo mejor de la tecnología.
              Mantenemos la esencia del maíz y el calor del comal, pero potenciados
              por datos, eficiencia y una marca sólida.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-xs uppercase opacity-60">Digitalizado</span>
              </div>
              <div className="w-px h-12 bg-surface/20 self-center" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <span className="text-xs uppercase opacity-60">Operativo</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-3xl absolute -inset-4" />
            <div className="relative aspect-video bg-neutral-black/50 rounded-2xl border border-surface/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/techtortilleria.gif"
                alt="TechTortilleria en acción"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-12 px-6 border-t border-secondary/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-secondary text-xs">TT</span>
            </div>
            <span className="font-bold text-secondary">TechTortilleria © 2026</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-secondary/60">
            <a href="#" className="hover:text-secondary">Privacidad</a>
            <a href="#" className="hover:text-secondary">Términos</a>
            <a href="#" className="hover:text-secondary">Ayuda</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-surface border border-secondary/5 hover:border-primary/30 transition-all hover:shadow-2xl hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-secondary/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
