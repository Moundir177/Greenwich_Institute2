"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaHandshake, FaGlobeAmericas, FaAward, FaFileAlt, FaUserGraduate, FaChalkboardTeacher, FaArrowRight, FaShieldAlt, FaBriefcase, FaUniversity, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

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
    name: 'Peace Ambassadors Foundation',
    logo: '/images/logos/peace-ambassadors-logo.png',
    description: 'We hold the Peace Ambassadors certification in recognition of our efforts to promote social dialogue and build sustainable communities.',
    benefits: [
      'Promoting peace through education',
      'Community engagement initiatives',
      'Social dialogue facilitation'
    ],
    status: 'Certified Partner',
    icon: <FaHandshake className="text-gold" />,
    color: 'from-green-800 to-green-600',
    learnMoreUrl: '/certifications/peace-ambassadors'
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
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-24 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gold/30 to-gold/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 to-accent-blue/10 blur-3xl"></div>
        </div>

        {/* 3D Polygons */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 transform rotate-45 rounded-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-gold/20 transform -rotate-12 rounded-xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span 
                className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-gold text-sm font-medium mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Global Standards
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-serif font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our International <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold neon-text">Accreditations</span> and Partners
              </motion.h1>
              <motion.p 
                className="text-xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Greenwich HSTC's commitment to excellence is recognized by prestigious international organizations, ensuring our graduates receive globally respected qualifications.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href="#certifications" 
                  className="bg-gold text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors inline-flex items-center"
                >
                  View Certifications
                  <FaArrowRight className="ml-2" />
                </a>
                <Link 
                  href="/contact" 
                  className="bg-transparent border-2 border-white/50 text-white px-6 py-3 rounded-lg font-medium hover:border-white transition-colors"
                >
                  Verify a Certificate
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {CERTIFICATIONS.slice(0, 4).map((cert, index) => (
                      <motion.div 
                        key={cert.id}
                        className="bg-dark-blue/40 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center border border-white/10 hover:border-gold/50 transition-all transform hover:-translate-y-1 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative h-16 w-full">
                          <Image 
                            src={cert.logo} 
                            alt={cert.name} 
                            fill
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center mt-4 bg-dark-blue/50 rounded-lg py-2 px-4 backdrop-blur-sm">
                    <span className="text-gold text-sm font-medium">Globally Recognized Certifications</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="certifications" className="py-20 bg-gradient-to-b from-light-gray to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-dark-blue text-sm font-medium mb-3">
              Global Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-6">
              Committed to Global Standards
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Greenwich HSTC, we maintain the highest international standards through our partnerships with leading global organizations. These accreditations reflect our dedication to excellence in education, ethical practices, and social responsibility.
            </p>
          </motion.div>

          {/* Certifications Cards - Interactive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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
          
          {/* Impact Statistics */}
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
          
          {/* Additional Accreditations */}
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
          
          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-2xl p-10 border border-gold/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-dark-blue mb-4">
                  Verify Your Certificate
                </h2>
                <p className="text-gray-600 mb-6">
                  Employers and institutions can verify the authenticity of certificates issued by Greenwich HSTC using our secure verification system.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/verify-certificate" 
                    className="bg-dark-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-gold hover:text-dark-blue transition-colors inline-flex items-center"
                  >
                    Verify a Certificate
                    <FaFileAlt className="ml-2" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-transparent border-2 border-dark-blue text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-dark-blue hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-4">Quick Certificate Verification</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Certificate ID</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                      placeholder="Enter certificate ID"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Student Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                      placeholder="Enter student name"
                    />
                  </div>
                  <button className="w-full bg-gold text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-dark-blue hover:text-white transition-colors">
                    Verify Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage; 