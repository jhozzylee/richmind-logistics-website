import Image from "next/image";
import type { Metadata } from "next";

/* Import components */
import Hero from "@/components/Hero";
import About from "@/components/AboutUs";
import Services from "@/components/ServicesSection";
import GlobalNetwork from "@/components/GlobalNetwork";
import OurProcess from "@/components/OurProcess";
import GloabalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Richmind Logistics | Reliable Freight & Supply Chain Solutions",
  description:
    "Richmind Logistics provides secure, efficient, and reliable logistics, freight, and supply chain solutions worldwide.",
  openGraph: {
    title: "Richmind Logistics",
    description:
      "Secure, efficient, and reliable logistics and supply chain solutions tailored for global businesses.",
    url: "https://richmindlogistics.com",
    siteName: "Richmind Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics - Freight and Supply Chain Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richmind Logistics",
    description:
      "Secure, efficient, and reliable logistics and supply chain solutions worldwide.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/Background.webp"
          alt="Richmind Logistics - global logistics background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Page Content */}
      <Hero />
      <GlobalNetwork />
      <About />
      <Services />
      <OurProcess />
      <GloabalReach />
      <Testimonials />
      <CTA />
    </div>
  );
}
