"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaHandshake, FaGlobeAmericas, FaAward, FaFileAlt, FaUserGraduate, FaChalkboardTeacher, FaArrowRight, FaShieldAlt, FaBriefcase, FaUniversity, FaTrophy, FaSearch } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import PageLayout from '../components/PageLayout';

// Certification data
const CERTIFICATIONS = [
  {
    id: 'ilo',
    name: 'International Labor Organization (ILO)',
    logo: '/images/logos/ilo-logo.png',
    description: 'We are an accredited partner of the ILO, confirming our commitment to implementing best labor and vocational training practices globally.',
    benefits: [
      'Adherence to international labor standards',
      'Vocational training excellence certification',
      'Global employment best practices'
    ],
    status: 'Official Accreditation',
    icon: <FaAward className="text-gold" />,
    color: 'from-blue-900 to-blue-700',
    learnMoreUrl: '/certifications/ilo'
  },
  {
    id: 'peace-ambassadors',
    name: 'Pioneers of Intellectual Development Training Center (PIDTC)',
    logo: '/images/logos/peace-ambassadors-logo.png',
    description: 'We are officially recognized by the Pioneers of Intellectual Development Training Center, promoting educational excellence and intellectual development across the Arab region.',
    benefits: [
      'Educational excellence certification',
      'Professional development programs',
      'Training and certification standards',
      'Regional educational leadership'
    ],
    status: 'Official Partner',
    icon: <FaHandshake className="text-gold" />,
    color: 'from-blue-700 to-blue-500',
    learnMoreUrl: '/certifications/pidtc'
  },
  {
    id: 'sindibad',
    name: 'Sindibad Foundation',
    logo: '/images/logos/sindibad-logo.png',
    description: 'As founders of Sindibad Investment and Entrepreneurship, we work to empower youth and entrepreneurs through providing resources and smart investments.',
    benefits: [
      'Supporting emerging entrepreneurs',
      'Providing investment opportunities',
      'Mentorship and resource allocation'
    ],
    status: 'Founding Organization',
    icon: <FaBriefcase className="text-gold" />,
    color: 'from-amber-700 to-amber-500',
    learnMoreUrl: '/certifications/sindibad'
  },
  {
    id: 'pioneers',
    name: 'Pioneers of Intellectual Development',
    logo: '/images/logos/pioneers-logo.png',
    description: 'Our strategic partnership strengthens our presence in the UAE, enabling us to collaborate on pioneering educational projects across the region.',
    benefits: [
      'Regional educational leadership',
      'Innovative curriculum development',
      'Cross-border educational initiatives'
    ],
    status: 'Strategic Partner',
    icon: <FaUniversity className="text-gold" />,
    color: 'from-purple-800 to-purple-600',
    learnMoreUrl: '/certifications/pioneers'
  }
];

// Additional accreditations and recognitions
const ADDITIONAL_ACCREDITATIONS = [
  { name: 'International Association of Universities', logo: '/images/logos/iau-logo.png' },
  { name: 'Quality Assurance Agency for Higher Education', logo: '/images/logos/qaa-logo.png' },
  { name: 'European Association for Quality Assurance', logo: '/images/logos/eaqa-logo.png' },
  { name: 'UNESCO Institute for Lifelong Learning', logo: '/images/logos/unesco-logo.png' },
  { name: 'International Network for Quality Assurance', logo: '/images/logos/inqa-logo.png' },
  { name: 'Association of Arab Universities', logo: '/images/logos/aau-logo.png' }
];

// Impact statistics
const IMPACT_STATS = [
  { number: '15+', label: 'International Accreditations', icon: <FaTrophy className="text-gold text-4xl" /> },
  { number: '120', label: 'Countries Recognizing Our Certifications', icon: <FaGlobeAmericas className="text-gold text-4xl" /> },
  { number: '50k+', label: 'Graduates with Accredited Certificates', icon: <FaUserGraduate className="text-gold text-4xl" /> },
  { number: '94%', label: 'Employer Satisfaction Rate', icon: <FaShieldAlt className="text-gold text-4xl" /> }
];

const CertificationsPage = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  // Initialize particles
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

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
                }
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Main heading */}
            <div className="w-full lg:w-1/2">
              <div className="mb-4">
                <span className="bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full">Trusted Credentials</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Verify <span className="text-gold">Your</span><br />
                Greenwich <span className="text-white/80">Certificates</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Our secure verification system ensures the authenticity and integrity of all certificates issued by Greenwich.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold">50K+</h3>
                  <p className="text-white/70 text-sm mt-1">Certificates Issued</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold">100%</h3>
                  <p className="text-white/70 text-sm mt-1">Verification Accuracy</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold">24/7</h3>
                  <p className="text-white/70 text-sm mt-1">Online Verification</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold">Global</h3>
                  <p className="text-white/70 text-sm mt-1">Recognition</p>
                </div>
              </div>
            </div>
            
            {/* Right side - Verification form */}
            <div className="w-full lg:w-5/12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Verify Certificate</h2>
              <p className="text-white/80 mb-6">
                Enter your Certificate ID to verify its authenticity and access your certificate details.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Certificate ID</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="e.g., RA-2023-00123"
                  />
                  <p className="text-white/60 text-xs mt-2">Try demo IDs: RA-2023-00123 or 2023-MBA-00456</p>
                        </div>
                
                <button className="w-full bg-gold text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors flex items-center justify-center">
                  <FaSearch className="mr-2" /> Verify Certificate
                </button>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center text-white/70 text-sm">
                    <FaShieldAlt className="mr-2 text-gold" /> Secure Verification
                  </div>
                  <Link href="/verification-faq" className="text-gold text-sm hover:underline flex items-center">
                    Learn more <FaArrowRight className="ml-1 text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Accreditations Section - Keep existing */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-dark-blue mb-4">
                Our International Accreditations
            </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Greenwich HSTC is proud to be recognized by these prestigious accrediting bodies worldwide
            </p>
            </div>

            <div id="certifications" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
                key={cert.id}
                className={`bg-gradient-to-br ${cert.color} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-white relative group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16"></div>
                
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl w-24 h-24 flex items-center justify-center shrink-0">
                  <Image 
                        src={cert.logo} 
                        alt={cert.name} 
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                      <div className="inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                        {cert.icon}
                        <span className="ml-2">{cert.status}</span>
                </div>
              </div>
                  </div>
                  
                  <p className="mb-6 text-white/90 leading-relaxed">
                    "{cert.description}"
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {cert.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                        <p className="text-white/90">{benefit}</p>
                  </div>
                    ))}
                </div>
                
                  <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                    <div className="text-white/80 text-sm">
                      Globally Recognized
                </div>
                    <Link 
                      href={cert.learnMoreUrl}
                      className="inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                    >
                      Learn More
                      <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
              </div>
          </motion.div>

          {/* Impact Statistics - Keep existing */}
          <div className="bg-dark-blue rounded-2xl p-10 mb-24 shadow-xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-2">
                Our Global Impact
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                The reach and recognition of our accreditations and certifications
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {IMPACT_STATS.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform transition-transform hover:scale-105"
                  variants={itemVariant}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Accreditations - Keep existing */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-dark-blue mb-4">
                Additional Recognitions
            </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are also recognized by these prestigious organizations worldwide
              </p>
              </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {ADDITIONAL_ACCREDITATIONS.map((item, index) => (
            <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all flex items-center justify-center h-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
            >
                  <div className="relative w-full h-16">
                    <Image 
                      src={item.logo} 
                      alt={item.name} 
                      fill
                      className="object-contain"
                    />
              </div>
            </motion.div>
              ))}
            </div>
            </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CertificationsPage; 