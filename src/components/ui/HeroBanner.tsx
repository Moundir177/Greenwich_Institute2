'use client';

import Image from 'next/image';
import Button from './Button';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  align?: 'left' | 'center' | 'right';
  overlay?: 'none' | 'light' | 'dark' | 'gradient';
  height?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  align = 'center',
  overlay = 'gradient',
  height = 'medium',
  className = '',
}: HeroBannerProps) {
  // Height classes
  const heightClasses = {
    small: 'min-h-[300px] md:min-h-[400px]',
    medium: 'min-h-[400px] md:min-h-[500px]',
    large: 'min-h-[500px] md:min-h-[700px]',
    full: 'min-h-screen',
  };
  
  // Text alignment classes
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };
  
  // Overlay classes
  const overlayClasses = {
    none: '',
    light: 'bg-white/30',
    dark: 'bg-black/50',
    gradient: 'bg-gradient-to-r from-uk-blue/90 via-uk-blue/70 to-uk-blue/50',
  };

  return (
    <div 
      className={`relative ${heightClasses[height]} flex items-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {overlay !== 'none' && (
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`flex flex-col ${alignClasses[align]} max-w-3xl mx-auto md:mx-0`}>
          <h1 
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif
              mb-4 md:mb-6 
              ${overlay === 'light' ? 'text-gray-900' : 'text-white'}
            `}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className={`
                text-xl md:text-2xl mb-8 
                ${overlay === 'light' ? 'text-gray-700' : 'text-white/90'}
              `}
            >
              {subtitle}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-wrap gap-4">
              {primaryCTA && (
                <Button 
                  href={primaryCTA.href} 
                  variant="primary" 
                  size="lg"
                >
                  {primaryCTA.text}
                </Button>
              )}
              
              {secondaryCTA && (
                <Button 
                  href={secondaryCTA.href} 
                  variant={overlay === 'light' ? 'outline' : 'white'} 
                  size="lg"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 