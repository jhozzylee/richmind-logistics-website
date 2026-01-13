import Image from "next/image";
import type { Metadata } from "next";

/* Import your Services-specific components */
import ServicesHero from "@/components/ServicesHero";
import Service from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Richmind Logistics’ professional logistics, freight, and supply chain services designed to move your business forward efficiently and securely.",
  openGraph: {
    title: "Our Services | Richmind Logistics",
    description:
      "Professional logistics, freight, and supply chain solutions built for efficiency, reliability, and growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics service operations and supply chain management"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <ServicesHero />
      <Service />
      <OurProcess />
      <Testimonials />
      <CTA />
    </div>
  );
}
