"use client";

import React from "react";
import Image from "next/image";

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
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-neutral">Meet Our Team</h2>
        </div>

        {/* ================= TEAM GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="w-full max-w-[304px] bg-surface border border-neutral pb-6 rounded-2xl flex flex-col items-center text-center group"
            >
              {/* IMAGE CONTAINER */}
              <div className="w-full mx-auto text-center overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={304}
                  height={400}
                  className="
                  w-fill
                  h-auto
                  object-cover 
                  rounded-t-2xl
                  transition-all 
                  duration-300"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-1">
                <h4 className="text-h4 text-neutral">
                  {member.name}
                </h4>
                <p className="text-xSmall text-surface-muted font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}