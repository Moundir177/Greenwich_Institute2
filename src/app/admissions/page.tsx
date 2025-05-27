"use client";

import React, { useState } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaFileAlt, FaGlobe, FaChevronDown, FaArrowRight, FaCheckCircle, FaRegClock, FaUserGraduate, FaScroll, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AdmissionsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image 
            src="/images/patterns/pattern1.png" 
            alt="Background pattern" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-white/10 transform rotate-45 rounded-3xl opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center p-2 px-4 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10 shadow-lg">
                <FaGraduationCap className="text-gold mr-2" />
                <span className="text-white text-sm">Applications open for 2023/2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Begin Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">Educational Journey</span> With Us
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our streamlined admissions process is designed to help you quickly start your path to success with expert guidance at every step.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#apply-now" 
                  className="group bg-gold hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="#requirements" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/10 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Requirements
                </motion.a>
              </div>
              
              {/* Key stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                  <div className="text-gold text-2xl font-bold">95%</div>
                  <div className="text-white/80 text-sm">Acceptance Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                  <div className="text-gold text-2xl font-bold">48h</div>
                  <div className="text-white/80 text-sm">Application Review</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                  <div className="text-gold text-2xl font-bold">4x</div>
                  <div className="text-white/80 text-sm">Annual Intakes</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl">
                <div className="absolute -top-6 -right-6 bg-gold p-4 rounded-2xl text-white">
                  <FaUserGraduate size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Check Your Eligibility</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <label className="block text-white/80 mb-2 text-sm">Program of Interest</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50">
                      <option>Select a Program</option>
                      <option>Business Administration</option>
                      <option>Project Management</option>
                      <option>Digital Marketing</option>
                      <option>Data Science</option>
                    </select>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <label className="block text-white/80 mb-2 text-sm">Educational Background</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50">
                      <option>Select Highest Education</option>
                      <option>High School Diploma</option>
                      <option>Associate Degree</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree</option>
                    </select>
                  </div>
                  <button className="w-full bg-white text-dark-blue py-3 rounded-xl font-semibold hover:bg-gold hover:text-white transition-colors">
                    Check Eligibility
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-4">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">Why Choose Greenwich HSTC</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our admissions process is designed to be accessible, straightforward, and supportive at every step of your educational journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Benefit 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-light-gray rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8"></div>
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <FaCalendarAlt className="text-gold text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Flexible Enrollment Cycles</h3>
              <p className="text-gray-600 mb-4">
                We offer multiple intake periods throughout the year with rolling admissions for many programs to fit your schedule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">4 major intake periods annually</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Start dates in Jan, Apr, Jul, Oct</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-light-gray rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8"></div>
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <FaFileAlt className="text-gold text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Streamlined Application</h3>
              <p className="text-gray-600 mb-4">
                Our simplified online application process offers clear requirements and guidance at every step.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Quick 15-minute online application</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">48-hour application review time</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-light-gray rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8"></div>
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <FaGlobe className="text-gold text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Global Accessibility</h3>
              <p className="text-gray-600 mb-4">
                We welcome international students with dedicated support services for a smooth transition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Visa application assistance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Multilingual support team</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Additional benefits banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-dark-blue to-blue-900 rounded-2xl p-8 shadow-lg text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <FaGraduationCap size={180} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <FaRegClock className="text-gold text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Fast-Track Options</h4>
                  <p className="text-white/80">For qualified applicants</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <FaUserGraduate className="text-gold text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Scholarship Programs</h4>
                  <p className="text-white/80">Merit-based opportunities</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <FaScroll className="text-gold text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Credit Transfers</h4>
                  <p className="text-white/80">From recognized institutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Admissions Process */}
      <section id="apply-now" className="py-20 bg-gradient-to-b from-light-gray to-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-4">Application Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">Your Journey to Enrollment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Four simple steps to begin your educational journey with Greenwich HSTC.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            {/* Modern timeline with cards */}
            <div className="space-y-16 relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-gold/20 transform -translate-x-1/2 z-0"></div>
              
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform md:hover:-translate-y-2 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8"></div>
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-gold font-bold text-lg md:ml-auto">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Research Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Explore our range of programs to find the one that aligns with your interests and career goals.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl mt-4">
                      <h4 className="font-semibold text-dark-blue mb-2">Tips:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Review program curriculum and outcomes</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Check entry requirements</span>
                        </li>
                      </ul>
                      <a href="/courses" className="inline-block mt-4 text-gold font-semibold hover:underline">Browse Programs →</a>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gold shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:hidden bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                
                <div className="md:pl-12">
                  <Image 
                    src="/images/admissions/research-programs.jpg" 
                    alt="Student researching programs" 
                    width={500} 
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:hidden bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                
                <div className="md:order-2 md:text-left md:pl-12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform md:hover:-translate-y-2 h-full">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-gold/5 rounded-full -ml-8 -mt-8"></div>
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-gold font-bold text-lg">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Submit Application</h3>
                    <p className="text-gray-600 mb-4">
                      Complete and submit your application form with all required documents through our online portal.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl mt-4">
                      <h4 className="font-semibold text-dark-blue mb-2">Required Documents:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Academic transcripts</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Identification documents</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Personal statement</span>
                        </li>
                      </ul>
                      <a href="/register" className="inline-block mt-4 text-gold font-semibold hover:underline">Start Application →</a>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gold shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                
                <div className="md:order-1 md:pr-12">
                  <Image 
                    src="/images/admissions/submit-application.jpg" 
                    alt="Student submitting application" 
                    width={500} 
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform md:hover:-translate-y-2 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8"></div>
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-gold font-bold text-lg md:ml-auto">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Application Review</h3>
                    <p className="text-gray-600 mb-4">
                      Our admissions team will review your application and may contact you for additional information if needed.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl mt-4">
                      <h4 className="font-semibold text-dark-blue mb-2">What to Expect:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>48-hour initial review period</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Possible interview for select programs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gold shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:hidden bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                
                <div className="md:pl-12">
                  <Image 
                    src="/images/admissions/application-review.jpg" 
                    alt="Application review process" 
                    width={500} 
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:hidden bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-white font-bold">4</span>
                </div>
                
                <div className="md:order-2 md:text-left md:pl-12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform md:hover:-translate-y-2 h-full">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-gold/5 rounded-full -ml-8 -mt-8"></div>
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-gold font-bold text-lg">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-4">Enrollment & Confirmation</h3>
                    <p className="text-gray-600 mb-4">
                      Upon acceptance, complete your enrollment by confirming your place and paying any required fees.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl mt-4">
                      <h4 className="font-semibold text-dark-blue mb-2">Final Steps:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Accept your offer letter</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Complete registration payment</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                          <span>Attend orientation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gold shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                
                <div className="md:order-1 md:pr-12">
                  <Image 
                    src="/images/admissions/enrollment-confirmation.jpg" 
                    alt="Student confirming enrollment" 
                    width={500} 
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-20"
            >
              <a 
                href="/register" 
                className="inline-flex items-center gap-2 bg-gold hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Application Today <FaArrowRight />
              </a>
              <p className="text-gray-500 mt-4">Have questions? <a href="/contact" className="text-gold hover:underline">Contact our admissions team</a></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-dark-blue to-blue-900 rounded-3xl p-10 max-w-5xl mx-auto shadow-xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/20 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full -ml-20 -mb-20"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Need Personal Assistance?</h3>
                <p className="text-white/80 mb-8 text-lg">
                  Our dedicated admissions counselors are here to guide you through every step of your application journey. Reach out anytime.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <FaPhone className="text-gold" />
                    </div>
                    <a href="tel:+123456789" className="text-white hover:text-gold transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <FaEnvelope className="text-gold" />
                    </div>
                    <a href="mailto:admissions@greenwichhstc.edu" className="text-white hover:text-gold transition-colors">
                      admissions@greenwichhstc.edu
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">Request Information</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Program of Interest</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50">
                      <option>Select a Program</option>
                      <option>Business Administration</option>
                      <option>Project Management</option>
                      <option>Digital Marketing</option>
                      <option>Data Science</option>
                    </select>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold hover:bg-amber-500 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Request Information
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="requirements" className="py-20 bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-4">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">Admissions FAQ</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Find answers to frequently asked questions about our admissions process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-light-gray rounded-2xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-xl font-bold text-dark-blue">What are the entry requirements for your courses?</h3>
                <div className={`w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 0 ? 'rotate-180' : ''}`}>
                  <FaChevronDown className="text-gold" />
                </div>
              </button>
              {expandedFaq === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">
                    Entry requirements vary by program, but generally include:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                      <span>Academic transcripts/certificates</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                      <span>Proof of English proficiency (for international students)</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                      <span>Personal statement</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Specific programs may have additional requirements. Please check the individual program pages for details.
                  </p>
                </div>
              )}
            </motion.div>
            
            {/* FAQ Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-light-gray rounded-2xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-xl font-bold text-dark-blue">How long does the application process take?</h3>
                <div className={`w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 1 ? 'rotate-180' : ''}`}>
                  <FaChevronDown className="text-gold" />
                </div>
              </button>
              {expandedFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    The typical application timeline is as follows:
                  </p>
                  <ul className="mt-4 space-y-4">
                    <li className="flex">
                      <div className="bg-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-gold font-bold mr-4 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-dark-blue">Application Submission</h4>
                        <p className="text-gray-600">15-30 minutes to complete online</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-gold font-bold mr-4 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-dark-blue">Initial Review</h4>
                        <p className="text-gray-600">48 hours</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-gold font-bold mr-4 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-dark-blue">Interview (if required)</h4>
                        <p className="text-gray-600">Scheduled within 1 week</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-gold font-bold mr-4 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-dark-blue">Final Decision</h4>
                        <p className="text-gray-600">Within 2 weeks of completed application</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
            
            {/* FAQ Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-light-gray rounded-2xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-xl font-bold text-dark-blue">Do you offer scholarships or financial aid?</h3>
                <div className={`w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 2 ? 'rotate-180' : ''}`}>
                  <FaChevronDown className="text-gold" />
                </div>
              </button>
              {expandedFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">
                    Yes, Greenwich HSTC offers several financial assistance options:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-dark-blue mb-2">Merit-Based Scholarships</h4>
                      <p className="text-gray-600 text-sm">Awards based on academic excellence, ranging from 10-50% tuition reduction.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-dark-blue mb-2">Need-Based Financial Aid</h4>
                      <p className="text-gray-600 text-sm">Available to qualifying students based on financial circumstances.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-dark-blue mb-2">Payment Plans</h4>
                      <p className="text-gray-600 text-sm">Flexible payment options with no interest to spread costs over time.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-dark-blue mb-2">Early Application Discount</h4>
                      <p className="text-gray-600 text-sm">5% discount for applications submitted 3+ months before term starts.</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    For more information, please contact our financial aid office at <a href="mailto:financial-aid@greenwichhstc.edu" className="text-gold hover:underline">financial-aid@greenwichhstc.edu</a>.
                  </p>
                </div>
              )}
            </motion.div>
            
            {/* FAQ Item 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-light-gray rounded-2xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(3)}
              >
                <h3 className="text-xl font-bold text-dark-blue">Can I defer my admission?</h3>
                <div className={`w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center transition-transform duration-300 ${expandedFaq === 3 ? 'rotate-180' : ''}`}>
                  <FaChevronDown className="text-gold" />
                </div>
              </button>
              {expandedFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">
                    Yes, admitted students may request to defer their enrollment for up to one academic year. 
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mb-4">
                    <h4 className="font-semibold text-blue-700 mb-1">Deferral Process:</h4>
                    <ol className="list-decimal ml-5 text-gray-600 space-y-1">
                      <li>Submit a formal deferral request to the admissions office</li>
                      <li>Pay a deferral deposit to secure your place (applicable to tuition)</li>
                      <li>Receive a new admission letter with updated start date</li>
                    </ol>
                  </div>
                  <p className="text-gray-600">
                    Please note that scholarships and financial aid offers may need to be reassessed for the new intake period.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href="/faq" className="inline-flex items-center gap-2 text-gold font-semibold hover:underline">
              View All Frequently Asked Questions <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 