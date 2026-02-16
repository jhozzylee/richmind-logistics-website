"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Import",
      text: "Efficient handling of goods coming into your country, ensuring timely delivery and smooth customs processing.",
      icon: "/icons/Import.svg",
    },
    {
      title: "Export",
      text: "Seamless export of cargo across borders with full documentation and regulatory compliance.",
      icon: "/icons/Export.svg",
    },
    {
      title: "Transit",
      text: "Reliable transportation solutions connecting your shipments from origin to destination on time.",
      icon: "/icons/Transit.svg",
    },
    {
      title: "Warehousing",
      text: "Secure, organized storage solutions with real-time inventory management and easy access.",
      icon: "/icons/Warehousing.svg",
    },
    {
      title: "Air / Sea Freight",
      text: "Flexible shipping options via sea and air to move cargo efficiently across global routes.",
      icon: "/icons/Airplane.svg",
    },
    {
      title: "Customs Clearance",
      text: "Expert handling of all customs documentation and compliance requirements to prevent delays.",
      icon: "/icons/Customs.svg",
    },
  ];

  return (
    <section className="w-full bg-surface-shade py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-3 border border-brand-orange/30 rounded-full px-4 py-2 bg-brand-orange/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h2 className="text-h2 md:text-[3rem] leading-tight text-neutral font-bold">
            Logistics Services <span className="text-brand-orange font-medium italic">Redefined.</span>
          </h2>
          <p className="text-large text-surface-muted max-w-prose">
            Smart, scalable logistics services built to support worldwide cargo movement.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              // willChange: transform prevents the browser from recalculating layout on hover
              style={{ willChange: "transform" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="
                group relative bg-white rounded-[2.5rem] p-10 flex flex-col gap-6 
                border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]
                hover:border-brand-orange/10
                transition-shadow transition-colors duration-300
              "
            >
              {/* ICON BLOCK */}
              <div className="relative w-16 h-16 pointer-events-none">
                <div className="absolute inset-0 bg-brand-orange rounded-2xl rotate-6 opacity-10 group-hover:rotate-12 group-hover:opacity-20 transition-all duration-300" />
                <div className="relative w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/10">
                  <div
                    className="w-8 h-8 bg-white"
                    style={{
                      maskImage: `url(${service.icon})`,
                      WebkitMaskImage: `url(${service.icon})`,
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain",
                    }}
                  />
                </div>
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-col gap-3 pointer-events-none">
                <h3 className="text-h3 text-neutral group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-reg text-surface-muted leading-relaxed">
                  {service.text}
                </p>
              </div>

              {/* DECORATIVE LINE */}
              <div className="mt-4 w-12 h-1 bg-surface-shade rounded-full group-hover:w-full group-hover:bg-brand-orange/20 transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}