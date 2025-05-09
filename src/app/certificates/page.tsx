"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaCheck, FaSearch, FaDownload, FaCertificate, FaUserGraduate, FaBriefcase, FaGlobe, FaChevronRight } from 'react-icons/fa';
import Card from '@/components/ui/Card';

const certificateTypes = [
  {
    title: 'Course Completion Certificates',
    description: 'Awarded upon successful completion of a course, indicating mastery of the subject matter and fulfillment of all requirements.',
    icon: FaCertificate,
  },
  {
    title: 'Professional Certifications',
    description: 'Industry-recognized credentials that validate specific skills and knowledge in professional domains.',
    icon: FaUserGraduate,
  },
  {
    title: 'Specialized Diplomas',
    description: 'Comprehensive certifications for completion of multiple related courses forming a specialized skill set.',
    icon: FaBriefcase,
  },
  {
    title: 'International Qualifications',
    description: 'Globally recognized certifications developed in partnership with international education bodies.',
    icon: FaGlobe,
  },
];

const AccreditationLogos = [
  { name: 'British Council', imageSrc: '/images/logos/british-council.png' },
  { name: 'Quality Assurance Agency', imageSrc: '/images/logos/qaa.png' },
  { name: 'Office for Students', imageSrc: '/images/logos/ofs.png' },
  { name: 'UK NARIC', imageSrc: '/images/logos/uk-naric.png' },
];

export default function CertificatesPage() {
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
              Certificates & <span className="text-gold text-shadow-gold shimmer">Accreditation</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Our industry-recognized certificates validate your skills and enhance your professional credentials.
            </p>
            <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#verify-certificate" 
                variant="gold"
                effect="hoverglow"
                icon={<FaChevronRight />}
              >
                Verify Certificate
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Recognition</span>
            <h2 className="section-title text-uk-blue">
              <span className="gradient-text">Internationally Recognized Credentials</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              UK Institute offers a range of certificates and qualifications designed to validate your skills and enhance your employability in today's competitive job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificateTypes.map((type, index) => (
              <div key={index} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card variant="elevated" className="h-full">
                  <div className="flex flex-col items-center">
                    <div className="bg-uk-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gold shimmer">
                      <type.icon size={32} />
                    </div>
                    <h3 className="card-title text-center mb-3">{type.title}</h3>
                    <p className="text-center">{type.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificate Showcase */}
      <section className="section bg-gray-50 pattern-dots">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideRight">
              <span className="badge badge-gold animate-flipIn">Our Certificates</span>
              <h2 className="mt-4 text-3xl font-serif font-bold text-uk-blue mb-6">Premium Quality Certification</h2>
              <p className="mb-4 animate-slideUpFade">
                Each UK Institute certificate is designed to reflect the prestige and quality of your educational achievement. Our certificates feature:
              </p>
              <ul className="space-y-4">
                {[
                  'Secure verification with unique identification numbers',
                  'Official seals and signatures from institutional authorities',
                  'Premium paper quality with anti-forgery features',
                  'Digital versions available for online sharing and verification',
                  'Recognition by industry partners and employers'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start animate-slideLeft" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    <div className="mr-3 bg-uk-blue rounded-full p-1 text-gold">
                      <FaCheck className="text-gold" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.8s' }}>
                <Button href="/courses" variant="primary" effect="3d">
                  View Our Courses
                </Button>
              </div>
            </div>
            <div className="relative animate-slideLeft">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-uk-blue/10 rounded-full"></div>
              <div className="relative uk-border-gradient p-2 rounded-lg overflow-hidden shadow-xl animate-float">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/images/certificates/sample-certificate.jpg" 
                    alt="UK Institute Certificate Sample"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-uk-blue-dark/30 to-transparent"></div>
                </div>
              </div>
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
      
      {/* Verification Process */}
      <section id="verify-certificate" className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-secondary animate-flipIn">Authenticity</span>
            <h2 className="section-title text-uk-blue mt-4">
              Certificate <span className="text-uk-red">Verification</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Our secure verification system allows employers and institutions to easily verify the authenticity of your UK Institute credentials.
            </p>
          </div>
          
          <div className="uk-border-gradient p-1 rounded-lg glass-dark animate-fadeIn">
            <div className="bg-white rounded-lg p-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-uk-blue mb-6 text-center gradient-text">Verify a Certificate</h3>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter certificate ID (e.g., UK-CERT-12345)"
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-uk-blue focus:border-uk-blue"
                  />
                </div>
                <div className="text-center">
                  <Button variant="primary" effect="hoverglow" icon={<FaSearch />}>
                    Verify Certificate
                  </Button>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h4 className="font-bold text-uk-blue mb-4">How to verify a certificate:</h4>
                  <ol className="space-y-4">
                    {[
                      'Enter the certificate ID found on the bottom of the certificate',
                      'Click the "Verify Certificate" button',
                      'View the verification results, including issue date and course details',
                      'For additional verification, contact our certification office'
                    ].map((step, index) => (
                      <li key={index} className="flex items-start animate-slideUpFade" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="mr-3 bg-uk-blue rounded-full w-6 h-6 flex items-center justify-center text-gold font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accreditation */}
      <section className="py-16 bg-uk-blue text-uk-white pattern-grid">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-gold animate-flipIn">Quality</span>
            <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Our Accreditations</h2>
            <p className="text-lg text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade">
              UK Institute is proud to be accredited by leading educational and professional organizations, ensuring our certificates meet the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AccreditationLogos.map((logo, index) => (
              <div key={index} className="glass text-center p-6 rounded-lg animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-32 w-full flex items-center justify-center relative animate-pulse">
                  <div className="bg-gray-300 h-16 w-32 relative overflow-hidden shimmer">
                    {/* Replace with actual logo images once available */}
                    <div className="absolute inset-0 flex items-center justify-center text-uk-blue font-bold">
                      {logo.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-uk-white/90 max-w-3xl mx-auto mb-6 animate-slideUpFade">
              Our accreditations ensure that your certificates are recognized globally by employers, educational institutions, and professional bodies.
            </p>
            <Button href="/about" variant="white" effect="3d">
              Learn More About Our Institution
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Help</span>
            <h2 className="section-title text-uk-blue mt-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Find answers to common questions about our certificates and verification process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to receive my certificate?",
                  answer: "Digital certificates are typically issued within 2-3 business days after course completion. Physical certificates are mailed within 7-10 business days, depending on your location."
                },
                {
                  question: "Are your certificates internationally recognized?",
                  answer: "Yes, our certificates are accredited by recognized educational authorities and industry bodies, ensuring they are valued by employers and institutions worldwide."
                },
                {
                  question: "What if I lose my certificate?",
                  answer: "You can request a replacement certificate through your student portal. Digital certificates can be redownloaded at any time, while physical replacements incur a small fee."
                },
                {
                  question: "How can employers verify my certificate?",
                  answer: "Employers can verify the authenticity of your certificate using the unique certificate ID through our online verification portal or by contacting our certification office directly."
                }
              ].map((faq, index) => (
                <div key={index} className="card uk-border-gradient animate-fadeIn" style={{ animationDelay: `${index * 0.15}s` }}>
                  <h3 className="text-lg font-bold text-uk-blue mb-2 gradient-text">{faq.question}</h3>
                  <p>{faq.answer}</p>
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
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Get Certified?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Enhance your career prospects with industry-recognized certifications from UK Institute.
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
                  href="/contact" 
                  variant="white"
                  effect="hoverglow"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 