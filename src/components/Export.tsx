"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  PlaneTakeoff, 
  ShieldAlert, 
  PackageCheck, 
  Zap, 
  FileSearch 
} from "lucide-react";
import Button from "@/components/Button";

export default function ExportServicePage() {
  const steps = [
    {
      title: "Full-Lifecycle Export Coordination",
      icon: <PlaneTakeoff size={24} />,
      content: "We take ownership of the export process from the moment a purchase order is placed, managing the intricate logistics 'handshakes' required to move goods from your facility to global clients.",
      bullets: ["Inland Drayage coordination", "Strategic Freight Booking", "Intermodal transport flexibility"]
    },
    {
      title: "Regulatory Expertise & Compliance",
      icon: <FileSearch size={24} />,
      content: "Navigating international trade laws is complex. We act as your compliance shield, managing AES/EEI filings and providing Incoterms® guidance to minimize risk.",
      bullets: ["AES / EEI Filings", "Export Licensing assistance", "Incoterms® Risk Management"]
    },
    {
      title: "Premium Cargo Protection",
      icon: <PackageCheck size={24} />,
      content: "We ensure your cargo arrives in the same condition it left. Our solutions include export-grade crating and professional load supervision to prevent transit damage.",
      bullets: ["Specialized Crating", "Load & Balance Supervision", "Comprehensive Insurance options"]
    },
    {
      title: "Optimized Speed-to-Market",
      icon: <Zap size={24} />,
      content: "In a global economy, speed is a competitive advantage. We leverage direct routing and carrier diversification to reduce transshipment delays and accelerate departures.",
      bullets: ["Direct Routing strategies", "Carrier Diversification", "Reduced transshipment points"]
    },
    {
      title: "Transparent Reporting & Milestones",
      icon: <CheckCircle2 size={24} />,
      content: "Accurate data keeps your customers confident. We provide real-time updates from 'Loaded on Board' to final arrival, with full digital access to all shipping documents.",
      bullets: ["Real-time status notifications", "Digital Document Portal", "Arrival confirmation"]
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
              Global <span className="text-brand-orange italic font-medium">Exportation</span> Solutions
            </h1>
            <p className="text-large text-white/60 leading-relaxed">
              Expanding into international markets is a major milestone. At <strong className="text-white">Richmind Logistics</strong>, 
              we turn the complexity of global distribution into a competitive advantage for your brand.
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
              <h3 className="text-h4 font-bold mb-8">Why Richmind Export?</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Global Reach", d: "Deep destination knowledge via our agent network." },
                  { t: "Compliance-First", d: "Rigorous attention to trade laws & documentation." },
                  { t: "Operational Efficiency", d: "We function as your outsourced export dept." },
                  { t: "Brand Integrity", d: "Reflecting your standards in every shipment." }
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
              <h4 className="text-h4 font-bold leading-tight">Ready to expand your global footprint?</h4>
              <p className="text-small text-white/80">Speak with an export strategist today to optimize your distribution.</p>
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