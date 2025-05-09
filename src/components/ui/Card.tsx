import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'glass' | 'gradient';
  color?: 'default' | 'blue' | 'red' | 'gold' | 'light';
  hoverEffect?: boolean;
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
  style?: React.CSSProperties;
}

const Card = ({
  children,
  className = '',
  href,
  variant = 'default',
  color = 'default',
  hoverEffect = true,
  clickable = false,
  icon,
  withImage = false,
  imageSrc,
  imageAlt = '',
  title,
  subtitle,
  headerContent,
  footerContent,
  aspectRatio = 'auto'
}: CardProps) => {
  // Base card styles
  const baseStyles = 'card';
  
  // Variants
  const variantStyles = {
    default: '',
    bordered: 'border border-gray-200 dark:border-gray-700',
    elevated: 'shadow-lg hover:shadow-xl',
    glass: 'backdrop-blur-lg bg-white/10 border border-white/20',
    gradient: 'bg-gradient-to-br'
  };
  
  // Colors
  const colorStyles = {
    default: '',
    blue: variant === 'gradient' 
      ? 'from-uk-blue-light to-uk-blue-dark text-uk-white' 
      : 'bg-uk-blue text-uk-white',
    red: variant === 'gradient' 
      ? 'from-uk-red-light to-uk-red-dark text-uk-white' 
      : 'bg-uk-red text-uk-white',
    gold: variant === 'gradient' 
      ? 'from-gold-light to-gold-dark text-uk-blue' 
      : 'bg-gold text-uk-blue',
    light: variant === 'gradient' 
      ? 'from-gray-100 to-gray-200 text-gray-800' 
      : 'bg-gray-100 text-gray-800',
  };
  
  // Hover effect
  const hoverStyles = hoverEffect ? 'hover:transform hover:-translate-y-1' : '';
  
  // Clickable
  const clickableStyles = clickable ? 'cursor-pointer' : '';
  
  // Combined styles
  const cardStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${colorStyles[color]} 
    ${hoverStyles} 
    ${clickableStyles} 
    ${className} 
    overflow-hidden
    transition-all duration-300
  `;
  
  // Card content
  const cardContent = (
    <>
      {withImage && imageSrc && (
        <div className="card-image" style={{ aspectRatio }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {(title || subtitle || headerContent || icon) && (
        <div className="card-header">
          {headerContent || (
            <>
              {icon && <div className="card-icon">{icon}</div>}
              {title && <h3 className="card-title">{title}</h3>}
              {subtitle && <div className="card-subtitle">{subtitle}</div>}
            </>
          )}
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>
      
      {footerContent && (
        <div className="card-footer">
          {footerContent}
        </div>
      )}
      
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-10 pointer-events-none"></div>
      )}
    </>
  );
  
  // Return card with or without link
  if (href) {
    return (
      <Link href={href} className={cardStyles}>
        {cardContent}
      </Link>
    );
  }
  
  return (
    <div className={cardStyles}>
      {cardContent}
    </div>
  );
};

export default Card; 