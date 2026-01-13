"use client";

import Image from "next/image";

export default function OurVision() {
  return (
    <section className="w-full bg-surface-shade py-16 lg:py-24">
      <div
        className="
          mx-auto
          max-w-[1680px]
          px-[clamp(1.5rem,8vw,11.5rem)]
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            flex
            flex-col-reverse   /* Mobile: TEXT first, IMAGE after */
            lg:flex-row        /* Desktop: IMAGE left, TEXT right (unchanged) */
            items-stretch
            gap-10
            md:gap-8
            lg:gap-24
          "
        >
          {/* -------- IMAGE (LEFT on desktop) -------- */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px] w-full">
              <Image
                src="/images/OurVison.png"
                alt="About Richmind Logistics"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* -------- TEXT (RIGHT on desktop) -------- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            <h2 className="text-h2 text-neutral text-balance">
              Our Vision
            </h2>

            <p className="text-reg text-neutral max-w-prose">
              Our vision is to become the heartbeat of global trade—a trusted partner whose
              legacy is built on every promise kept and every border crossed. We strive to
              transform the complexity of logistics into a seamless experience of growth for
              our clients, fostering a future where supply chains are not just links in a chain,
              but bridges of opportunity.
            </p>

            <p className="text-reg text-neutral max-w-prose">
              To redefine the boundaries of global commerce by engineering a logistics ecosystem
              that is as fluid as it is formidable. We envision a world where geographical
              distance is no longer a barrier to ambition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
