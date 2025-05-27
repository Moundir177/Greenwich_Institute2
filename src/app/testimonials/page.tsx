"use client";

import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaUsers, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Testimonials from '@/components/home/Testimonials';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import Button from '@/components/ui/Button';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import PageLayout from '../components/PageLayout';

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
    <PageLayout>
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
              {t('testimonials_hero_title')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">{t('testimonials_hero_highlight')}</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              {t('testimonials_hero_description')}
            </p>
            
            {/* Testimonial Highlights Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 mb-12 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-10 flex-wrap">
                <div className="relative w-full max-w-lg">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl relative">
                    {/* Quote icon */}
                    <div className="absolute -top-5 -left-5 bg-gradient-to-br from-gold to-amber-600 rounded-full p-3 shadow-lg">
                      <FaQuoteLeft className="text-white text-lg" />
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-gold" />
                      ))}
                    </div>
                    
                    <p className="text-white italic mb-6 text-lg leading-relaxed">
                      "The Start and Improve Your Business program transformed my entrepreneurial journey. Within six months of graduation, I secured funding and launched my tech startup that now employs 12 people."
                    </p>
                    
                    <div className="flex items-center mt-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-gold/30 ring-offset-2 ring-offset-blue-900/50">
                        <Image
                          src="/images/testimonials/student1.jpg"
                          alt="Ahmed Khalid"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Ahmed Khalid</h4>
                        <p className="text-sm text-blue-200">SIYB Program Graduate, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
                    {/* Quote icon */}
                    <div className="absolute -top-5 -left-5 bg-gradient-to-br from-gold to-amber-600 rounded-full p-3 shadow-lg">
                      <FaQuoteLeft className="text-white text-lg" />
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-gold" />
                      ))}
                    </div>
                    
                    <p className="text-white italic mb-6 text-lg leading-relaxed">
                      "As a woman entrepreneur in a male-dominated field, the support I received through Greenwich Institute was invaluable. My company has since won two innovation awards."
                    </p>
                    
                    <div className="flex items-center mt-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-gold/30 ring-offset-2 ring-offset-blue-900/50">
                        <Image
                          src="/images/testimonials/student4.jpg"
                          alt="Fatima Zahra"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Fatima Zahra</h4>
                        <p className="text-sm text-blue-200">IYB Program Graduate, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-10 flex justify-center"
              >
                <button
                  onClick={() => document.getElementById('testimonials-main')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-white hover:bg-white/10 border border-white/30 rounded-full px-6 py-2 text-sm transition-all duration-300 flex items-center"
                >
                  <span>View All Testimonials</span>
                  <span className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="testimonials-main" className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">{t('testimonials_success_stories')}</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              {t('what_students_say')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">{t('about_us')}</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              {t('testimonials_description')}
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
              {t('testimonials_video_title')}
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              Watch video testimonials from our alumni as they share their experiences and success stories.
            </p>
          </div>
          
          {/* Replace the old video testimonials with our new component */}
          <VideoTestimonials />
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
    </PageLayout>
  );
} 