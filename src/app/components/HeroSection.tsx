"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const isRtl = language === 'ar';
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  const heroImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <section className={`relative min-h-screen bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white py-20 md:pt-32 overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}>
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 max-w-3xl">
            <motion.h1 
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6"
            >
              {t('hero_title')}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold block mt-3">
                {t('hero_title_highlight')}
              </span>
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            >
              {t('hero_description')}
            </motion.p>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/courses" 
                className="relative group overflow-hidden bg-gradient-to-r from-gold to-amber-500 text-dark-blue px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-15px_rgba(240,198,116,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  {t('explore_courses')}
                  <FaArrowRight className={`${isRtl ? 'mr-2' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              
              <button
                onClick={() => setShowVideo(true)}
                className="relative overflow-hidden bg-transparent border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/10 transform hover:translate-y-[-2px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center">
                  <span className="w-8 h-8 mr-3 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <FaPlay className={`${isRtl ? 'ml-0.5' : 'ml-0.5'} text-xs`} />
                  </span>
                  {t('watch_intro')}
                </span>
              </button>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeIn}
              className="mt-14 flex items-center"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-dark-blue overflow-hidden shadow-lg transform hover:scale-105 transition-transform hover:z-10">
                    <Image 
                      src={`/images/avatars/student-${i}.jpg`} 
                      alt="" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-medium text-lg">
                  <span className="text-gold font-bold">5000+</span> {t('students_globally')}
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={heroImage}
              className="relative z-10"
            >
              <div className="relative bg-gradient-to-tr from-blue-500/20 to-purple-500/20 backdrop-blur-md p-2 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)]">
                <Image 
                  src="/images/hero-image.jpg" 
                  alt={t('hero_image_alt')}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
                {/* Glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={4}
              whileHover={cardVariants.hover}
              className="absolute -bottom-10 -left-10 sm:-left-16 bg-white/90 backdrop-blur-md text-dark-blue p-5 rounded-2xl shadow-2xl max-w-xs border border-white/40 z-20"
            >
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-gold/30 to-amber-600/30 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.002 1.069c0 .655.484 1.205 1.134 1.29l.92.12c1.79.236 3.25.996 3.25 1.908 0 1.232-2.086 2.233-4.648 2.233-2.56 0-4.647-1-4.647-2.233 0-.904 1.438-1.659 3.212-1.906l.924-.122A.75.75 0 018 12.278V11.6l-5.244 2.245a1 1 0 00.106 1.865l7 3a1 1 0 00.788 0l7-3a1 1 0 00.106-1.865L13 11.6V10.7l2.216-.923a1 1 0 000-1.848l-1.032-.442c.188-.319.338-.59.338-.938 0-.532-.354-1.183-.865-1.525A3.97 3.97 0 0112 5a1 1 0 01.894.553l.448.894a1 1 0 001.788 0L15.448 5a1 1 0 01.895-.553 3.977 3.977 0 01.605.073c-.503.335-.9.981-.9 1.527 0 .374.154.66.332.972l-1.156.486a1 1 0 00-.168 1.75l2.56 1.098V12h1a1 1 0 110 2h-1.592l-.195.658a1 1 0 01-.363.537l-1.538 1.152a1 1 0 01-.6.211H8.786a1 1 0 01-.6-.21l-1.538-1.153a1 1 0 01-.363-.537l-.195-.658H4.5a1 1 0 110-2h1V9.471L7.44 8.223A1 1 0 007.323 6.5L6 6.207V5.62c0-.15.49-.688.974-1.158A.998.998 0 006 4c-.552 0-1-.224-1-.5s.448-.5 1-.5c.314 0 .615.074.886.208A4.494 4.494 0 018.394 2.08z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-dark-blue">{t('accreditation_title')}</h3>
                  <p className="text-gray-600">{t('accreditation_text')}</p>
                </div>
              </div>
            </motion.div>
            
            {/* 3D Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-white/10 shadow-xl animate-float z-0"></div>
            <div className="absolute -bottom-16 right-20 w-12 h-12 rounded-lg bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-md border border-white/10 shadow-lg animate-float-slow animate-spin-slow z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors z-10"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection; 