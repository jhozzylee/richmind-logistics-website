import Image from "next/image";
import type { Metadata } from "next";

/* Import components */
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testemonial";

export const metadata: Metadata = {
  metadataBase: new URL("https://richmindlogistics.com"), // fixes OG warning
  title: "Contact Us | Richmind Logistics",
  description:
    "Get in touch with Richmind Logistics for freight, logistics, and supply chain inquiries.",
  openGraph: {
    title: "Contact Us | Richmind Logistics",
    description:
      "Reach out to Richmind Logistics for reliable logistics and freight solutions.",
    url: "https://richmindlogistics.com/contact",
    siteName: "Richmind Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics Contact Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Richmind Logistics",
    description:
      "Reach out to Richmind Logistics for reliable logistics and freight solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/Background.webp"
          alt="Richmind Logistics contact page background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <Contact /> {/* Client-side component */}
      <Testimonials />
    </div>
  );
}
