"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaChevronRight, FaQuestion } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-enhanced">
        <div className="pattern-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="container hero-content">
          <div className="text-center">
            <h1 className="text-uk-white animate-bounceIn">
              Get in <span className="text-gold text-shadow-gold shimmer">Touch</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Have questions about our courses or need assistance? Our team is here to help you every step of the way.
            </p>
            <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#contact-form" 
                variant="gold"
                effect="hoverglow"
                icon={<FaChevronRight />}
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section id="contact-form" className="section bg-uk-white pattern-dots">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Reach Out</span>
            <h2 className="section-title text-uk-blue mt-4">
              <span className="gradient-text">We'd Love to Hear From You</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Our dedicated team is ready to assist you with any inquiries about our courses, enrollment process, or general information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slideRight">
              <Card variant="gradient" className="h-full p-8">
                <h2 className="text-2xl font-serif font-bold text-uk-white mb-6">Contact Information</h2>
                <p className="text-uk-white/90 mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-uk-white/10 rounded-full p-3 text-gold shimmer">
                        <FaMapMarkerAlt className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gold mb-1">Main Campus</h3>
                      <p className="text-uk-white/90">
                        123 Education Street<br />
                        London, UK, SW1 1AA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-uk-white/10 rounded-full p-3 text-gold shimmer">
                        <FaPhone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gold mb-1">Phone</h3>
                      <p className="text-uk-white/90">
                        Main: +44 20 1234 5678<br />
                        Admissions: +44 20 1234 5679
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-uk-white/10 rounded-full p-3 text-gold shimmer">
                        <FaEnvelope className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gold mb-1">Email</h3>
                      <p className="text-uk-white/90">
                        General: info@ukinstitute.edu<br />
                        Admissions: admissions@ukinstitute.edu<br />
                        Support: support@ukinstitute.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-uk-white/10 rounded-full p-3 text-gold shimmer">
                        <FaClock className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gold mb-1">Office Hours</h3>
                      <p className="text-uk-white/90">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 border-t border-uk-white/10 pt-8">
                  <h3 className="text-lg font-bold text-gold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="bg-uk-white/10 rounded-full p-3 text-uk-white hover:text-gold hover:bg-uk-white/20 transition-all animate-scaleIn"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slideLeft">
              <Card variant="elevated" className="h-full p-8">
                <h2 className="text-2xl font-serif font-bold text-uk-blue mb-6 gradient-text">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        placeholder="John"
                      />
                    </div>
                    
                    <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      placeholder="+44 7123 456789"
                    />
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="course">Course Information</option>
                      <option value="payment">Payment & Fees</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-gray-600">
                        I agree to the processing of my personal data in accordance with the{' '}
                        <a href="/privacy-policy" className="text-uk-blue hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="animate-scaleIn" style={{ animationDelay: '0.8s' }}>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      effect="3d"
                      fullWidth
                      icon={<FaPaperPlane />}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'idle' && 'Send Message'}
                      {formStatus === 'submitting' && 'Sending...'}
                      {formStatus === 'success' && 'Message Sent!'}
                      {formStatus === 'error' && 'Error! Try Again'}
                    </Button>
                    
                    {formStatus === 'success' && (
                      <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md animate-fadeIn">
                        Thank you for your message! We'll get back to you as soon as possible.
                      </div>
                    )}
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wave Separator */}
      <div className="wave-separator white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 800,0 1000,50 C1200,100 1350,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Map Section */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-secondary animate-flipIn">Location</span>
            <h2 className="section-title text-uk-blue mt-4">
              <span className="text-uk-red">Visit</span> Our Campus
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Our centrally located campus is easily accessible via public transport. We welcome you to visit us in person.
            </p>
          </div>
          
          <div className="uk-border-gradient p-1 rounded-lg glass-dark animate-fadeIn">
            <div className="w-full h-[500px] bg-gray-100 rounded-lg relative overflow-hidden">
              {/* Map would be embedded here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-uk-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gold shimmer">
                    <FaMapMarkerAlt size={32} />
                  </div>
                  <p className="text-gray-500 text-lg">Interactive Map Loading...</p>
                  <p className="text-sm text-gray-400 mt-2">Map will display UK Institute's campus location</p>
                </div>
              </div>
              
              {/* Map overlay with info box */}
              <div className="absolute bottom-6 left-6 glass-dark p-6 rounded-lg max-w-md animate-slideUp">
                <h3 className="text-xl font-bold text-uk-white mb-3">UK Institute Main Campus</h3>
                <p className="text-uk-white/90 mb-4">
                  Located in the heart of London, our campus offers state-of-the-art facilities in a historic setting.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    href="https://maps.google.com" 
                    variant="white" 
                    size="sm"
                  >
                    Get Directions
                  </Button>
                  <Button 
                    href="#contact-form" 
                    variant="outline" 
                    size="sm"
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50 pattern-grid">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-gold animate-flipIn">Help</span>
            <h2 className="section-title text-uk-blue mt-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Find quick answers to common questions about contacting and visiting UK Institute.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are the best ways to contact admissions?",
                  answer: "The best ways to contact our admissions team are via email at admissions@ukinstitute.edu or by phone at +44 20 1234 5679. Our admissions team is available Monday through Friday from 9:00 AM to 6:00 PM."
                },
                {
                  question: "How quickly can I expect a response to my inquiry?",
                  answer: "We aim to respond to all email inquiries within 24-48 hours during business days. Phone calls are typically answered immediately during office hours. For complex inquiries, it may take up to 3-5 business days to provide a comprehensive response."
                },
                {
                  question: "Can I schedule a campus tour?",
                  answer: "Yes, we offer guided campus tours for prospective students and visitors. Tours can be scheduled by contacting our admissions office at least 48 hours in advance. Tours are typically available Monday through Friday at 11:00 AM and 2:00 PM."
                },
                {
                  question: "How do I reach technical support for online courses?",
                  answer: "For technical support related to online courses, please email support@ukinstitute.edu or call our dedicated support line at +44 20 1234 5680. Our technical support team is available Monday through Saturday from 8:00 AM to 8:00 PM."
                }
              ].map((faq, index) => (
                <div key={index} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.15}s` }}>
                  <Card variant="bordered" className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-uk-blue w-10 h-10 rounded-full flex items-center justify-center text-gold shimmer flex-shrink-0">
                          <FaQuestion />
                        </div>
                        <h3 className="text-lg font-bold text-uk-blue gradient-text">{faq.question}</h3>
                      </div>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-uk-blue-dark to-uk-blue">
        <div className="container">
          <div className="callout-ribbon p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-fadeIn">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Begin Your Educational Journey?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Contact our admissions team today or apply directly to start your path to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
                >
                  Explore Our Courses
                </Button>
                <Button 
                  href="/register" 
                  variant="white"
                  effect="hoverglow"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 