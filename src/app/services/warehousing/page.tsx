import Image from "next/image";
import type { Metadata } from "next";

/* Import Warehousing-specific components */
import WarehousingServicePage from "@/components/Warehousing";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Warehousing Services",
  description:
    "Secure and efficient warehousing solutions by Richmind Logistics, designed to protect, manage, and streamline your inventory.",
  openGraph: {
    title: "Warehousing Services | Richmind Logistics",
    description:
      "Reliable warehousing and storage solutions built to support modern supply chain operations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Warehousing Services",
      },
    ],
  },
};

export default function WarehousingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics warehouse storage and inventory management"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <WarehousingServicePage />
      <Testimonials />
      <CTA />
    </div>
  );
}
