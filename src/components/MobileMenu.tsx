"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaChevronUp, FaSignInAlt, FaUser, FaEnvelope, FaSearch, FaBookOpen } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'Our Story', href: '/about#our-story' },
      { name: 'Mission & Values', href: '/about#mission-values' },
      { name: 'Leadership Team', href: '/about#leadership' },
      { name: 'Campus Facilities', href: '/about#facilities' },
    ]
  },
  { 
    name: 'Admissions', 
    href: '/admissions',
    dropdown: [
      { name: 'Application Process', href: '/admissions#application-process' },
      { name: 'Requirements', href: '/admissions#requirements' },
      { name: 'Deadlines', href: '/admissions#deadlines' },
      { name: 'International Students', href: '/admissions#international' },
    ]
  },
  { 
    name: 'Courses', 
    href: '/courses',
    dropdown: [
      { name: 'All Courses', href: '/courses' },
      { name: 'Business', href: '/courses?category=Business' },
      { name: 'Technology', href: '/courses?category=Technology' },
      { name: 'Design', href: '/courses?category=Design' },
      { name: 'Finance', href: '/courses?category=Finance' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Career Counseling', href: '/services#career-counseling' },
      { name: 'Academic Support', href: '/services#academic-support' },
      { name: 'International Students', href: '/services#international' },
      { name: 'Online Learning', href: '/services#online' },
    ]
  },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  
  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  
  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };
  
  const dropdownVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  
  const toggleExpand = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name) 
        : [...prev, name]
    );
  };
  
  const handleLinkClick = () => {
    onClose();
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log(`Searching for: ${searchValue}`);
      setSearchValue('');
      onClose();
    }
  };
  
  // Clear expanded items when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems([]);
    }
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-dark-blue/95 backdrop-blur-md shadow-xl lg:hidden overflow-y-auto"
          >
            <div className="px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-white">
                  <div className="text-xl font-bold text-gold">Greenwich HSTC</div>
                  <div className="text-xs text-white/70">Excellence in Education</div>
                </div>
                
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="mb-6">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                </form>
              </div>
              
              {/* Navigation Items */}
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="border-b border-white/10 last:border-b-0">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleExpand(item.name)}
                          className={`w-full py-4 flex justify-between items-center text-lg font-medium transition-colors ${
                            pathname === item.href ? 'text-gold' : 'text-white hover:text-gold'
                          }`}
                        >
                          <span>{item.name}</span>
                          {expandedItems.includes(item.name) ? (
                            <FaChevronUp className="h-4 w-4 text-white/70" />
                          ) : (
                            <FaChevronDown className="h-4 w-4 text-white/70" />
                          )}
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {expandedItems.includes(item.name) && (
                            <motion.div
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={dropdownVariants}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 space-y-2">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={handleLinkClick}
                                    className={`block py-2 text-base transition-colors ${
                                      pathname === subItem.href ? 'text-gold' : 'text-white/80 hover:text-gold'
                                    }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`block py-4 text-lg font-medium transition-colors ${
                          pathname === item.href ? 'text-gold' : 'text-white hover:text-gold'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-8 space-y-4">
                <Link
                  href="/login"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center bg-gold text-white py-3 px-4 rounded-lg w-full hover:bg-amber-500 transition-colors"
                >
                  <FaUser className="mr-2" />
                  <span>Login / Register</span>
                </Link>
                
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white py-3 px-3 rounded-lg text-sm transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="/courses"
                    onClick={handleLinkClick}
                    className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white py-3 px-3 rounded-lg text-sm transition-colors"
                  >
                    <FaBookOpen className="mr-2" />
                    <span>Courses</span>
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 text-center text-white/50 text-sm">
                <p>© {new Date().getFullYear()} Greenwich HSTC. All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 