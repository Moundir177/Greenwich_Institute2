"use client";

import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaSearch, FaFilter, FaTags, FaLongArrowAltRight, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Button from '@/components/ui/Button';

// Mock news & events data
const NEWS_EVENTS = [
  {
    id: 'new-partnership',
    type: 'news',
    title: 'Global Education Institute Announces New Industry Partnership',
    date: '2023-11-15',
    excerpt: 'We are excited to announce our new partnership with Microsoft to enhance our technology curriculum and provide students with cutting-edge skills.',
    image: '/images/news/partnership.jpg',
    category: 'Partnerships',
    featured: true
  },
  {
    id: 'annual-conference',
    type: 'event',
    title: 'Annual Education Innovation Conference',
    date: '2023-12-10',
    time: '09:00 - 17:00',
    location: 'Main Campus Auditorium',
    excerpt: 'Join us for our annual conference featuring keynote speakers from leading educational institutions and industry experts.',
    image: '/images/events/conference.jpg',
    category: 'Conferences',
    featured: true
  },
  {
    id: 'scholarship-program',
    type: 'news',
    title: 'New Scholarship Program Launched for International Students',
    date: '2023-10-25',
    excerpt: 'Our institute has launched a new scholarship program to support talented international students from developing countries.',
    image: '/images/news/scholarship.jpg',
    category: 'Scholarships',
    featured: false
  },
  {
    id: 'workshop-series',
    type: 'event',
    title: 'Leadership Workshop Series',
    date: '2023-11-20',
    time: '14:00 - 17:00',
    location: 'Business School, Room 105',
    excerpt: 'A series of workshops focused on developing leadership skills for business professionals and students.',
    image: '/images/events/workshop.jpg',
    category: 'Workshops',
    featured: false
  },
  {
    id: 'faculty-award',
    type: 'news',
    title: 'Faculty Member Receives Prestigious Research Award',
    date: '2023-11-05',
    excerpt: 'Professor Sarah Johnson has been recognized for her groundbreaking research in artificial intelligence applications in education.',
    image: '/images/news/award.jpg',
    category: 'Awards',
    featured: false
  },
  {
    id: 'open-day',
    type: 'event',
    title: 'Winter Open Day',
    date: '2023-12-05',
    time: '10:00 - 15:00',
    location: 'Main Campus',
    excerpt: 'Explore our facilities, meet faculty members, and learn about our programs during our Winter Open Day.',
    image: '/images/events/open-day.jpg',
    category: 'Open Days',
    featured: true
  },
];

// Get unique categories for filtering
const ALL_CATEGORIES = Array.from(new Set(NEWS_EVENTS.map(item => item.category)));

export default function NewsEventsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const [filter, setFilter] = useState('all'); // 'all', 'news', or 'events'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Filter items based on user selection
  const filteredItems = NEWS_EVENTS.filter(item => {
    // Filter by type (news or events)
    if (filter !== 'all' && item.type !== filter) return false;
    
    // Filter by category
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    
    // Filter by search query
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });
  
  // Get featured items
  const featuredItems = NEWS_EVENTS.filter(item => item.featured).slice(0, 3);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'ar' ? 'ar-SA' : 'en-US', options);
  };
  
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
              News & <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Events</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Stay updated with the latest news, announcements, and upcoming events at our institute.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto mt-8 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news and events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300"
                />
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/60" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
          </div>
        </div>
      </section>
      
      {/* Featured News & Events */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Featured</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">News & Events</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              Explore our highlighted news and upcoming events that you won't want to miss.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium ${
                        item.type === 'news' 
                          ? 'bg-uk-blue/10 text-uk-blue' 
                          : 'bg-gold/20 text-gold'
                      }`}>
                        {item.type === 'news' ? 'News' : 'Event'}
                      </span>
                    </div>
                    <Image
                      src={item.image || `/images/placeholder-${item.type}.jpg`}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-uk-blue" />
                        {formatDate(item.date)}
                      </span>
                      {item.type === 'event' && item.time && (
                        <span className="flex items-center gap-1">
                          <FaClock className="text-uk-blue" />
                          {item.time}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-uk-blue mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button 
                      href={`/news-events/${item.id}`}
                      variant="primary"
                      icon={<FaArrowRight />}
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
            <div className="mb-8">
              <div className="inline-block bg-gold/20 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Filter</div>
              <h2 className="text-2xl font-bold text-uk-blue mb-4">
                Filter <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-uk-blue-light to-uk-blue">News & Events</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Type</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === 'all' 
                        ? 'bg-uk-blue text-white shadow-md' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter('news')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === 'news' 
                        ? 'bg-uk-blue text-white shadow-md' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    News
                  </button>
                  <button
                    onClick={() => setFilter('event')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === 'event' 
                        ? 'bg-uk-blue text-white shadow-md' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Events
                  </button>
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Category</label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {ALL_CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFilter('all');
                    setCategoryFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All News & Events */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Browse</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              All <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">News & Events</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
            </p>
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium ${
                          item.type === 'news' 
                            ? 'bg-uk-blue/10 text-uk-blue' 
                            : 'bg-gold/20 text-gold'
                        }`}>
                          {item.type === 'news' ? 'News' : 'Event'}
                        </span>
                      </div>
                      <Image
                        src={item.image || `/images/placeholder-${item.type}.jpg`}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-uk-blue" />
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-uk-blue mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                        {item.excerpt}
                      </p>
                      <Button 
                        href={`/news-events/${item.id}`}
                        variant="primary"
                        icon={<FaArrowRight />}
                        size="sm"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-uk-blue mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setFilter('all');
                  setCategoryFilter('all');
                  setSearchQuery('');
                }}
                variant="primary"
              >
                Reset Filters
              </Button>
            </div>
          )}
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Subscribe to Our Newsletter</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Stay updated with our latest news, events, and educational opportunities.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <Button 
                    variant="gold"
                    effect="3d"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 