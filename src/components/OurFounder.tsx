"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* ===== SECTION HEADER ===== */}
        <h2 className="text-h2 text-neutral text-balance mb-8 lg:hidden">
          Meet Our Founder
        </h2>

        {/* ===== MOBILE IMAGE (comes right after header) ===== */}
        <div className="block lg:hidden mb-10">
          <Image
            src="/images/Richmind_Founder.png"
            alt="Francis Nyatepe-Attipoe - Founder"
            width={800}
            height={1000}
            className="rounded-2xl w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">

          {/* -------- TEXT -------- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            {/* Desktop-only heading */}
            <h2 className="hidden lg:block text-h2 text-neutral text-balance">
              Meet Our Founder
            </h2>

            <p className="text-reg text-neutral max-w-prose">
              Francis Nyatepe-Attipoe is a seasoned logistics professional and industry leader 
              with deep experience in freight forwarding, customs processes, and international 
              trade operations. With a career shaped by hands-on involvement in cargo movement, 
              regulatory coordination, and supply chain management, he founded Richmind Logistics 
              to address the growing need for reliable, transparent, and well-structured logistics 
              solutions.
            </p>

            <p className="text-reg text-neutral max-w-prose">
              Driven by a strong understanding of the challenges businesses face when moving goods 
              across borders, Francis built Richmind Logistics on a foundation of precision, compliance, 
              and accountability. His vision was clear from the start — to create a logistics company 
              that simplifies complex shipping processes while maintaining the highest standards of 
              professionalism and service delivery.
            </p>

            <p className="text-reg text-neutral max-w-prose">
              Beyond operations, Francis is widely recognized for his leadership within the logistics 
              and freight forwarding space. His engagement with industry stakeholders reflects a commitment 
              to strengthening logistics systems, improving regulatory alignment, and supporting sustainable 
              trade practices. This industry perspective continues to influence Richmind Logistics’ approach, 
              ensuring that every shipment is handled with strategic insight and operational discipline.
            </p>
            
            <p className="text-reg text-neutral max-w-prose">
              Under his leadership, Richmind Logistics has grown into a trusted partner for businesses seeking 
              dependable logistics support for both local and international operations. Francis remains actively 
              involved in shaping the company’s direction, fostering long-term client relationships, and ensuring 
              that Richmind Logistics consistently delivers solutions built on trust, efficiency, and integrity.
            </p>
          </div>

          {/* -------- DESKTOP IMAGE (sticky) -------- */}
          <div className="hidden lg:block w-full lg:w-1/2 sticky top-32">
            <Image
              src="/images/Richmind_Founder.png"
              alt="Francis Nyatepe-Attipoe - Founder"
              width={800}
              height={1000}
              className="rounded-2xl w-full h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
