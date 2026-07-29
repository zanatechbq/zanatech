import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

const filters = ["Todos", "Nuevo", "Caja Abierta", "Usado"];

export default function ProductGrid() {
  const [active, setActive] = useState("Todos");
  const list = active === "Todos" ? products : products.filter((p) => p.condition === active);

  return (
    <section id="catalogo" className="relative py-28 lg:py-40 hidden sm:block">
      <div className="absolute left-0 top-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono-data text-xs text-primary">// THE SPEC GALLERY</span>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3">
              Catálogo <span className="font-bold">precisión.</span>
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-md">
              Cada equipo pasa por diagnóstico técnico. Precios reales, sin publicidad engañosa.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-mono-data text-xs text-muted-foreground">
            ¿No encuentras tu modelo? Escríbenos por WhatsApp — lo conseguimos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
