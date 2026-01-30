"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Track", href: "/track" },
  ];

  // Handle scroll effect for better glass visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header 
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        bg-[#385D76]/20 backdrop-blur-xl backdrop-saturate-150
        ${scrolled ? "border-b border-white/10 bg-[#385D76]/30 shadow-lg" : "border-b border-transparent"}
      `}
    >
      {/* Centered Content Container */}
      <div className="mx-auto max-w-[1680px] w-full px-[clamp(1.5rem,8vw,11.5rem)]">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/RM_Logo.svg"
              alt="Richmind Logo"
              width={160}
              height={40}
              priority
              className="object-contain w-auto h-8 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-5 py-2 rounded-full transition-all duration-300 text-sm xl:text-base font-medium
                    ${
                      isActive
                        ? "bg-white/10 border border-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link href="/contact">
              <Button variant="primary" className="h-10 px-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden absolute top-[100%] left-0 w-full overflow-hidden
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }
        `}
      >
        <div className="bg-[#385D76]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <nav className="flex flex-col gap-4 px-8 py-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-xl font-semibold hover:text-brand-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-4">
              <Button variant="primary" className="w-full py-4">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}