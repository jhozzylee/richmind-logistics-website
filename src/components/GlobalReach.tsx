"use client";

import Image from "next/image";

export default function GlobalReach() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div
        className="
          mx-auto
          max-w-[1680px]
          px-[clamp(1.5rem,8vw,11.5rem)]
          flex flex-col items-center text-center gap-6 lg:gap-8
        "
      >

        {/* Heading */}
        <h3 className="text-h3 text-neutral">
          Global Reach, Local Strength
        </h3>

        {/* Description */}
        <p className="max-w-[640px] text-reg text-neutral">
          Our logistics network combines strong local operations with
          international shipping capabilities to ensure your cargo moves
          efficiently and securely anywhere in the world.
        </p>

        {/* Map */}
        <div className="mt-12 w-full flex justify-center">
          <Image
            src="/images/Global-map.png"
            alt="Global logistics network map"
            width={1312}
            height={718}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
