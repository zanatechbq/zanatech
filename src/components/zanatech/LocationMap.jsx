import React from "react";
import { MapPin, Compass, Globe, Link2 } from "lucide-react";

export default function LocationMap() {
  return (
    <section id="ubicacion" className="relative py-28 lg:py-36 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <span className="font-mono-data text-xs text-primary">// UBICACIÓN</span>
            <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3">
              Visítanos en <span className="font-bold">Barranquilla</span>.
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Centro de Barranquilla, frente a Fede Café, CC San Andresito El Pupi.
              Carrera 45B No. 34-35, Local 95.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-foreground font-mono-data">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10.979036,-74.802175"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-card/90 px-5 py-3 hover:border-primary/40 hover:bg-card/95 transition-colors"
              >
                <Globe size={16} /> Abrir en Google Maps
              </a>
              <a
                href="https://waze.com/ul?ll=10.979036,-74.802175&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-card/90 px-5 py-3 hover:border-primary/40 hover:bg-card/95 transition-colors"
              >
                <Compass size={16} /> Abrir en Waze
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/80 overflow-hidden">
            <div className="flex items-center gap-4 p-6 border-b border-border/60">
              <MapPin size={20} className="text-primary" />
              <div>
                <p className="font-body text-muted-foreground text-sm">Dirección</p>
                <p className="font-display font-bold text-lg">Cra 45B No. 34-35, Local 95</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <a href="https://wa.me/573016958201" target="_blank" rel="noopener noreferrer" className="text-foreground font-bold block mt-1">301 695 8201</a>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <p className="text-sm text-muted-foreground">Redes sociales</p>
                <div className="mt-2 space-y-2">
                  <a href="https://www.instagram.com/zanatech_bq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Link2 size={14} /> @zanatech_bq
                  </a>
                  <a href="https://www.tiktok.com/@zanatech95?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Link2 size={14} /> @zanatech95
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
