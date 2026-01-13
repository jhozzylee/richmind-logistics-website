"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";

export default function Contact() {
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

  // Dynamic form title & description
  const formTitle =
    intentParam === "quote"
      ? "Request a Shipping Quote"
      : intentParam === "start"
      ? "Start Your Shipping Process"
      : "Get in Touch";

  const formDescription =
    intentParam === "quote"
      ? "Provide your shipment details and we'll get back to you with a quote."
      : intentParam === "start"
      ? "Fill out the form below and we’ll help you start your shipment."
      : "Send us a message and we'll respond as soon as possible.";

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Add dateSubmitted field
      const payload = {
        data: {
          ...formData,
          dateSubmitted: new Date().toISOString(),
        },
      };

      const response = await fetch(
        "https://sheetdb.io/api/v1/6iuiaxyn3v9w6", // replace with your SheetDB endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 lg:py-[160px] text-surface flex justify-center">
      <div className="mx-auto max-w-[720px] px-6 flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-h2 text-surface">{formTitle}</h1>
          <p className="text-reg text-surface-shade max-w-[520px] mx-auto">{formDescription}</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="p-4 bg-brand-orange/20 text-brand-orange rounded-md text-center">
            Your message has been sent successfully!
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface outline-none focus:ring-2 focus:ring-brand-orange"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface outline-none focus:ring-2 focus:ring-brand-orange"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface outline-none focus:ring-2 focus:ring-brand-orange"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface outline-none resize-none h-32 focus:ring-2 focus:ring-brand-orange"
            required
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="h-12 px-0"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
}
