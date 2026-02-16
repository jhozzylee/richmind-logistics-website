"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Anchor, ShieldCheck, BarChart3, Truck, Factory } from "lucide-react";
import Button from "@/components/Button";

export default function ImportServicePage() {
  const steps = [
    {
      title: "Proactive Vendor Coordination",
      icon: <Factory size={24} />,
      content: "We act as your “boots on the ground,” communicating directly with your vendors to verify production timelines, ensure international packaging standards, and validate shipping marks to prevent arrival errors.",
      bullets: ["Verify production timelines", "Packaging compliance", "Label validation"]
    },
    {
      title: "Customs Compliance & Documentation",
      icon: <ShieldCheck size={24} />,
      content: "Minor paperwork errors lead to costly fees. Our experts manage HS code classification, meticulous document preparation, and pre-clearance to accelerate release upon arrival.",
      bullets: ["HS Code Classification", "Document Preparation", "Pre-Clearance initiation"]
    },
    {
      title: "End-to-End Visibility",
      icon: <BarChart3 size={24} />,
      content: "Information is as vital as cargo. We provide transparent supply chain windows with automated milestone tracking and direct access to dedicated logistics specialists.",
      bullets: ["Milestone Tracking", "Real-Time Intelligence", "Dedicated Support"]
    },
    {
      title: "Strategic Risk Mitigation",
      icon: <Anchor size={24} />,
      content: "We anticipate disruptions like port congestion or weather variables through route optimization and robust contingency planning to keep your supply chain moving.",
      bullets: ["Route Optimization", "Contingency Planning", "Disruption Management"]
    },
    {
      title: "Seamless Final Mile Delivery",
      icon: <Truck size={24} />,
      content: "The journey ends only at your door. We oversee drayage, transloading, and delivery coordination aligned specifically with your staffing and storage capacity.",
      bullets: ["Drayage & Transloading", "Last-Mile Scheduling", "Condition Monitoring"]
    }
  ];

  return (
    <section className="w-full ">
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
              Global <span className="text-brand-orange italic font-medium">Importation</span> Solutions
            </h1>
            <p className="text-large text-white/60 leading-relaxed">
              Navigating the complexities of international trade requires more than just transport; 
              it requires a strategic partner. At <strong className="text-white">Richmind Logistics</strong>, 
              we provide a seamless bridge between global suppliers and local destinations.
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
              <h3 className="text-h4 font-bold mb-8">Why Richmind?</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Tailored Solutions", d: "Custom workflows for your volume." },
                  { t: "Proven Reliability", d: "On-time, in-full track record." },
                  { t: "Cost-Efficiency", d: "Optimized duty & route management." },
                  { t: "Scalable Infra", d: "Infrastructure that grows with you." }
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
              <h4 className="text-h4 font-bold leading-tight">Ready to streamline your imports?</h4>
              <p className="text-small text-white/80">Speak with an import specialist today for a custom consultation.</p>
              <Button variant="secondary">
                Request a Quote
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}