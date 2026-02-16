"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#EB5E28" : "none"}
    stroke={filled ? "#EB5E28" : "#EB5E28"}
    strokeWidth="2"
    className="transition-colors duration-300"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: "Peter",
      comment: "Richmind Logistics handled our import shipments seamlessly. Their customs process was smooth, and deliveries arrived on time as promised.",
      rating: 4,
      image: "/images/client1.png",
    },
    {
      name: "John",
      comment: "From documentation to final delivery, the team was professional and responsive. We trust Richmind Logistics with our international shipments.",
      rating: 5,
      image: "/images/client2.png",
    },
    {
      name: "Konate",
      comment: "Reliable service, clear communication, and efficient handling of our cargo. Richmind Logistics has become a dependable logistics partner for us.",
      rating: 4,
      image: "/images/client3.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] flex flex-col px-[clamp(1.5rem,8vw,11.5rem)]">

        {/* ================= HEADER ================= */}
        <div className="max-w-[700px] mx-auto text-center flex flex-col gap-6 mb-20">
          <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 mx-auto bg-brand-orange/5 shadow-sm">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange font-bold uppercase tracking-[0.2em]">Testimonial</span>
          </div>
          
          <h2 className="text-h2 md:text-[3.2rem] text-neutral font-bold leading-tight">
            Trusted by Businesses for <br />
            <span className="text-brand-orange italic">Reliable Logistics</span>
          </h2>
          
          <p className="text-large text-surface-muted max-w-prose mx-auto">
            Our clients rely on us to handle their shipments with care, efficiency, and professionalism.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div 
          className="
            flex overflow-x-auto snap-x snap-mandatory no-scrollbar
            lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none
            gap-8
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                min-w-[85vw] sm:min-w-[45vw] lg:min-w-0
                snap-center
                bg-surface-dim/40
                border border-surface-shade/50
                rounded-[2.5rem]
                p-10
                flex flex-col
                gap-8
                hover:bg-white
                hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]
                hover:border-brand-orange/10
                transition-all duration-500
                group
              "
            >
              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < item.rating} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-large text-neutral leading-relaxed italic">
                “{item.comment}”
              </p>

              {/* User Identity Section */}
              <div className="flex items-center gap-5 pt-8 border-t border-surface-shade/30 mt-auto">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-brand-orange/10 border-2 border-white">
                   <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-h4 text-neutral font-bold group-hover:text-brand-orange transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="text-xsmall-bold text-surface-muted uppercase tracking-wider">
                    Verified Client
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE HINT */}
        <div className="lg:hidden text-center text-surface-muted/40 text-[10px] uppercase font-bold tracking-widest mt-8 animate-pulse">
           ← Swipe to explore →
        </div>

      </div>
    </section>
  );
}