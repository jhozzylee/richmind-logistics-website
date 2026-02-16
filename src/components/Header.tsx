"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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

  // Handle scroll effect for glass visibility
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header 
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled 
          ? "py-3 bg-[#385D76]/80 backdrop-blur-lg border-b border-white/10 shadow-lg" 
          : "py-5 bg-transparent border-b border-transparent"}
      `}
    >
      {/* Centered Content Container */}
      <div className="mx-auto max-w-[1680px] w-full px-[clamp(1.5rem,8vw,11.5rem)]">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 z-50">
            <Image
              src="/images/RM_Logo.svg"
              alt="Richmind Logo"
              width={160}
              height={40}
              priority
              className="object-contain w-auto h-8 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation - Original Design with Sliding Pill */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 text-sm xl:text-base font-medium transition-colors"
                >
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
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

          {/* Hamburger Toggle - Animated based on your reference */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[60] p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2.5" : "w-5"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - The Vertical Dropdown Slide-down */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }} // Exponential out
            className="fixed inset-0 bg-[#385D76] bg-opacity-98 backdrop-blur-2xl lg:hidden z-50 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 px-6 text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-4xl font-bold transition-all ${
                      pathname === item.href ? "text-brand-orange" : "text-white hover:text-brand-orange"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 w-full min-w-[280px]"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" className="w-full py-4 text-lg">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}