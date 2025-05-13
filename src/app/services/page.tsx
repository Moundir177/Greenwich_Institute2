"use client";

import { useState, useEffect } from 'react';
import { FaUserGraduate, FaBriefcase, FaLaptop, FaGlobe, FaChalkboardTeacher, FaUsers, FaBook, FaHandshake, FaArrowRight, FaBuilding, FaChevronDown, FaChartLine, FaPalette, FaTheaterMasks, FaLanguage } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';

// Metadata for the page
const pageMetadata = {
  title: 'Our Services | UK Institute',
  description: 'Explore the comprehensive range of educational services offered by UK Institute.',
};

const academicServices = [
  // Start and Improve Your Business (SIYB) Section
  {
    icon: <FaBriefcase className="text-2xl" />,
    title: 'Start and Improve Your Business (SIYB)',
    description: 'Official ILO-certified program helping entrepreneurs start and grow successful businesses through practical training and mentorship.',
    category: 'siyb'
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: 'Generate Your Business Idea (GYB)',
    description: 'For potential entrepreneurs who want to establish a project or enter the business field and seek to acquire leadership and entrepreneurship skills.',
    category: 'siyb'
  },
  {
    icon: <FaLaptop className="text-2xl" />,
    title: 'Start Your Business (SYB)',
    description: 'Comprehensive training program for prospective entrepreneurs who want to start a small business and already have a concrete business idea.',
    category: 'siyb'
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: 'Improve Your Business (IYB)',
    description: 'Designed for entrepreneurs who want to develop their existing businesses and improve operational efficiency and profitability.',
    category: 'siyb'
  },
  
  // Higher Education Section
  {
    icon: <FaUserGraduate className="text-2xl" />,
    title: 'Degree Programs',
    description: 'Accredited undergraduate and postgraduate degree programs across various disciplines designed to provide comprehensive theoretical knowledge and practical skills.',
    category: 'higher'
  },
  {
    icon: <FaGlobe className="text-2xl" />,
    title: 'International Programs',
    description: 'Global exchange opportunities and international certifications that provide a broader perspective and global recognition.',
    category: 'higher'
  },
  {
    icon: <FaBook className="text-2xl" />,
    title: 'Research Opportunities',
    description: 'Engage in cutting-edge research projects under the guidance of experienced faculty members and industry experts.',
    category: 'higher'
  },
  
  // Cultural Education Section
  {
    icon: <FaPalette className="text-2xl" />,
    title: 'Cultural Programs',
    description: 'Diverse cultural education programs promoting artistic expression, cultural awareness, and creative development across various disciplines.',
    category: 'cultural'
  },
  {
    icon: <FaTheaterMasks className="text-2xl" />,
    title: 'Arts & Performance',
    description: 'Courses in visual arts, music, theater, and dance that develop creative expression and performance skills.',
    category: 'cultural'
  },
  {
    icon: <FaLanguage className="text-2xl" />,
    title: 'Language & Heritage',
    description: 'Programs focused on language acquisition, cultural heritage preservation, and intercultural communication.',
    category: 'cultural'
  },
];

const supportServices = [
  {
    icon: <FaChalkboardTeacher className="text-2xl" />,
    title: 'Career Counseling',
    description: 'Personalized guidance to help you make informed decisions about your educational and career path.',
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: 'Alumni Network',
    description: 'Access to our extensive alumni network for mentorship, networking, and professional development opportunities.',
  },
  {
    icon: <FaBook className="text-2xl" />,
    title: 'Library Resources',
    description: 'Comprehensive digital and physical library with extensive academic resources, journals, and research materials.',
  },
  {
    icon: <FaHandshake className="text-2xl" />,
    title: 'Industry Partnerships',
    description: 'Connections with leading companies for internships, job placements, and collaborative projects.',
  },
];

