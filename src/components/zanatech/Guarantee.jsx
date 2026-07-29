import React from "react";
import { ShieldCheck, Key, Sparkles } from "lucide-react";

export default function Guarantee() {
  return (
    <section id="garantia" className="relative py-28 lg:py-36 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="font-mono-data text-xs text-primary">// GARANTÍA</span>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3">
            Confianza total con <span className="font-bold">ZanaTech</span>.
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Garantías claras y cobertura real para tus dispositivos Apple. Respaldo local en Barranquilla para compras y servicio técnico.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-border/60 bg-card/70 p-8 text-center">
            <ShieldCheck size={32} className="mx-auto text-primary" />
            <h3 className="font-display font-bold text-2xl mt-6">4 meses</h3>
            <p className="font-body text-muted-foreground mt-3">Garantía por defecto de fábrica en todos los equipos.</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/70 p-8 text-center">
            <Key size={32} className="mx-auto text-primary" />
            <h3 className="font-display font-bold text-2xl mt-6">IMEI de por vida</h3>
            <p className="font-body text-muted-foreground mt-3">Control y respaldo permanente de tu equipo con nuestra garantía técnica.</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/70 p-8 text-center">
            <Sparkles size={32} className="mx-auto text-primary" />
            <h3 className="font-display font-bold text-2xl mt-6">Servicio local</h3>
            <p className="font-body text-muted-foreground mt-3">Atención en vivo, asesoría y soporte desde Barranquilla.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
