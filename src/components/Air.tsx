"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  Plane, 
  Ship, 
  Globe, 
  Eye, 
  ArrowDownUp 
} from "lucide-react";
import Button from "@/components/Button";

export default function AirSeaFreightServicePage() {
  const steps = [
    {
      title: "High-Priority Air Freight Services",
      icon: <Plane size={24} />,
      content: "When speed is the priority, our air freight solutions deliver the fastest transit times through Tier-1 global carriers. We ensure urgent shipments get the earliest possible departures.",
      bullets: ["Expedited & Next-Flight-Out", "High-Value Cargo Handling", "Global Airport Hub Access"]
    },
    {
      title: "Strategic Sea Freight & Ocean Logistics",
      icon: <Ship size={24} />,
      content: "For large-scale and bulk cargo, ocean freight offers unmatched scalability. We manage everything from dedicated full containers to shared cost-effective solutions.",
      bullets: ["FCL (Full Container Load)", "LCL (Less than Container Load)", "Intermodal Port Coordination"]
    },
    {
      title: "Integrated Global Compliance",
      icon: <Globe size={24} />,
      content: "International freight is governed by complex maritime and aviation laws. We handle the preparation of all primary transport documents and provide expert Incoterms® advisory.",
      bullets: ["AWB & Bill of Lading Management", "Incoterms® Risk Advisory", "Terminal & Port Management"]
    },
    {
      title: "End-to-End Visibility & Tracking",
      icon: <Eye size={24} />,
      content: "Distance should never reduce transparency. We provide real-time insight into your shipment’s global journey with live monitoring across international air and sea routes.",
      bullets: ["Vessel & Flight Live Tracking", "Automated Milestone Alerts", "Transparency-First Reporting"]
    },
    {
      title: "Freight Consolidation & Optimization",
      icon: <ArrowDownUp size={24} />,
      content: "We don't just move cargo—we optimize it. By grouping shipments and selecting optimal lanes, we balance speed and spend to improve your bottom line.",
      bullets: ["Bulk Rate Consolidation", "Lane & Route Analysis", "Carrier Performance Audits"]
    }
  ];

  return (
    <section className="w-full">
      {/* --- HERO SUB-SECTION --- */}
      <div className="w-full bg-neutral/10 pt-32 pb-20 lg:pt-48 lg:pb-32 mb-16 lg:mb-24">
        <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 border border-brand-orange/30 rounded-full px-4 py-2 bg-brand-orange/5 mb-8">
              <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.3em]">Core Service</span>
            </div>
            <h1 className="text-h1 md:text-[4rem] text-white font-bold leading-tight mb-8">
              Global <span className="text-brand-orange italic font-medium">Air & Sea</span> Freight
            </h1>
            <p className="text-large text-white/60 leading-relaxed">
              In an interconnected economy, moving goods across borders with speed and cost-efficiency is essential. 
              At <strong className="text-white">Richmind Logistics</strong>, we deliver a multi-modal strategy that bridges continents.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1680px] bg-surface pt-24 pb-24 lg:pb-32 px-[clamp(1.5rem,8vw,11.5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- LEFT: THE ROADMAP --- */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-6 md:gap-10 p-8 rounded-[2rem] border border-surface-shade hover:border-brand-orange/20 transition-colors group"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                  {idx !== steps.length - 1 && <div className="w-px h-full bg-surface-shade mt-4" />}
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-brand-orange text-small-bold uppercase tracking-widest">Phase 0{idx + 1}</span>
                  <h3 className="text-h3 text-neutral font-bold">{step.title}</h3>
                  <p className="text-reg text-surface-muted leading-relaxed">{step.content}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-small text-neutral/80">
                        <CheckCircle2 size={16} className="text-brand-orange" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- RIGHT: THE WHY & CTA --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit flex flex-col gap-8">
            <div className="bg-neutral p-10 rounded-[2.5rem] text-white">
              <h3 className="text-h4 font-bold mb-8">Why Richmind Freight?</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Tier-1 Access", d: "Priority space with top-tier global carriers." },
                  { t: "Multi-Modal", d: "Hybrid strategies that balance speed and cost." },
                  { t: "Zero-Gaps Security", d: "Professional lashing & cargo protection." },
                  { t: "Global Network", d: "On-ground specialists at ports worldwide." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-1 group">
                    <span className="text-brand-orange font-bold flex items-center gap-2">
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      {item.t}
                    </span>
                    <span className="text-small text-white/40">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-orange p-10 rounded-[2.5rem] text-white flex flex-col gap-6">
              <h4 className="text-h4 font-bold leading-tight">Moving high-volume or time-sensitive cargo?</h4>
              <p className="text-small text-white/80">Get a competitive quote for your next international shipment today.</p>
              <Button variant="secondary">
                Request Freight Quote
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}