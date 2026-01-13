
"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div
        className="
          mx-auto
          max-w-[1680px]
          px-[clamp(1.5rem,8vw,11.5rem)]
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-8 lg:gap-24">
          
          {/* -------- TEXT (Left side on Desktop) -------- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            {/* Pill - Adjusted for better mobile/desktop balance */}
            <div className="inline-flex items-center gap-3 border border-brand-orange rounded-full px-4 py-1.5 w-fit bg-brand-orange/5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-small-bold text-brand-orange uppercase tracking-wider">Our Story</span>
            </div>

            <h2 className="text-h2 text-neutral text-balance">
            Who We are.
            </h2>

            <p className="text-reg text-neutral max-w-prose">
            Richmind Logistics was founded with a clear purpose — to simplify complex 
            logistics and provide businesses with a reliable partner they can trust. 
            From local cargo movement to international freight operations, we have 
            built our company around efficiency, compliance, and consistency.
            </p>

            <p className="text-reg text-neutral max-w-prose">
            We are a professional logistics company specializing in import, export, 
            transit, warehousing, sea and air freight, and customs clearance. Our 
            operations are supported by structured processes, industry expertise, 
            and a strong logistics network that enables us to manage shipments 
            seamlessly from origin to final delivery.
            </p>

            <p className="text-reg text-neutral max-w-prose">
            At Richmind Logistics, we believe logistics is more than moving goods. 
            It is about precision, accountability, and long-term partnership. 
            Every shipment we handle is approached with attention to detail, 
            clear communication, and a commitment to delivering on time and in full. 
            This mindset has allowed us to support businesses across multiple industries 
            while maintaining high service standards locally and internationally.
            </p>

          </div>

          {/* -------- IMAGE (Right side on Desktop) -------- */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px] w-full">
              <Image
                src="/images/Who_We_Are.png"
                alt="About Richmind Logistics"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}