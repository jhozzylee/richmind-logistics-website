"use client";

import Image from "next/image";

export default function OurProcess() {
  const steps = [
    {
      title: "Request a Quote",
      description: "Submit your shipment details and receive a tailored logistics plan that fits your needs.",
      image: "/images/Step01.png",
    },
    {
      title: "Customs & Documentation",
      description: "We handle all paperwork, regulatory compliance, and customs clearance to ensure smooth transit.",
      image: "/images/Step02.png",
    },
    {
      title: "Transit & Tracking",
      description: "Your cargo moves securely via land, sea, or air, while being monitored in real-time throughout the journey.",
      image: "/images/Step03.png",
    },
    {
      title: "Final Delivery",
      description: "Shipments reach their destination safely, on time, and with full confirmation for your peace of mind.",
      image: "/images/Step04.png",
    },
  ];

  return (
    <section className="w-full bg-surface py-16 lg:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-1 border border-brand-orange rounded-full px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-brand-orange" />
            <span className="text-large text-brand-orange">Our Process</span>
          </div>

          <h3 className="text-h3 text-neutral">
            Turning Complex Shipping Into Seamless Logistics
          </h3>

          <p className="text-reg text-neutral">
            Our structured approach ensures every shipment moves efficiently,
            safely, and on time from origin to destination.
          </p>
        </div>

        {/* ================= STAIRS ================= */}
        <div className="mt-16 flex flex-col gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              /* - justify-center: Centers everything on Mobile AND iPad (up to 1280px)
                 - xl:justify-end: Switches to the right side ONLY on Large Desktops
              */
              className="w-full flex justify-center xl:justify-end"
              style={{
                /* transform is 0px by default for Mobile and iPad */
                transform: `translateX(var(--stair-shift-${index}, 0px))`,
              } as React.CSSProperties}
            >
              {/* Only activate the staircase shift on large desktop screens (1280px+) */}
              <style jsx>{`
                @media (min-width: 1280px) {
                  div {
                    --stair-shift-${index}: -${index * 18}%;
                  }
                }
              `}</style>

              <div className="max-w-[680px] w-full border-b border-brand-orange">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                  {/* TEXT */}
                  <div className="max-w-[400px] text-center md:text-right">
                    <h3 className="text-h3 text-neutral mb-4">
                      {step.title}
                    </h3>
                    <p className="text-reg text-neutral">
                      {step.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full max-w-[344px]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={278}
                      height={224}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}