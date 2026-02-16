"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function LegacyCTA() {
  return (
    <section className="w-full py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        <div className="relative w-full p-12 lg:p-24 overflow-hidden">
          
          {/* BACKGROUND DECOR: Gradient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center gap-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <ShieldCheck size={16} className="text-brand-orange" />
              <span className="text-xsmall-bold text-white/80 uppercase tracking-widest">Global Trust Guarantee</span>
            </motion.div>

            <h3 className="text-h2 md:text-[3.5rem] leading-[1.1] text-white max-w-[800px] font-bold">
              A Legacy Built on <br />
              <span className="text-brand-orange italic font-medium">Trust and Movement</span>
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/contact?intent=start">
                <Button 
                  variant="primary" 
                  className="px-10 py-5 rounded-full text-large-bold flex items-center gap-3 group transition-transform hover:scale-105"
                >
                  Start Shipping Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Sub-text stats or reassurance */}
            <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/40 text-xsmall-bold uppercase tracking-[0.2em]">
               <span>Reliable Transit</span>
               <span className="w-1 h-1 rounded-full bg-white/20 my-auto" />
               <span>Expert Handling</span>
               <span className="w-1 h-1 rounded-full bg-white/20 my-auto" />
               <span>24/7 Monitoring</span>
            </div>

          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

      </div>
    </section>
  );
}