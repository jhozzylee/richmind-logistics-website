"use client";

import Image from "next/image";

export default function GlobalNetwork() {
  const partners = [
    { src: "/images/Maersk.png", alt: "Maersk" },
    { src: "/images/Ocean_one.png", alt: "Ocean One" },
    { src: "/images/MSC.png", alt: "MSC" },
    { src: "/images/Hapag-Lloyd.png", alt: "Hapag-Lloyd" },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-surface flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center gap-8">
        {/* Title */}
        <h3 className="text-h4 md:text-h3 text-neutral text-center">
          Our Global Network.
        </h3>

        {/* Logos Container */}
        <div className="flex flex-row flex-nowrap items-center justify-center 
                        gap-4 sm:gap-10 md:gap-20 w-full px-2">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-1 flex justify-center items-center min-w-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={60}
                /* h-6 on mobile, scaling up to h-12 on large screens */
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}