"use client";

import React from "react";

export default function OurValue() {
  const services = [
    {
      title: "Reliability",
      text: "Delivering on time, every time",
      icon: "/icons/Reliability.svg",
    },
    {
      title: "Integrity",
      text: "Compliance & transparency",
      icon: "/icons/Integrity.svg",
    },
    {
      title: "Efficiency",
      text: "Streamlined processes",
      icon: "/icons/Efficient.svg",
    },
    {
      title: "Partnership",
      text: "Trusted partnerships",
      icon: "/icons/Partnership.svg",
    },
  ];

  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div
        className="
          mx-auto
          max-w-[1680px]
          px-[clamp(1.5rem,8vw,11.5rem)]
        "
      >
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-h2 text-neutral">
            Our Values
          </h2>

          <p className="text-reg text-neutral max-w-prose">
            Smart, scalable logistics services built to support seamless cargo movement worldwide.
          </p>
        </div>

        {/* ================= VALUES GRID (4 in a row) ================= */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
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
                items-center     /* Centered items horizontally */
                text-center      /* Centered text */
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