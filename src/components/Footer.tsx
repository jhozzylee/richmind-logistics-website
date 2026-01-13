"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "X", icon: Twitter, href: "https://x.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1A3D6C] to-[#0F0F0F] text-surface-dim mt-auto">
      <div className="max-w-[1680px] mx-auto px-[clamp(1.5rem,8vw,11.5rem)] py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Logo / Brand */}
          <div className="flex flex-col gap-4 max-w-[192px]">
            <Image
              src="/images/Footer_Logo.svg"
              alt="Richmind Logistics"
              width={160}
              height={40}
            />
            <p className="text-small text-surface-shade">
              Moving cargo with global precision and local expertise.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-large text-surface-shade font-bold">Services</h4>
            <ul className="flex flex-col gap-2 text-small">
              {[
                { name: "Import", href: "/services/import" },
                { name: "Export", href: "/services/export" },
                { name: "Transit", href: "/services/transit" },
                { name: "Warehousing", href: "/services/warehousing" },
                { name: "Air / Sea Freight", href: "/services/air-/-sea-freight" },
                { name: "Customs Clearance", href: "/services/customs-clearance" },
              ].map((item) => (
                <li key={item.name} className="hover:text-brand-orange transition-colors">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-large text-surface-shade font-bold">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-small">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Testimonials" },
                { name: "Request a Quote", href: "/contact" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name} className="hover:text-brand-orange transition-colors">
                  {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-large text-surface-shade font-bold">Resources</h4>
            <ul className="flex flex-col gap-2 text-small">
              {["FAQs","Blogs","News Letters"].map((item) => (
                <li key={item} className="hover:text-brand-orange cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-large text-surface-shade font-bold">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-small">
              <li className="hover:text-brand-orange transition-colors">
                <a href="mailto:Richmindlogistics@gmail.com">Richmindlogistics@gmail.com</a>
              </li>
              <li className="hover:text-brand-orange transition-colors">
                <a href="tel:+233244383964">+233 244 383 964</a>
              </li>
              <li>Tema, Accra, Ghana</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-surface-shade/10 mt-24" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
          <p className="text-small text-surface-shade/80">
            © 2026 Richmind Logistics. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-xl bg-neutral flex items-center justify-center 
                           text-surface-shade hover:bg-brand-orange hover:text-white 
                           transition-all duration-300 hover:-translate-y-1 border border-white/10"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
