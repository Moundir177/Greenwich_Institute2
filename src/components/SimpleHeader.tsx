"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SimpleHeader() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${scrolled ? 'py-2 shadow-xl' : 'py-4'}`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="bg-gold text-uk-blue flex items-center justify-center rounded-full w-10 h-10 mr-3 font-bold transition-all group-hover:scale-110 group-hover:rotate-3">
                UK
              </div>
              <div>
                <h1 className="text-gold m-0 text-2xl font-bold transition-all group-hover:translate-x-1">UK Institute</h1>
                <p className="text-uk-white m-0 text-xs">Excellence in Education</p>
              </div>
            </Link>
            <nav className="flex gap-6 ml-6">
              <Link href="/" className="text-uk-white hover:text-gold relative overflow-hidden group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/about" className="text-uk-white hover:text-gold relative overflow-hidden group">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/services" className="text-uk-white hover:text-gold relative overflow-hidden group">
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/courses" className="text-uk-white hover:text-gold relative overflow-hidden group">
                Courses
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/certificates" className="text-uk-white hover:text-gold relative overflow-hidden group">
                Certificates
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/contact" className="text-uk-white hover:text-gold relative overflow-hidden group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/register" className="btn btn-outline text-uk-white border-uk-white hover:bg-uk-white hover:text-uk-blue">
              <span>Register</span>
            </Link>
            <Link href="/login" className="btn btn-primary animate-pulse">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-uk-red via-gold to-uk-red"></div>
    </header>
  );
} 