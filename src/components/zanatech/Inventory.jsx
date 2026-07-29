import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

const categories = [
  { title: "Celulares", key: "Celulares" },
  { title: "iPad", key: "iPad" },
  { title: "MacBooks", key: "MacBooks" },
  { title: "AirPods", key: "AirPods" },
  { title: "Accesorios", key: "Accesorios" },
];

export default function Inventory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const mobileItems = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <section id="inventario" className="relative py-24 lg:py-36 border-t border-border/40">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 text-center">
          <span className="font-mono-data text-xs text-primary">// CATÁLOGO</span>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mt-3">
            Elige tu categoría y revisa los modelos disponibles.
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            En celular selecciona primero la pestaña que quieras: Celulares, iPad, MacBooks o AirPods.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setSelectedCategory(category.key)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                      selectedCategory === category.key
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/80 text-foreground border border-border/50"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
                {selectedCategory && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(null)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium bg-card/90 text-foreground border border-border/50 hover:bg-card"
                  >
                    Ocultar pestaña
                  </button>
                )}
              </div>
            </div>

            {selectedCategory ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-3xl">{selectedCategory}</h3>
                    <p className="font-body text-muted-foreground text-sm mt-1">
                      {mobileItems.length} modelos disponibles.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {mobileItems.map((product, itemIndex) => (
                    <ProductCard key={product.id} product={product} index={itemIndex} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-border/50 bg-card/90 p-6 text-center text-sm text-muted-foreground">
                Selecciona una categoría para ver los productos.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
