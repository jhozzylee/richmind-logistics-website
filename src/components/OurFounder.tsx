"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap, Quote } from "lucide-react";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col gap-4 mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 w-fit bg-brand-orange/5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Leadership</span>
            </div>
            <h2 className="text-h2 md:text-[3.5rem] text-neutral font-bold leading-tight">
                Meet Our <span className="text-brand-orange italic font-medium">Founder</span>
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* -------- IMAGE SIDE (Sticky on Desktop) -------- */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <div className="relative group">
                {/* Decorative background element */}
                <div className="absolute -inset-4 bg-surface-shade rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl z-10 bg-neutral">
                    <Image
                        src="/images/Richmind_Founder.png"
                        alt="Francis Nyatepe-Attipoe - Managing Director"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    
                    {/* Floating Info Plate */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral to-transparent z-20">
                        <h3 className="text-white text-h3 font-bold">Francis Nyatepe-Attipoe</h3>
                        <p className="text-brand-orange text-reg font-medium uppercase tracking-widest">Managing Director</p>
                    </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-6 -right-6 z-30 bg-white shadow-xl p-5 rounded-2xl border border-surface-shade hidden md:block">
                    <p className="text-neutral font-bold text-h4 leading-none">20+</p>
                    <p className="text-surface-muted text-[10px] uppercase font-bold tracking-tighter">Years of Expertise</p>
                </div>
            </div>
          </div>

          {/* -------- CONTENT SIDE -------- */}
          <div className="w-full lg:w-[55%] flex flex-col gap-10">
            
            {/* 1. MAIN BIO */}
            <div className="flex flex-col gap-6">
                <p className="text-large text-neutral leading-relaxed">
                    Francis Nyatepe-Attipoe is a seasoned expert in logistics and maritime operations. 
                    He is the Managing Director of <span className="text-brand-orange font-bold">Richmind Logistics Limited</span>, 
                    a prominent customs house brokerage and freight forwarding agency; providing reliable and 
                    efficient haulage solutions to clients across borders, particularly francophone West Africa.
                </p>
                <p className="text-reg text-surface-muted leading-relaxed">
                    With over 20 years of experience, Francis is a respected authority in Ghana's logistics 
                    and maritime industry.
                </p>
            </div>

            {/* 2. EXPERTISE & LEADERSHIP CARDS (Bento Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-dim/40 p-8 rounded-[2rem] border border-surface-shade/50 flex flex-col gap-4">
                    <ShieldCheck className="text-brand-orange" size={32} />
                    <h4 className="text-h4 font-bold text-neutral">Expertise</h4>
                    <p className="text-small text-surface-muted">
                        Covers Customs procedures, international freight management, port operations, and industry advocacy.
                    </p>
                </div>

                <div className="bg-neutral p-8 rounded-[2rem] flex flex-col gap-4">
                    <Award className="text-brand-orange" size={32} />
                    <h4 className="text-h4 font-bold text-white">Leadership</h4>
                    <p className="text-small text-white/60">
                        President of the <span className="text-white font-bold">Freight Forwarders Association of Ghana (FFAG)</span>.
                    </p>
                </div>
            </div>

            {/* 3. DETAILED CONTENT */}
            <div className="flex flex-col gap-8">
                <div className="flex gap-4 p-6 bg-brand-orange/5 rounded-2xl border-l-4 border-brand-orange">
                    <Quote className="text-brand-orange shrink-0" size={24} />
                    <p className="text-reg italic text-neutral">
                        Francis fosters high standards in freight forwarding through advocacy, training, and research, promoting efficient international trade in Ghana.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-h4 font-bold text-neutral flex items-center gap-2">
                        <Zap size={20} className="text-brand-orange" />
                        Thought Leadership
                    </h4>
                    <p className="text-reg text-surface-muted leading-relaxed">
                        Francis is a prominent thought leader and a highly respected voice in the industry, 
                        contributing to discourse and advocating improvements in trade facilitation and port management. 
                        His insights are highly sought after by policymakers and regulators.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}