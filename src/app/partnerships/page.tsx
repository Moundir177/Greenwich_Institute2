"use client";

import { useState, useEffect } from 'react';
import { FaHandshake, FaGlobe, FaUniversity, FaBuilding, FaSearch, FaFilter, FaChevronDown, FaCheck, FaStar, FaRegLightbulb } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Button from '@/components/ui/Button';

// Strategic partners data
const PARTNERS = [
  {
    id: 'ilo',
    name: 'International Labour Organization (ILO)',
    type: 'global',
    logo: '/images/logos/ilo-logo.png',
    description: 'Our partnership with the International Labour Organization establishes Greenwich HSTC as an accredited educational institution that adheres to global labor standards and best practices in vocational training. This strategic alliance enhances our curriculum with internationally recognized labor standards and employment practices.',
    benefits: [
      'Adherence to international labor standards',
      'Vocational training excellence certification',
      'Global employment best practices',
      'International recognition of our qualifications'
    ],
    role: 'The ILO partnership strengthens our position as a globally recognized institution by validating our training methodologies and ensuring our graduates possess skills that meet international employment standards.',
    featured: true,
    stats: {
      programs: 4,
      students: 2500,
      years: 7
    }
  },
  {
    id: 'peace-ambassadors',
    name: 'Peace Ambassadors Foundation',
    type: 'global',
    logo: '/images/logos/peace-ambassadors-logo.png',
    description: 'Our strategic partnership with the Peace Ambassadors Foundation enhances our commitment to promoting social dialogue and building sustainable communities. This collaboration infuses our educational approach with values of peace, cooperation, and community engagement.',
    benefits: [
      'Promoting peace through education',
      'Community engagement initiatives',
      'Social dialogue facilitation',
      'Sustainable development projects'
    ],
    role: 'The Peace Ambassadors Foundation partnership advances our mission to develop socially responsible graduates who contribute positively to their communities and promote peaceful dialogue in their professional environments.',
    featured: true,
    stats: {
      programs: 3,
      students: 1200,
      years: 5
    }
  },
  {
    id: 'sindibad',
    name: 'Sindibad Foundation',
    type: 'entrepreneurship',
    logo: '/images/logos/sindibad-logo.png',
    description: 'As founders of Sindibad Investment and Entrepreneurship, we collaborate to empower youth and entrepreneurs through providing resources, mentorship, and smart investments. This partnership is central to our entrepreneurship programs and initiatives.',
    benefits: [
      'Supporting emerging entrepreneurs',
      'Providing investment opportunities',
      'Mentorship and resource allocation',
      'Entrepreneurial skills development'
    ],
    role: 'The Sindibad Foundation partnership enables us to offer unique entrepreneurial opportunities to our students, connecting academic learning with real-world business development and investment resources.',
    featured: true,
    stats: {
      programs: 5,
      students: 1800,
      years: 4
    }
  },
  {
    id: 'pioneers-uae',
    name: 'Pioneers of Intellectual Development',
    type: 'uae',
    logo: '/images/logos/uae-pioneers-logo.png', 
    description: 'Based in the United Arab Emirates, Pioneers of Intellectual Development is dedicated to advancing educational excellence and fostering intellectual growth across the region. Their support and collaboration help us deliver innovative programs and expand our impact in the UAE and beyond.',
    benefits: [
      'Regional educational leadership',
      'Support for innovative learning initiatives',
      'Collaboration on intellectual development projects',
      'Expanding our reach in the UAE and GCC region'
    ],
    role: 'This partnership strengthens our presence in the UAE, enabling us to collaborate on pioneering educational projects and promote intellectual development throughout the region.',
    featured: true,
    stats: {
      programs: 3,
      students: 950,
      years: 3
    }
  },
  {
    id: 'morocco-entrepreneurs',
    name: 'Morocco Entrepreneurs Association',
    type: 'entrepreneurship',
    logo: '/images/logos/morocco-entrepreneurs-logo.png',
    description: 'The Morocco Entrepreneurs Association partnership connects our students with a network of successful business leaders and creates pathways for mentorship, internships, and job placements within the Moroccan business ecosystem.',
    benefits: [
      'Access to a network of 500+ established entrepreneurs',
      'Mentorship programs with industry leaders',
      'Exclusive internship opportunities',
      'Startup incubation support'
    ],
    role: 'This collaboration enriches our entrepreneurship curriculum with real-world insights and provides our students with valuable connections in the Moroccan business community.',
    featured: false,
    stats: {
      programs: 2,
      students: 780,
      years: 3
    }
  },
  {
    id: 'tech-alliance',
    name: 'North Africa Technology Alliance',
    type: 'technology',
    logo: '/images/logos/tech-alliance-logo.png',
    description: 'Our partnership with the North Africa Technology Alliance ensures our technology curriculum remains cutting-edge and aligned with industry needs. This collaboration provides our students with access to advanced technology resources, industry-standard certifications, and connections to tech companies across North Africa.',
    benefits: [
      'Industry-aligned technology curriculum',
      'Access to advanced software and hardware resources',
      'Technology certification pathways',
      'Regional tech industry connections'
    ],
    role: 'This strategic alliance ensures our technology programs produce graduates who are equipped with the skills and certifications demanded by the rapidly evolving North African tech sector.',
    featured: false,
    stats: {
      programs: 4,
      students: 650,
      years: 2
    }
  },
  {
    id: 'african-development',
    name: 'African Development Foundation',
    type: 'global',
    logo: '/images/logos/african-development-logo.png',
    description: 'The African Development Foundation partnership supports our mission to create educational opportunities that drive economic growth and sustainable development across Africa. This collaboration enables us to offer scholarships, develop specialized programs, and implement community development initiatives.',
    benefits: [
      'Scholarship programs for underserved communities',
      'Community development initiatives',
      'Research funding for sustainable development',
      'Pan-African educational collaborations'
    ],
    role: 'This partnership amplifies our impact across Africa by expanding access to quality education and supporting initiatives that address critical development challenges.',
    featured: false,
    stats: {
      programs: 3,
      students: 1100,
      years: 4
    }
  },
  {
    id: 'financial-inclusion',
    name: 'Financial Inclusion Institute',
    type: 'finance',
    logo: '/images/logos/financial-inclusion-logo.png',
    description: 'Our collaboration with the Financial Inclusion Institute enhances our finance-related programs with specialized content on financial inclusion, microfinance, and ethical banking practices. This partnership supports our commitment to economic empowerment and financial literacy.',
    benefits: [
      'Specialized curriculum on financial inclusion',
      'Microfinance project opportunities',
      'Financial literacy initiatives',
      'Ethical banking education'
    ],
    role: 'This partnership strengthens our ability to prepare finance professionals who can contribute to more inclusive, ethical financial systems that serve all segments of society.',
    featured: false,
    stats: {
      programs: 2,
      students: 430,
      years: 2
    }
  }
];

