"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaSearch, FaSignInAlt } from 'react-icons/fa';
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
  
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 bg-dark-blue ${isScrolled ? 'py-2 shadow-md' : 'py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div>
                <h1 className="text-gold m-0 text-2xl font-bold transition-all group-hover:translate-x-1">Greenwich HSTC</h1>
                <p className="text-white m-0 text-xs">Excellence in Education</p>
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
                      pathname === item.href ? 'text-gold' : 'text-white hover:text-gold'
                    } transition-colors duration-300`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 animate-fadeIn">
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-dark-blue hover:bg-light-gray hover:text-dark-blue"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right Side Items */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-full hover:bg-gray/20 text-white transition-colors"
                  aria-label={t('search')}
                >
                  <FaSearch />
                </button>
                
                {searchOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg animate-fadeIn">
                    <form onSubmit={handleSearchSubmit} className="p-2">
                      <div className="flex">
                        <input
                          type="text"
                          placeholder={t('search_placeholder')}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-dark-blue"
                        />
                        <button
                          type="submit"
                          className="bg-dark-blue text-white px-4 py-2 rounded-r-md hover:bg-opacity-90"
                        >
                          <FaSearch />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              
              {/* Login Button */}
              <Link
                href="/login"
                className="hidden md:flex items-center bg-gold text-white px-4 py-2 rounded-md transition-colors hover:bg-opacity-90"
              >
                <FaSignInAlt className="mr-2" />
                <span>{t('login')}</span>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-md text-white hover:text-gold focus:outline-none"
                aria-label={t('menu')}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
} 