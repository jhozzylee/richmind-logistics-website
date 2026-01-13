import Image from "next/image";
import type { Metadata } from "next";

/* Import About-specific components */
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValue";
import OurVision from "@/components/OurVision";
import OurFounder from "@/components/OurFounder";
import MeetOurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testemonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Richmind Logistics",
  description:
    "Learn about Richmind Logistics’ story, values, vision, and team behind our reliable and efficient logistics and supply chain solutions.",
  openGraph: {
    title: "About Us | Richmind Logistics",
    description:
      "Discover the mission, values, and team driving Richmind Logistics to deliver trusted logistics solutions worldwide.",
    url: "https://richmindlogistics.com/about",
    siteName: "Richmind Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Richmind Logistics",
    description:
      "Discover the mission, values, and team driving Richmind Logistics to deliver trusted logistics solutions worldwide.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/AboutBackground.webp"
          alt="Richmind Logistics team and operations background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page Content */}
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurVision />
      <OurFounder />
      <MeetOurTeam />
      <Testimonials />
      <CTA />
    </div>
  );
}
