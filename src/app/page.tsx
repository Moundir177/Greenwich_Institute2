"use client";

import React from 'react';
import { FaAward, FaUserGraduate, FaBriefcase, FaGlobe, FaChevronRight, FaGraduationCap, FaBook, FaCertificate } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
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
              Excellence in <span className="text-gold text-shadow-gold shimmer">Education</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Join one of the UK's premier institutes offering world-class courses, certifications, and professional development opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="/courses" 
                variant="gold"
                effect="3d"
                icon={<FaChevronRight />}
              >
                Browse Courses
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
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-uk-white pattern-dots">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Excellence</span>
            <h2 className="section-title text-uk-blue mt-4">
              Why Choose <span className="gradient-text">UK Institute</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              We provide world-class education with a focus on practical skills and industry relevance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaAward,
                title: "Accredited Courses",
                description: "All our courses are fully accredited and recognized internationally"
              },
              {
                icon: FaUserGraduate,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of practical experience"
              },
              {
                icon: FaBriefcase,
                title: "Career Support",
                description: "Comprehensive career services to help you achieve your professional goals"
              },
              {
                icon: FaGlobe,
                title: "Global Community",
                description: "Join a diverse community of students and alumni from around the world"
              }
            ].map((feature, index) => (
              <div key={index} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card variant="elevated" className="h-full">
                  <div className="flex flex-col items-center">
                    <div className="bg-uk-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gold shimmer">
                      <feature.icon size={32} />
                    </div>
                    <h3 className="card-title text-center mb-3">{feature.title}</h3>
                    <p className="text-center">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-secondary animate-flipIn">Programs</span>
            <h2 className="section-title text-uk-blue mt-4">
              Featured <span className="text-uk-red">Academic Programs</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Discover our popular programs designed to help you excel in today's competitive world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: "Undergraduate Degrees",
                description: "Bachelor's programs in Business, Technology, Arts, and Sciences",
                color: "blue"
              },
              {
                icon: FaBook,
                title: "Master's Programs",
                description: "Advanced degrees with specializations in high-demand fields",
                color: "red"
              },
              {
                icon: FaCertificate,
                title: "Professional Certifications",
                description: "Industry-recognized certifications to enhance your career prospects",
                color: "gold"
              }
            ].map((program, index) => (
              <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`uk-border-gradient-${program.color} p-1 rounded-lg glass-${program.color === 'gold' ? 'light' : 'dark'}`}>
                  <div className="p-8 rounded-lg h-full">
                    <div className={`bg-uk-${program.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-uk-white shimmer`}>
                      <program.icon size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-uk-white mb-4">{program.title}</h3>
                    <p className="text-uk-white/90 mb-6">{program.description}</p>
                    <Button 
                      href="/courses" 
                      variant={program.color === "gold" ? "white" : program.color === "red" ? "white" : "outline"}
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wave Separator */}
      <div className="wave-separator gray">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 800,0 1000,50 C1200,100 1350,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Statistics Section */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "150+", label: "Expert Instructors" },
              { number: "10,000+", label: "Successful Graduates" },
              { number: "95%", label: "Employment Rate" }
            ].map((stat, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="uk-border-gradient p-1 rounded-lg">
                  <div className="bg-white p-6 rounded-lg h-full">
                    <h3 className="text-4xl font-bold text-uk-blue mb-2 gradient-text">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-uk-blue-dark to-uk-blue">
        <div className="container">
          <div className="callout-ribbon p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-fadeIn">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Transform Your Future?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Take the first step towards a brighter future with our world-class courses and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
                >
                  Explore Courses
                </Button>
                <Button 
                  href="/contact" 
                  variant="white"
                  effect="hoverglow"
                >
                  Contact Advisors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
