"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the hero image
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-uk-blue">
      {/* Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-uk-blue via-uk-blue/70 to-uk-blue z-10"></div>
        <div 
          className={`absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-30'
          }`}
        ></div>
      </div>

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-uk-blue via-uk-blue/70 to-uk-blue z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="animate-pulse">
              <div className="h-12 bg-uk-white/20 rounded w-3/4 mb-4"></div>
              <div className="h-12 bg-uk-white/20 rounded w-1/2 mb-6"></div>
              <div className="h-6 bg-uk-white/20 rounded w-2/3 mb-8"></div>
              <div className="flex space-x-4">
                <div className="h-12 bg-uk-white/20 rounded w-32"></div>
                <div className="h-12 bg-uk-white/20 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Diagonal border */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform -skew-y-2 origin-bottom-right z-10"></div>
      
      {/* UK flag elements as accents */}
      <motion.div 
        className="absolute top-20 right-20 h-24 w-2 bg-uk-red hidden lg:block"
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      />
      <motion.div 
        className="absolute top-20 right-24 h-2 w-24 bg-uk-red hidden lg:block"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-20">
        <motion.div 
          className="text-center md:text-left md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-uk-white leading-tight">
            <span className="block">Excellence in</span>
            <span className="text-gold">Education</span>
          </h1>
          <p className="mt-6 text-xl text-uk-white/90 md:pr-10">
            Join one of the UK's premier institutes offering world-class courses, certifications, and professional development opportunities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button href="/courses" variant="secondary" size="lg">
              Browse Courses
            </Button>
            <Button href="/contact" variant="white" size="lg">
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12 text-uk-white/90 flex items-center justify-center md:justify-start">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-gold bg-gray-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-300"></div>
                </div>
              ))}
            </div>
            <p className="ml-4 text-sm">Join over <span className="text-gold font-bold">5,000+</span> students from around the world</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 