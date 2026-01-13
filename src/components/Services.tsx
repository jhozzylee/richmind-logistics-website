"use client";

import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

export default function Service() {
  const services = [
    { title: "Import", text: "We provide end-to-end oversight for inbound shipments, handling everything from vendor coordination to final delivery. Our team proactively manages customs documentation at every stage to eliminate delays and ensure your cargo remains on schedule.", icon: "/icons/Import.svg" },
    { title: "Export", text: "We simplify international shipping by managing the entire export lifecycle with precision and care. Our team ensures every shipment meets strict global compliance standards while providing the reliable handling necessary for secure, on-time delivery.", icon: "/icons/Export.svg" },
    { title: "Transit", text: "Experience seamless regional connectivity with transit services that prioritize both cargo integrity and delivery speed. We combine strategic routing with expert coordination to move your shipments across borders safely and with maximum efficiency.", icon: "/icons/Transit.svg" },
    { title: "Warehousing", text: "We offer scalable warehousing services designed to simplify inventory management and protect your assets. By combining secure storage with optimized distribution workflows, we provide the infrastructure needed to keep your products moving efficiently to market.", icon: "/icons/Warehousing.svg" },
    { title: "Air / Sea Freight", text: "Connect to any destination worldwide through our scalable air and sea freight options designed for modern commerce. We simplify global shipping by providing dependable routing and expert handling, ensuring your goods arrive on time regardless of the distance.", icon: "/icons/Airplane.svg" },
    { title: "Customs Clearance", text: "Our expert team navigates intricate customs regulations to provide a seamless clearing experience. By managing every documentation detail, we minimize risk and ensure your shipments move through borders without interruption.", icon: "/icons/Customs.svg" },
  ];

  // Function to convert title to slug
  const toSlug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
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
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                gap-5
                border
                border-surface-shade
                shadow-sm
                hover:shadow-md
                transition-shadow
                items-center
                text-center
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
                <h3 className="text-h3 text-neutral">{service.title}</h3>
                <p className="text-reg text-neutral/70 leading-relaxed">{service.text}</p>
              </div>

              {/* BUTTON */}
              <Link href={`/services/${toSlug(service.title)}`} className="w-full mt-auto">
                <Button variant="primary" className="w-full ">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
