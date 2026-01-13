import Image from "next/image";
import type { Metadata } from "next";

/* Import Air/Sea Freight components */
import AirSeaFreightServicePage from "@/components/Air";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Air & Sea Freight Services",
  description:
    "Reliable air and sea freight solutions by Richmind Logistics, ensuring timely, secure, and efficient delivery worldwide.",
  openGraph: {
    title: "Air & Sea Freight | Richmind Logistics",
    description:
      "Professional air and sea freight services designed to move goods safely and on time across the globe.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Air and Sea Freight Services",
      },
    ],
  },
};

export default function AirPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics air and sea freight operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <AirSeaFreightServicePage />
      <Testimonials />
      <CTA />
    </div>
  );
}
