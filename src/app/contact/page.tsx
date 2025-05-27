"use client";

import { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaClock, FaGlobe, FaHeadset, FaCheck, FaExclamationTriangle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaChevronDown, FaDirections, FaComments, FaInfoCircle, FaQuestion, FaWhatsapp, FaChevronUp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';


// Sample office locations
const OFFICE_LOCATIONS = [
  {
    id: 'main',
    name: 'Main Campus',
    address: '73A Stanley Road, Bootle, England, L20 7BZ',
    phone: '+44 20 7123 4567',
    email: 'info@greenwichhstc.edu',
    hours: 'Monday - Friday: 8:30 AM - 5:30 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.088930899425!2d-2.9946796232165734!3d53.4474024732881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b23e6608198b9%3A0x8a3fc22f654f5641!2s73A%20Stanley%20Rd%2C%20Bootle%20L20%207BZ%2C%20UK!5e0!3m2!1sen!2sus!4v1689517281943!5m2!1sen!2sus',
    imageUrl: '/images/campus-main.jpg'
  },
  {
    id: 'city',
    name: 'City Campus',
    address: '73A Stanley Road, Bootle, England, L20 7BZ',
    phone: '+44 20 7123 4567',
    email: 'info@greenwichhstc.edu',
    hours: 'Monday - Friday: 8:30 AM - 5:30 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.088930899425!2d-2.9946796232165734!3d53.4474024732881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b23e6608198b9%3A0x8a3fc22f654f5641!2s73A%20Stanley%20Rd%2C%20Bootle%20L20%207BZ%2C%20UK!5e0!3m2!1sen!2sus!4v1689517281943!5m2!1sen!2sus',
    imageUrl: '/images/campus-city.jpg'
  }
];



// Contact methods
const CONTACT_METHODS = [
  {
    id: 'phone',
    title: 'Call Us',
    description: 'Speak directly with our team',
    icon: <FaPhone className="h-6 w-6" />,
    primary: '+44 20 7123 4567',
    secondary: 'Mon-Fri, 8:30 AM - 5:30 PM GMT',
    action: 'tel:+442071234567',
    actionText: 'Call Now'
  },
  {
    id: 'email',
    title: 'Email Us',
    description: 'Send us your inquiries',
    icon: <FaEnvelope className="h-6 w-6" />,
    primary: 'info@greenwichhstc.edu',
    secondary: 'We respond within 24 hours',
    action: 'mailto:info@greenwichhstc.edu',
    actionText: 'Send Email'
  },
  {
    id: 'whatsapp1',
    title: 'WhatsApp (UK)',
    description: 'Chat with our UK support team',
    icon: <FaWhatsapp className="h-6 w-6" />,
    primary: '+44 7350 555404',
    secondary: 'Available for quick responses',
    action: 'https://wa.me/447350555404',
    actionText: 'Start Chat'
  },
  {
    id: 'whatsapp2',
    title: 'WhatsApp (International)',
    description: 'Chat with our international support',
    icon: <FaWhatsapp className="h-6 w-6" />,
    primary: '+213 793 335603',
    secondary: 'Available for international inquiries',
    action: 'https://wa.me/213793335603',
    actionText: 'Start Chat'
  },
  {
    id: 'livechat',
    title: 'Live Chat',
    description: 'Chat with us on our website',
    icon: <FaComments className="h-6 w-6" />,
    primary: 'Live Support',
    secondary: 'Available on weekdays 9 AM - 8 PM GMT',
    action: '#',
    actionText: 'Start Chat'
  }
];

export default function ContactPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeLocation, setActiveLocation] = useState('main');
  const formRef = useRef<HTMLDivElement>(null);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  // Scroll to form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Get current location data
  const currentLocation = OFFICE_LOCATIONS.find(loc => loc.id === activeLocation) || OFFICE_LOCATIONS[0];
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white py-20 overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Get in Touch
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              We're here to help with any questions you may have about our programs, 
              admissions process, or services.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="shadow-lg"
                onClick={scrollToForm}
              >
                Contact Us Now
              </Button>
            </motion.div>
            
            {/* Quick Contact Methods */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTACT_METHODS.map((method, index) => (
                <motion.a
                  key={method.id}
                  href={method.action}
                  whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.25)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:border-white/40 group overflow-hidden relative h-full flex flex-col"
                >
                    {/* Subtle background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4 relative z-10">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center">
                        <div className="text-white text-xl">
                      {method.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-sm text-blue-100 mb-3">{method.description}</p>
                      <p className="font-medium text-lg">{method.primary}</p>
                      <p className="text-xs text-blue-200 mt-1 mb-4">{method.secondary}</p>
                    </div>
                    
                    {/* Action button */}
                    <div className="mt-auto relative z-10">
                      <span className="inline-block mt-2 text-sm font-medium text-white bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition-colors duration-300 w-full">
                        {method.actionText} →
                      </span>
                  </div>
                </motion.a>
              ))}
              </div>
            </motion.div>
                  </div>
                  </div>
      </section>

      {/* Contact Form Section */}
      <section 
            ref={formRef}
            className="py-16 bg-white"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block py-1 px-3 rounded-full bg-blue-100 text-uk-blue text-sm font-medium mb-3"
                  >
                Contact Us
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    Send Us a Message
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-3xl mx-auto"
                  >
                    Fill out the form below and our team will get back to you as soon as possible. 
                    We aim to respond to all inquiries within 24 hours during business days.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contact Form */}
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <ContactForm className="shadow-xl" />
                    </motion.div>
                  </div>
                  
                  {/* Contact Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="bg-gradient-to-br from-uk-blue to-dark-blue text-white rounded-xl shadow-xl overflow-hidden">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="bg-white/10 rounded-full p-3 mr-4">
                              <FaMapMarkerAlt className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Main Address</h4>
                          <p className="text-blue-100">73A Stanley Road, Bootle, England, L20 7BZ</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-white/10 rounded-full p-3 mr-4">
                              <FaPhone className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Phone</h4>
                              <p className="text-blue-100">+44 20 7123 4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/10 rounded-full p-3 mr-4">
                          <FaWhatsapp className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">WhatsApp</h4>
                          <p className="text-blue-100">+44 7350 555404 (UK)</p>
                          <p className="text-blue-100">+213 793 335603 (International)</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-white/10 rounded-full p-3 mr-4">
                              <FaEnvelope className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Email</h4>
                          <p className="text-blue-100">info@greenwichhstc.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                            <div className="bg-white/10 rounded-full p-3 mr-4">
                              <FaClock className="h-5 w-5" />
                  </div>
                            <div>
                              <h4 className="font-semibold mb-1">Hours</h4>
                              <p className="text-blue-100">Monday - Friday: 8:30 AM - 5:30 PM</p>
                              <p className="text-blue-200 text-sm mt-1">Closed on weekends and holidays</p>
                  </div>
                </div>
              </div>
              
                        <div className="mt-10">
                          <h4 className="font-semibold mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                              <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                              <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                              <FaInstagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                              <FaLinkedin className="h-5 w-5" />
                </a>
                  </div>
                </div>
              </div>
            </div>
            
                    {/* Need Immediate Assistance Card */}
                    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Need Immediate Assistance?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        For urgent inquiries, please call our support hotline for immediate assistance.
                      </p>
                      <a 
                        href="tel:+442071234567" 
                        className="inline-flex items-center text-uk-blue hover:text-uk-blue-dark font-medium"
                      >
                        <FaHeadset className="mr-2" />
                        +44 20 7123 4567
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block py-1 px-3 rounded-full bg-blue-100 text-uk-blue text-sm font-medium mb-3"
                >
                    Visit Us
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                    Our Campuses
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                >
                    We have multiple campuses around the world. Feel free to visit us at any of our locations.
                </motion.p>
              </div>
              
                {/* Location Tabs */}
                <div className="mb-10">
                  <div className="flex overflow-x-auto scrollbar-hide p-1 space-x-2 justify-center">
                {OFFICE_LOCATIONS.map((location) => (
                  <motion.button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${
                      activeLocation === location.id
                            ? 'bg-gradient-to-r from-uk-blue to-blue-600 text-white shadow-lg shadow-blue-600/20' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                  >
                        <FaMapMarkerAlt className={`mr-2 ${activeLocation === location.id ? 'text-blue-200' : 'text-gray-500'}`} />
                        {location.name}
                  </motion.button>
                ))}
                  </div>
                    </div>
              
                {/* Location Card */}
                <motion.div 
                  key={currentLocation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Map */}
                    <div className="h-[350px] lg:h-full min-h-[350px] w-full">
                    <iframe
                      src={currentLocation.mapUrl}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                        title={`Map to ${currentLocation.name}`}
                    ></iframe>
                  </div>
                  
                    {/* Location Details */}
                    <div className="p-8">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {currentLocation.name}
                    </h3>
                    
                          <div className="space-y-4 mt-6">
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                <FaMapMarkerAlt className="text-uk-blue w-5 h-5" />
                              </div>
                    <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Address</h4>
                                <p className="text-gray-800">{currentLocation.address}</p>
                            <a 
                                  href={`https://maps.google.com?q=${encodeURIComponent(currentLocation.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                                  className="inline-flex items-center mt-2 text-uk-blue hover:text-blue-700 transition-colors text-sm font-medium"
                            >
                              <FaDirections className="mr-1" /> Get Directions
                            </a>
                          </div>
                        </div>
                        
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                <FaPhone className="text-uk-blue w-5 h-5" />
                              </div>
                          <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Phone</h4>
                                <p className="text-gray-800">{currentLocation.phone}</p>
                                <a 
                                  href={`tel:${currentLocation.phone.replace(/\s+/g, '')}`}
                                  className="inline-flex items-center mt-2 text-uk-blue hover:text-blue-700 transition-colors text-sm font-medium"
                                >
                                  Call Now
                                </a>
                        </div>
                    </div>
                    
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                <FaEnvelope className="text-uk-blue w-5 h-5" />
                              </div>
                    <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Email</h4>
                                <p className="text-gray-800">{currentLocation.email}</p>
                                <a 
                                  href={`mailto:${currentLocation.email}`}
                                  className="inline-flex items-center mt-2 text-uk-blue hover:text-blue-700 transition-colors text-sm font-medium"
                                >
                                  Send Email
                                </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                <FaClock className="text-uk-blue w-5 h-5" />
                              </div>
                          <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Hours</h4>
                                <p className="text-gray-800">{currentLocation.hours}</p>
                    </div>
                    </div>
                  </div>
                  
                          <div className="mt-8">
                            <Button 
                              variant="primary"
                              onClick={scrollToForm}
                              size="lg"
                              className="shadow-lg shadow-blue-500/20"
                            >
                              Contact This Location
                            </Button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-dark-blue to-blue-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6"
            >
              Stay Updated with Our Newsletter
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Subscribe to our newsletter to receive updates about new courses, 
              upcoming events, and educational resources.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow max-w-md"
              />
              <Button variant="white" size="lg" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </motion.form>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm text-blue-200 mt-4"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 