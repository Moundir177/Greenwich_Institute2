"use client";

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaClock, FaGlobe, FaHeadset, FaCheck, FaExclamationTriangle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Button from '@/components/ui/Button';

// Sample office locations
const OFFICE_LOCATIONS = [
  {
    id: 'main',
    name: 'Main Campus',
    address: '123 Education Street, London, UK, W1 8XX',
    phone: '+44 20 7123 4567',
    email: 'info@greenwich.edu',
    hours: 'Monday - Friday: 8:30 AM - 5:30 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.398555375457!2d-0.12882563022465!3d51.50747993490577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1687527104706!5m2!1sen!2suk'
  },
  {
    id: 'city',
    name: 'City Campus',
    address: '45 Financial Avenue, London, UK, EC3V 3QT',
    phone: '+44 20 7123 8910',
    email: 'city@greenwich.edu',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9930.923753766622!2d-0.08941284022465!3d51.51349243438634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034d1a7b9929%3A0x790260713d1d350!2sBank%20of%20England!5e0!3m2!1sen!2suk!4v1687527202943!5m2!1sen!2suk'
  },
  {
    id: 'international',
    name: 'International Office',
    address: '78 Global Street, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'international@greenwich.edu',
    hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.547330156347!2d55.27180388665771!3d25.197201836453582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1687527253421!5m2!1sen!2sae'
  }
];

// FAQ items
const FAQ_ITEMS = [
  {
    question: 'How can I apply for a course?',
    answer: 'You can apply for a course through our online application system. Visit the course page, click "Apply Now", and follow the instructions to complete your application.'
  },
  {
    question: 'What are your payment options?',
    answer: 'We accept various payment methods including credit/debit cards, bank transfers, and installment plans. For details specific to your course, please contact our finance department.'
  },
  {
    question: 'Do you offer scholarships or financial aid?',
    answer: 'Yes, we offer a range of scholarships and financial aid options based on merit, need, and specific criteria. Visit our scholarships page or contact our admissions team for more information.'
  },
  {
    question: 'How do I request academic transcripts?',
    answer: 'Current and former students can request academic transcripts through our student portal or by submitting a form to the registrar\'s office. Processing typically takes 3-5 business days.'
  },
  {
    question: 'Can I visit the campus before applying?',
    answer: 'Absolutely! We encourage prospective students to visit our campus. You can schedule a campus tour through our website or by contacting our admissions office.'
  }
];

