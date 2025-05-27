"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaCheck, FaSearch, FaDownload, FaCertificate, FaUserGraduate, FaBriefcase, FaGlobe, FaChevronRight, FaPlay } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import CertificateDisplay from '@/components/certificates/CertificateDisplay';

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

const certificateTypes = [
  {
    title: 'Course Completion Certificates',
    description: 'Awarded upon successful completion of a course, indicating mastery of the subject matter and fulfillment of all requirements.',
    icon: FaCertificate as IconType,
  },
  {
    title: 'Professional Certifications',
    description: 'Industry-recognized credentials that validate specific skills and knowledge in professional domains.',
    icon: FaUserGraduate as IconType,
  },
  {
    title: 'Specialized Diplomas',
    description: 'Comprehensive certifications for completion of multiple related courses forming a specialized skill set.',
    icon: FaBriefcase as IconType,
  },
  {
    title: 'International Qualifications',
    description: 'Globally recognized certifications developed in partnership with international education bodies.',
    icon: FaGlobe as IconType,
  },
];

const AccreditationLogos = [
  {
    name: "Australian Skills Quality Authority",
    imageSrc: "/images/accreditations/logo1.png",
  },
  {
    name: "Quality Assurance Agency",
    imageSrc: "/images/accreditations/logo2.png",
  },
  {
    name: "University of Cambridge",
    imageSrc: "/images/accreditations/logo3.png",
  },
  {
    name: "UNESCO",
    imageSrc: "/images/accreditations/logo4.png",
  },
];

