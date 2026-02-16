"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Calculator, 
  FastForward, 
  Stethoscope, 
  History 
} from "lucide-react";
import Button from "@/components/Button";

export default function CustomsClearanceServicePage() {
  const steps = [
    {
      title: "Precision Documentation & Classification",
      icon: <FileText size={24} />,
      content: "The difference between smooth delivery and a multi-week delay is often a single line of text. We take the technical burden off your shoulders by managing HS codes and accuracy audits.",
      bullets: ["HS Code Optimization", "Accuracy Audits", "Electronic Data Interchange (EDI)"]
    },
    {
      title: "Duty & Tax Management",
      icon: <Calculator size={24} />,
      content: "We don’t just clear your goods; we protect your bottom line. We leverage trade agreements and tariff engineering to ensure you pay the legal minimum in duties.",
      bullets: ["Tariff Engineering", "FTA Leveraging", "Duty Drawback assistance"]
    },
    {
      title: "Pre-Clearance & Rapid Processing",
      icon: <FastForward size={24} />,
      content: "Why wait for arrival? Our proactive strategies keep your supply chain moving by initiating the clearance process while your cargo is still in transit.",
      bullets: ["Arrival Pre-filing", "Port & Border Liaison", "Real-time query resolution"]
    },
    {
      title: "Specialized Regulatory Support",
      icon: <Stethoscope size={24} />,
      content: "Some cargo requires special handling. We manage regulatory complexities for food, high-tech electronics, and dangerous goods with specialized documentation.",
      bullets: ["Agricultural Health Compliance", "Export Controls", "Hazardous Material Safety"]
    },
    {
      title: "Post-Entry Audit & Reporting",
      icon: <History size={24} />,
      content: "Our job continues after the gate opens. We provide a digital trail and secure archives that protect your business during future audits and changing trade laws.",
      bullets: ["Digital Record Keeping", "Compliance Consulting", "Trade Law Updates"]
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
              Strategic <span className="text-brand-orange italic font-medium">Customs</span> Brokerage
            </h1>
            <p className="text-large text-white/60 leading-relaxed">
              International borders shouldn’t be a barrier to your business. At <strong className="text-white">Richmind Logistics</strong>, 
              we act as your expert liaison with authorities to ensure seamless, compliant passage for every shipment.
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
              <h3 className="text-h4 font-bold mb-8">Why Richmind Compliance?</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Zero-Tolerance", d: "Industry-leading accuracy to prevent fines." },
                  { t: "Financial Advocacy", d: "Paying only the legal minimum in duties." },
                  { t: "Local Knowledge", d: "Bypassing local bottlenecks worldwide." },
                  { t: "Stress Reduction", d: "We handle the regulatory heavy lifting." }
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
              <h4 className="text-h4 font-bold leading-tight">Navigating complex trade regulations?</h4>
              <p className="text-small text-white/80">Our brokerage experts are ready to ensure your goods move without friction.</p>
              <Button variant="secondary">
                Request Clearance
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}