"use client";

import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Service() {
  const services = [
    { title: "Import", text: "We provide end-to-end oversight for inbound shipments, handling everything from vendor coordination to final delivery. Our team proactively manages customs documentation.", icon: "/icons/Import.svg" },
    { title: "Export", text: "We simplify international shipping by managing the entire export lifecycle with precision. Our team ensures every shipment meets strict global compliance standards.", icon: "/icons/Export.svg" },
    { title: "Transit", text: "Experience seamless regional connectivity with transit services that prioritize both cargo integrity and delivery speed. We move shipments across borders safely.", icon: "/icons/Transit.svg" },
    { title: "Warehousing", text: "We offer scalable warehousing services designed to simplify inventory management and protect your assets with secure storage and optimized distribution.", icon: "/icons/Warehousing.svg" },
    { title: "Air / Sea Freight", text: "Connect to any destination worldwide through our scalable air and sea freight options. We provide dependable routing and expert handling for modern commerce.", icon: "/icons/Airplane.svg" },
    { title: "Customs Clearance", text: "Our expert team navigates intricate customs regulations to provide a seamless experience, minimizing risk and ensuring shipments move without interruption.", icon: "/icons/Customs.svg" },
  ];

  const toSlug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 bg-brand-orange/5 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">
              Our Expertise
            </span>
          </div>

          <h2 className="text-h2 md:text-[3.2rem] leading-tight text-neutral">
            Comprehensive <span className="text-brand-orange italic">Logistics Solutions</span>
          </h2>

          <p className="text-large text-surface-muted max-w-prose">
            Smart, scalable logistics services built to support seamless cargo
            movement worldwide.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface-dim/30 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center border border-transparent hover:border-brand-orange/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              {/* ICON CONTAINER */}
              <div className="mb-8 relative">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center group-hover:bg-brand-orange group-hover:rotate-6 transition-all duration-500">
                  <div
                    className="w-10 h-10 bg-brand-orange group-hover:bg-white transition-colors duration-500"
                    style={{
                      maskImage: `url(${service.icon})`,
                      WebkitMaskImage: `url(${service.icon})`,
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain",
                    }}
                  />
                </div>
                {/* Decorative glow behind icon on hover */}
                <div className="absolute inset-0 bg-brand-orange/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-h3 text-neutral group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-reg text-surface-muted leading-relaxed line-clamp-4">
                  {service.text}
                </p>
              </div>

              {/* ACTION BUTTON */}
              <Link href={`/services/${toSlug(service.title)}`} className="w-full mt-auto">
                <Button 
                  variant="secondary" 
                  className="w-full border-surface-shade group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-300"
                >
                  Explore Service
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}