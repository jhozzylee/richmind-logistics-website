import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
  to?: string; // 👈 NEW (for routing)
}

export default function Button({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  to,
  ...props 
}: ButtonProps) {

  const baseStyles = `
    inline-flex items-center justify-center 
    py-2 px-[40px] rounded-[8px] 
    btn-text transition-all duration-300 
    group active:scale-95 whitespace-nowrap
    ${fullWidth ? 'w-full' : 'w-fit'}
  `;

  const primaryStyles = `
    bg-brand-orange text-surface border border-transparent
    hover:bg-brand-orange/20 hover:text-brand-orange hover:border-brand-orange
  `;

  const secondaryStyles = `
    bg-surface text-neutral border border-transparent
    hover:shadow-md
  `;

  const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  // 👉 If `to` is provided, render Link
  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
        {variant === 'secondary' && (
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        )}
      </Link>
    );
  }

  // 👉 Default button behavior
  return (
    <button className={styles} {...props}>
      {children}
      {variant === 'secondary' && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
      )}
    </button>
  );
}
