"use client";

import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaUsers, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Testimonials from '@/components/home/Testimonials';
import Button from '@/components/ui/Button';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';

// Metadata for the page
const pageMetadata = {
  title: 'Testimonials | Greenwich',
  description: 'Discover what our students and alumni have to say about their experiences with Greenwich.',
};

export default function TestimonialsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white py-20 overflow-hidden">
        {/* Particle Effects Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              particles: {
                number: {
                  value: 70,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#f0c674",
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: 0.2,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.3,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.1,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.7,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 0.3,
                    },
                  },
                  push: {
                    particles_nb: 3,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>
        
        {/* Decorative Blurs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold opacity-20 rounded-full filter blur-[100px] animate-pulse z-0"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500 opacity-20 rounded-full filter blur-[100px] animate-pulse z-0" style={{ animationDelay: "2s" }}></div>

        {/* 3D Polygons */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 transform rotate-45 rounded-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-gold/20 transform -rotate-12 rounded-xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 animate-bounceIn">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Testimonials</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Discover what our students and alumni have to say about their experiences with our institute and how we've helped them achieve their goals.
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Success Stories</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Students Say</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              Read testimonials from our students about their learning experiences and success stories with our institute.
            </p>
          </div>
          
          {/* Include the Testimonials component */}
          <Testimonials isStandalone={true} />
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-gold/20 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Video Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Hear From Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-uk-blue-light to-uk-blue">Alumni</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              Watch video testimonials from our alumni as they share their experiences and success stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group h-full border border-gray-100">
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <Image 
                      src={`/images/testimonials/video-${index}.jpg`} 
                      alt={`Video testimonial ${index}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-dark-blue/50 flex items-center justify-center group-hover:bg-dark-blue/30 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gold to-amber-500 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-uk-blue mb-2">
                      {`Student Name ${index}`}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {`Program ${index}`} • Class of 202{index}
                    </p>
                    <p className="text-gray-600">
                      "The education and support I received at this institute has been truly transformative. The faculty and resources helped me achieve my goals."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-dark-blue via-blue-900 to-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fadeIn">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Ready to Start Your Educational Journey?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Join thousands of successful students who have transformed their lives through our educational programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
                  icon={<FaGraduationCap />}
                >
                  Explore Courses
                </Button>
                <Button 
                  href="/contact" 
                  variant="white"
                  effect="hoverglow"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 