"use client";

import Button from "@/components/Button";

export default function ServicesHero() {
  return (
    <section className="w-full py-20 lg:py-[160px]">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <h2 className="text-h2 text-surface-dim max-w-[702px]">
        Comprehensive Logistics Solutions
        </h2>
        <p className="max-w-[664px] text-surface text-reg sm:text-large leading-relaxed">
        Reliable, efficient, and compliant logistics services designed to support seamless 
        cargo movement across local and international markets.
        </p>

      </div>
    </section>
  );
}
