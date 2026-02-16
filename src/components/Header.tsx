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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header 
        className={`
          fixed inset-x-0 top-0 z-[100] transition-all duration-300 w-full
          ${scrolled || menuOpen
            ? "py-3 bg-[#385D76]/90 backdrop-blur-lg border-b border-white/10 shadow-lg" 
            : "py-5 bg-transparent border-b border-transparent"}
        `}
      >
        {/* Centered Content Container */}
        <div className="mx-auto max-w-[1680px] w-full px-[clamp(1.5rem,8vw,11.5rem)]">
          <div className="flex items-center justify-between relative">
            
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 z-[110]">
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

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative z-[110] p-2 text-white outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all duration-300 rounded-full ${menuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 rounded-full ${menuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 rounded-full ${menuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside header for cleaner fixed positioning */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#385D76] lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 w-full max-w-[300px]"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" className="w-full py-6 text-xl rounded-2xl">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}