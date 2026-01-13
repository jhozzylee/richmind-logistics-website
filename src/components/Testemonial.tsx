"use client";

import Image from "next/image";

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    className={filled ? "text-brand-orange" : "text-brand-orange/40"}
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
    <section className="w-full bg-surface py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1680px] flex flex-col">

        {/* ================= HEADER ================= */}
        <div className="max-w-[640px] mx-auto text-center flex flex-col gap-6 px-[clamp(1.5rem,8vw,11.5rem)]">
          <div className="inline-flex items-center gap-3 border border-brand-orange rounded-full px-3 py-2 mx-auto">
            <span className="w-3 h-3 rounded-full bg-brand-orange" />
            <span className="text-large text-brand-orange font-bold uppercase tracking-wider">Testimonial</span>
          </div>
          <h3 className="text-h3 text-neutral">Trusted by Businesses for Reliable Logistics</h3>
          <p className="text-reg text-neutral/70">
            Our clients rely on us to handle their shipments with care, efficiency, and professionalism.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS (Slider on Mobile) ================= */}
        <div 
          className="
            mt-16
            /* Mobile: Flexbox with horizontal scroll and snapping */
            flex overflow-x-auto snap-x snap-mandatory scrollbar-hide
            /* Desktop: Revert to Grid */
            lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none
            gap-6 lg:gap-8
            px-[clamp(1.5rem,8vw,11.5rem)]
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                /* Slider Sizing: Ensure cards take full width on mobile minus padding */
                min-w-[85vw] sm:min-w-[45vw] lg:min-w-0
                snap-center
                
                bg-surface
                border border-surface-muted
                rounded-2xl
                p-8
                flex flex-col
                gap-6
              "
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < item.rating} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-reg text-neutral leading-relaxed">“{item.comment}”</p>

              {/* User */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12">
                   <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover border-2 border-brand-orange/10"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-h4 text-brand-orange font-bold">{item.name}</span>
                  <span className="text-[12px] text-neutral/50 uppercase tracking-tighter">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE HINT: Subtle instruction for mobile users */}
        <div className="lg:hidden text-center text-neutral/30 text-xsmall mt-2 animate-pulse">
           ← Swipe to see more →
        </div>

      </div>
    </section>
  );
}