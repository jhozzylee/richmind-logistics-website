"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Caleb Boafo",
      role: "Executive Assistant",
      image: "/images/Caleb.png",
    },
    {
      name: "Mary Smith",
      role: "Operations Manager",
      image: "/images/Mary.png",
    },
    {
      name: "Bright Mensah",
      role: "Logistics Coordinator",
      image: "/images/Bright.png",
    },
    {
      name: "Faith Doe",
      role: "Customs Specialist",
      image: "/images/Faith.png",
    },
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 bg-brand-orange/5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Our Experts</span>
          </div>
          <h2 className="text-h2 md:text-[3rem] text-neutral font-bold leading-none">
            Meet Our <span className="text-brand-orange italic font-medium">Team</span>
          </h2>
          <p className="text-large text-surface-muted max-w-[600px]">
            The dedicated professionals driving efficiency across every mile of your logistics journey.
          </p>
        </div>

        {/* ================= TEAM GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col gap-6"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-surface-dim shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-all 
                    duration-700
                    ease-out
                  "
                />
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-1 items-start pl-2">
                <h4 className="text-h4 font-bold text-neutral transition-colors duration-300 group-hover:text-brand-orange">
                  {member.name}
                </h4>
                   <p className="text-small-bold text-surface-muted uppercase tracking-wider">
                    {member.role}
                   </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}