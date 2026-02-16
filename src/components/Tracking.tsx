"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { Search, Globe2, Ship, Info } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="w-full py-24 lg:py-[180px] relative overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] relative z-10">
        
        {/* Command Module Container */}
        <div className="relative w-full max-w-5xl mx-auto bg-neutral/10 rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-[0_40px_100px_rgba(0,0,0,0.1)] backdrop-blur-sm overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Globe2 size={300} className="text-white translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center gap-10">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="text-[10px] text-white/80 uppercase tracking-[0.3em] font-bold">Live Status Monitor</span>
            </div>

            {/* Heading */}
            <h1 className="text-h2 md:text-[3.5rem] text-white font-bold leading-tight">
              Track your <span className="text-brand-orange italic font-medium">Shipment</span>
            </h1>

            <p className="text-white/50 text-reg max-w-[500px]">
              Enter your unique tracking ID to receive a detailed status update from our global logistics dispatch team.
            </p>

            {/* INPUT + BUTTON GROUP */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full group">
              <div className="relative flex flex-col sm:flex-row items-center gap-3 w-full max-w-[650px]">
                
                {/* Search Icon Decor */}
                <div className="absolute left-6 text-white/30 hidden sm:block">
                  <Search size={20} />
                </div>

                <input
                  type="text"
                  placeholder="e.g. RML-2026-XXXX"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="
                    w-full
                    pl-6 sm:pl-14
                    pr-6
                    h-[72px] 
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    text-white
                    text-large
                    placeholder:text-white/20
                    outline-none
                    focus:border-brand-orange/50
                    focus:bg-white/10
                    transition-all
                    duration-300
                  "
                />

                <Button
                  variant="primary"
                  className="h-[72px] px-10 rounded-2xl whitespace-nowrap w-full sm:w-auto shadow-xl hover:scale-105 transition-transform"
                  onClick={handleTrackShipment}
                >
                  <span className="flex items-center gap-3">
                    Track Now
                    <Ship size={20} />
                  </span>
                </Button>
              </div>
            </div>

            {/* Support Notice */}
            <div className="flex items-center gap-2 text-white/40 text-[11px] uppercase tracking-widest mt-4">
              <Info size={14} className="text-brand-orange" />
              <span>Real-time updates provided via verified support channels</span>
            </div>

          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        </div>

      </div>
    </section>
  );
}