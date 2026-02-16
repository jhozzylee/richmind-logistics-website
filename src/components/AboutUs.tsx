"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Globe, Heart } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { title: "50k+", text: "Successful Transportation", icon: <Trophy className="w-6 h-6" /> },
    { title: "25+", text: "Countries of Operation", icon: <Globe className="w-6 h-6" /> },
    { title: "98%", text: "Satisfaction Rate", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <section className="relative w-full bg-surface py-20 lg:py-32 overflow-hidden">
      
      {/* Decorative Background Text - Subtle depth */}
      <div className="absolute top-10 left-10 text-[12rem] font-black text-neutral/[0.02] select-none pointer-events-none uppercase">
        Richmind
      </div>

      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] relative z-10">
        
        {/* ================= TOP CONTENT ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* -------- TEXT (Left side) -------- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* The Beeping Pill */}
            <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 w-fit bg-brand-orange/5 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">About Us</span>
            </div>

            <h2 className="text-h2 md:text-[3.2rem] leading-[1.1] text-neutral">
              Turning Complex Shipping <br /> 
              <span className="text-brand-orange">Into Seamless Logistics.</span>
            </h2>

            <p className="text-large text-surface-muted max-w-xl leading-relaxed">
              At Richmind Logistics, we go beyond moving cargo. We deliver
              structured, reliable logistics solutions that help businesses
              navigate complex shipping requirements with confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {[
                "End-to-End Management",
                "Global Network Reach",
                "Reliable & Secure Ops",
                "Customs Handling",
                "Client-First Approach",
              ].map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-reg-bold text-neutral">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* -------- IMAGE (Right side) -------- */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-[4/3] w-full"
            >
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-orange/20 rounded-3xl -z-10 translate-x-2 translate-y-2" />
              
              <Image
                src="/images/About_Richmind.png"
                alt="About Richmind Logistics"
                fill
                className="object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Floating Image Label */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white">
                    <Globe size={20} />
                </div>
                <p className="text-xsmall-bold text-neutral uppercase">Global Ops Active</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM CARDS ================= */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
          {stats.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="flex flex-col gap-6 p-10 bg-surface-dim/50 border border-surface-shade rounded-[2.5rem] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-brand-orange/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                {card.icon}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[2.5rem] font-bold text-neutral leading-none tracking-tight">{card.title}</h3>
                <p className="text-reg text-surface-muted font-medium">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}