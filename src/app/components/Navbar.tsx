"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaGlobe, 
  FaChevronDown, 
  FaSearch, 
  FaSignInAlt, 
  FaUserGraduate, 
  FaBriefcase, 
  FaLaptop,
  FaPencilRuler,
  FaChartLine,
  FaPhoneAlt,
  FaInfoCircle,
  FaBook,
  FaGraduationCap,
  FaCertificate,
  FaUser
} from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isRtl = language === 'ar';
  
  const languageRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
      
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
      
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Close search box when ESC is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);
  
  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, redirect to search results page
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };
  
  // Navigation links
  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'courses', path: '/courses' },
    { name: 'services', path: '/services' },
    { name: 'certifications', path: '/certifications' },
    { name: 'testimonials', path: '/testimonials' },
    { name: 'news_events', path: '/news-events' },
    { name: 'partnerships', path: '/partnerships' },
    { name: 'faq', path: '/faq' },
    { name: 'contact', path: '/contact' },
  ];
  
  // Dropdown items
  const courseItems = [
    { id: 'all-courses', name: t('all_courses'), path: '/courses/all', icon: <FaBook /> },
    { id: 'business', name: t('business'), path: '/courses/business', icon: <FaBriefcase /> },
    { id: 'technology', name: t('technology'), path: '/courses/technology', icon: <FaLaptop /> },
    { id: 'design', name: t('design'), path: '/courses/design', icon: <FaPencilRuler /> },
    { id: 'finance', name: t('finance'), path: '/courses/finance', icon: <FaChartLine /> },
  ];
  
  const serviceItems = [
    { id: 'career-counseling', name: t('career_counseling'), path: '/services#support-services', icon: <FaUserGraduate /> },
    { id: 'academic-support', name: t('academic_support'), path: '/services#academic-services', icon: <FaGraduationCap /> },
    { id: 'international-students', name: t('international_students'), path: '/services#support-services', icon: <FaGlobe /> },
    { id: 'certifications', name: t('certifications'), path: '/certifications', icon: <FaCertificate /> },
    { id: 'online-learning', name: t('online_learning'), path: '/services#academic-services', icon: <FaLaptop /> },
  ];
  
  const aboutItems = [
    { id: 'story', name: t('our_story'), path: '/about#story', icon: <FaBook /> },
    { id: 'mission', name: t('mission_values'), path: '/about#mission', icon: <FaInfoCircle /> },
    { id: 'leadership', name: t('leadership_team'), path: '/about#leadership', icon: <FaUser /> },
    { id: 'campus', name: t('campus_facilities'), path: '/about#campus', icon: <FaGraduationCap /> },
    { id: 'privacy-policy', name: t('privacy_policy'), path: '/privacy-policy', icon: <FaInfoCircle /> },
    { id: 'refund-policy', name: t('refund_policy'), path: '/refund-policy', icon: <FaInfoCircle /> },
  ];
  
  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, scale: 0.98, transition: { duration: 0.2 } }
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: { opacity: 0, x: '100%', transition: { type: 'tween', duration: 0.3 } }
  };
  
  const searchVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-2 text-dark-blue border-b border-gray-100' 
          : 'bg-dark-blue/40 backdrop-blur-sm py-4 text-white'
      } ${isRtl ? 'rtl' : 'ltr'}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <div className="flex items-center overflow-hidden">
              {isScrolled ? (
                <div className="flex items-center">
                  <span className="font-serif font-bold text-2xl text-dark-blue">Greenwich HSTC LTD</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="font-serif font-bold text-2xl text-white">Greenwich HSTC LTD</span>
                </div>
              )}
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`font-medium text-base transition-all duration-300 hover:text-gold py-2 relative
                  ${isScrolled ? 'text-dark-blue' : 'text-white'}
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-gold after:to-gold/50 
                    after:transition-all after:duration-300 hover:after:w-full
                    ${index < 4 ? 'nav-link-outlined' : ''}`}
                >
                  {t(link.name)}
                </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <div ref={searchRef} className="relative mr-2">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 hover:text-gold transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-dark-blue hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
                aria-label="Search"
              >
                <FaSearch />
              </button>
              
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl overflow-hidden z-50 border border-gray-100"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={searchVariants}
                  >
                    <form onSubmit={handleSearchSubmit} className="p-3">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-light-gray/70">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={t('search_placeholder')}
                          className="w-full py-2 px-3 bg-transparent outline-none text-gray"
                          autoFocus
                        />
                        <button 
                          type="submit" 
                          className="bg-gradient-to-r from-dark-blue to-blue-600 text-white p-2 hover:opacity-90 transition-colors"
                        >
                          <FaSearch />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div ref={languageRef} className="relative mr-2">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center gap-1 font-medium text-base hover:text-gold transition-all duration-300 py-1 px-2 rounded-md ${
                  isScrolled 
                    ? 'text-dark-blue hover:bg-gray-50' 
                    : 'text-white hover:bg-white/5'
                }`}
                aria-expanded={isLanguageOpen}
              >
                <FaGlobe className="text-sm" />
                <span>{language.toUpperCase()}</span>
                <FaChevronDown className={`transition-transform duration-300 text-xs ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div 
                    className="absolute top-full right-0 mt-1 w-40 bg-white/95 backdrop-blur-md rounded-xl overflow-hidden z-50 border border-gray-100"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2">
                      <button 
                        onClick={() => { setIsLanguageOpen(false); setLanguage('en'); }}
                        className={`flex items-center gap-2 w-full text-left px-4 py-2 ${
                          language === 'en' 
                            ? 'text-gold font-medium bg-light-gray' 
                            : 'text-gray hover:bg-light-gray hover:text-dark-blue'
                        } transition-all duration-200`}
                      >
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full ${language === 'en' ? 'bg-gold text-white' : 'bg-gray-100'}`}>EN</span>
                        <span className="text-sm">{t('english')}</span>
                      </button>
                      <button 
                        onClick={() => { setIsLanguageOpen(false); setLanguage('fr'); }}
                        className={`flex items-center gap-2 w-full text-left px-4 py-2 ${
                          language === 'fr' 
                            ? 'text-gold font-medium bg-light-gray' 
                            : 'text-gray hover:bg-light-gray hover:text-dark-blue'
                        } transition-all duration-200`}
                      >
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full ${language === 'fr' ? 'bg-gold text-white' : 'bg-gray-100'}`}>FR</span>
                        <span className="text-sm">{t('french')}</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 hover:text-gold transition-all duration-300 rounded-full z-50 ${
                isScrolled 
                  ? 'text-dark-blue hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
          
          {/* Desktop Search and Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <div ref={searchRef} className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 hover:text-gold transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-dark-blue hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
                aria-label="Search"
              >
                <FaSearch />
              </button>
              
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl overflow-hidden z-50 border border-gray-100"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={searchVariants}
                  >
                    <form onSubmit={handleSearchSubmit} className="p-3">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-light-gray/70">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={t('search_placeholder')}
                          className="w-full py-2 px-3 bg-transparent outline-none text-gray"
                          autoFocus
                        />
                        <button 
                          type="submit" 
                          className="bg-gradient-to-r from-dark-blue to-blue-600 text-white p-2 hover:opacity-90 transition-colors"
                        >
                          <FaSearch />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Language Switcher */}
            <div ref={languageRef} className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center gap-1 font-medium text-base hover:text-gold transition-all duration-300 py-2 px-2 rounded-md ${
                  isScrolled 
                    ? 'text-dark-blue hover:bg-gray-50' 
                    : 'text-white hover:bg-white/5'
                }`}
                aria-expanded={isLanguageOpen}
              >
                <FaGlobe className="text-sm" />
                <span>{language.toUpperCase()}</span>
                <FaChevronDown className={`transition-transform duration-300 text-xs ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div 
                    className="absolute top-full right-0 mt-1 w-40 bg-white/95 backdrop-blur-md rounded-xl overflow-hidden z-50 border border-gray-100"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2">
                      <button 
                        onClick={() => { setIsLanguageOpen(false); setLanguage('en'); }}
                        className={`flex items-center gap-2 w-full text-left px-4 py-2 ${
                          language === 'en' 
                            ? 'text-gold font-medium bg-light-gray' 
                            : 'text-gray hover:bg-light-gray hover:text-dark-blue'
                        } transition-all duration-200`}
                      >
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full ${language === 'en' ? 'bg-gold text-white' : 'bg-gray-100'}`}>EN</span>
                        <span className="text-sm">{t('english')}</span>
                      </button>
                      <button 
                        onClick={() => { setIsLanguageOpen(false); setLanguage('fr'); }}
                        className={`flex items-center gap-2 w-full text-left px-4 py-2 ${
                          language === 'fr' 
                            ? 'text-gold font-medium bg-light-gray' 
                            : 'text-gray hover:bg-light-gray hover:text-dark-blue'
                        } transition-all duration-200`}
                      >
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full ${language === 'fr' ? 'bg-gold text-white' : 'bg-gray-100'}`}>FR</span>
                        <span className="text-sm">{t('french')}</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              className="absolute top-0 right-0 h-screen w-4/5 max-w-sm bg-white overflow-y-auto border-l border-gray-100" 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 text-dark-blue font-medium text-lg p-3 hover:bg-light-gray rounded-lg transition-colors"
                    >
                      {t(link.name)}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 