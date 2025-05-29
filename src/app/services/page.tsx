"use client";

import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { FaUserGraduate, FaBriefcase, FaLaptop, FaGlobe, FaChalkboardTeacher, FaUsers, FaBook, FaHandshake, FaArrowRight, FaBuilding, FaChevronDown, FaChartLine, FaPalette, FaTheaterMasks, FaLanguage, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import PageHeroSection from '../components/PageHeroSection';

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
    <PageLayout>
      <PageHeroSection 
        title="Our" 
        titleHighlight="Services"
        description="Comprehensive educational services designed to support your learning journey from enrollment to graduation and beyond."
        buttonText="Explore Our Services"
        buttonLink="#academic-services"
        imageSrc="/images/services/hero-image.jpg"
        imageAlt="Greenwich Institute Services"
      />
      
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
              We offer three specialized sectors of education to enhance your professional development.
            </p>
          </div>
          
          {/* Services Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <a 
              href="#siyb-section" 
              className="py-3 px-5 bg-white shadow-md rounded-full font-medium text-uk-blue border-2 border-gold hover:bg-gold hover:text-white transition duration-300 flex items-center gap-2"
            >
              <FaBriefcase /> Start & Improve Your Business
            </a>
            <a 
              href="#higher-section" 
              className="py-3 px-5 bg-white shadow-md rounded-full font-medium text-uk-blue border-2 border-uk-blue hover:bg-uk-blue hover:text-white transition duration-300 flex items-center gap-2"
            >
              <FaUserGraduate /> Higher Education
            </a>
            <a 
              href="#cultural-section" 
              className="py-3 px-5 bg-white shadow-md rounded-full font-medium text-uk-blue border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300 flex items-center gap-2"
            >
              <FaPalette /> Cultural Education
            </a>
          </div>
          
          {/* SIYB Section */}
          <div id="siyb-section" className="mb-24 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold/20 transform transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-gold to-amber-400 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-white drop-shadow-sm">
                  Start and Improve Your Business (SIYB)
                </h3>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                  <div className="md:w-1/3 relative h-60 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/images/features/siyb_program.jpg" 
                      alt="SIYB Program"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-gold text-white text-xs px-2 py-1 rounded">ILO Certified</span>
                      <h4 className="text-white font-bold mt-1">Official Partner Program</h4>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      <span className="font-bold text-uk-blue">Start and Improve Your Business (SIYB)</span> is a management training program developed by the International Labour Organization (ILO) with a focus on starting and improving small businesses. Our institute is an official partner delivering this world-renowned program to aspiring and existing entrepreneurs.
                    </p>
                    <p className="text-gray-700">
                      The program helps create better businesses by developing management skills in entrepreneurs, which leads to improved competitiveness, productivity, and profitability. Since its inception, SIYB has become one of the largest global business management programs worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {academicServices
                    .filter(service => service.category === 'siyb')
                    .map((service, index) => (
                      <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                        <Card 
                          variant="elevated" 
                          className="h-full p-6 animate-fadeIn hover:shadow-xl hover:border-gold transition-all duration-300 border-2 border-transparent"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-5">
                              <div className="w-14 h-14 bg-gradient-to-br from-gold to-amber-600 rounded-full p-4 text-white flex items-center justify-center shimmer shadow-lg">
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
            </div>
          </div>
          
          {/* Higher Education Section */}
          <div id="higher-section" className="mb-24 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-uk-blue/20 transform transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-uk-blue to-uk-blue-light p-6 flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-white drop-shadow-sm">
                  Higher Education Programs
                </h3>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <FaUserGraduate className="text-2xl text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row-reverse gap-8 mb-8 items-center">
                  <div className="md:w-1/3 relative h-60 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/images/education/graduation-ceremony.jpg" 
                      alt="Higher Education"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-uk-blue text-white text-xs px-2 py-1 rounded">Accredited</span>
                      <h4 className="text-white font-bold mt-1">Recognized Qualifications</h4>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      <span className="font-bold text-uk-blue">Our Higher Education Programs</span> provide comprehensive academic training and professional development across various disciplines. Our courses are designed to equip students with both theoretical knowledge and practical skills needed for career advancement.
                    </p>
                    <p className="text-gray-700">
                      With accredited programs and experienced faculty, we ensure our graduates are well-prepared for the demands of the modern workplace. Our focus on research, innovation, and industry collaboration creates a rich learning environment where students can excel.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {academicServices
                    .filter(service => service.category === 'higher')
                    .map((service, index) => (
                      <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                        <Card 
                          variant="elevated" 
                          className="h-full p-6 animate-fadeIn hover:shadow-xl hover:border-uk-blue transition-all duration-300 border-2 border-transparent"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-5">
                              <div className="w-14 h-14 bg-gradient-to-br from-uk-blue to-uk-blue-dark rounded-full p-4 text-white flex items-center justify-center shimmer shadow-lg">
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
            </div>
          </div>
          
          {/* Cultural Education Section */}
          <div id="cultural-section" className="scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-500/20 transform transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-red-500 to-red-400 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-white drop-shadow-sm">
                  Cultural Education Programs
                </h3>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <FaPalette className="text-2xl text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                  <div className="md:w-1/3 relative h-60 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/images/education/classroom-discussion.jpg" 
                      alt="Cultural Education"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Cultural Enrichment</span>
                      <h4 className="text-white font-bold mt-1">Express & Create</h4>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      <span className="font-bold text-uk-blue">Our Cultural Education Programs</span> are designed to foster artistic expression, cultural awareness, and creative development. These programs provide opportunities for students to explore various forms of art, language, and cultural heritage.
                    </p>
                    <p className="text-gray-700">
                      Through our cultural education initiatives, students develop a deeper understanding of diverse perspectives, enhance their creative abilities, and build valuable communication skills that complement their academic and professional endeavors.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {academicServices
                    .filter(service => service.category === 'cultural')
                    .map((service, index) => (
                      <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                        <Card 
                          variant="elevated" 
                          className="h-full p-6 animate-fadeIn hover:shadow-xl hover:border-red-500 transition-all duration-300 border-2 border-transparent"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-5">
                              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 text-white flex items-center justify-center shimmer shadow-lg">
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
            </div>
          </div>
          
          <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
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
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2 bg-gradient-to-br from-uk-red/10 to-red-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-uk-blue mb-6 border-b-2 border-uk-red/30 pb-2">
                Why Our Support Matters
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-uk-red rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-uk-blue">Holistic Development</p>
                    <p className="text-gray-600">Our support services address academic, professional, and personal growth needs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-uk-red rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-uk-blue">Industry Connections</p>
                    <p className="text-gray-600">Benefit from our extensive network of industry partners and alumni.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-uk-red rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-uk-blue">Personalized Approach</p>
                    <p className="text-gray-600">Tailored support that recognizes your unique goals and challenges.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-uk-red rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-uk-blue">Accessible Resources</p>
                    <p className="text-gray-600">Easy access to learning materials, technology, and facilities.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/education/student-success.jpg" 
                alt="Student Support Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Dedicated to Your Success</h3>
                <p className="text-white/90 mb-4">Our support team is committed to helping you navigate your educational journey with confidence.</p>
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="sm"
                  icon={<FaPhoneAlt />}
                >
                  Contact Support Team
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                <Card 
                  variant="glass" 
                  color="red"
                  className="h-full p-6 animate-fadeIn hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-uk-red to-uk-red-dark rounded-full p-4 text-white flex items-center justify-center shimmer shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-uk-blue mb-3">{service.title}</h3>
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
      <div className="wave-separator-container blue">
        <div className="blue-outline-top"></div>
        <div className="wave-shape blue"></div>
        <div className="blue-outline-bottom"></div>
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
          
          {/* Timeline Process */}
          <div className="hidden md:block mb-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-uk-blue to-uk-red"></div>
            
            {serviceProcess.map((step, index) => (
              <div key={index} className={`flex items-center mb-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div 
                    className={`
                      transform transition-all duration-500 hover:-translate-y-2
                      p-6 rounded-xl shadow-lg border-2
                      ${index % 3 === 0 ? 'bg-gradient-to-br from-gold/10 to-amber-50 border-gold/30' : 
                        index % 3 === 1 ? 'bg-gradient-to-br from-uk-blue/10 to-blue-50 border-uk-blue/30' : 
                        'bg-gradient-to-br from-uk-red/10 to-red-50 border-uk-red/30'}
                    `}
                  >
                    <h3 className={`text-2xl font-bold mb-2 
                      ${index % 3 === 0 ? 'text-amber-700' : 
                        index % 3 === 1 ? 'text-uk-blue' : 
                        'text-uk-red'}
                    `}>
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 z-10">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg
                    ${index % 3 === 0 ? 'bg-gradient-to-br from-gold to-amber-600' : 
                      index % 3 === 1 ? 'bg-gradient-to-br from-uk-blue to-uk-blue-dark' : 
                      'bg-gradient-to-br from-uk-red to-red-700'}
                  `}>
                    {step.number}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
          
          {/* Mobile Process View */}
          <div className="md:hidden">
            <div className="relative pl-8 border-l-2 border-blue-300">
              {serviceProcess.map((step, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-0 top-0 -translate-x-[17px] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20
                    ${index % 3 === 0 ? 'bg-gradient-to-br from-gold to-amber-600' : 
                      index % 3 === 1 ? 'bg-gradient-to-br from-uk-blue to-uk-blue-dark' : 
                      'bg-gradient-to-br from-uk-red to-red-700'}
                  ">
                    {step.number}
                  </div>
                  <div className="transform transition-all duration-300 hover:-translate-y-1">
                    <Card 
                      variant={index % 2 === 0 ? "gradient" : "glass"} 
                      color={index % 3 === 0 ? "blue" : index % 3 === 1 ? "gold" : "red"}
                      className="h-full p-5 animate-fadeIn relative"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p>{step.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Process Summary */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex-1 min-w-[280px]">
                <h3 className="text-2xl font-bold text-uk-blue mb-4">Your Journey With Us</h3>
                <p className="text-gray-700 mb-4">
                  Our structured process ensures that your educational experience is smooth, supportive, and successful from start to finish.
                </p>
                <p className="text-gray-700">
                  We're committed to excellence at every step, with dedicated professionals guiding you through each phase of your academic journey.
                </p>
              </div>
              <div className="flex-1 min-w-[280px] grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-3xl font-bold text-uk-blue mb-1">96%</div>
                  <div className="text-gray-700">Student satisfaction rate</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <div className="text-3xl font-bold text-amber-600 mb-1">92%</div>
                  <div className="text-gray-700">Graduation success rate</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="text-3xl font-bold text-uk-red mb-1">87%</div>
                  <div className="text-gray-700">Employment placement</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                  <div className="text-gray-700">Support availability</div>
                </div>
              </div>
            </div>
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
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 bg-gradient-to-br from-gold/10 to-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-uk-blue mb-4">Have More Questions?</h3>
              <p className="text-gray-700 mb-4">
                Our comprehensive FAQ section covers the most common queries about our programs, admissions, and services.
              </p>
              <p className="text-gray-700 mb-6">
                If you can't find the answer you're looking for, our support team is always ready to help.
              </p>
              <Button 
                href="/contact" 
                variant="gold" 
                size="sm"
                className="w-full"
              >
                Contact Us
              </Button>
              
              <div className="mt-8 pt-8 border-t border-amber-200">
                <h4 className="font-bold text-uk-blue mb-2">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-amber-700 hover:text-uk-blue flex items-center gap-2">
                      <FaChevronRight className="text-xs" /> About Our Institute
                    </a>
                  </li>
                  <li>
                    <a href="/courses" className="text-amber-700 hover:text-uk-blue flex items-center gap-2">
                      <FaChevronRight className="text-xs" /> Course Catalog
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-amber-700 hover:text-uk-blue flex items-center gap-2">
                      <FaChevronRight className="text-xs" /> Full FAQ Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-4">
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
                  <div key={index} className="transform transition-all duration-300 hover:shadow-md">
                    <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 focus:outline-none">
                        <h3 className="text-lg font-bold text-uk-blue group-open:text-gold transition duration-300">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 ml-2 text-gray-400 group-open:text-gold group-open:rotate-180 transition-all duration-300">
                          <FaChevronDown />
                        </div>
                      </summary>
                      <div className="p-6 pt-0 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 animate-fadeIn">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-dark-blue via-blue-900 to-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gold/20 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-float-slow opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-40 w-12 h-12 bg-red-500/20 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fadeIn">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Ready to Start Your Educational Journey?</span>
                  </h2>
                  <p className="text-xl text-white/90 mb-8 animate-slideUpFade">
                    Join thousands of successful graduates who have transformed their careers through our programs. Our admissions team is ready to guide you through the enrollment process.
                  </p>
                  <div className="flex flex-wrap gap-4 animate-scaleIn">
                    <Button 
                      href="/courses" 
                      variant="gold"
                      effect="3d"
                      icon={<FaBook />}
                    >
                      Browse Courses
                    </Button>
                    <Button 
                      href="/contact" 
                      variant="white"
                      effect="hoverglow"
                      icon={<FaPhoneAlt />}
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold text-gold mb-4">Upcoming Intakes</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between pb-2 border-b border-white/10">
                        <span className="text-white/80">Spring Term</span>
                        <span className="text-gold font-medium">March 15</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-white/10">
                        <span className="text-white/80">Summer Term</span>
                        <span className="text-gold font-medium">June 10</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/80">Fall Term</span>
                        <span className="text-gold font-medium">September 5</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Button 
                        href="/register" 
                        variant="outline"
                        className="w-full justify-center"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 