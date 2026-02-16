"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurValue() {
  const values = [
    {
      title: "Reliability",
      text: "Delivering excellence, every mile",
      icon: "/icons/Reliability.svg",
    },
    {
      title: "Integrity",
      text: "Compliance & transparency",
      icon: "/icons/Integrity.svg",
    },
    {
      title: "Partnership",
      text: "Trusted partnerships",
      icon: "/icons/Partnership.svg",
    },
    {
      title: "Efficiency",
      text: "Streamlined processes",
      icon: "/icons/Efficient.svg",
    },
  ];

  return (
    <section className="w-full bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 bg-brand-orange/5">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Our DNA</span>
          </div>
          
          <h2 className="text-h2 md:text-[3rem] text-neutral font-bold leading-none">
            Our <span className="text-brand-orange italic font-medium">Values</span>
          </h2>

          <p className="text-large text-surface-muted max-w-[600px]">
            Smart, scalable logistics services built to support seamless cargo movement worldwide.
          </p>
        </div>

        {/* ================= VALUES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                group relative bg-surface-dim/30 rounded-[2rem] p-10
                flex flex-col items-center text-center gap-8
                border border-surface-shade/50 hover:border-brand-orange/20
                transition-all duration-500 hover:bg-white hover:shadow-2xl
              "
            >
              {/* ICON CONTAINER */}
              <div className="relative">
                {/* Decorative Back Glow */}
                <div className="absolute inset-0 bg-brand-orange blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                
                <div className="relative w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-surface-shade group-hover:bg-brand-orange transition-colors duration-500">
                  <div
                    className="w-10 h-10 bg-brand-orange group-hover:bg-white transition-colors duration-500"
                    style={{
                      maskImage: `url(${service.icon})`,
                      WebkitMaskImage: `url(${service.icon})`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-3">
                <h3 className="text-h4 font-bold text-neutral group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-reg text-surface-muted leading-relaxed">
                  {service.text}
                </p>
              </div>

              {/* Subtle Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-orange group-hover:w-1/3 transition-all duration-500 rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}