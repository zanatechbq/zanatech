import React from "react";
import { motion } from "framer-motion";
import { Instagram, Star } from "lucide-react";
import { Image } from "@/components/ui/image";

const feed = [
  "https://media.base44.com/images/public/6a651a5562d99d58d5b58f1c/a66af5dcd_generated_5b49b219.png",
  "https://media.base44.com/images/public/6a651a5562d99d58d5b58f1c/24484cb49_generated_ea8a1590.png",
  "https://media.base44.com/images/public/6a651a5562d99d58d5b58f1c/a6dd00f68_generated_b91a6bc6.png",
  "https://media.base44.com/images/public/6a651a5562d99d58d5b58f1c/aa0da4630_generated_ab41b263.png",
  "https://media.base44.com/images/public/6a651a5562d99d58d5b58f1c/9c5f4a9b3_generated_e38baaa6.png",
  "https://media.base44.com/images/public/6a651a5562d99d58d5b58f1c/2e86f2214_generated_68704eb5.png",
];

export default function SocialProof() {
  return (
    <section id="social" className="relative py-28 lg:py-36 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex justify-end">
          <a
            href="https://www.instagram.com/zanatech_bq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={18} /> @zanatech_bq
          </a>
        </div>
      </div>

      {/* Marquee feed */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-5 animate-marquee w-max">
          {[...feed, ...feed].map((src, i) => (
            <div key={i} className="relative w-64 h-64 shrink-0 rounded-2xl overflow-hidden border border-border/60 group">
              <Image src={src} alt={`ZanaTech feed ${i}`} fittingType="fill" className="w-full h-full power-on" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 font-mono-data text-[10px] text-foreground/80">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={10} className="fill-primary text-primary" />
                  ))}
                </div>
                <div className="mt-1">@zanatech_bq</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-10 mt-14 grid sm:grid-cols-3 gap-6"
      >
        {[
          { stat: "+5K", label: "Clientes atendidos" },
          { stat: "4.9★", label: "Calificación promedio" },
          { stat: "100%", label: "Equipos con garantía" },
        ].map((s) => (
          <div key={s.label} className="text-center sm:text-left border-l border-border pl-5">
            <div className="font-display font-bold text-4xl text-glow">{s.stat}</div>
            <div className="font-body text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
