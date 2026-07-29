import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { formatCOP } from "@/lib/products";

const conditionStyles = {
  Nuevo: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "Caja Abierta": "text-primary border-primary/30 bg-primary/10",
  Usado: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

export default function ProductCard({ product, index }) {
  return (
    <motion.a
      href={`https://wa.me/573016958201?text=${encodeURIComponent(`Hola ZanaTech, me interesa el ${product.name} (${product.color}, ${product.storage})`)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
      className={`group relative block rounded-2xl overflow-hidden border border-border/60 bg-card/40 hover:border-primary/40 transition-colors duration-500 ${product.span}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fittingType="fill"
          className="w-full h-full power-on"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />

        {/* Condition pill */}
        <span
          className={`absolute top-4 left-4 inline-flex items-center gap-1.5 font-mono-data text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border backdrop-blur-md ${
            conditionStyles[product.condition] || conditionStyles.Nuevo
          }`}
        >
          <span className="w-1 h-1 rounded-full bg-current" />
          {product.condition}
        </span>

        {/* Quick-spec overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-background/80 backdrop-blur-md border border-border/60 rounded-xl p-3 font-mono-data text-[11px] text-muted-foreground grid grid-cols-3 gap-2">
            <div>
              <div className="text-[9px] text-muted-foreground/60">RAM</div>
              <div className="text-foreground">{product.specs.ram}</div>
            </div>
            <div>
              <div className="text-[9px] text-muted-foreground/60">BATERÍA</div>
              <div className="text-foreground">{product.specs.battery}</div>
            </div>
            <div>
              <div className="text-[9px] text-muted-foreground/60">CHIP</div>
              <div className="text-foreground">{product.specs.chip}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-body text-xs text-muted-foreground mt-1">
            {product.color} · {product.storage}
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono-data text-base text-foreground">{formatCOP(product.price)}</div>
        </div>
      </div>
    </motion.a>
  );
}
