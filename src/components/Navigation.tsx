"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaSearch, FaSignInAlt, FaTimes, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import LanguageSelector from '../app/components/LanguageSelector';
import { useLanguage } from '../app/contexts/LanguageContext';

export default function Navigation() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const navigationItems = [
    { name: t('home'), href: '/' },
    { 
      name: t('about'), 
      href: '/about',
      dropdown: [
        { name: t('our_story'), href: '/about#our-story' },
        { name: t('mission_values'), href: '/about#mission-values' },
        { name: t('leadership_team'), href: '/about#leadership' },
        { name: t('campus_facilities'), href: '/about#facilities' },
      ]
    },
    { 
      name: t('admissions'), 
      href: '/admissions',
      dropdown: [
        { name: t('application_process'), href: '/admissions#application-process' },
        { name: t('requirements'), href: '/admissions#requirements' },
        { name: t('deadlines'), href: '/admissions#deadlines' },
        { name: t('international_students'), href: '/admissions#international' },
      ]
    },
    { 
      name: t('courses'), 
      href: '/courses',
      dropdown: [
        { name: t('all_courses'), href: '/courses' },
        { name: t('business'), href: '/courses?category=Business' },
        { name: t('technology'), href: '/courses?category=Technology' },
        { name: t('design'), href: '/courses?category=Design' },
        { name: t('finance'), href: '/courses?category=Finance' },
      ]
    },
    { 
      name: t('services'), 
      href: '/services',
      dropdown: [
        { name: t('career_counseling'), href: '/services#career-counseling' },
        { name: t('academic_support'), href: '/services#academic-support' },
        { name: t('international_students'), href: '/services#international' },
        { name: t('online_learning'), href: '/services#online' },
      ]
    },
    { name: t('certificates'), href: '/certificates' },
    { name: t('contact'), href: '/contact' },
  ];
  
  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);
  
  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real implementation, you would navigate to search results page
      console.log(`Searching for: ${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchOpen && searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);
  
  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: 'easeOut' 
      } 
    },
    exit: { 
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: 'easeIn' 
      } 
    }
  };
  
  return (
    <>
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${
          isScrolled 
            ? 'bg-dark-blue/95 py-2' 
            : 'bg-dark-blue/85 py-4'
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h1 className="text-gold m-0 text-2xl font-bold">Greenwich HSTC</h1>
                <p className="text-white/80 m-0 text-xs">Excellence in Education</p>
              </div>
            </Link>
            
            {/* Main Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center ${
                      pathname === item.href 
                        ? 'text-gold' 
                        : 'text-white hover:text-gold'
                    } transition-colors duration-300`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 mt-1 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-dark-blue transition-colors duration-150"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            {/* Right Side Items */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label={t('search')}
                >
                  {searchOpen ? <FaTimes /> : <FaSearch />}
                </button>
                
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, width: '13rem' }}
                      animate={{ opacity: 1, y: 0, width: '18rem' }}
                      exit={{ opacity: 0, y: 10, width: '13rem' }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 bg-white rounded-lg shadow-2xl overflow-hidden"
                    >
                      <form onSubmit={handleSearchSubmit} className="p-1">
                        <div className="flex">
                          <input
                            ref={searchInputRef}
                            type="text"
                            placeholder={t('search_placeholder')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 text-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="submit"
                            className="bg-dark-blue text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                          >
                            <FaSearch />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Login Button */}
              <Link
                href="/login"
                className="hidden md:flex items-center bg-gold text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-amber-500 hover:shadow-md group"
              >
                <FaUser className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>{t('login')}</span>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-md text-white hover:text-gold hover:bg-white/10 transition-colors focus:outline-none"
                aria-label={t('menu')}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
} 