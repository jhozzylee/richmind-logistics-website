import Image from "next/image";
import type { Metadata } from "next";

/* Import Import-specific components */
import ImportServicePage from "@/components/import";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Import & Customs Clearance Services",
  description:
    "Seamless import and customs clearance services by Richmind Logistics, ensuring compliance, speed, and secure handling of goods.",
  openGraph: {
    title: "Import Services | Richmind Logistics",
    description:
      "Reliable import and customs clearance solutions designed for smooth international trade.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Import and Customs Services",
      },
    ],
  },
};

export default function ImportPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics import and customs clearance operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <ImportServicePage />
      <Testimonials />
      <CTA />
    </div>
  );
}
