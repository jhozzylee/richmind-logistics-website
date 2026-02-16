"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative w-full py-24 lg:py-[180px] bg-neutral/10 overflow-hidden">
      
      {/* BACKGROUND DECOR: Animated Speed Lines & Grid */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#EB5E28_1px,transparent_1px),linear-gradient(to_bottom,#EB5E28_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral" />
      </div>

      {/* Decorative Light Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Status Label */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-white/80 uppercase tracking-[0.3em]">End-to-End Excellence</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-h1 md:text-[4.5rem] text-white font-bold leading-[1.1] max-w-[900px]"
          >
            Comprehensive <br />
            <span className="text-brand-orange italic font-medium">Logistics Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-[700px] text-white/60 text-reg sm:text-large leading-relaxed"
          >
            Reliable, efficient, and compliant logistics services designed to support seamless 
            cargo movement across local and international markets.
          </motion.p>

          {/* Scroll Indicator Accent */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Explore Services</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-brand-orange to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}