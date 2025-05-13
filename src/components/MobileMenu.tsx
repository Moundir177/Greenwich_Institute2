"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaChevronUp, FaSignInAlt } from 'react-icons/fa';

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
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-dark-blue/95 lg:hidden overflow-y-auto">
      <div className="container mx-auto px-4 py-16">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-gold focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="space-y-2 mt-8">
          {navigationItems.map((item) => (
            <div key={item.name} className="border-b border-white/10 last:border-b-0">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className={`w-full py-4 flex justify-between items-center text-lg font-medium ${
                      pathname === item.href ? 'text-gold' : 'text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {expandedItems.includes(item.name) ? (
                      <FaChevronUp className="h-4 w-4" />
                    ) : (
                      <FaChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedItems.includes(item.name) && (
                    <div className="pl-4 pb-4 space-y-2 animate-fadeIn">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className={`block py-2 text-base ${
                            pathname === subItem.href ? 'text-gold' : 'text-white/80 hover:text-gold'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`block py-4 text-lg font-medium ${
                    pathname === item.href ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8">
          <Link
            href="/login"
            onClick={handleLinkClick}
            className="flex items-center justify-center bg-gold text-white py-3 px-4 rounded-md w-full"
          >
            <FaSignInAlt className="mr-2" />
            <span>Login / Register</span>
          </Link>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/courses"
              onClick={handleLinkClick}
              className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md text-center"
            >
              Find Courses
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} UK Institute. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
} 