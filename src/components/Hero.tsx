"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

/* Updated Social Proof with subtle animation */
function SocialProof({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      className={`flex items-center gap-3 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl ${className}`}
    >
      <div className="flex -space-x-3">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            className="w-10 h-10 rounded-full border-2 border-[#385D76] object-cover"
            src={`https://i.pravatar.cc/150?u=${i + 10}`}
            alt="User"
          />
        ))}
      </div>
      <div className="flex flex-col">
        <h6 className="text-white font-bold leading-none">200+</h6>
        <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">Global Partners</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackShipment = () => {
    if (!trackingNumber.trim()) return alert("Please enter a tracking number");
    const emailLink = `mailto:Richmindlogistics@gmail.com?subject=Tracking: ${trackingNumber}`;
    if (window.confirm("Connect with our support team to track this shipment?")) {
      window.location.href = emailLink;
    }
  };

  return (
    // Changed pt-24 to pt-32 or pt-40 to give the Header breathing room
    <section className="relative min-h-screen flex flex-col items-center pt-10 pb-20 px-6 overflow-hidden bg-brand-blue/10">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center flex-1 justify-center text-center">
        
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold uppercase tracking-widest">
            Next-Gen Supply Chain Solutions
          </span>
          <h1 className="text-white text-h1 mb-8 leading-[1.1] tracking-tight">
            Moving Cargo <span className="text-brand-orange relative whitespace-nowrap">
              Across Borders
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M3 9C70 2.5 230 2.5 297 9" stroke="#FFA500" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span> With Precision.
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-large mb-12 leading-relaxed">
            Reliable local and international logistics services designed to keep your business moving on time and without complexity.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-20"
        >
          <Link href="/contact?intent=quote">
            <Button variant="primary" className="w-full sm:min-w-[220px] h-14 shadow-2xl shadow-brand-orange/20 text-lg">
              Get a Quote
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary" className="w-full sm:min-w-[220px] h-14 text-lg">
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Tracking Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-full max-w-lg relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/20 to-transparent rounded-[25px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white/5 backdrop-blur-3xl p-1 rounded-[24px] border border-white/10 shadow-2xl">
            <div className="bg-[#1F2933]/40 rounded-[22px] p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-orange/10 rounded-xl border border-brand-orange/20">
                  <Search className="text-brand-orange w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-xl leading-none">Track Shipment</h3>
                  <p className="text-white/40 text-sm mt-1.5 font-medium">Global real-time tracking system</p>
                </div>
              </div>

              <div className="space-y-5">
                <textarea
                  placeholder="Enter tracking ID (e.g. RM-8829-XL)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full h-20 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-brand-orange/40 focus:bg-white/[0.06] transition-all resize-none font-mono"
                />
                <Button variant="primary" fullWidth onClick={handleTrackShipment} className="h-14 rounded-2xl font-bold tracking-wide">
                  Locate Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements & Indicators */}
      <SocialProof className="hidden xl:flex absolute right-12 bottom-12 z-20" />
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hidden lg:block"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Mobile Social Proof */}
      <div className="mt-16 lg:hidden z-10">
        <SocialProof />
      </div>
    </section>
  );
}