const serviceProcess = [
  {
    number: '01',
    title: 'Assessment',
    description: 'We begin by understanding your educational needs, goals, and preferences through a comprehensive assessment.'
  },
  {
    number: '02',
    title: 'Customization',
    description: 'Based on your assessment, we develop a personalized learning plan tailored to your specific requirements.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our expert educators and support staff implement your learning plan with the highest standards of quality.'
  },
  {
    number: '04',
    title: 'Monitoring',
    description: 'We continuously monitor your progress and provide feedback to ensure you\'re on track to achieve your goals.'
  },
  {
    number: '05',
    title: 'Evaluation',
    description: 'Regular evaluations help us identify areas for improvement and make necessary adjustments to your learning plan.'
  },
  {
    number: '06',
    title: 'Success',
    description: 'We celebrate your achievements and provide ongoing support to help you succeed in your future endeavors.'
  }
];

export default function ServicesPage() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  
  // Scroll to the correct section based on hash
  useEffect(() => {
    // Check for hash in URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the '#' and find the element
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Add a small delay to ensure the page has fully loaded
        setTimeout(() => {
          const navbarHeight = 80; // Approximate navbar height
          const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
      }
    }
    
    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash) {
        const id = newHash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Comprehensive educational services designed to support your learning journey from enrollment to graduation and beyond.
            </p>
            <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#academic-services" 
                variant="gold"
                effect="hoverglow"
                icon={<FaArrowRight />}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-uk-blue-light to-uk-blue">Comprehensive Educational Solutions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              At UK Institute, we offer a wide range of services designed to enhance your educational experience and help you achieve your career goals. From academic programs to student support services, we're committed to supporting your success at every step.
            </p>
          </div>
        </div>
      </section>
      
      {/* Academic Services */}
      <section id="academic-services" className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Our Main Programs</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Institute <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Programs</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              Our institute offers three main areas of expertise to support your educational and professional growth.
            </p>
          </div>
          
          {/* SIYB Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-uk-blue mb-6 border-l-4 border-gold pl-4">
              Start and Improve Your Business (SIYB)
            </h3>
            <p className="text-lg max-w-3xl mb-8">
              Official ILO-certified programs helping entrepreneurs start and grow successful businesses. Our institute is an official partner of the International Labour Organization's SIYB program.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {academicServices
                .filter(service => service.category === 'siyb')
                .map((service, index) => (
                  <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                    <Card 
                      variant="elevated" 
                      className="h-full p-6 animate-fadeIn hover:shadow-xl transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-14 h-14 bg-gradient-to-br from-uk-blue to-uk-blue-dark rounded-full p-4 text-gold flex items-center justify-center shimmer shadow-lg">
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-uk-blue mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Higher Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-uk-blue mb-6 border-l-4 border-uk-blue pl-4">
              Higher Education
            </h3>
            <p className="text-lg max-w-3xl mb-8">
              Accredited academic programs designed to provide comprehensive theoretical knowledge and practical skills for career advancement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {academicServices
                .filter(service => service.category === 'higher')
                .map((service, index) => (
                  <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                    <Card 
                      variant="elevated" 
                      className="h-full p-6 animate-fadeIn hover:shadow-xl transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-14 h-14 bg-gradient-to-br from-uk-blue to-uk-blue-dark rounded-full p-4 text-gold flex items-center justify-center shimmer shadow-lg">
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-uk-blue mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Cultural Education Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-uk-blue mb-6 border-l-4 border-red-500 pl-4">
              Cultural Education
            </h3>
            <p className="text-lg max-w-3xl mb-8">
              Programs dedicated to enhancing cultural awareness, artistic expression, and creative development across various disciplines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {academicServices
                .filter(service => service.category === 'cultural')
                .map((service, index) => (
                  <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                    <Card 
                      variant="elevated" 
                      className="h-full p-6 animate-fadeIn hover:shadow-xl transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-14 h-14 bg-gradient-to-br from-uk-red to-uk-red-dark rounded-full p-4 text-white flex items-center justify-center shimmer shadow-lg">
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-uk-blue mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="mt-12 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Button 
              href="/courses" 
              variant="primary" 
              icon={<FaUserGraduate />}
              effect="3d"
            >
              View Our Courses
            </Button>
          </div>
        </div>
      </section>
      
      {/* Support Services */}
      <section id="support-services" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-red-100 text-uk-red px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Student Success</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Support <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-red via-red-500 to-uk-red">Services</span>
            </h2>
            <p className="text-lg max-w-3xl animate-slideUpFade">
              We provide comprehensive support services to ensure you have everything you need to succeed in your educational journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                <Card 
                  variant="bordered" 
                  className="h-full p-6 animate-fadeIn border-2 border-gray-100 hover:border-red-100 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-uk-red to-uk-red-dark rounded-full p-4 text-white flex items-center justify-center shimmer shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-uk-blue mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wave Separator */}
      <div className="wave-separator uk-blue">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 800,0 1000,50 C1200,100 1350,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Custom Programs */}
      <section id="corporate-training" className="py-16 bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-uk-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideRight">
                <div className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Tailored Solutions</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Custom Corporate Training</span>
                </h2>
                <p className="text-white/90 mb-4 animate-slideUpFade" style={{ animationDelay: '0.2s' }}>
                  We work with organizations to develop customized training programs that address specific industry challenges and upskill your workforce. Our tailored corporate solutions include:
                </p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.3s' }}>
                    <span className="text-gold mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>Customized curriculum development based on your organization's needs</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.4s' }}>
                    <span className="text-gold mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>On-site or virtual training delivery options</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.5s' }}>
                    <span className="text-gold mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>Industry-specific certifications and compliance training</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.6s' }}>
                    <span className="text-gold mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>Leadership and management development programs</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.7s' }}>
                    <span className="text-gold mr-2 flex-shrink-0 mt-1">✓</span>
                    <span>Assessment and reporting on training effectiveness</span>
                  </li>
                </ul>
                <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.8s' }}>
                  <Button 
                    href="/contact" 
                    variant="gold" 
                    icon={<FaBuilding />}
                    effect="hoverglow"
                  >
                    Inquire About Corporate Training
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl animate-slideLeft border border-white/20 p-1">
                <Image 
                  src="/images/services/corporate-training.jpg" 
                  alt="Corporate Training"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uk-blue-dark/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section id="process" className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">How We Work</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Our Service <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Process</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              A streamlined approach to delivering exceptional educational services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
              <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                <Card 
                  variant={index % 2 === 0 ? "gradient" : "glass"} 
                  color={index % 3 === 0 ? "blue" : index % 3 === 1 ? "gold" : "red"}
                  className="h-full p-6 animate-fadeIn relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 bg-white/10 rounded-full w-12 h-12 flex items-center justify-center font-serif font-bold text-xl shimmer shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute top-0 right-0 w-10 h-10 opacity-20">
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white"></div>
                      <div className="absolute top-2 right-6 w-2 h-2 rounded-full bg-white"></div>
                      <div className="absolute top-6 right-2 w-2 h-2 rounded-full bg-white"></div>
                      <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-3">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold/20 text-uk-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-flipIn">Common Questions</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Questions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Are your courses accredited?",
                  answer: "Yes, all our degree programs and many of our professional certifications are fully accredited by recognized education authorities and industry bodies, ensuring your qualifications are valued by employers worldwide."
                },
                {
                  question: "Can I transfer credits from another institution?",
                  answer: "We accept transfer credits from recognized institutions for many of our programs. The number of credits accepted depends on the program and the institution. Contact our admissions team for a personalized credit evaluation."
                },
                {
                  question: "What support is available for international students?",
                  answer: "We offer comprehensive support for international students, including visa assistance, English language support, cultural orientation, accommodation guidance, and dedicated international student advisors."
                },
                {
                  question: "Do you offer financial aid or scholarships?",
                  answer: "Yes, we offer various financial aid options and scholarships based on academic merit, financial need, and other criteria. Our financial aid office can help you explore all available options."
                },
                {
                  question: "What career services do you provide?",
                  answer: "Our career services include personalized career counseling, resume and interview preparation, job search assistance, networking events, career fairs, and access to our exclusive job portal with opportunities from our industry partners."
                }
              ].map((faq, index) => (
                <div key={index} className="transform transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-gold/20 animate-fadeIn transition-all duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
                    <h3 className="text-lg font-bold text-uk-blue mb-2">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-uk-blue via-uk-blue-light to-uk-blue">{faq.question}</span>
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Ready to Start Your Educational Journey?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Contact us today to learn more about our services and how we can help you achieve your educational and career goals.
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
                  href="/contact" 
                  variant="white"
                  effect="hoverglow"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 