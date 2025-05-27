'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'glass' | 'gradient' | 'flat' | 'soft' | 'outlined';
  color?: 'default' | 'blue' | 'red' | 'gold' | 'light' | 'dark' | 'custom';
  hoverEffect?: 'none' | 'lift' | 'scale' | 'glow' | 'border' | 'shadow';
  clickable?: boolean;
  icon?: ReactNode;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  aspectRatio?: string;
  animate?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card = ({
  children,
  className = '',
  href,
  variant = 'default',
  color = 'default',
  hoverEffect = 'lift',
  clickable = false,
  icon,
  withImage = false,
  imageSrc,
  imageAlt = '',
  title,
  subtitle,
  headerContent,
  footerContent,
  aspectRatio = 'auto',
  animate = false,
  rounded = 'lg',
  padding = 'md',
  style,
  onClick
}: CardProps) => {
  // Base card styles
  const baseStyles = 'relative overflow-hidden transition-all duration-300';
  
  // Variants
  const variantStyles = {
    default: 'bg-white',
    bordered: 'bg-white border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white shadow-md',
    glass: 'backdrop-filter backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/30',
    gradient: 'bg-gradient-to-br',
    flat: 'bg-gray-50 dark:bg-gray-800',
    soft: 'bg-gray-50/50 dark:bg-gray-800/50 backdrop-filter backdrop-blur-sm',
    outlined: 'border-2 border-gray-200'
  };
  
  // Colors
  const colorStyles = {
    default: 'text-gray-800 dark:text-gray-100',
    blue: variant === 'gradient' 
      ? 'from-uk-blue-light to-uk-blue-dark text-white' 
      : 'bg-uk-blue text-white',
    red: variant === 'gradient' 
      ? 'from-uk-red-light to-uk-red-dark text-white' 
      : 'bg-uk-red text-white',
    gold: variant === 'gradient' 
      ? 'from-amber-300 to-amber-600 text-uk-blue' 
      : 'bg-gold text-uk-blue',
    light: variant === 'gradient' 
      ? 'from-gray-100 to-gray-200 text-gray-800' 
      : 'bg-gray-100 text-gray-800',
    dark: variant === 'gradient'
      ? 'from-gray-700 to-gray-900 text-white'
      : 'bg-gray-800 text-white',
    custom: ''
  };
  
  // Hover effects
  const hoverStyles = {
    none: '',
    lift: 'hover:translate-y-[-4px] hover:shadow-lg',
    scale: 'hover:scale-[1.02]',
    glow: 'hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-800/20',
    border: 'hover:border-blue-500 dark:hover:border-blue-400',
    shadow: 'hover:shadow-xl'
  };

  // Rounded corners
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };

  // Padding
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8'
  };
  
  // Clickable
  const clickableStyles = clickable ? 'cursor-pointer' : '';
  
  // Combined styles
  const cardStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${colorStyles[color]} 
    ${hoverStyles[hoverEffect]} 
    ${clickableStyles} 
    ${roundedStyles[rounded]}
    ${paddingStyles[padding]}
    ${className}
  `;
  
  // Card content
  const cardContent = (
    <>
      {withImage && imageSrc && (
        <div className="card-image -mx-5 -mt-5 mb-5" style={{ aspectRatio }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-cover ${roundedStyles[rounded]}`}
          />
        </div>
      )}
      
      {(title || subtitle || headerContent || icon) && (
        <div className="card-header mb-4">
          {headerContent || (
            <>
              {icon && <div className="card-icon mb-3">{icon}</div>}
              {title && <h3 className="card-title text-xl font-semibold mb-1">{title}</h3>}
              {subtitle && <div className="card-subtitle text-gray-500 dark:text-gray-400">{subtitle}</div>}
            </>
          )}
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>
      
      {footerContent && (
        <div className="card-footer mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          {footerContent}
        </div>
      )}
      
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-10 pointer-events-none"></div>
      )}
    </>
  );

  // Wrap with motion component if animate is true
  const CardComponent = animate ? motion.div : 'div';
  const animateProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { scale: hoverEffect === 'scale' ? 1.02 : 1 }
  } : {};
  
  // Return card with or without link
  if (href) {
    return (
      <Link href={href} className={cardStyles} style={style} onClick={onClick}>
        <CardComponent {...animateProps}>
          {cardContent}
        </CardComponent>
      </Link>
    );
  }
  
  return (
    <CardComponent className={cardStyles} style={style} onClick={onClick} {...animateProps}>
      {cardContent}
    </CardComponent>
  );
};

export default Card; 