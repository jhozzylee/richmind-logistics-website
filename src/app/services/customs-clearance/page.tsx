import Image from "next/image";
import type { Metadata } from "next";

/* Import Customs Clearance-specific components */
import CustomsClearanceServicePage from "@/components/CustomClearance";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Customs Clearance Services",
  description:
    "Professional customs clearance services by Richmind Logistics, ensuring compliance, accuracy, and fast processing of shipments.",
  openGraph: {
    title: "Customs Clearance | Richmind Logistics",
    description:
      "Expert customs clearance solutions designed to simplify international trade and reduce delays.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Customs Clearance Services",
      },
    ],
  },
};

export default function CustomsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ServiceBackground.webp"
          alt="Richmind Logistics customs clearance operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <CustomsClearanceServicePage />
      <Testimonials />
      <CTA />
    </div>
  );
}
