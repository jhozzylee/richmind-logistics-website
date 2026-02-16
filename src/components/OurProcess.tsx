"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    {
      title: "Request a Quote",
      description: "Submit your shipment details and receive a tailored logistics plan that fits your needs.",
      image: "/images/Step01.png",
    },
    {
      title: "Customs & Documentation",
      description: "We handle all paperwork, regulatory compliance, and customs clearance to ensure smooth transit.",
      image: "/images/Step02.png",
    },
    {
      title: "Transit & Tracking",
      description: "Your cargo moves securely via land, sea, or air, while being monitored in real-time.",
      image: "/images/Step03.png",
    },
    {
      title: "Final Delivery",
      description: "Shipments reach their destination safely, on time, and with full confirmation.",
      image: "/images/Step04.png",
    },
  ];

  return (
    <section className="w-full bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 bg-brand-orange/5">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Workflow</span>
          </div>
          <h2 className="text-h2 md:text-[3.5rem] text-neutral font-bold leading-none">
            Our Shipping <span className="text-brand-orange italic">Lifecycle</span>
          </h2>
        </div>

        {/* ================= VERTICAL ROADMAP ================= */}
        <div className="relative">
          {/* THE TRACK (Central Line) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-dashed-gradient md:-translate-x-1/2 opacity-20" 
               style={{ backgroundImage: 'linear-gradient(to bottom, #385D76 50%, transparent 50%)', backgroundSize: '2px 20px' }} 
          />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* STEP INDICATOR (The Dot) */}
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-white border-4 border-brand-orange rounded-full md:-translate-x-1/2 z-20 shadow-xl flex items-center justify-center font-bold text-brand-orange text-sm">
                  {index + 1}
                </div>

                {/* CONTENT SIDE */}
                <div className="flex-1 w-full pl-16 md:pl-0 text-left md:text-right">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    <h3 className="text-h3 text-neutral mb-3">{step.title}</h3>
                    <p className="text-reg text-surface-muted max-w-md leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="flex-1 w-full pl-16 md:pl-0 flex justify-start md:justify-center">
                   <div className="relative group">
                      {/* Decorative Background Blob */}
                      <div className="absolute inset-0 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-colors" />
                      
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={320}
                        height={240}
                        className="relative z-10 w-full max-w-[320px] h-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}