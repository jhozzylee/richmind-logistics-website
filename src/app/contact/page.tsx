import Image from "next/image";
/* Import your About-specific components here */
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testemonial";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background - Using a different warehouse/staff image for About page */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/Background.webp" 
          alt="About us background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Slightly darker for text readability */}
      </div>

      {/* Page Content */}
      <Contact />
      <Testimonials />
    </div>
  );
}