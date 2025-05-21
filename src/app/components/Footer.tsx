"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-dark-blue text-white pt-16 ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <Image 
                src="/images/logo-light.png" 
                alt="Greenwich HSTC" 
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6">
              {t('footer_about')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">{t('quick_links')}</h3>
            <ul className="space-y-3">
              {[
                { label: 'about', path: '/about' },
                { label: 'courses', path: '/courses' },
                { label: 'services', path: '/services' },
                { label: 'certifications', path: '/certifications' },
                { label: 'contact', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-white/80 hover:text-gold hover:underline transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Our Courses */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">{t('our_courses')}</h3>
            <ul className="space-y-3">
              {[
                { label: 'business', path: '/courses/business' },
                { label: 'technology', path: '/courses/technology' },
                { label: 'design', path: '/courses/design' },
                { label: 'marketing', path: '/courses/marketing' },
                { label: 'finance', path: '/courses/finance' },
              ].map((course, index) => (
                <li key={index}>
                  <Link 
                    href={course.path}
                    className="text-white/80 hover:text-gold hover:underline transition-colors"
                  >
                    {t(course.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">{t('contact_us')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className={`text-gold mt-1 ${isRtl ? 'ml-3' : 'mr-3'}`} />
                <span className="text-white/80">
                  {t('address')}
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className={`text-gold ${isRtl ? 'ml-3' : 'mr-3'}`} />
                <a href="tel:+442071234567" className="text-white/80 hover:text-gold transition-colors">
                  +44 20 7123 4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className={`text-gold ${isRtl ? 'ml-3' : 'mr-3'}`} />
                <a href="mailto:info@greenwichhstc.edu" className="text-white/80 hover:text-gold transition-colors">
                  info@greenwichhstc.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Accreditation Logos */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 mb-4 md:mb-0">
              &copy; {currentYear} {t('copyright')}
            </p>
            
            {/* Accreditation Logos */}
            <div className="flex items-center space-x-6">
              <span className="text-white/70 text-sm hidden md:inline-block">Accredited by:</span>
              <a 
                href="https://www.ilo.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image 
                  src="/images/logos/ilo-logo.png" 
                  alt="International Labour Organization" 
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </a>
              <a 
                href="https://www.unpaf.info/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image 
                  src="/images/logos/peace-ambassadors-logo.png" 
                  alt="U.N. Peace Ambassador Foundation" 
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </a>
              <a 
                href="https://www.sindibad.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image 
                  src="/images/logos/sindibad-logo.png" 
                  alt="Sindibad Foundation" 
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </a>
              <Link 
                href="/certifications"
                className="text-white/70 text-xs hover:text-gold hover:underline transition-colors"
              >
                View all accreditations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 