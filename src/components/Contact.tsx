"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, ShieldCheck, Globe } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const intentParam = searchParams.get("intent") || "general";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    intent: intentParam,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const formTitle =
    intentParam === "quote"
      ? "Request a Shipping Quote"
      : intentParam === "start"
      ? "Start Your Shipment"
      : "Get in Touch";

  const formDescription =
    intentParam === "quote"
      ? "Provide your details and our analysts will prepare a custom logistics quote."
      : intentParam === "start"
      ? "Fill out the form below and we’ll help you initiate your shipping process."
      : "Send us a message and our global support team will respond shortly.";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        data: {
          ...formData,
          dateSubmitted: new Date().toISOString(),
        },
      };

      const response = await fetch(
        "https://sheetdb.io/api/v1/6iuiaxyn3v9w6",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "", intent: intentParam });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 w-full">
      
      {/* --- LEFT: INFO (TRANSPARENT) --- */}
      <div className="lg:col-span-5 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 border border-brand-orange/40 rounded-full px-4 py-2 bg-brand-orange/10 w-fit"
          >
            <span className="text-[10px] text-brand-orange uppercase font-bold tracking-[0.2em]">Contact Center</span>
          </motion.div>
          <h1 className="text-h1 text-white font-bold leading-tight">{formTitle}</h1>
          <p className="text-reg text-white/60 max-w-[420px]">{formDescription}</p>
        </div>

        <div className="flex flex-col gap-8 py-8 border-y border-white/10">
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xsmall-bold text-white/40 uppercase tracking-widest mb-1">Email Our Desk</p>
              <p className="text-reg text-white font-medium">Richmindlogistics@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange shrink-0">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-xsmall-bold text-white/40 uppercase tracking-widest mb-1">Global Operations</p>
              <p className="text-reg text-white font-medium">Mon-Fri, 9am - 6pm (GMT)</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
          <ShieldCheck className="text-brand-orange" size={24} />
          <p className="text-small text-white/50 leading-snug">
            Secure end-to-end encrypted data transmission.
          </p>
        </div>
      </div>

      {/* --- RIGHT: GLASS FORM --- */}
      <div className="lg:col-span-7">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          {success ? (
            <div className="flex flex-col items-center text-center gap-6 py-12">
              <div className="w-20 h-20 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Send size={40} />
              </div>
              <h2 className="text-h3 text-white font-bold">Message Dispatched</h2>
              <p className="text-white/60">Thank you. An logistics expert will contact you shortly.</p>
              <Button variant="secondary" onClick={() => setSuccess(false)} className="border-white/20 text-white hover:bg-white/10">
                Send New Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xsmall-bold text-white/70 uppercase ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-brand-orange outline-none transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xsmall-bold text-white/70 uppercase ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-brand-orange outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xsmall-bold text-white/70 uppercase ml-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-brand-orange outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xsmall-bold text-white/70 uppercase ml-1">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-brand-orange outline-none resize-none h-40 transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                className="h-[64px] rounded-xl text-large shadow-xl hover:scale-[1.02] transition-transform"
                disabled={submitting}
              >
                {submitting ? "Transmitting..." : "Submit Dispatch Request"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="w-full py-24 lg:py-40 relative">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] relative z-10">
        <Suspense fallback={<div className="text-center text-white py-20">Loading Secure Portal...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </section>
  );
}