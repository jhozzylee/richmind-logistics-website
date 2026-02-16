import Image from "next/image";
import type { Metadata } from "next";

/* Import Transit-specific components */
import TransitServicePage from "@/components/Transit";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Transit & Transportation Services",
  description:
    "Fast, reliable, and secure transit and transportation services by Richmind Logistics, ensuring timely delivery across all routes.",
  openGraph: {
    title: "Transit & Transportation | Richmind Logistics",
    description:
      "Efficient transit and transportation solutions designed to keep your goods moving safely and on time.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Transit and Transportation Services",
      },
    ],
  },
};

export default function TransitPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics transit and transportation operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <TransitServicePage />
      <Testimonials />
      <CTA />
    </div>
  );
}
