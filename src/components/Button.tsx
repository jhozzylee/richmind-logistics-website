"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string; // Next.js uses 'href' instead of 'to'
}

export default function Button({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  href,
  ...props 
}: ButtonProps) {

  const baseStyles = `
    inline-flex items-center justify-center 
    py-3 px-8 rounded-full 
    btn-text font-semibold transition-all duration-300 
    group active:scale-95 whitespace-nowrap
    ${fullWidth ? 'w-full' : 'w-fit'}
  `;

  // Primary: Professional Orange with a glow effect on hover
  const primaryStyles = `
    bg-brand-orange text-white border border-brand-orange
    hover:bg-transparent hover:text-brand-orange
  `;

  // Secondary: Clean glass/white look
  const secondaryStyles = `
    bg-white/10 backdrop-blur-md text-white border border-white/20
    hover:bg-white hover:text-brand-blue hover:border-white
  `;

  const combinedStyles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  // Content helper to avoid repeating the Arrow logic
  const ButtonContent = (
    <>
      {children}
      {variant === 'secondary' && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {ButtonContent}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {ButtonContent}
    </button>
  );
}