"use client";

import { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import { 
  FaSearch, 
  FaChevronDown, 
  FaChevronUp, 
  FaGraduationCap, 
  FaMoneyBillWave, 
  FaCertificate, 
  FaLaptop, 
  FaLightbulb, 
  FaHeadset, 
  FaQuestion,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { AccordionItem } from '@/components/ui/Accordion';

import { faqCategories } from '@/data/faqData';

export default function FAQPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState<Array<any>>([]);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  // Filter FAQs based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredFaqs([]);
      return;
    }
    
    const lowercasedQuery = searchQuery.toLowerCase();
    const results = faqCategories.flatMap(category => 
      category.faqs
        .filter(faq => 
          faq.question.toLowerCase().includes(lowercasedQuery) || 
          (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(lowercasedQuery))
        )
        .map(faq => ({
          ...faq,
          categoryId: category.id,
          categoryTitle: category.title,
          categoryIcon: category.icon
        }))
    );
    
    setFilteredFaqs(results);
  }, [searchQuery]);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Scroll to FAQs section
  const scrollToFaqs = () => {
    faqSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue py-24 overflow-hidden">
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
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10 shadow-lg">
              <FaQuestion className="text-gold mr-2" />
              <span className="text-white text-sm">Find answers to your questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
              {t('faq_hero_title')}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold block mt-3">
                {t('faq_hero_highlight')}
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              {t('faq_hero_description')}
              Can't find what you're looking for? <Link href="/contact" className="text-gold hover:underline">Contact us</Link>.
            </p>
          
          {/* Enhanced Search Box */}
            <div className="relative w-full max-w-2xl mx-auto mb-16">
              <div className="relative flex items-center rounded-full overflow-hidden shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={handleSearchChange}
                  className="w-full py-5 px-6 pl-14 text-gray-900 rounded-full outline-none text-lg bg-white/95"
              />
                <div className="absolute left-5 text-gray-500">
                  <FaSearch size={18} />
              </div>
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                    className="absolute right-5 text-gray-500 hover:text-gray-700 p-2"
                >
                  <span className="sr-only">Clear search</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          
              {/* Quick category pills below search */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {faqCategories.slice(0, 4).map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      scrollToFaqs();
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-200 border border-white/10 flex items-center gap-2"
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={scrollToFaqs}
              className="group flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <span className="relative inline-flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/30 opacity-75"></span>
                <span className="animate-bounce relative inline-flex rounded-full p-2 bg-white/10 backdrop-blur-sm">
                  <FaChevronDown className="h-5 w-5" />
                </span>
              </span>
              <span className="text-xs mt-2 tracking-wider font-medium">Scroll to explore</span>
            </button>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
                  </svg>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section ref={faqSectionRef} className="py-16 bg-white">
        <div className="container">
          {/* FAQ Category Navigation Tabs - Top Section (Hero-style tabs) */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {/* Large Category Buttons like in the image */}
              <button
                onClick={() => setActiveCategory('courses')}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 min-w-[260px] ${
                  activeCategory === 'courses'
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-blue-50 text-dark-blue hover:bg-blue-100 border border-blue-100'
                }`}
              >
                <div className={`p-2 rounded-full ${activeCategory === 'courses' ? 'bg-white/20' : 'bg-blue-200/40'}`}>
                  <FaLightbulb className="h-5 w-5" />
                </div>
                <span className="font-medium">Courses & Curriculum</span>
              </button>
              
              <button
                onClick={() => setActiveCategory('payments')}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 min-w-[260px] ${
                  activeCategory === 'payments'
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-blue-50 text-dark-blue hover:bg-blue-100 border border-blue-100'
                }`}
              >
                <div className={`p-2 rounded-full ${activeCategory === 'payments' ? 'bg-white/20' : 'bg-blue-200/40'}`}>
                  <FaMoneyBillWave className="h-5 w-5" />
                </div>
                <span className="font-medium">Fees & Payment</span>
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                onClick={() => setActiveCategory('certifications')}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 min-w-[260px] ${
                  activeCategory === 'certifications'
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-blue-50 text-dark-blue hover:bg-blue-100 border border-blue-100'
                }`}
              >
                <div className={`p-2 rounded-full ${activeCategory === 'certifications' ? 'bg-white/20' : 'bg-blue-200/40'}`}>
                  <FaCertificate className="h-5 w-5" />
                </div>
                <span className="font-medium">Certificates & Accreditation</span>
              </button>
              
              <button
                onClick={() => setActiveCategory('technical')}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 min-w-[260px] ${
                  activeCategory === 'technical'
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-blue-50 text-dark-blue hover:bg-blue-100 border border-blue-100'
                }`}
              >
                <div className={`p-2 rounded-full ${activeCategory === 'technical' ? 'bg-white/20' : 'bg-blue-200/40'}`}>
                  <FaLaptop className="h-5 w-5" />
                </div>
                <span className="font-medium">Technical Requirements</span>
              </button>
            </div>
            
            {/* Active Category Heading */}
            <div className="text-center mt-12">
              {activeCategory === 'courses' && (
                <div className="flex items-center justify-center mb-8">
                  <span className="p-3 rounded-full bg-gold/10 mr-4">
                    <FaLightbulb className="h-6 w-6 text-gold" />
                  </span>
                  <h2 className="text-3xl font-bold text-dark-blue">Courses & Curriculum</h2>
                </div>
              )}
              
              {activeCategory === 'payments' && (
                <div className="flex items-center justify-center mb-8">
                  <span className="p-3 rounded-full bg-gold/10 mr-4">
                    <FaMoneyBillWave className="h-6 w-6 text-gold" />
                  </span>
                  <h2 className="text-3xl font-bold text-dark-blue">Fees & Payment</h2>
                </div>
              )}
              
              {activeCategory === 'certifications' && (
                <div className="flex items-center justify-center mb-8">
                  <span className="p-3 rounded-full bg-gold/10 mr-4">
                    <FaCertificate className="h-6 w-6 text-gold" />
                  </span>
                  <h2 className="text-3xl font-bold text-dark-blue">Certificates & Accreditation</h2>
                </div>
              )}
              
              {activeCategory === 'technical' && (
                <div className="flex items-center justify-center mb-8">
                  <span className="p-3 rounded-full bg-gold/10 mr-4">
                    <FaLaptop className="h-6 w-6 text-gold" />
                  </span>
                  <h2 className="text-3xl font-bold text-dark-blue">Technical Requirements</h2>
                </div>
              )}
            </div>
          </div>
          
          {searchQuery ? (
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 bg-light-gray rounded-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-dark-blue mb-2 flex items-center">
                  <FaSearch className="mr-3 text-gold" />
                  Search Results
                </h2>
                <p className="text-gray-600">
                  Found {filteredFaqs.length} results for "<span className="font-medium text-dark-blue">{searchQuery}</span>"
                </p>
              </div>
              
              {filteredFaqs.length > 0 ? (
                <div className="space-y-6">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm transition-all hover:shadow-md border border-gray-100">
                      <div className="flex items-start mb-3">
                        <div className="mr-4 p-3 rounded-full bg-gold/10 text-gold">
                          {faq.categoryIcon}
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{faq.categoryTitle}</span>
                          <h3 className="text-lg font-semibold text-dark-blue mt-1">{faq.question}</h3>
                        </div>
                      </div>
                      <div className="pl-16 border-l-2 border-gold/20 ml-6">
                          <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                  <FaQuestion className="mx-auto h-16 w-16 text-gray-300 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">No results found</h3>
                  <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                    We couldn't find any matches for your query. Try using different keywords or browse our FAQ categories below.
                  </p>
              <button 
                onClick={clearSearch}
                    className="bg-gold hover:bg-amber-500 text-white px-8 py-3 rounded-lg transition-colors shadow-md font-medium"
              >
                    Browse All FAQs
              </button>
            </div>
          )}
            </div>
          ) : (
            <div>

              {/* Active Category Content - Enhanced */}
          <div className="max-w-4xl mx-auto">
                {faqCategories.map((category) => (
                  <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
                    
                    <div className="space-y-4 relative">
                      {/* Decorative line */}
                      <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-light-gray to-transparent z-0"></div>
                      
                            {category.faqs.map((faq, index) => (
                              <AccordionItem 
                                key={index} 
                                title={faq.question}
                                defaultOpen={index === 0}
                          variant="fancy"
                          icon="chevron"
                          iconColor="text-dark-blue"
                          titleClassName="text-lg font-semibold text-dark-blue"
                          contentClassName="px-4"
                        >
                                <p className="text-gray-700">{faq.answer}</p>
                              </AccordionItem>
                            ))}
                    </div>
                      </div>
                    ))}
              </div>
            </div>
              )}
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-light-gray to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeadset className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our support team is available around the clock to answer your questions</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">500+ FAQs</h3>
                <p className="text-gray-600">Comprehensive knowledge base covering all aspects of our services</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">98% Satisfaction</h3>
                <p className="text-gray-600">Our support team consistently achieves high satisfaction ratings</p>
              </div>
            </div>
            
            {/* Contact card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <Image 
                  src="/images/patterns/pattern2.png" 
                  alt="Background pattern" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid md:grid-cols-2 relative z-10">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-6 w-fit">
                    <FaQuestion className="text-blue-600 mr-2" />
                    <span className="text-blue-600 text-sm font-medium">Need more help?</span>
                  </div>
                  <h3 className="text-3xl font-bold text-dark-blue mb-6">Still Have Questions?</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Our dedicated support team is ready to assist you with any specific questions you may have about our programs, services, or enrollment process.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-50 p-3 rounded-full mr-4">
                        <FaPhone className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Call us at</p>
                        <a href="tel:+442071234567" className="text-dark-blue font-medium hover:text-gold transition-colors">
                          +44 20 7123 4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-amber-50 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email us at</p>
                        <a href="mailto:support@greenwichhstc.edu" className="text-dark-blue font-medium hover:text-gold transition-colors">
                          support@greenwichhstc.edu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-dark-blue to-blue-800 p-8 lg:p-12 text-white flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-6">Send us a message</h4>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-white/80 block mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-white/80 block mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-white/80 block mb-1">Your Question</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                        placeholder="What would you like to know?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-amber-500 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
} 