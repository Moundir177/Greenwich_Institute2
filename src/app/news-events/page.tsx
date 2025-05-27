"use client";

import { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaGlobeAmericas, FaAward, FaHandshake, FaUniversity, FaClock, FaMapMarkerAlt, FaUsers, FaSearch, FaRegNewspaper, FaEnvelope, FaUserGraduate, FaIndustry, FaBookReader, FaChalkboardTeacher, FaLaptop, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaRegClock, FaRegBookmark, FaFilter, FaShareAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Button from '@/components/ui/Button';

// News categories for filtering
const NEWS_CATEGORIES = [
  { id: 'all', name: 'All News', icon: <FaRegNewspaper /> },
  { id: 'press', name: 'Press Releases', icon: <FaRegNewspaper /> },
  { id: 'academic', name: 'Academic News', icon: <FaBookReader /> },
  { id: 'research', name: 'Research', icon: <FaLaptop /> },
  { id: 'community', name: 'Community', icon: <FaUsers /> },
  { id: 'events', name: 'Events', icon: <FaCalendarAlt /> }
];

// News items data
const NEWS_ITEMS = [
  {
    id: 'certifications-press-release',
    title: 'Greenwich HSTC Achieves Prestigious International Certifications',
    date: '2024-05-21',
    author: 'Greenwich HSTC Communications Team',
    image: '/images/news/certifications-press-release.jpg',
    excerpt: 'Greenwich HSTC is proud to announce its latest international certifications and partnerships with leading organizations such as the International Labor Organization (ILO), Peace Ambassadors Foundation, Sindibad Foundation, and Pioneers of Intellectual Development (UAE).',
    category: 'press',
    tags: ['certification', 'partnership', 'international'],
    featured: true
  },
  {
    id: 'academic-excellence-award',
    title: 'Greenwich HSTC Receives Academic Excellence Award',
    date: '2024-05-15',
    author: 'Dr. Jonathan Hughes',
    image: '/images/news/academic-award.jpg',
    excerpt: 'Our institution has been recognized for its outstanding academic programs and innovative teaching methodologies at the International Education Summit 2024.',
    category: 'academic',
    tags: ['award', 'recognition', 'education'],
    featured: false
  },
  {
    id: 'research-breakthrough',
    title: 'Faculty Research Leads to Breakthrough in Educational Technology',
    date: '2024-05-10',
    author: 'Dr. David Chen',
    image: '/images/news/research.jpg',
    excerpt: 'Dr. Chen and his research team have developed a new AI-based learning platform that adapts to individual student needs and has shown remarkable results in early trials.',
    category: 'research',
    tags: ['technology', 'innovation', 'AI'],
    featured: false
  },
  {
    id: 'community-outreach-program',
    title: 'Greenwich HSTC Launches New Community Outreach Program',
    date: '2024-05-05',
    author: 'Sarah Johnson',
    image: '/images/news/community.jpg',
    excerpt: 'Our new initiative aims to provide educational resources and mentorship to underprivileged communities, reinforcing our commitment to accessible education for all.',
    category: 'community',
    tags: ['outreach', 'community', 'mentorship'],
    featured: false
  },
  {
    id: 'partnership-announcement',
    title: 'New Industry Partnership with Global Tech Leaders',
    date: '2024-04-28',
    author: 'Greenwich HSTC Communications Team',
    image: '/images/news/partnership.jpg',
    excerpt: 'Greenwich HSTC has formed strategic partnerships with leading technology companies to enhance our curriculum and provide students with industry-relevant experience.',
    category: 'press',
    tags: ['partnership', 'technology', 'industry'],
    featured: false
  },
  {
    id: 'alumni-success-story',
    title: 'Alumni Success Story: Leading Innovation in Sustainable Development',
    date: '2024-04-20',
    author: 'Alumni Relations Office',
    image: '/images/news/alumni.jpg',
    excerpt: 'Meet Sophia Leclerc, a 2018 graduate who is now leading sustainable development initiatives at a major international organization.',
    category: 'community',
    tags: ['alumni', 'success', 'sustainability'],
    featured: false
  }
];

// Press release data
const PRESS_RELEASE = {
  id: 'certifications-press-release',
  title: 'Greenwich HSTC Achieves Prestigious International Certifications',
  date: '2024-05-21',
  author: 'Greenwich HSTC Communications Team',
  image: '/images/news/certifications-press-release.jpg',
  excerpt: 'Greenwich HSTC is proud to announce its latest international certifications and partnerships with leading organizations such as the International Labor Organization (ILO), Peace Ambassadors Foundation, Sindibad Foundation, and Pioneers of Intellectual Development (UAE).',
  content: [
    {
      type: 'paragraph',
      text: 'Greenwich HSTC has achieved new heights in educational excellence by securing international certifications and forming strategic partnerships with globally recognized organizations. These partnerships represent a significant milestone in our commitment to providing world-class education and training that meets international standards.'
    },
    {
      type: 'heading',
      text: 'Strategic Partners and Their Benefits'
    },
    {
      type: 'list',
      items: [
        '<strong>International Labor Organization (ILO):</strong> Training under ILO standards ensures our trainees receive certifications recognized worldwide, enhancing their employability and professional credibility. This partnership validates that our programs meet global labor standards and best practices.',
        '<strong>Peace Ambassadors Foundation:</strong> Our collaboration promotes social dialogue and sustainable community development, benefiting both students and society. Students gain valuable insights into conflict resolution and community engagement.',
        '<strong>Sindibad Foundation:</strong> We empower youth and entrepreneurs through mentorship, investment opportunities, and real-world business development resources. This partnership connects academic learning with practical entrepreneurial skills.',
        '<strong>Pioneers of Intellectual Development (UAE):</strong> This partnership expands our reach in the UAE and GCC region, supporting innovative educational initiatives and providing students with regional opportunities.'
      ]
    },
    {
      type: 'heading',
      text: 'Client Benefits'
    },
    {
      type: 'paragraph',
      text: 'These accreditations and partnerships guarantee that our clients and students benefit from:'
    },
    {
      type: 'list',
      items: [
        '<strong>Internationally Recognized Certifications:</strong> Qualifications that are respected and recognized by employers globally',
        '<strong>Access to Global Best Practices:</strong> Training methodologies and content aligned with international standards',
        '<strong>Enhanced Career Opportunities:</strong> Greater employability and career advancement prospects',
        '<strong>Ethical, High-Quality Education:</strong> Programs designed with integrity and excellence at their core'
      ]
    },
    {
      type: 'quote',
      text: 'Our international partnerships represent our commitment to excellence and our dedication to providing our students with the best possible educational experience and career opportunities.',
      author: 'Greenwich HSTC Director'
    },
    {
      type: 'paragraph',
      text: 'We remain dedicated to providing world-class training and development opportunities for all our clients, continuously seeking new ways to enhance our offerings through prestigious international partnerships.'
    }
  ]
};

// Upcoming events data
const UPCOMING_EVENTS = [
  {
    id: 'open-day-2024',
    title: 'Virtual Open Day',
    date: '2024-06-15',
    time: '10:00 - 15:00',
    location: 'Online',
    image: '/images/events/open-day.jpg',
    description: 'Join us for a comprehensive virtual tour of our programs, facilities, and meet our faculty. Learn about admission requirements and scholarship opportunities.',
    category: 'Admissions',
    speakers: ['Dr. Jonathan Hughes', 'Prof. Maria Rodriguez'],
    highlights: ['Live Q&A with faculty', 'Virtual campus tour', 'Scholarship information'],
    registrationUrl: '/events/open-day-2024/register'
  },
  {
    id: 'industry-panel-2024',
    title: 'Industry Expert Panel: Future of Work',
    date: '2024-06-22',
    time: '18:00 - 20:00',
    location: 'Main Campus Auditorium & Livestream',
    image: '/images/events/industry-panel.jpg',
    description: 'A distinguished panel of industry leaders will discuss emerging workplace trends and skills required for success in the evolving job market.',
    category: 'Career',
    speakers: ['Sarah Johnson (Moderator)', 'CEO of Tech Innovations', 'HR Director at Global Finance'],
    highlights: ['Networking opportunity', 'Career advice', 'Industry insights'],
    registrationUrl: '/events/industry-panel-2024/register'
  },
  {
    id: 'research-symposium-2024',
    title: 'International Research Symposium',
    date: '2024-07-08',
    time: '09:00 - 17:00',
    location: 'Research Center',
    image: '/images/events/research-symposium.jpg',
    description: 'Researchers from around the world will present their latest findings in education innovation, technology integration, and learning sciences.',
    category: 'Research',
    speakers: ['Dr. David Chen', 'Prof. James Wilson', 'Guest researchers'],
    highlights: ['Research presentations', 'Collaborative workshops', 'Publication opportunities'],
    registrationUrl: '/events/research-symposium-2024/register'
  },
  {
    id: 'alumni-networking-2024',
    title: 'Global Alumni Networking Event',
    date: '2024-07-20',
    time: '19:00 - 22:00',
    location: 'Multiple Locations Worldwide',
    image: '/images/events/alumni-networking.jpg',
    description: 'Connect with fellow Greenwich HSTC alumni in your city. Events will be held simultaneously in London, Paris, New York, Dubai, and Singapore.',
    category: 'Alumni',
    speakers: ['Alumni Association President', 'Distinguished Alumni'],
    highlights: ['Networking cocktail', 'Success stories', 'Career opportunities'],
    registrationUrl: '/events/alumni-networking-2024/register'
  }
];

// Featured event - rotates between events
const FEATURED_EVENT = UPCOMING_EVENTS[0];

export default function NewsEventsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateHero, setAnimateHero] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState(NEWS_ITEMS);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger hero animations after a short delay
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter news items based on category and search query
  useEffect(() => {
    let filtered = NEWS_ITEMS;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredNews(filtered);
  }, [activeCategory, searchQuery]);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'ar' ? 'ar-SA' : 'en-US', options);
  };
  
  // Get featured news item
  const featuredNews = NEWS_ITEMS.find(item => item.featured) || NEWS_ITEMS[0];
  
  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white flex items-center overflow-hidden"
      >
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
        
        {/* Decorative Elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold opacity-20 rounded-full filter blur-[100px] animate-pulse z-0"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500 opacity-20 rounded-full filter blur-[100px] animate-pulse z-0" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full filter blur-[80px] animate-pulse z-0" style={{ animationDelay: "3s" }}></div>
        
        {/* 3D floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 border border-white/10 rounded-lg z-0"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-gold/20 rounded-full z-0"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={animateHero ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={animateHero ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-gold text-sm font-semibold mb-4"
              >
                Restez informé
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6">
                Actualités & <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold relative">
                  Événements
                  <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 300 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1,5 Q75,1 150,5 Q225,9 299,5" stroke="#F0C674" strokeWidth="2" fill="none" />
                  </svg>
                </span>
            </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
                Découvrez les dernières actualités, annonces et événements à venir de Greenwich HSTC. Restez connecté à notre communauté éducative dynamique et ne manquez aucune opportunité.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#events" 
                  className="group inline-flex items-center bg-gradient-to-r from-gold to-amber-500 text-dark-blue px-8 py-4 rounded-full font-medium transition transform hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <span>Événements à venir</span>
                  <span className="ml-2 w-6 h-6 rounded-full bg-dark-blue/20 flex items-center justify-center group-hover:bg-dark-blue/30 transition-colors">
                    <FaCalendarAlt className="text-sm" />
                  </span>
                </Link>
                
                <Link 
                  href="#news" 
                  className="inline-flex items-center bg-transparent border-2 border-white/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition transform hover:bg-white/10 hover:border-white hover:scale-105 hover:shadow-lg"
                >
                  Dernières actualités
                  <FaRegNewspaper className="ml-3 text-gold" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={animateHero ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative h-[550px] w-full perspective-1000">
                <motion.div 
                  className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 glass-card"
                  whileHover={{ y: -10, transition: { duration: 0.4 } }}
                >
                  <Image 
                    src="/images/news/hero-news.jpg" 
                    alt="Greenwich HSTC News and Events"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-dark-blue/40 backdrop-blur-[2px]"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-blue/95 via-dark-blue/70 to-transparent">
                    <div className="inline-block px-3 py-1 bg-gold/90 text-dark-blue text-sm font-semibold rounded-full mb-3">
                      À la une
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{featuredNews.title}</h3>
                    <p className="text-white/80 mb-4 line-clamp-2">{featuredNews.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/70 text-sm">
                        <FaRegClock className="mr-2" />
                        {formatDate(featuredNews.date)}
                      </div>
                      <Link 
                        href={`/news/${featuredNews.id}`}
                        className="inline-flex items-center text-gold hover:text-white transition-colors duration-300"
                      >
                        Lire plus
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating elements on the card */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gold/20 rounded-full blur-xl z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl z-0"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 7,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={animateHero ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div 
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 cursor-pointer shadow-lg"
            onClick={() => {
              const newsSectionElement = document.getElementById('news-categories');
              if (newsSectionElement) {
                newsSectionElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              animate={{
                y: [0, 5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* News Categories Navigation with Search */}
      <section id="news-categories" className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto py-2 scrollbar-hide">
              {NEWS_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                    activeCategory === category.id 
                    ? 'bg-dark-blue text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className={`mr-2 ${activeCategory === category.id ? 'text-gold' : 'text-gray-500'}`}>
                    {category.icon}
                </span>
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-dark-blue focus:bg-white"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-semibold mb-3"
            >
              Toujours à jour
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-dark-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nos <span className="text-gold">Dernières Actualités</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Découvrez les dernières nouvelles, innovations et réussites de notre institution et de notre communauté éducative.
            </motion.p>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredNews.length > 0 ? (
                filteredNews.map((newsItem, index) => (
                  <motion.div
                    key={newsItem.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                      <div className="relative h-60 overflow-hidden">
                        <Image 
                          src={newsItem.image}
                          alt={newsItem.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-white/90 backdrop-blur-sm text-dark-blue px-3 py-1 rounded-full text-xs font-medium">
                            {NEWS_CATEGORIES.find(cat => cat.id === newsItem.category)?.name || newsItem.category}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex flex-wrap gap-2">
                            {newsItem.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <FaRegClock className="mr-2 text-gold" />
                          {formatDate(newsItem.date)}
                        </div>
                        
                        <h3 className="text-xl font-bold text-dark-blue mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                          {newsItem.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {newsItem.excerpt}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500">Par {newsItem.author.split(' ')[0]}</span>
            </div>
            
                          <div className="flex items-center space-x-3">
                            <button className="text-gray-400 hover:text-gold transition-colors">
                              <FaRegBookmark className="text-sm" />
                            </button>
                            <button className="text-gray-400 hover:text-gold transition-colors">
                              <FaShareAlt className="text-sm" />
                            </button>
                            <Link 
                              href={`/news/${newsItem.id}`} 
                              className="text-gold hover:text-dark-blue transition-colors flex items-center"
                            >
                              <span className="text-sm font-medium">Lire</span>
                              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="mb-6 text-gray-400">
                    <FaSearch className="text-5xl mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-blue mb-2">Aucun résultat trouvé</h3>
                  <p className="text-gray-600 mb-6">
                    Nous n'avons pas trouvé d'actualités correspondant à votre recherche.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="inline-flex items-center px-4 py-2 bg-dark-blue text-white rounded-lg hover:bg-gold transition-colors"
                  >
                    Effacer les filtres
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* View All Button */}
          {filteredNews.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <Link 
                href="/news" 
                className="inline-flex items-center px-8 py-4 bg-dark-blue text-white rounded-full hover:bg-gold transition-colors duration-300 font-medium"
              >
                Voir toutes les actualités
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          )}
          
          {/* Newsletter Subscription */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 bg-gradient-to-r from-dark-blue to-blue-800 rounded-2xl p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-7/12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Restez informé</h3>
                <p className="text-white/80 max-w-2xl mb-6 md:mb-0">
                  Abonnez-vous à notre newsletter pour recevoir les dernières actualités, événements et mises à jour de Greenwich HSTC.
                </p>
              </div>
              
              <div className="md:w-5/12">
                <form className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-gold text-dark-blue rounded-lg font-medium hover:bg-white transition-colors flex items-center justify-center"
                  >
                    S'abonner
                    <FaEnvelope className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-light-gray to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-gold text-sm font-semibold mb-3"
            >
              Ne manquez pas
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-dark-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Événements <span className="text-gold">à venir</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Rejoignez-nous lors de nos prochains événements et opportunités de réseautage, conférences et ateliers organisés par Greenwich HSTC.
            </motion.p>
          </div>
          
          {/* Featured Event */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <Image 
                    src={FEATURED_EVENT.image} 
                    alt={FEATURED_EVENT.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-transparent flex flex-col justify-end p-8 lg:hidden">
                    <span className="inline-block px-3 py-1 bg-gold text-dark-blue text-sm font-semibold rounded-full mb-3">
                      Événement à la une
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{FEATURED_EVENT.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="hidden lg:inline-block px-3 py-1 bg-gold/90 text-dark-blue text-sm font-semibold rounded-full mb-4">
                      Événement à la une
                    </div>
                    <h3 className="hidden lg:block text-3xl font-bold text-dark-blue mb-4">{FEATURED_EVENT.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{FEATURED_EVENT.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <FaCalendarAlt className="text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Date & Heure</p>
                          <p className="text-dark-blue">{formatDate(FEATURED_EVENT.date)}</p>
                          <p className="text-dark-blue">{FEATURED_EVENT.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <FaMapMarkerAlt className="text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Lieu</p>
                          <p className="text-dark-blue">{FEATURED_EVENT.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href={`/events/${FEATURED_EVENT.id}`}
                      className="inline-flex items-center px-6 py-3 bg-dark-blue text-white rounded-lg hover:bg-gold transition-colors font-medium"
                    >
                      Détails de l'événement
                    </Link>
                    <Link 
                      href={FEATURED_EVENT.registrationUrl || "#"}
                      className="inline-flex items-center px-6 py-3 border-2 border-dark-blue text-dark-blue rounded-lg hover:bg-dark-blue hover:text-white transition-colors font-medium"
                    >
                      S'inscrire maintenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/50 to-transparent p-4">
                      <div className="flex items-center text-white">
                        <FaCalendarAlt className="mr-2 text-gold" />
                        <span className="text-sm">{formatDate(event.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-dark-blue mb-3 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="mt-auto space-y-4">
                      <div className="flex items-center text-gray-500">
                        <FaMapMarkerAlt className="mr-2 text-gold" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500">
                        <FaRegClock className="mr-2 text-gold" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <Link 
                          href={`/events/${event.id}`}
                          className="inline-flex items-center text-gold hover:text-dark-blue transition-colors"
                        >
                          <span className="font-medium">Voir les détails</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/events" 
              className="inline-flex items-center px-8 py-4 bg-dark-blue text-white rounded-full hover:bg-gold transition-colors duration-300 font-medium"
            >
              Voir tous les événements
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Notre impact global</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Greenwich HSTC continue de se développer et d'avoir un impact positif sur les étudiants et les communautés du monde entier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <FaUsers className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-white/80">Étudiants actifs</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <FaGlobeAmericas className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">120+</h3>
              <p className="text-white/80">Pays représentés</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <FaHandshake className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-white/80">Partenaires industriels</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <FaAward className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-white/80">Accréditations internationales</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
