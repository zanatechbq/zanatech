import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/zanatech/Navbar";
import Hero from "@/components/zanatech/Hero";
import Inventory from "@/components/zanatech/Inventory";
import Financing from "@/components/zanatech/Financing";
import LocationMap from "@/components/zanatech/LocationMap";
import Guarantee from "@/components/zanatech/Guarantee";
import SocialProof from "@/components/zanatech/SocialProof";
import Footer from "@/components/zanatech/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-background min-h-screen"
    >
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Inventory />
        <Financing />
        <LocationMap />
        <Guarantee />
      </main>
      <Footer />
    </motion.div>
  );
}
