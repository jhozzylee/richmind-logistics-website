"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function Tracking() {
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
    <section className="w-full py-20 lg:py-[160px]">
      <div className="mx-auto max-w-[1680px] px-6 flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <h1 className="text-h1 text-surface max-w-[640px]">
          Track your Shipment
        </h1>

        {/* INPUT + BUTTON GROUP */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[600px]">
            <input
              type="text"
              placeholder="Enter your tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="
                w-full
                sm:w-[400px]
                px-6
                h-[56px] 
                rounded-xl
                border
                border-surface-shade
                bg-white
                text-neutral
                outline-none
                focus:border-brand-orange
                transition-colors
              "
            />

            <Button
              variant="primary"
              className="h-[56px] px-8 whitespace-nowrap w-full sm:w-auto"
              onClick={handleTrackShipment}
            >
              Track Shipment
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
