import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Instagram, MessageCircle, Music } from "lucide-react";
import logo from "../../../Logos/ZANA_TECH_LOGO PNG.png";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[68vh] flex items-center overflow-hidden pt-16 pb-6">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute -top-1/4 right-0 w-[480px] h-[480px] rounded-full bg-primary/20 blur-[140px] animate-glow-pulse" />

      <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex justify-center mb-10">
          <img src={logo} alt="ZanaTech logo" className="h-52 w-auto max-w-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <span className="inline-flex items-center gap-2 font-mono-data text-xs text-primary border border-primary/30 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            BARRANQUILLA · ENVÍOS A TODO COLOMBIA
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-tight tracking-tight">
            iPhones premium con garantía clara.
          </h1>
          <p className="mt-4 font-body text-muted-foreground text-base max-w-full sm:max-w-xl mx-auto leading-relaxed">
            Equipos certificados, entrega nacional y atención directa por WhatsApp.
          </p>
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <a
                href="https://wa.me/573016958201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 w-full bg-primary text-primary-foreground font-body font-medium px-5 py-3 rounded-full hover:shadow-[0_0_40px_-6px_hsl(var(--accent)/0.8)] transition-shadow"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/zanatech_bq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 w-full border border-border/70 text-foreground font-body font-medium px-5 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@zanatech95?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 w-full border border-border/70 text-foreground font-body font-medium px-5 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Music size={18} /> TikTok
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-3 text-xs text-muted-foreground">
                <ShieldCheck size={14} /> GARANTÍA
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-3 text-xs text-muted-foreground">
                <Truck size={14} /> ENVÍOS A COLOMBIA
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono-data text-[10px] text-muted-foreground tracking-widest">
        SCROLL ↓
      </div>
    </section>
  );
}
