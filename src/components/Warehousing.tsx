"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  MonitorSmartphone, 
  Boxes, 
  TrendingUp, 
  ClipboardCheck 
} from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

export default function WarehousingServicePage() {
  const steps = [
    {
      title: "Secure, State-of-the-Art Facilities",
      icon: <ShieldCheck size={24} />,
      content: "Your inventory is a significant investment. We protect it with 24/7 CCTV surveillance, motion sensors, and climate-controlled environments for sensitive goods.",
      bullets: ["24/7 Continuous Monitoring", "Climate-Controlled Options", "Modern Fire Suppression"]
    },
    {
      title: "Intelligent Inventory Management (WMS)",
      icon: <MonitorSmartphone size={24} />,
      content: "We eliminate storage blind spots through a robust Warehouse Management System, providing real-time tracking of stock levels, locations, and movement history.",
      bullets: ["Real-Time Stock Tracking", "SKU-Level Accuracy", "Automated Reorder Alerts"]
    },
    {
      title: "Agile Distribution & Fulfillment",
      icon: <Boxes size={24} />,
      content: "Our fulfillment workflows are optimized for speed. From pick-and-pack to cross-docking, we ensure goods move from inbound to outbound with minimal friction.",
      bullets: ["Pick-and-Pack Services", "Kitting & Labeling", "Cost-Saving Cross-Docking"]
    },
    {
      title: "Scalable Capacity for Growth",
      icon: <TrendingUp size={24} />,
      content: "Inventory demand fluctuates. Our model scales with your business without long-term lease commitments, allowing you to pay only for the space you use.",
      bullets: ["Flexible Footprint", "Seasonal Peak Management", "No Long-Term Commitments"]
    },
    {
      title: "Asset Protection & Quality Control",
      icon: <ClipboardCheck size={24} />,
      content: "We handle your goods with absolute accountability. Our team performs rigorous inbound inspections and regular cycle counting to ensure system accuracy.",
      bullets: ["Rigorous Inbound Inspection", "Regular Cycle Counting", "Damaged Cargo Mitigation"]
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
              Warehousing & <span className="text-brand-orange italic font-medium">Inventory</span> Management
            </h1>
            <p className="text-large text-white/60 leading-relaxed">
              A warehouse should be a catalyst for business growth. At <strong className="text-white">Richmind Logistics</strong>, 
              we combine secure physical infrastructure with digital intelligence to manage your inventory with precision.
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
              <h3 className="text-h4 font-bold mb-8">Why Richmind Storage?</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Strategic Hubs", d: "Facilities near major transport points." },
                  { t: "Tech-Driven", d: "WMS technology that improves turnaround." },
                  { t: "Reduced Overhead", d: "Eliminate warehouse rent & staffing costs." },
                  { t: "Full Integration", d: "Seamless link with Import/Export services." }
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
              <h4 className="text-h4 font-bold leading-tight">Need a smarter way to manage inventory?</h4>
              <p className="text-small text-white/80">Let us help you optimize your storage and fulfillment workflows today.</p>
              
              <Link href="/contact">
              <Button variant="secondary">
                Inquire About Storage
              </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}