export default function ContactPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeLocation, setActiveLocation] = useState('main');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send this data to your server
      console.log('Form submitted:', formData);
      
      // Show success message
      setFormSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }
  };
  
  // Get current location data
  const currentLocation = OFFICE_LOCATIONS.find(loc => loc.id === activeLocation) || OFFICE_LOCATIONS[0];
  
  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white py-20 overflow-hidden">
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
              Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Us</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              We're here to help! Get in touch with our team for any inquiries about our courses, admissions, or general information.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Connect With Us</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
                  Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-uk-blue-light to-uk-blue">Touch</span>
              </h2>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 h-full">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                    <div className="mt-1 w-12 h-12 flex-shrink-0 rounded-full bg-uk-blue flex items-center justify-center text-gold">
                      <FaHeadset className="w-5 h-5" />
                  </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-uk-blue">General Inquiries</h3>
                      <p className="text-gray-600 mb-1">For general questions and information</p>
                      <a href="mailto:info@greenwich.edu" className="text-uk-blue font-medium hover:text-gold transition-colors">
                        info@greenwich.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                    <div className="mt-1 w-12 h-12 flex-shrink-0 rounded-full bg-uk-blue flex items-center justify-center text-gold">
                      <FaGlobe className="w-5 h-5" />
                  </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-uk-blue">International Students</h3>
                      <p className="text-gray-600 mb-1">For international admissions and visa inquiries</p>
                      <a href="mailto:international@greenwich.edu" className="text-uk-blue font-medium hover:text-gold transition-colors">
                        international@greenwich.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                    <div className="mt-1 w-12 h-12 flex-shrink-0 rounded-full bg-uk-blue flex items-center justify-center text-gold">
                      <FaPhone className="w-5 h-5" />
                  </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-uk-blue">Call Us</h3>
                      <p className="text-gray-600 mb-1">Our team is available Monday-Friday, 9am-5pm</p>
                      <a href="tel:+442071234567" className="text-uk-blue font-medium hover:text-gold transition-colors">
                      +44 20 7123 4567
                    </a>
                  </div>
                </div>
              </div>
              
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-uk-blue mb-4">
                Connect With Us
              </h3>
                  <p className="text-gray-600 mb-4">
                Follow us on social media for updates, events, and educational content.
              </p>
              <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gradient-to-br from-uk-blue to-uk-blue-dark text-white flex items-center justify-center rounded-full hover:from-gold hover:to-amber-500 transition-all duration-300">
                  <FaFacebook />
                </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-br from-uk-blue to-uk-blue-dark text-white flex items-center justify-center rounded-full hover:from-gold hover:to-amber-500 transition-all duration-300">
                  <FaTwitter />
                </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-br from-uk-blue to-uk-blue-dark text-white flex items-center justify-center rounded-full hover:from-gold hover:to-amber-500 transition-all duration-300">
                  <FaInstagram />
                </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-br from-uk-blue to-uk-blue-dark text-white flex items-center justify-center rounded-full hover:from-gold hover:to-amber-500 transition-all duration-300">
                  <FaLinkedin />
                </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-br from-uk-blue to-uk-blue-dark text-white flex items-center justify-center rounded-full hover:from-gold hover:to-amber-500 transition-all duration-300">
                  <FaYoutube />
                </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <div className="inline-block bg-gold/20 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Send Message</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
                  Send Us a <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Message</span>
              </h2>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              {formSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <FaCheck className="text-green-600 w-6 h-6" />
                    </div>
                  <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us! Our team will review your message and get back to you as soon as possible.
                      </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent`}
                          placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent`}
                          placeholder="Enter your email address"
                      />
                      {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent"
                          placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent`}
                      >
                        <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Admissions">Admissions</option>
                          <option value="Course Information">Course Information</option>
                        <option value="Technical Support">Technical Support</option>
                          <option value="Financial Aid">Financial Aid</option>
                        <option value="Other">Other</option>
                      </select>
                      {formErrors.subject && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent`}
                        placeholder="Enter your message here"
                    ></textarea>
                    {formErrors.message && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                    <div className="mt-6">
                      <Button
                    type="submit"
                        variant="primary"
                        effect="3d"
                        className="w-full md:w-auto px-8 py-3"
                  >
                    Send Message
                      </Button>
                    </div>
                </form>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Our Locations</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Find Us <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Globally</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Visit one of our campuses or offices around the world to learn more about our programs and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {OFFICE_LOCATIONS.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`p-6 rounded-xl transition-all duration-300 text-left transform hover:-translate-y-1 ${
                  activeLocation === location.id 
                  ? 'bg-gradient-to-r from-uk-blue to-uk-blue-dark text-white shadow-xl' 
                  : 'bg-gray-50 text-gray-800 hover:bg-gray-100 shadow-md'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${activeLocation === location.id ? 'text-gold' : 'text-uk-blue'}`}>
                {location.name}
                </h3>
                <div className="flex items-start mt-4">
                  <FaMapMarkerAlt className={`mt-1 mr-3 ${activeLocation === location.id ? 'text-gold' : 'text-uk-blue'}`} />
                  <p className={activeLocation === location.id ? 'text-white/90' : 'text-gray-600'}>
                    {location.address}
                  </p>
                </div>
                <div className="flex items-start mt-2">
                  <FaPhone className={`mt-1 mr-3 ${activeLocation === location.id ? 'text-gold' : 'text-uk-blue'}`} />
                  <p className={activeLocation === location.id ? 'text-white/90' : 'text-gray-600'}>
                    {location.phone}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 p-2 rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src={currentLocation.mapUrl}
                  width="100%"
              height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${currentLocation.name}`}
              className="rounded-lg"
                ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/20 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Quick Answers</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Questions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <details key={index} className="group bg-white rounded-xl overflow-hidden shadow-md">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 bg-white">
                    <h3 className="text-lg font-medium text-uk-blue pr-2">{faq.question}</h3>
                    <span className="flex-shrink-0 ml-2 p-1 rounded-full bg-gray-200 text-uk-blue group-open:rotate-180 transition-transform duration-300">
                      <FaChevronDown />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p>{faq.answer}</p>
                </div>
                </details>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                href="/faq" 
                variant="primary"
                effect="hoverglow"
              >
                View All FAQs
              </Button>
            </div>
          </div>
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Ready to Begin Your Educational Journey?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Apply today and take the first step towards a bright future with our world-class educational programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
              >
                  Browse Courses
                </Button>
                <Button 
                  href="/apply" 
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
    </div>
  );
} 