import Image from "next/image";
import type { Metadata } from "next";

/* Import Export-specific components */
import ExportServicePage from "@/components/Export";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Export & International Shipping Services",
  description:
    "Reliable export and international shipping services by Richmind Logistics, ensuring smooth cross-border delivery and compliance.",
  openGraph: {
    title: "Export Services | Richmind Logistics",
    description:
      "Professional export and international shipping solutions built for global trade success.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Export and International Shipping Services",
      },
    ],
  },
};

export default function ExportPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics export and international shipping operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <ExportServicePage />
      <Testimonials />
      <CTA />
    </div>
  );
}
