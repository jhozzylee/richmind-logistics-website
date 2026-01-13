"use client";

import Image from "next/image";

export default function AboutUs() {
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
              <span className="text-small-bold text-brand-orange uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-h2 text-neutral text-balance">
              Turning Complex Shipping Into Seamless Logistics.
            </h2>

            <p className="text-reg text-neutral max-w-prose">
              At Richmind Logistics, we go beyond moving cargo. We deliver
              structured, reliable logistics solutions that help businesses
              navigate complex shipping requirements with confidence.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                "End-to-End Logistics Management",
                "Local Expertise, Global Reach",
                "Reliable & Secure Operations",
                "Experienced Customs Handling",
                "Client-Focused Approach",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-neutral/10 text-neutral flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span className="text-reg text-neutral">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- IMAGE (Right side on Desktop) -------- */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px] w-full">
              <Image
                src="/images/About_Richmind.png"
                alt="About Richmind Logistics"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CARDS ================= */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "50k+", text: "Successful Transportation" },
            { title: "25+", text: "Countries of Operation" },
            { title: "98%", text: "Customer Satisfaction Rate" },
          ].map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-8 bg-white border border-surface-shade shadow-sm rounded-2xl hover:shadow-md transition-shadow"
            >
              <span className="shrink-0 w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-h3">
                ✓
              </span>

              <div className="flex flex-col">
                <h3 className="text-h3 text-neutral">{card.title}</h3>
                <p className="text-small text-surface-muted leading-tight">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}