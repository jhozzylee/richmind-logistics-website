"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="w-full bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          
          {/* -------- TEXT CONTENT -------- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              {/* Refined Pill */}
              <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 w-fit bg-brand-orange/5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Our Heritage</span>
              </div>

              <h2 className="text-h2 md:text-[3.5rem] text-neutral font-bold leading-none">
                Who We <span className="text-brand-orange italic font-medium">Are.</span>
              </h2>

              <div className="flex flex-col gap-6 text-large text-surface-muted leading-relaxed max-w-prose">
                <p>
                  Richmind Logistics was founded with a clear purpose — to simplify complex freight forwarding 
                  and deliver excellence to our domestic and regional clients. From local cargo movement to 
                  international freight operations, we have built our company around efficiency, compliance, 
                  and consistency.
                </p>

                <p className="border-l-4 border-brand-orange/20 pl-6 py-2 bg-surface-dim/30 rounded-r-xl">
                  We specialize in import, export, haulage, transit, warehousing, sea and air freight, 
                  and customs clearance. Our operations are supported by structured processes and 
                  industry expertise.
                </p>

                <p>
                  At Richmind Logistics, we believe in precision, accountability, and long-term partnerships. 
                  Every shipment we handle is approached with attention to detail, clear communication, 
                  and a commitment to delivering excellence at every mile.
                </p>
              </div>
            </motion.div>
          </div>

          {/* -------- VISUAL COMPOSITION -------- */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-full min-h-[500px] w-full group"
            >
              {/* Decorative Frame Background */}
              <div className="absolute -inset-4 border border-surface-shade rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              
              <Image
                src="/images/Who_We_Are.png"
                alt="About Richmind Logistics"
                fill
                className="object-cover rounded-[2rem] shadow-2xl z-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            

              {/* Top Right Accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}