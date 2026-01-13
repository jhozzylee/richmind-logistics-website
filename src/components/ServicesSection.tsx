"use client";

import React from "react";

export default function Services() {
  const services = [
    {
      title: "Import",
      text: "Efficient handling of goods coming into your country, ensuring timely delivery and smooth customs processing.",
      icon: "/icons/Import.svg",
    },
    {
      title: "Export",
      text: "Seamless export of cargo across borders with full documentation and regulatory compliance.",
      icon: "/icons/Export.svg",
    },
    {
      title: "Transit",
      text: "Reliable transportation solutions connecting your shipments from origin to destination on time.",
      icon: "/icons/Transit.svg",
    },
    {
      title: "Warehousing",
      text: "Secure, organized storage solutions with real-time inventory management and easy access.",
      icon: "/icons/Warehousing.svg",
    },
    {
      title: "Air / Sea Freight",
      text: "Flexible shipping options via sea and air to move cargo efficiently across global routes.",
      icon: "/icons/Airplane.svg",
    },
    {
      title: "Customs Clearance",
      text: "Expert handling of all customs documentation and compliance requirements to prevent delays.",
      icon: "/icons/Customs.svg",
    },
  ];

  return (
    <section className="w-full bg-surface-shade py-16 lg:py-24">
      <div
        className="
          mx-auto
          max-w-[1680px]
          px-[clamp(1.5rem,8vw,11.5rem)]
        "
      >
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-3 border border-brand-orange rounded-full px-4 py-1.5 bg-brand-orange/5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-small-bold text-brand-orange uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="text-h2 text-neutral">
            Our Logistics Services
          </h2>

          <p className="text-reg text-neutral max-w-prose">
            Smart, scalable logistics services built to support seamless cargo
            movement worldwide.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-surface
                rounded-2xl
                p-7
                md:p-8
                flex
                flex-col
                gap-4
                border
                border-surface-shade
                shadow-sm
                hover:shadow-md
                transition-shadow
              "
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center">
                <div
                  className="w-8 h-8 bg-white"
                  style={{
                    maskImage: `url(${service.icon})`,
                    WebkitMaskImage: `url(${service.icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 text-neutral">
                  {service.title}
                </h3>
                <p className="text-reg text-neutral/70 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
