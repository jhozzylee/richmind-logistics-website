"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalNetwork() {
  const partners = [
    { src: "/images/Maersk.png", alt: "Maersk" },
    { src: "/images/Ocean_one.png", alt: "Ocean One" },
    { src: "/images/MSC.png", alt: "MSC" },
    { src: "/images/Hapag-Lloyd.png", alt: "Hapag-Lloyd" },
    // Duplicate for seamless loop
    { src: "/images/Maersk.png", alt: "Maersk" },
    { src: "/images/Ocean_one.png", alt: "Ocean One" },
  ];

  return (
    <section className="py-16 bg-surface border-y border-surface-shade overflow-hidden">
      <div className="max-w-[1680px] mx-auto flex flex-col items-center">
        
        {/* Subtle Heading */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-8 bg-surface-muted/30" />
          <h3 className="text-xsmall font-bold uppercase tracking-[0.2em] text-surface-muted">
            Global Strategic Partners
          </h3>
          <div className="h-[1px] w-8 bg-surface-muted/30" />
        </div>

        {/* Marquee Container */}
        <div className="relative w-full">
          {/* Gradient Masks (Fade edges) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div 
            className="flex flex-nowrap gap-16 md:gap-32 w-max px-4"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="group flex-shrink-0 flex justify-center items-center transition-all duration-500"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={140}
                  height={50}
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}