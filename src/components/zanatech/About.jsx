import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Truck, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Garantía real",
    body: "Todos los equipos incluyen garantía escrita. Si algo falla, lo resolvemos.",
  },
  {
    icon: Wrench,
    title: "Diagnóstico técnico",
    body: "Cada iPhone pasa por revisión de batería, pantalla, cámaras y conectividad.",
  },
  {
    icon: Truck,
    title: "Envíos a toda Colombia",
    body: "Despachos nacionales garantizados desde Barranquilla.",
  },
  {
    icon: BadgeCheck,
    title: "Precios honestos",
    body: "Manejamos precios reales y exclusivos. Cero publicidad engañosa.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-28 lg:py-40 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="font-mono-data text-xs text-primary">// ZANATECH</span>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3 leading-tight">
            Tecnología Apple confiable en Barranquilla.
          </h2>
          <p className="font-body text-muted-foreground mt-6 leading-relaxed">
            Somos un equipo apasionado por la tecnología Apple. Conectamos personas con dispositivos premium —
            nuevos, caja abierta y usados certificados — con la confianza de un servicio técnico respaldado.
          </p>
          <div className="mt-8 font-mono-data text-xs text-muted-foreground space-y-1">
            <div className="flex justify-between border-b border-border/50 py-2">
              <span>Ubicación</span><span className="text-foreground">Barranquilla, Colombia</span>
            </div>
            <div className="flex justify-between border-b border-border/50 py-2">
              <span>Especialidad</span><span className="text-foreground">Ecosistema Apple</span>
            </div>
            <div className="flex justify-between border-b border-border/50 py-2">
              <span>Cobertura</span><span className="text-foreground">Toda Colombia</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl border border-border/60 bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-500"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "0 0 50px -15px hsl(var(--accent)/0.4)" }} />
              <p.icon className="text-primary mb-5" size={28} strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
