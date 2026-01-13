import Image from "next/image";
import type { Metadata } from "next";

/* Import Tracking components */
import Tracking from "@/components/Tracking";
import GlobalReach from "@/components/GlobalReach";

export const metadata: Metadata = {
  title: "Shipment Tracking | Richmind Logistics",
  description:
    "Track your shipments in real-time with Richmind Logistics. Get accurate, timely updates on your freight and logistics deliveries worldwide.",
  openGraph: {
    title: "Shipment Tracking | Richmind Logistics",
    description:
      "Monitor and manage your shipments with real-time tracking and reliable logistics solutions from Richmind Logistics.",
    url: "https://richmindlogistics.com/tracking",
    siteName: "Richmind Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Shipment Tracking",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipment Tracking | Richmind Logistics",
    description:
      "Monitor your shipments with real-time tracking and reliable logistics services from Richmind Logistics.",
    images: ["/og-image.jpg"],
  },
};

export default function TrackingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/AboutBackground.webp"
          alt="Richmind Logistics shipment tracking background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <Tracking />
      <GlobalReach />
    </div>
  );
}
