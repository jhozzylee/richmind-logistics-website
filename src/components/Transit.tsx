"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  Lock, 
  Navigation, 
  Radio, 
  Clock 
} from "lucide-react";
import Button from "@/components/Button";

export default function TransitServicePage() {
  const steps = [
    {
      title: "Data-Driven Route Optimization",
      icon: <Navigation size={24} />,
      content: "Efficient transit is about selecting the smartest path. We monitor road conditions, port congestion, and border wait times to ensure fuel and time efficiency.",
      bullets: ["Infrastructure analysis", "Fuel & time efficiency", "Mileage reduction"]
    },
    {
      title: "Cross-Border Coordination",
      icon: <Lock size={24} />,
      content: "Moving cargo across regions requires precision. We facilitate bonded transit under customs bond and ensure full compliance with regional transport laws.",
      bullets: ["Bonded Transit solutions", "Regulatory alignment", "Safety permit management"]
    },
    {
      title: "Cargo Integrity & Custody",
      icon: <MapPin size={24} />,
      content: "Every movement introduces risk. We eliminate uncertainty through supervised transloading and high-spec vehicles equipped for high-value or oversized cargo.",
      bullets: ["Secure Transloading", "Advanced securing systems", "Documented chain of custody"]
    },
    {
      title: "Real-Time Telematics",
      icon: <Radio size={24} />,
      content: "Visibility is essential for control. Our framework includes GPS-enabled 24/7 monitoring and proactive alerts with revised ETAs if disruptions occur.",
      bullets: ["24/7 GPS Monitoring", "High-frequency updates", "Proactive delay alerts"]
    },
    {
      title: "Flexible & Scalable Scheduling",
      icon: <Clock size={24} />,
      content: "Our transit solutions adapt to your business rhythms. We provide Just-In-Time (JIT) delivery and expedited options for your time-critical shipments.",
      bullets: ["Just-In-Time (JIT) delivery", "Expedited transport", "Demand-aligned scheduling"]
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
              Seamless <span className="text-brand-orange italic font-medium">Transit</span> Services
            </h1>
            <p className="text-large text-white/60 leading-relaxed">
              Transit is the critical link in the supply chain. At <strong className="text-white">Richmind Logistics</strong>, 
              we bridge the gap between origin and destination with maximum efficiency and security.
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
              <h3 className="text-h4 font-bold mb-8">Why Richmind Transit?</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Strategic Reach", d: "Strong relationships with regional hubs." },
                  { t: "Safety Culture", d: "Strict protocols and handling custody." },
                  { t: "Pressure Tested", d: "Proven contingency for disruptions." },
                  { t: "Cost Control", d: "Balancing speed with cost discipline." }
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
              <h4 className="text-h4 font-bold leading-tight">Need time-critical transit solutions?</h4>
              <p className="text-small text-white/80">Our logistics dispatchers are ready to optimize your route today.</p>
              <Button variant="secondary">
                Book Transit
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}