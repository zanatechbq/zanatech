import React from "react";
import { MessageCircle, Zap, Globe } from "lucide-react";

export default function Chatbot() {
  return (
    <section id="chatbot" className="relative py-28 lg:py-36 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="font-mono-data text-xs text-primary">// CHATBOT</span>
            <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3">
              Atención instantánea con nuestro <span className="font-bold">chat en vivo</span>.
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Resolvemos tus dudas en segundos: disponibilidad, stock, planes de crédito y promociones en Barranquilla.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573016958201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3.5 rounded-full hover:shadow-[0_0_40px_-6px_hsl(var(--accent)/0.8)] transition-shadow"
              >
                <MessageCircle size={18} /> Chatear por WhatsApp
              </a>
              <a
                href="https://zanatech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground border border-border rounded-full px-5 py-3 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Globe size={18} /> Visitar zanatech.com
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/80 p-10">
            <div className="flex items-center gap-4 mb-6">
              <Zap size={28} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Chat 24/7</p>
                <h3 className="font-display font-bold text-2xl mt-2">Comentarios en vivo</h3>
              </div>
            </div>
            <div className="space-y-4 text-sm text-foreground font-mono-data">
              <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <p className="text-muted-foreground">"Me asesoraron con el plan retoma y ahora tengo mi iPhone 14"</p>
                <p className="mt-2 font-bold">- Laura G.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <p className="text-muted-foreground">"Excelente atención y garantía real en mi MacBook."</p>
                <p className="mt-2 font-bold">- Juan P.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
