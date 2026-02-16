"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "X", icon: Twitter, href: "https://x.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  const serviceLinks = [
    { name: "Import", href: "/services/import" },
    { name: "Export", href: "/services/export" },
    { name: "Transit", href: "/services/transit" },
    { name: "Warehousing", href: "/services/warehousing" },
    { name: "Air / Sea Freight", href: "/services/air-/-sea-freight" },
    { name: "Customs Clearance", href: "/services/customs-clearance" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Testimonials", href: "#" },
    { name: "Request a Quote", href: "/contact" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-neutral text-white mt-auto border-t border-white/5">
      <div className="max-w-[1680px] mx-auto px-[clamp(1.5rem,8vw,11.5rem)] pt-24 pb-12">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
          
          {/* Logo / Brand - Takes up 4 columns */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="relative w-[180px] h-[44px]">
              <Image
                src="/images/Footer_Logo.svg"
                alt="Richmind Logistics"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-large text-white/50 max-w-[280px] leading-relaxed">
              Moving cargo with global precision and local expertise.
            </p>
            {/* Newsletter Mini-Signup or Trust Tag could go here */}
            <div className="flex items-center gap-2 text-brand-orange text-xsmall-bold uppercase tracking-widest">
              <span className="w-8 h-px bg-brand-orange" />
              Trusted Global Network
            </div>
          </div>

          {/* Links Sections - Columns 5-12 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Services */}
            <div className="flex flex-col gap-6">
              <h4 className="text-small-bold uppercase tracking-[0.2em] text-white">Services</h4>
              <ul className="flex flex-col gap-3 text-reg text-white/50">
                {serviceLinks.map((item) => (
                  <li key={item.name} className="hover:text-brand-orange transition-all duration-300 transform hover:translate-x-1">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-small-bold uppercase tracking-[0.2em] text-white">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-reg text-white/50">
                {quickLinks.map((item) => (
                  <li key={item.name} className="hover:text-brand-orange transition-all duration-300 transform hover:translate-x-1">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-6">
              <h4 className="text-small-bold uppercase tracking-[0.2em] text-white">Resources</h4>
              <ul className="flex flex-col gap-3 text-reg text-white/50">
                {["FAQs", "Blogs", "News Letters"].map((item) => (
                  <li key={item} className="hover:text-brand-orange cursor-pointer transition-all duration-300 transform hover:translate-x-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h4 className="text-small-bold uppercase tracking-[0.2em] text-white">Contact Info</h4>
              <ul className="flex flex-col gap-5 text-reg text-white/50">
                <li className="flex items-start gap-3 group">
                  <Mail size={18} className="text-brand-orange shrink-0 mt-1" />
                  <a href="mailto:Richmindlogistics@gmail.com" className="group-hover:text-white transition-colors break-all">
                    Richmindlogistics@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone size={18} className="text-brand-orange shrink-0" />
                  <a href="tel:+233244383964" className="group-hover:text-white transition-colors">
                    +233 244 383 964
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-orange shrink-0 mt-1" />
                  <span>Tema, Accra, Ghana</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mt-24" />

        {/* ================= BOTTOM ROW ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-xsmall text-white/40">
              © 2026 Richmind Logistics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xsmall text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-xsmall text-white/30 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                           text-white/60 hover:bg-brand-orange hover:text-white hover:border-brand-orange
                           transition-all duration-500 hover:-translate-y-1"
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}