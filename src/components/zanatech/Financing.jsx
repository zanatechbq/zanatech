import React from "react";
import { motion } from "framer-motion";
import { DollarSign, CreditCard, Banknote, ShieldCheck, Repeat, Phone } from "lucide-react";

const financings = [
  { title: "Créditos", label: "Crédito inmediato", icon: DollarSign },
  { title: "Addi", label: "Compra hoy, paga en cuotas", icon: CreditCard },
  { title: "Banco Bogotá", label: "Financiación bancaria segura", icon: Banknote },
  { title: "Sistecredito", label: "Aprobación rápida", icon: ShieldCheck },
  { title: "Sumaspay", label: "Cuotas flexibles", icon: Repeat },
  { title: "Payjoy", label: "Celulares pagando a plazo", icon: Phone },
  { title: "Plan Retoma", label: "Recibimos tu celular como forma de pago para tu nuevo dispositivo", icon: Repeat },
];

export default function Financing() {
  return (
    <section id="creditos" className="relative py-28 lg:py-36 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <span className="font-mono-data text-xs text-primary">// FINANCIAMIENTO</span>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3">
            Opciones de pago con <span className="font-bold">respaldo</span>.
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl">
            En ZanaTech Barranquilla aceptamos créditos y pagos en cuotas con las mejores plataformas. Si estás reportado o necesitas retomar tu equipo viejo, también tenemos soluciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {financings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative rounded-3xl border border-border/60 bg-card/70 p-7 hover:border-primary/40 hover:bg-card/80 transition-all"
            >
              <item.icon size={28} className="text-primary mb-4" />
              <h3 className="font-display font-bold text-xl">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-3">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
