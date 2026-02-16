"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section className="w-full bg-neutral py-24 lg:py-32 overflow-hidden relative">
      
      {/* Background Image with Overlay for high-end cinematic feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/OurVison.png"
          alt="Vision background"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient mask to ensure text readability and 2026 "Deep" look */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] relative z-10">
        <div className="flex flex-col gap-8 max-w-[900px]">
          
          {/* Section Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-[1px] bg-brand-orange" />
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.4em]">The Vision</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-h2 md:text-[3.5rem] text-white font-bold leading-tight"
          >
            Our Vision
          </motion.h2>

          {/* The Vision Statement - Styled for maximum impact */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-h3 md:text-[2.5rem] text-white leading-[1.3] font-medium tracking-tight"
          >
            “Our vision is to become the <span className="text-brand-orange italic">preferred</span> freight and transit partner in the sub-region and beyond, providing a <span className="underline underline-offset-8 decoration-brand-orange/40">seamless experience</span> for our clients.”
          </motion.p>
          
          {/* Subtle accent for "at a glance" understanding */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="mt-4 text-white/50 text-small uppercase tracking-widest font-mono"
          >
            Est. Future Horizon // Sub-Region & Beyond
          </motion.div>

        </div>
      </div>
      
      {/* Aesthetic Side Border */}
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange/50" />
    </section>
  );
}