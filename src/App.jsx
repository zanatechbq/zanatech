import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import { products, formatCOP } from '@/lib/products';
import logo from '../Logos/ZANA_TECH_LOGO PNG.png';
// Add page imports here

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hola, soy ZANA IA. ¿En qué puedo ayudarte hoy?" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const addMessage = (from, text) => {
    setMessages((current) => [...current, { from, text }]);
  };

  const generateResponse = (question) => {
    const normalized = question.toLowerCase();

    const itemMatch = products.find((product) =>
      normalized.includes(product.name.toLowerCase()) || normalized.includes(product.id.toLowerCase())
    );

    if (itemMatch) {
      return `El ${itemMatch.name} está en categoría ${itemMatch.category}, color ${itemMatch.color}, almacenamiento ${itemMatch.storage}, condición ${itemMatch.condition} y precio ${formatCOP(itemMatch.price)}. Si quieres más detalles, dime.`;
    }

    const categoryMatch = products.reduce((acc, product) => {
      const key = product.category.toLowerCase();
      return { ...acc, [key]: true };
    }, {});

    if (normalized.includes("iphone")) {
      return "Tenemos varios iPhone disponibles: iPhone 15 Pro Max, iPhone 15 Pro, iPhone 14 Pro Max, iPhone 13 Pro Max, iPhone 12 Pro y iPhone SE 2022. Puedes ver los precios y condiciones en el catálogo.";
    }

    if (normalized.includes("ipad")) {
      return "El iPad Air 2024 está disponible en la categoría iPad con 128GB y chip M2. Revisa su precio en el catálogo.";
    }

    if (normalized.includes("macbook")) {
      return "Contamos con MacBook Air 2023 en la categoría MacBooks, con 256GB y chip M2. Consulta el catálogo para ver su precio exacto.";
    }

    if (normalized.includes("airpods") || normalized.includes("audífonos")) {
      return "Las AirPods Pro están disponibles, originales y nuevos. Puedes ver su precio y detalles en la sección AirPods del catálogo.";
    }

    if (normalized.includes("accesorios")) {
      return "Disponemos de accesorios Apple en categoría Accesorios. Verifica el catálogo para ver los productos disponibles y precios.";
    }

    if (normalized.includes("garant") || normalized.includes("garantia")) {
      return "Todos los equipos incluyen garantía. Si quieres saber cómo aplicar la garantía o qué cubre, pregúntame y te explico.";
    }

    if (normalized.includes("envío") || normalized.includes("envios") || normalized.includes("colombia")) {
      return "Realizamos envíos a todo Colombia desde Barranquilla. Podemos coordinar tu pedido por WhatsApp para enviarte el equipo.";
    }

    if (normalized.includes("whatsapp")) {
      return "Tenemos contacto directo por WhatsApp con atención inmediata. Usa el botón de WhatsApp en la página para escribirnos.";
    }

    if (normalized.includes("instagram") || normalized.includes("tiktok") || normalized.includes("redes")) {
      return "Nuestro perfil en Instagram y TikTok es @zanatech_bq. Ahí puedes ver novedades, precios y reseñas." ;
    }

    if (normalized.includes("barranquilla") || normalized.includes("ubicacion") || normalized.includes("ubicación")) {
      return "Estamos en Barranquilla y enviamos a todo Colombia. Puedes ver la ubicación en la sección de Ubicación de la página.";
    }

    const genericMatch = [
      { keys: ["precio", "precios"], answer: "Los precios dependen del modelo y condición. Pide el nombre del equipo exacto para darte el valor del catálogo." },
      { keys: ["crédito", "financ", "plan"], answer: "Ofrecemos financiamiento y planes de pago. Pregunta por las opciones de crédito o Plan Retoma." },
      { keys: ["disponibilidad", "stock", "hay"], answer: "Tenemos stock de varios equipos. Consulta un modelo específico y te digo si está disponible." },
    ];

    const generic = genericMatch.find((entry) => entry.keys.some((key) => normalized.includes(key)));
    if (generic) {
      return generic.answer;
    }

    return "Puedo responder sobre celulares, iPad, MacBooks, AirPods, accesorios, garantía, envíos y redes. Pregunta por un modelo o categoría específica.";
  };

  const handleSend = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;

    addMessage("user", trimmed);
    setChatInput("");

    setTimeout(() => {
      addMessage("bot", generateResponse(trimmed));
    }, 600);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
        <img src={logo} alt="ZanaTech logo" className="h-48 w-auto mb-10" />
        <div className="w-[260px] h-3 rounded-full border border-border/50 bg-border/30 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-white to-primary animate-iphone-load" />
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Add your page Route elements here */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <button
          type="button"
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-shadow"
        >
          <MessageSquare size={18} /> ZANA IA
        </button>

        {isChatOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/40 p-4 sm:items-center">
            <div className="w-full max-w-md rounded-3xl border border-border/60 bg-background shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between rounded-t-3xl border-b border-border/60 px-5 py-4 bg-slate-950/90">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">ZANA IA</p>
                  <p className="mt-1 text-sm text-muted-foreground">Asistente virtual</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="rounded-full border border-border/70 bg-card/90 p-2 text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              <div className="max-h-[460px] overflow-y-auto px-5 py-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.from === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                        message.from === "bot"
                          ? "bg-card border border-border/50 text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-b-3xl border-t border-border/60 bg-card/95 px-4 py-3">
                <div className="flex gap-3">
                  <input
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" && handleSend()}
                    placeholder="Escribe tu pregunta..."
                    className="min-w-0 flex-1 rounded-2xl border border-border/50 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    className="rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
