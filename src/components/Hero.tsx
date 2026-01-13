"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";

/* Social Proof remains the same */
function SocialProof({ className = "" }) {
  return (
    <div
      className={`
        flex items-center gap-3
        bg-neutral/80
        p-4
        rounded-xl
        ${className}
      `}
    >
      <div className="flex -space-x-3">
        <img
          className="w-10 h-10 rounded-full border-2 border-surface object-cover bg-surface-dim"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
          alt="User"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-surface object-cover bg-surface-dim"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
          alt="User"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-surface object-cover bg-surface-dim"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
          alt="User"
        />
      </div>

      <div className="flex flex-col">
        <h6 className="text-reg text-surface font-bold">200+</h6>
        <span className="text-xsmall text-surface/70">Trusted Users</span>
      </div>
    </div>
  );
}

/* Hero Section */
export default function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackShipment = () => {
    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number");
      return;
    }

    const emailLink = `mailto:Richmindlogistics@gmail.com?subject=Shipment Tracking Request&body=Hello,%0D%0AI would like to track my shipment.%0D%0ATracking Number: ${trackingNumber}`;

    const confirmSend = window.confirm(
      "Tracking is handled by our support team. Do you want to send a message to customer support?"
    );

    if (confirmSend) {
      window.location.href = emailLink;
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-[64px] px-4 sm:px-6 lg:px-16 gap-14 overflow-hidden">
      {/* Desktop Social Proof */}
      <div className="hidden lg:block absolute lg:right-[50px] lg:bottom-[50px] xl:right-[80px] xl:bottom-[80px] z-20">
        <SocialProof />
      </div>

      {/* Hero Content */}
      <div className="max-w-[665px] text-center flex flex-col items-center gap-6 z-10">
        <h1 className="text-surface text-h1">
          Moving Cargo <span className="text-brand-orange">Across Borders</span> With Precision.
        </h1>

        <p className="max-w-[664px] text-surface text-reg sm:text-large leading-relaxed">
          Reliable local and international logistics services designed to keep your business moving on time and without complexity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link href="/contact?intent=quote">
            <Button variant="primary" className="w-full sm:w-auto h-[48px]">
              Get a Quote
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="secondary" className="w-full sm:w-auto h-[48px]">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Track Shipment Card */}
      <div className="mt-14 flex justify-center z-10 w-full">
        <div className="w-full max-w-[464px] p-4 bg-neutral/80 rounded-2xl flex flex-col gap-8">
          <div className="text-center">
            <h3 className="text-surface text-large">Track Shipment</h3>
            <p className="text-surface-shade text-small">Let’s track your shipment</p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[436px] mx-auto">
            <div className="bg-surface-dim/10 rounded-[8px] p-[10px]">
              <textarea
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="
                  bg-surface-dim
                  rounded-[8px]
                  w-full
                  h-[56px]
                  px-4
                  py-4
                  resize-none
                  outline-none
                  text-neutral
                  text-sm
                  placeholder:text-neutral/50
                  block
                "
              />
            </div>

            <div className="bg-surface-dim/10 rounded-[8px] p-[10px]">
              <Button
                variant="primary"
                fullWidth
                className="h-[56px] px-0"
                onClick={handleTrackShipment}
              >
                Track Shipment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Social Proof */}
      <div className="mt-1 mb-4 flex justify-center lg:hidden z-10">
        <SocialProof />
      </div>
    </section>
  );
}
