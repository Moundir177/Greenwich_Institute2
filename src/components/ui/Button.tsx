import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gold' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  external?: boolean;
  effect?: '3d' | 'hoverglow' | 'ripple' | 'none';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    fullWidth = false,
    className = '',
    icon,
    iconPosition = 'right',
    loading = false,
    disabled = false,
    external = false,
    effect = 'none',
    ...props
  }, ref) => {
    // Base class for all buttons
    const baseClass = 'btn';
    
    // Variant classes
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      white: 'bg-white text-uk-blue hover:bg-gray-100',
      gold: 'btn-gold',
      text: 'bg-transparent text-uk-blue hover:bg-gray-100/30 shadow-none'
    };
    
    // Size classes
    const sizeClasses = {
      sm: 'text-sm py-1 px-3',
      md: 'py-2 px-4',
      lg: 'text-lg py-3 px-6'
    };
    
    // Width class
    const widthClass = fullWidth ? 'w-full' : '';
    
    // Disabled class
    const disabledClass = disabled || loading ? 'opacity-70 cursor-not-allowed' : '';
    
    // Effect classes
    const effectClasses = {
      '3d': 'btn-3d',
      'hoverglow': 'btn-hoverglow',
      'ripple': 'btn-ripple',
      'none': ''
    };
    
    // Combined classes
    const buttonClasses = `
      ${baseClass} 
      ${variantClasses[variant]} 
      ${sizeClasses[size]} 
      ${widthClass} 
      ${disabledClass}
      ${effectClasses[effect]}
      ${className}
      flex items-center justify-center gap-2
    `;
    
    // Content with icon
    const content = (
      <>
        {loading && (
          <span className="animate-spin mr-2 flex">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className="button-icon">{icon}</span>
        )}
        
        <span className="button-text">{children}</span>
        
        {!loading && icon && iconPosition === 'right' && (
          <span className="button-icon">{icon}</span>
        )}
      </>
    );
    
    // Render as link if href provided
    if (href) {
      if (external) {
        // For external links, we don't pass any button-specific props
        return (
          <a
            href={href}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }
      
      return (
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      );
    }
    
    // Render as button
    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 