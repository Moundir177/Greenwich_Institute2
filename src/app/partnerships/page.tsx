"use client";

import { useState, useEffect } from 'react';
import { FaHandshake, FaGlobe, FaUniversity, FaBuilding, FaSearch, FaFilter, FaChevronDown } from 'react-icons/fa';
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
    name: 'International Labor Organization (ILO)',
    type: 'global',
    logo: '/images/logos/ilo-logo.png',
    description: 'Our partnership with the International Labor Organization establishes Greenwich HSTC as an accredited educational institution that adheres to global labor standards and best practices in vocational training. This strategic alliance enhances our curriculum with internationally recognized labor standards and employment practices.',
    benefits: [
      'Adherence to international labor standards',
      'Vocational training excellence certification',
      'Global employment best practices',
      'International recognition of our qualifications'
    ],
    role: 'The ILO partnership strengthens our position as a globally recognized institution by validating our training methodologies and ensuring our graduates possess skills that meet international employment standards.',
    featured: true
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
    featured: true
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
    featured: true
  },
  {
    id: 'pioneers-uae',
    name: 'Pioneers of intellectual development',
    type: 'uae',
    logo: '/images/logos/uae-pioneers-logo.png', // Placeholder, update with actual logo if available
    description: 'Based in the United Arab Emirates, Pioneers of intellectual development is dedicated to advancing educational excellence and fostering intellectual growth across the region. Their support and collaboration help us deliver innovative programs and expand our impact in the UAE and beyond.',
    benefits: [
      'Regional educational leadership',
      'Support for innovative learning initiatives',
      'Collaboration on intellectual development projects',
      'Expanding our reach in the UAE and GCC region'
    ],
    role: 'This partnership strengthens our presence in the UAE, enabling us to collaborate on pioneering educational projects and promote intellectual development throughout the region.',
    featured: true
  }
];

// Get unique partner types for filtering
const ALL_TYPES = Array.from(new Set(PARTNERS.map(partner => partner.type)));

export default function PartnershipsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
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
      <section className="relative min-h-[70vh] bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white py-20 overflow-hidden">
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
              Strategic <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Partnerships</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Our strategic partners play a vital role in advancing our educational mission and creating exceptional opportunities for our students.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Strategic Partners & Their Impact</h2>
            <p className="text-gray-600">
              These key organizations collaborate with Greenwich HSTC to enhance our educational offerings, strengthen our global presence, and create valuable opportunities for our students and faculty.
            </p>
          </div>

          {/* All Partners */}
          <div className="space-y-16">
            {PARTNERS.map((partner) => (
              <motion.div
                key={partner.id}
                id={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-8 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <Image 
                        src={partner.logo}
                        alt={partner.name}
                        width={240}
                        height={160}
                        className="w-full object-contain mx-auto"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">{partner.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)} Partnership
                      </span>
                    </div>
                    
                    {/* Strategic Role Section */}
                    <div className="mb-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 text-xl mb-3">Strategic Role:</h4>
                      <p className="text-gray-700 text-lg">
                        {partner.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg">
                      {partner.description}
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Partnership Benefits:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {partner.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gold mr-2 mt-1">•</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-dark-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              The Power of Strategic Partnerships
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our partnerships with the International Labor Organization, Peace Ambassadors Foundation, and Sindibad Foundation form the cornerstone of our commitment to excellence in education, social responsibility, and entrepreneurial development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="/certifications"
                variant="gold"
                size="lg"
              >
                View Our Accreditations
              </Button>
              <Button
                href="/contact"
                variant="white"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 