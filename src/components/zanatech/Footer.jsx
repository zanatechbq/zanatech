import React from "react";
import { Instagram, MapPin, Clock, Globe, MessageCircle, ArrowUp, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-border/60 pt-24 pb-10 overflow-hidden">
      <div className="absolute -top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand + CTA */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight leading-tight">
              ¿Listo para tu <span className="font-bold text-glow">próximo equipo?</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-sm">
              Escríbenos por WhatsApp y te asesoramos en tiempo real. Respuesta rápida desde Barranquilla.
            </p>
            <a
              href="https://wa.me/573016958201"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3.5 rounded-full hover:shadow-[0_0_40px_-6px_hsl(var(--accent)/0.8)] transition-shadow"
            >
              <MessageCircle size={18} /> Escríbenos por WhatsApp
            </a>
          </div>

          {/* Location / hours / contact */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8 font-mono-data text-xs">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin size={14} /> UBICACIÓN
              </div>
              <p className="text-foreground leading-relaxed">
                Barranquilla<br />Atlántico, Colombia
              </p>
              <div className="mt-4 h-24 rounded-lg border border-border/60 overflow-hidden bg-card/40 grid-lines opacity-60">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/60 text-[10px]">
                  BARRANQUILLA
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Clock size={14} /> HORARIO
              </div>
              <div className="space-y-1.5 text-foreground">
                <div className="flex justify-between border-b border-border/50 pb-1.5"><span>Lun–Vie</span><span>10am–7pm</span></div>
                <div className="flex justify-between border-b border-border/50 pb-1.5"><span>Sábado</span><span>10am–6pm</span></div>
                <div className="flex justify-between"><span>Domingo</span><span>Cerrado</span></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MessageCircle size={14} /> CONTACTO
              </div>
              <a href="https://www.instagram.com/zanatech_bq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-2">
                <Instagram size={14} /> Instagram @zanatech_bq
              </a>
              <a href="https://www.tiktok.com/@zanatech95?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-2">
                <Music size={14} /> TikTok @zanatech95
              </a>
              <a href="https://wa.me/573016958201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-2">
                <MessageCircle size={14} /> WhatsApp 301 695 8201
              </a>
              <a href="https://zanatech.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-2">
                <Globe size={14} /> zanatech.com
              </a>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Soporte técnico y asesoría sin costo por chat.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg">
            <span className="gold-text gold-glow">ZANA</span><span className="text-foreground/80">TECH</span>
            <span className="font-mono-data text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-2">BQ</span>
          </div>
          <p className="font-mono-data text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} ZANATECH · BARRANQUILLA, COLOMBIA · TODOS LOS DERECHOS RESERVADOS
          </p>
          <a href="#inicio" className="inline-flex items-center gap-2 font-mono-data text-[10px] text-muted-foreground hover:text-foreground transition-colors">
            VOLVER ARRIBA <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
