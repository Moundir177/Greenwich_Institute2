'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  aspectRatio?: 'square' | 'video' | 'wide' | 'custom';
  className?: string;
  height?: number;
  showIndicators?: boolean;
}

export default function ImageCarousel({
  images,
  autoSlide = true,
  autoSlideInterval = 5000,
  aspectRatio = 'video',
  className = '',
  height = 400,
  showIndicators = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const aspectRatioClass = {
    square: 'aspect-w-1 aspect-h-1',
    video: 'aspect-w-16 aspect-h-9',
    wide: 'aspect-w-21 aspect-h-9',
    custom: '',
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, autoSlideInterval]);

  if (!images.length) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div 
        className={aspectRatio !== 'custom' 
          ? aspectRatioClass[aspectRatio] 
          : `h-[${height}px]`
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <p className="text-sm md:text-base">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-uk-blue transition-all"
        aria-label="Previous image"
      >
        <FaChevronLeft className="h-4 w-4 text-uk-blue" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-uk-blue transition-all"
        aria-label="Next image"
      >
        <FaChevronRight className="h-4 w-4 text-uk-blue" />
      </button>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-uk-blue w-4' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 