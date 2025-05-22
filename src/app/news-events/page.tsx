"use client";

import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaGlobeAmericas, FaAward, FaHandshake, FaUniversity, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Button from '@/components/ui/Button';

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

// News categories for filtering
const NEWS_CATEGORIES = [
  { id: 'all', name: 'All News' },
  { id: 'press', name: 'Press Releases' },
  { id: 'academic', name: 'Academic News' },
  { id: 'community', name: 'Community' },
  { id: 'events', name: 'Events' }
];

export default function NewsEventsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateHero, setAnimateHero] = useState(false);
  
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
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'ar' ? 'ar-SA' : 'en-US', options);
  };
  
  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white flex items-center overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={animateHero ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6">
                Actualités & <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Événements</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Découvrez les dernières actualités, annonces et événements à venir de Greenwich HSTC. Restez informé et participez à notre communauté éducative dynamique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#events" className="inline-flex items-center bg-gold text-dark-blue px-6 py-3 rounded-md font-medium transition transform hover:scale-105 hover:shadow-lg">
                  Événements à venir
                  <FaCalendarAlt className="ml-2" />
                </Link>
                <Link href="#news" className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium transition transform hover:bg-white/10 hover:scale-105">
                  Dernières actualités
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={animateHero ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/images/news/hero-news.jpg" 
                  alt="Greenwich HSTC News and Events"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-dark-blue/30 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-blue/90 to-transparent">
                  <p className="text-gold font-medium">À la une</p>
                  <h3 className="text-2xl font-bold text-white">{PRESS_RELEASE.title}</h3>
                  <p className="text-white/80 mt-2">{formatDate(PRESS_RELEASE.date)}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* News Categories Navigation */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                  ? 'bg-dark-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-light-gray to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-64 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-dark-blue/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-dark-blue text-sm font-medium mb-4">
              Calendar
            </span>
            <h2 className="text-4xl font-serif font-bold text-dark-blue mb-4">Événements à venir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez-nous pour des événements enrichissants qui vous permettront d'élargir vos connaissances et votre réseau professionnel.
            </p>
          </div>
          
          {/* Featured Event */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16 border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <Image 
                  src={FEATURED_EVENT.image}
                  alt={FEATURED_EVENT.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/70 to-transparent flex flex-col justify-end p-8 lg:hidden">
                  <span className="inline-block bg-gold text-dark-blue px-3 py-1 rounded-full text-sm font-bold mb-2">
                    À la une
                  </span>
                  <h3 className="text-2xl font-bold text-white">{FEATURED_EVENT.title}</h3>
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="lg:mb-4 hidden lg:block">
                  <span className="inline-block bg-gold text-dark-blue px-3 py-1 rounded-full text-sm font-bold">
                    À la une
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-dark-blue mb-4 hidden lg:block">{FEATURED_EVENT.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    <FaCalendarAlt className="mr-2 text-gold" />
                    {formatDate(FEATURED_EVENT.date)}
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    <FaClock className="mr-2 text-gold" />
                    {FEATURED_EVENT.time}
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    <FaMapMarkerAlt className="mr-2 text-gold" />
                    {FEATURED_EVENT.location}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {FEATURED_EVENT.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-dark-blue mb-3">Points forts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_EVENT.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-light-gray text-gray-700 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-dark-blue mb-3">Intervenants:</h4>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_EVENT.speakers.map((speaker, idx) => (
                      <span key={idx} className="flex items-center bg-light-gray text-gray-700 px-3 py-1 rounded-full text-sm">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={FEATURED_EVENT.registrationUrl} 
                    className="bg-gold text-dark-blue px-6 py-3 rounded-lg font-medium hover:shadow-lg transform transition hover:-translate-y-1"
                  >
                    S'inscrire maintenant
                  </Link>
                  <Link 
                    href={`/events/${FEATURED_EVENT.id}`} 
                    className="border-2 border-dark-blue text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-dark-blue hover:text-white transition"
                  >
                    Plus de détails
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Other Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/90">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-gold text-dark-blue px-3 py-1 m-3 rounded-full text-xs font-medium">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-2 text-gold" />
                    {formatDate(event.date)}
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-3 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaClock className="mr-2 text-gold" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2 text-gold" />
                    {event.location}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-5">
                    {event.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-light-gray text-gray-600 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                    {event.highlights.length > 2 && (
                      <span className="bg-light-gray text-gray-600 px-2 py-1 rounded text-xs">+{event.highlights.length - 2}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link href={`/events/${event.id}`} className="inline-flex items-center text-gold font-medium group-hover:underline">
                      Plus de détails
                      <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    
                    <Link href={event.registrationUrl} className="text-dark-blue text-sm font-medium hover:text-gold transition-colors">
                      S'inscrire
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-dark-blue to-blue-800 rounded-2xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Vous ne trouvez pas ce que vous cherchez?</h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 relative z-10">
                Consultez notre calendrier complet d'événements ou contactez-nous pour des événements personnalisés pour votre organisation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link href="/events" className="bg-white text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-gold transition-colors">
                  Calendrier complet
                  <FaCalendarAlt className="ml-2 inline-block" />
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Press Release Article */}
      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-medium mb-4">Communiqué de presse</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-4">
                {PRESS_RELEASE.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-uk-blue" />
                  {formatDate(PRESS_RELEASE.date)}
                </span>
                <span className="text-gray-400">|</span>
                <span>{PRESS_RELEASE.author}</span>
              </div>
            </div>
            
            <div className="mb-8 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
              <div className="relative h-[400px]">
                <Image 
                  src={PRESS_RELEASE.image}
                  alt={PRESS_RELEASE.title}
                  fill
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-gray-700 mb-8">{PRESS_RELEASE.excerpt}</p>
              
              {PRESS_RELEASE.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return <p key={index} className="mb-6">{block.text}</p>
                } else if (block.type === 'heading') {
                  return <h3 key={index} className="text-2xl font-bold text-uk-blue mt-8 mb-4">{block.text}</h3>
                } else if (block.type === 'list') {
                  return (
                    <ul key={index} className="space-y-3 mb-8">
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gold mr-2 mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                      ))}
                    </ul>
                  )
                } else if (block.type === 'quote') {
                  return (
                    <blockquote key={index} className="border-l-4 border-gold pl-4 py-2 italic text-gray-700 my-8">
                      <p>"{block.text}"</p>
                      {block.author && <footer className="text-sm text-gray-500 mt-2">— {block.author}</footer>}
                    </blockquote>
                  )
                }
                return null;
              })}
            </div>
            
            <div className="mt-12 bg-light-gray rounded-xl p-8 shadow-inner">
              <h3 className="text-2xl font-bold text-uk-blue mb-4">Restez informé</h3>
              <p className="text-gray-600 mb-6">Abonnez-vous à notre newsletter pour recevoir les dernières actualités et mises à jour de Greenwich HSTC.</p>
              <form className="flex flex-wrap gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-1 min-w-[250px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uk-blue"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-uk-blue text-white rounded-md font-medium hover:bg-opacity-90 transition"
                >
                  S'abonner
                </button>
              </form>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                href="/news" 
                className="inline-flex items-center px-6 py-3 border-2 border-uk-blue text-uk-blue rounded-md font-medium hover:bg-uk-blue hover:text-white transition"
              >
                Voir toutes les actualités
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
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
