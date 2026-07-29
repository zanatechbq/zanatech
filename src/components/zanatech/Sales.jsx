import React from "react";
import { motion } from "framer-motion";
import { Headphones, Plug2, Phone, Laptop2, Tablet, ShieldCheck } from "lucide-react";

const sales = [
  { title: "Accesorios", icon: Plug2, description: "Cargadores, forros y más." },
  { title: "Cargadores", icon: Plug2, description: "Originales y compatibles." },
  { title: "Audífonos AirPods", icon: Headphones, description: "Inalámbricos y de alta fidelidad." },
  { title: "Cables", icon: Phone, description: "Lightning, USB-C y adaptadores." },
  { title: "Forros de lujo", icon: ShieldCheck, description: "Estilo premium para tu equipo." },
  { title: "iPhone", icon: Phone, description: "Modelos nuevos, caja abierta y usados." },
];

const showcase = [
  { title: "Mac", subtitle: "Nuevos y de exhibición" },
  { title: "iPad", subtitle: "Nuevos y de exhibición" },
];

export default function Sales() {
  return (
    <section id="ventas" className="relative py-28 lg:py-36 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="font-mono-data text-xs text-primary">// VENTAS</span>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3">
            Todo para tu experiencia <span className="font-bold">Apple</span>.
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Los mejores accesorios y equipos de exhibición para que renueves tu estilo con seguridad y respaldo local.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sales.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-3xl border border-border/60 bg-card/80 p-7"
            >
              <item.icon size={28} className="text-primary mb-4" />
              <h3 className="font-display font-bold text-2xl">{item.title}</h3>
              <p className="font-body text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {showcase.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-3xl border border-border/60 bg-card/80 p-8"
            >
              <p className="text-xs text-primary uppercase tracking-[0.3em]">Exhibición</p>
              <h3 className="font-display font-bold text-4xl mt-3">{item.title}</h3>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">Equipos nuevos y de exhibición con garantía y revisión técnica completa.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