// Get unique partner types for filtering
const ALL_TYPES = Array.from(new Set(PARTNERS.map(partner => partner.type)));

export default function PartnershipsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePartner, setActivePartner] = useState<string | null>(null);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Filter partners based on user selection
  const filteredPartners = PARTNERS.filter(partner => {
    // Filter by type
    if (typeFilter !== 'all' && partner.type !== typeFilter) return false;
    
    // Filter by search query
    if (searchQuery && !partner.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !partner.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });
  
  // Get featured partners
  const featuredPartners = PARTNERS.filter(partner => partner.featured);
  
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">{t('partnerships_hero_title')}</span> {t('partnerships_hero_highlight')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              {t('partnerships_hero_description')}
            </p>

            {/* Featured Partners Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 mb-6"
            >
              <p className="text-white/80 text-sm uppercase tracking-wider mb-6">Our Key Strategic Partners</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {featuredPartners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)"
                    }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                    onClick={() => setActivePartner(partner.id)}
                  >
                    <div className="bg-white rounded-lg p-3 w-20 h-20 flex items-center justify-center mb-3">
                      <Image 
                        src={partner.logo} 
                        alt={partner.name} 
                        width={60} 
                        height={60} 
                        className="w-auto h-auto max-h-14 max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-white text-sm font-medium text-center group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-8 flex justify-center"
              >
                <button
                  onClick={() => document.getElementById('partners-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-white flex items-center text-sm group transition-colors duration-300"
                >
                  <span>Explore All Partnerships</span>
                  <span className="ml-2 transform group-hover:translate-y-1 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Impact Statistics */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-serif font-bold text-dark-blue mb-4">{t('partnerships_impact_title')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('partnerships_impact_description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-light-gray rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <FaHandshake className="text-gold text-2xl" />
              </div>
              <h3 className="text-4xl font-bold text-dark-blue mb-2">
                {PARTNERS.length}
              </h3>
              <p className="text-gray-600 font-medium">Strategic Partners</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-light-gray rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <FaGlobe className="text-gold text-2xl" />
              </div>
              <h3 className="text-4xl font-bold text-dark-blue mb-2">
                {PARTNERS.filter(p => p.type === 'global').length}
              </h3>
              <p className="text-gray-600 font-medium">Global Institutions</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-light-gray rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <FaUniversity className="text-gold text-2xl" />
              </div>
              <h3 className="text-4xl font-bold text-dark-blue mb-2">
                {PARTNERS.reduce((total, partner) => total + (partner.stats?.programs || 0), 0)}
              </h3>
              <p className="text-gray-600 font-medium">Collaborative Programs</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-light-gray rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <FaBuilding className="text-gold text-2xl" />
              </div>
              <h3 className="text-4xl font-bold text-dark-blue mb-2">
                {PARTNERS.reduce((total, partner) => total + (partner.stats?.students || 0), 0).toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium">Students Impacted</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="partners-section" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
            >
              {t('partnerships_main_title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-xl">
                {t('partnerships_main_description')}
              </p>
            </motion.div>
          </div>

          {/* Search and Filter */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dark-blue/40 bg-white placeholder-gray-400"
                />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <FaFilter className="text-dark-blue" />
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dark-blue/40"
                >
                    <option value="all">All Partners</option>
                    <option value="global">Global Institutions</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="uae">UAE Partners</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Financial Institutions</option>
                </select>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group hover:shadow-lg transition-all duration-300 ${activePartner === partner.id ? 'ring-2 ring-gold' : ''}`}
              >
                <div className="relative h-48 bg-gradient-to-r from-dark-blue to-blue-800 flex items-center justify-center p-6">
                  <div className="absolute inset-0 opacity-10">
                    <Image 
                      src="/images/patterns/pattern1.png" 
                      alt="Background pattern" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative bg-white p-4 rounded-lg shadow-md w-3/4 h-32 flex items-center justify-center">
                        <Image 
                          src={partner.logo}
                          alt={partner.name}
                      width={180} 
                      height={100} 
                      className="max-h-24 w-auto object-contain"
                        />
                  </div>
                          {partner.featured && (
                    <div className="absolute top-4 right-4 bg-gold/90 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      Featured Partner
                    </div>
                          )}
                        </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">{partner.name}</h3>
                  <div className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                    {partner.type === 'global' ? 'Global Institution' : 
                     partner.type === 'entrepreneurship' ? 'Entrepreneurship' :
                     partner.type === 'uae' ? 'UAE Partner' :
                     partner.type === 'technology' ? 'Technology' :
                     partner.type === 'finance' ? 'Financial Institution' : 
                     partner.type}
                      </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">{partner.description}</p>
                  
                  {/* Partner Statistics */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-light-gray p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-dark-blue">{partner.stats?.programs}</p>
                      <p className="text-xs text-gray-500">Programs</p>
                    </div>
                    <div className="bg-light-gray p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-dark-blue">{partner.stats?.students}</p>
                      <p className="text-xs text-gray-500">Students</p>
                    </div>
                    <div className="bg-light-gray p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-dark-blue">{partner.stats?.years}</p>
                      <p className="text-xs text-gray-500">Years</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setActivePartner(activePartner === partner.id ? null : partner.id)}
                    className="w-full bg-light-gray hover:bg-gold hover:text-white text-dark-blue font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    {activePartner === partner.id ? 'View Less' : 'View Details'} 
                    <FaChevronDown className={`ml-2 transition-transform duration-300 ${activePartner === partner.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {/* Expanded Details */}
                {activePartner === partner.id && (
                  <div className="bg-light-gray p-6 border-t border-gray-200">
                    <h4 className="font-semibold text-dark-blue mb-3">Partnership Benefits</h4>
                    <ul className="space-y-2 mb-6">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-dark-blue mb-3">Strategic Role</h4>
                    <p className="text-gray-600">{partner.role}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
            >
              La Puissance des Partenariats Stratégiques
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 mb-8"
            >
              Nos partenariats avec l'Organisation Internationale du Travail, la Fondation des Ambassadeurs de la Paix et la Fondation Sindibad forment la pierre angulaire de notre engagement envers l'excellence en éducation, la responsabilité sociale et le développement entrepreneurial.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                href="/certifications"
                variant="gold"
                size="lg"
                className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-gold transform hover:scale-105 transition-all duration-300"
              >
                Voir Nos Accréditations
              </Button>
              <Button
                href="/contact"
                variant="white"
                size="lg"
                className="hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Contactez-Nous
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 