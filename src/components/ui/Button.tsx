'use client';

import Link from 'next/link';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  effect?: '3d' | 'hoverglow' | 'ripple';
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
  className = '',
    href,
  effect,
  onClick,
  type = 'button',
  disabled = false,
  icon,
    fullWidth = false,
    ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300";
    
  const variantStyles = {
    primary: "bg-uk-blue text-white hover:bg-uk-blue-dark",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "bg-transparent border-2 border-current",
    white: "bg-white text-uk-blue hover:bg-gray-100",
    gold: "bg-gold text-white hover:bg-gold-dark",
    };
    
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 rounded",
    md: "px-4 py-2 rounded-md",
    lg: "text-lg px-6 py-3 rounded-lg",
  };
  
  const effectStyles = {
    '3d': "transform hover:-translate-y-1 active:translate-y-0 shadow-md hover:shadow-lg active:shadow",
    'hoverglow': "hover:shadow-glow",
    'ripple': "btn-ripple",
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthStyles = fullWidth ? "w-full" : "";
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${effect ? effectStyles[effect] : ''} ${disabledStyles} ${widthStyles} ${className}`;
  
    if (href) {
        return (
      <Link 
            href={href}
        className={buttonStyles} 
        {...props}
          >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
        </Link>
      );
    }
    
    return (
      <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
        {...props}
      >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      </button>
    );
  }