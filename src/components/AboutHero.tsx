"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full py-24 lg:py-[180px] bg-neutral/20 overflow-hidden">
      
      {/* BACKGROUND DECOR: Geometric Tech Mesh */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#385D76_1px,transparent_1px),linear-gradient(to_bottom,#385D76_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 border border-brand-orange/30 rounded-full px-4 py-2 bg-brand-orange/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.3em]">Our Story</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-h1 md:text-[4.5rem] text-white max-w-[900px] font-bold leading-[1.05]"
          >
            Driven by <span className="text-brand-orange">Precision.</span> <br />
            Powered by <span className="italic font-medium text-white/90">Trust.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-[700px] text-white/60 text-reg sm:text-large leading-relaxed"
          >
            Richmind Logistics delivers reliable, compliant, and efficient logistics solutions for
            businesses operating locally and internationally. We don't just move cargo; we manage commitments.
          </motion.p>

          {/* Minimalist Stats Divider */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-4xl mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10"
          >
            {[
              { label: "Founded", val: "2018" },
              { label: "Global Reach", val: "150+ Countries" },
              { label: "Clearance Rate", val: "99.9%" },
              { label: "Support", val: "24/7" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-brand-orange text-h4 font-bold">{stat.val}</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Aesthetic Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
    </section>
  );
}