export default function CertificatesPage() {
  const [showVideo, setShowVideo] = useState(false);
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white py-20 md:pt-32 overflow-hidden">
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
                Certificates & 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold block mt-3">
                  Accreditation
                </span>
              </motion.h1>
              
              <motion.p 
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              >
                Our industry-recognized certificates validate your skills and enhance your professional credentials in today's competitive job market.
              </motion.p>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#verify-certificate" 
                  className="relative group overflow-hidden bg-gradient-to-r from-gold to-amber-500 text-dark-blue px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-15px_rgba(240,198,116,0.5)]"
                >
                  <span className="relative z-10 flex items-center">
                    Verify Certificate
                    <FaChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
                
                <button
                  onClick={() => setShowVideo(true)}
                  className="relative overflow-hidden bg-transparent border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/10 transform hover:translate-y-[-2px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center">
                    <span className="w-8 h-8 mr-3 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <FaPlay className="ml-0.5 text-xs" />
                    </span>
                    Watch Video
                  </span>
                </button>
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
                    src="/images/certificates/sample-certificate.jpg" 
                    alt="Greenwich Certificate Sample"
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
                    <FaCertificate className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-dark-blue">Globally Recognized</h3>
                    <p className="text-gray-600">Our certificates are valued by employers worldwide</p>
                  </div>
                </div>
              </motion.div>
              
              {/* 3D Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-white/10 shadow-xl animate-float z-0"></div>
              <div className="absolute -bottom-16 right-20 w-12 h-12 rounded-lg bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-md border border-white/10 shadow-lg animate-float-slow animate-spin-slow z-0"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: "1.2s" }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
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

      {/* Introduction */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="badge badge-primary inline-block"
            >
              Recognition
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="section-title text-uk-blue"
            >
              <span className="gradient-text">Internationally Recognized Credentials</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg max-w-3xl mx-auto"
            >
              Greenwich offers a range of certificates and qualifications designed to validate your skills and enhance your employability in today's competitive job market.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificateTypes.map((type, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card-3d"
              >
                <Card variant="elevated" className="h-full bg-gradient-to-b from-white to-gray-50 border border-gray-100 hover:border-blue-100 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-uk-blue to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gold shadow-lg shadow-blue-200/50">
                      <type.icon size={32} className="text-gold animate-pulse" />
                    </div>
                    <h3 className="card-title text-center mb-3 text-uk-blue">{type.title}</h3>
                    <p className="text-center text-gray-600">{type.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificate Showcase */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-uk-blue opacity-5 rounded-full filter blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold opacity-5 rounded-full filter blur-[100px]"></div>
        
        {/* 3D floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-uk-blue/10 rounded-xl transform rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold/10 rounded-full transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-uk-blue/5 rounded-lg transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-32 right-1/4 w-24 h-24 bg-gold/5 rounded-full transform -rotate-6 animate-float"></div>
        
        <div className="container relative z-10">
          <CertificateDisplay 
            certificateImageUrl="/images/certificates/sample-certificate.jpg"
            title="Premium Quality Certification"
            description="Each Greenwich certificate is meticulously designed to reflect the prestige and quality of your educational achievement, featuring premium materials and advanced security features."
            features={[
                  'Secure verification with unique identification numbers',
                  'Official seals and signatures from institutional authorities',
                  'Premium paper quality with anti-forgery features',
                  'Digital versions available for online sharing and verification',
                  'Recognition by industry partners and employers'
            ]}
          />
        </div>
      </section>
      
      {/* Wave Separator */}
      <div className="wave-separator-container white">
        <div className="blue-outline-top"></div>
        <div className="wave-shape white"></div>
        <div className="blue-outline-bottom"></div>
      </div>
      
      {/* Verification Process */}
      <section id="verify-certificate" className="section bg-uk-white relative overflow-hidden py-24">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold/10 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-uk-blue/10 to-transparent z-0"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/5 filter blur-[60px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/10 rounded-xl transform rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-uk-blue/10 rounded-full transform rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-dashed border-uk-blue/10 rounded-lg transform -rotate-12 animate-spin-very-slow"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block relative"
            >
              <span className="badge badge-secondary px-4 py-2 text-sm">
                <span className="relative inline-flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Authenticity System
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="section-title text-uk-blue mt-6 mb-4 text-4xl md:text-5xl font-serif"
            >
              Certificate <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold relative">
                Verification
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,2.5 C15,0 35,5 50,2.5 C65,0 85,5 100,2.5" fill="none" stroke="#FFC451" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg max-w-3xl mx-auto text-gray-600 mb-2"
            >
              Our secure verification system allows employers and institutions to easily verify the authenticity of your Greenwich credentials.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-4xl"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-uk-blue/80 via-blue-500/80 to-uk-blue/80 z-0"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold opacity-30 rounded-full filter blur-[40px] animate-pulse-slow z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-400 opacity-30 rounded-full filter blur-[40px] animate-pulse-slow z-0" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-xl m-1 p-8 md:p-10 z-10">
              {/* Glass card effect with subtle patterns */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-xl"></div>
              
              <div className="max-w-3xl mx-auto relative z-20">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                  <h3 className="text-2xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-blue-600 to-uk-blue mb-4 md:mb-0">
                    <span className="relative inline-block">
                      <span className="relative z-10">Verify a Certificate</span>
                      <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-gold/40 to-amber-300/40 rounded-full transform"></span>
                    </span>
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full relative">
                      <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></span>
                    </div>
                    <span>Verification System Online</span>
                  </div>
                </div>
                
                <div className="relative mb-8 group transform transition-all duration-300 hover:scale-[1.01]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-uk-blue to-gold opacity-50 blur-sm rounded-lg"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400 group-focus-within:text-uk-blue transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter certificate ID (e.g., UK-CERT-12345)"
                      className="block w-full pl-12 pr-4 py-5 border-0 focus:ring-2 focus:ring-uk-blue/20 focus:outline-none rounded-md leading-6 bg-white placeholder-gray-400 focus:placeholder-gray-300 transition-all duration-300 text-lg"
                  />
                </div>
                </div>
                
                <div className="text-center mb-10">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group overflow-hidden bg-gradient-to-r from-uk-blue to-blue-600 text-white px-10 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-blue-300/30"
                  >
                    <span className="relative z-10 flex items-center justify-center text-lg">
                      <FaSearch className="mr-2" />
                      Verify Certificate
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/70 to-amber-500/70 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                    <span className="absolute -inset-px bg-gradient-to-r from-gold/30 to-amber-300/30 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 group-hover:duration-200"></span>
                  </motion.button>
                </div>
                
                {/* Sample Verification Result - For UI Demonstration */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mb-10 overflow-hidden rounded-xl border border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-green-100"
                >
                  <div className="bg-green-600/10 px-6 py-3 border-b border-green-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md mr-3">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <h4 className="font-bold text-green-800 text-lg">Certificate Verified Successfully</h4>
                      <div className="ml-auto">
                        <button className="text-green-600 hover:text-green-800 transition-colors p-2 hover:bg-green-100 rounded-full">
                          <FaDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-sm font-semibold text-gray-500 mb-1">Certificate ID</h5>
                        <p className="text-gray-800 font-medium text-lg">UK-CERT-23456</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-sm font-semibold text-gray-500 mb-1">Issue Date</h5>
                        <p className="text-gray-800 font-medium text-lg">June 15, 2023</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-sm font-semibold text-gray-500 mb-1">Recipient</h5>
                        <p className="text-gray-800 font-medium text-lg">John A. Smith</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-sm font-semibold text-gray-500 mb-1">Program</h5>
                        <p className="text-gray-800 font-medium text-lg">Advanced Diploma in Business Management</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-green-200">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <FaCertificate className="text-white text-lg" />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            This certificate has been verified as an authentic credential issued by Greenwich. This online verification is valid as of <span className="font-medium">August 3, 2023</span>.
                          </p>
                          <div className="mt-4 flex space-x-3">
                            <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-medium flex items-center">
                              <FaCheck className="mr-1 text-xs" /> Authentic
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium flex items-center">
                              <FaGlobe className="mr-1 text-xs" /> Globally Recognized
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="font-bold text-xl text-uk-blue mb-8 flex items-center">
                      <span className="w-10 h-10 bg-gradient-to-br from-uk-blue to-blue-600 text-white flex items-center justify-center rounded-full mr-4 shadow-lg">
                        <FaCheck className="w-4 h-4" />
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-blue-700 to-uk-blue">How to verify a certificate:</span>
                    </h4>
                    <ol className="space-y-6">
                    {[
                      'Enter the certificate ID found on the bottom of the certificate',
                      'Click the "Verify Certificate" button',
                      'View the verification results, including issue date and course details',
                      'For additional verification, contact our certification office'
                    ].map((step, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                          className="flex items-start group"
                      >
                          <div className="mr-5 bg-gradient-to-br from-uk-blue to-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300 group-hover:scale-110">
                          {index + 1}
                        </div>
                          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-uk-blue flex-1 group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                            <span className="text-gray-700">{step}</span>
                          </div>
                      </motion.li>
                    ))}
                  </ol>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Accreditation */}
      <section className="py-24 bg-gradient-to-b from-uk-blue via-uk-blue-dark to-uk-blue relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 opacity-10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold opacity-10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gold opacity-5 rounded-full"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 border border-gold/20 rounded-lg transform rotate-12 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border border-white/10 rounded-full transform -rotate-45 animate-float"></div>
          </div>
          
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="badge badge-gold px-4 py-2 backdrop-blur-sm border border-gold/30 shadow-lg shadow-gold/10">Excellence & Recognition</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-6 mb-4"
              >
                Our <span className="relative">
                  Accreditations
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,2.5 C15,0 35,5 50,2.5 C65,0 85,5 100,2.5" fill="none" stroke="#FFC451" strokeWidth="1.5" />
                  </svg>
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/90 max-w-3xl mx-auto mt-6"
              >
                Greenwich is proud to be accredited by leading educational and professional organizations, 
                ensuring our certificates meet the highest standards of quality and are recognized globally.
              </motion.p>
            </div>
            
            {/* 3D Logos display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {AccreditationLogos.map((logo, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 } 
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/30 to-gold/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] transform transition-all duration-300 group-hover:shadow-gold/10 group-hover:shadow-2xl">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gold/20 rounded-full filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-24 h-24 mx-auto bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center p-4 shadow-inner transition-all duration-300 group-hover:bg-white/20">
                          {/* When actual logos are available, use them */}
                          <div className="w-full h-full bg-white/90 rounded-full flex items-center justify-center text-uk-blue font-bold p-2">
                            <img 
                              src={logo.imageSrc} 
                              alt={logo.name}
                              className="max-w-full max-h-full object-contain filter saturate-150 contrast-125"
                              onError={(e) => {
                                // Fallback if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.textContent = logo.name;
                              }}
                            />
                    </div>
                  </div>
                </div>
                      
                      <h3 className="text-lg font-semibold text-gold mb-2">{logo.name}</h3>
                      <p className="text-white/70 text-sm text-center">
                        {index === 0 && "Ensuring international education standards"}
                        {index === 1 && "Guaranteeing academic quality assurance"}
                        {index === 2 && "Official higher education recognition"}
                        {index === 3 && "International qualification framework"}
                      </p>
                      
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/20">
                          Verified Partner
                        </span>
              </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
          
            {/* Benefits panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-uk-blue via-transparent to-uk-blue/80 opacity-30"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gold mb-8 text-center">Why Our Accreditations Matter</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Global Recognition",
                      desc: "Our accreditations ensure your certificates are recognized by employers and institutions worldwide.",
                      icon: <FaGlobe className="text-gold text-2xl" />
                    },
                    {
                      title: "Quality Assurance",
                      desc: "External validation guarantees our programs meet rigorous educational standards.",
                      icon: <FaCheck className="text-gold text-2xl" />
                    },
                    {
                      title: "Career Advancement",
                      desc: "Accredited qualifications provide a significant advantage in competitive job markets.",
                      icon: <FaUserGraduate className="text-gold text-2xl" />
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.8 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="mb-4 w-12 h-12 rounded-full bg-uk-blue/50 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-lg">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gold mb-2">{item.title}</h4>
                      <p className="text-white/80">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="mt-16 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a 
                  href="/about" 
                  className="relative inline-flex group items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 shadow-lg hover:shadow-white/5 transition-all duration-300 hover:bg-white/20"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative flex items-center">
              Learn More About Our Institution
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Help</span>
            <h2 className="section-title text-uk-blue mt-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Find answers to common questions about our certificates and verification process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to receive my certificate?",
                  answer: "Digital certificates are typically issued within 2-3 business days after course completion. Physical certificates are mailed within 7-10 business days, depending on your location."
                },
                {
                  question: "Are your certificates internationally recognized?",
                  answer: "Yes, our certificates are accredited by recognized educational authorities and industry bodies, ensuring they are valued by employers and institutions worldwide."
                },
                {
                  question: "What if I lose my certificate?",
                  answer: "You can request a replacement certificate through your student portal. Digital certificates can be redownloaded at any time, while physical replacements incur a small fee."
                },
                {
                  question: "How can employers verify my certificate?",
                  answer: "Employers can verify the authenticity of your certificate using the unique certificate ID through our online verification portal or by contacting our certification office directly."
                }
              ].map((faq, index) => (
                <div key={index} className="card uk-border-gradient animate-fadeIn" style={{ animationDelay: `${index * 0.15}s` }}>
                  <h3 className="text-lg font-bold text-uk-blue mb-2 gradient-text">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-uk-blue-dark to-uk-blue">
        <div className="container">
          <div className="callout-ribbon p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-fadeIn">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Get Certified?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Enhance your career prospects with industry-recognized certifications from Greenwich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
                >
                  Explore Our Courses
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
    </>
  );
} 