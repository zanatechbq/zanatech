import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageCircle, Music } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Inventario", href: "#inventario" },
  { label: "Créditos", href: "#creditos" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Garantía", href: "#garantia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="gold-text gold-glow">ZANA</span><span className="text-foreground/80">TECH</span>
            </span>
            <span className="font-mono-data text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-1">
              BQ
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/573016958201"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-4 py-2 rounded-full hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.7)] transition-shadow"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-2 text-foreground"
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col">
          <div className="h-20 flex items-center justify-between">
            <span className="font-display font-bold text-xl"><span className="gold-text">ZANA</span><span className="text-foreground/80">TECH</span></span>
            <button onClick={() => setOpen(false)} className="p-2 -mr-2" aria-label="Cerrar menú">
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display font-light text-5xl sm:text-7xl tracking-tight hover:text-primary transition-colors duration-300 py-2"
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="h-24 flex flex-col justify-between gap-3 border-t border-border py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/zanatech_bq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@zanatech95?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Music size={18} /> TikTok
                </a>
              </div>
              <a
                href="https://wa.me/573016958201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
            <span className="font-mono-data text-xs text-muted-foreground">Barranquilla · Colombia</span>
          </div>
        </div>
      </div>
    </>
  );
}
