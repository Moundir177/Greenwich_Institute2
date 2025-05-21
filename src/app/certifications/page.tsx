"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaHandshake, FaGlobeAmericas, FaAward, FaFileAlt, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const CertificationsPage = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-24 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gold/30 to-gold/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 to-accent-blue/10 blur-3xl"></div>
        </div>

        {/* 3D Polygons */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 transform rotate-45 rounded-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-gold/20 transform -rotate-12 rounded-xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our International <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold neon-text">Accreditations</span> and Partners
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our commitment to excellence is recognized by prestigious international organizations
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-dark-blue text-sm font-medium mb-3">
              Global Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-6">
              Committed to Global Standards
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Greenwich HSTC, we maintain the highest international standards through our partnerships with leading global organizations. These accreditations reflect our dedication to excellence in education, ethical practices, and social responsibility.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* ILO Certification */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-dark-blue/5 flex items-center justify-center p-6">
                  <Image 
                    src="/images/logos/ilo-logo.png" 
                    alt="International Labour Organization" 
                    width={200}
                    height={120}
                    className="object-contain mx-auto max-h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">International Labor Organization (ILO)</h3>
                <p className="text-gray-600 mb-6">
                  "We are an accredited partner of the ILO, confirming our commitment to implementing best labor and vocational training practices globally."
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Adherence to international labor standards</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Vocational training excellence certification</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Global employment best practices</p>
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <FaAward className="text-gold mr-2" />
                  <span className="text-sm font-medium text-dark-blue">Official Accreditation</span>
                </div>
              </div>
            </motion.div>

            {/* Peace Ambassadors Certification */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-dark-blue/5 flex items-center justify-center p-6">
                  <Image 
                    src="/images/logos/peace-ambassadors-logo.png" 
                    alt="Peace Ambassadors Foundation" 
                    width={200}
                    height={120}
                    className="object-contain mx-auto max-h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">Peace Ambassadors Foundation</h3>
                <p className="text-gray-600 mb-6">
                  "We hold the Peace Ambassadors certification in recognition of our efforts to promote social dialogue and build sustainable communities."
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Promoting peace through education</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Community engagement initiatives</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Social dialogue facilitation</p>
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <FaAward className="text-gold mr-2" />
                  <span className="text-sm font-medium text-dark-blue">Certified Partner</span>
                </div>
              </div>
            </motion.div>

            {/* Sindibad Foundation */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-dark-blue/5 flex items-center justify-center p-6">
                  <Image 
                    src="/images/logos/sindibad-logo.png" 
                    alt="Sindibad Foundation" 
                    width={200}
                    height={120}
                    className="object-contain mx-auto max-h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">Sindibad Foundation</h3>
                <p className="text-gray-600 mb-6">
                  "As founders of Sindibad Investment and Entrepreneurship, we work to empower youth and entrepreneurs through providing resources and smart investments."
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Supporting emerging entrepreneurs</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Providing investment opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Mentorship and resource allocation</p>
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <FaAward className="text-gold mr-2" />
                  <span className="text-sm font-medium text-dark-blue">Founding Organization</span>
                </div>
              </div>
            </motion.div>
            
            {/* Pioneers of Intellectual Development */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-dark-blue/5 flex items-center justify-center p-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-dark-blue text-2xl font-serif font-bold">Pioneers of Intellectual Development</h3>
                    <p className="text-gray-600 text-sm mt-2">UAE Partnership</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">Pioneers of Intellectual Development</h3>
                <p className="text-gray-600 mb-6">
                  "Our strategic partnership strengthens our presence in the UAE, enabling us to collaborate on pioneering educational projects across the region."
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Regional educational leadership</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Innovative learning initiatives</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Expanding our reach in the UAE and GCC region</p>
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <FaAward className="text-gold mr-2" />
                  <span className="text-sm font-medium text-dark-blue">Strategic Partner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-medium mb-3">
              Value to Students
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-6">
              How Our Accreditations Benefit You
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our international accreditations and partnerships translate into real advantages for our students and graduates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-light-gray rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaGlobeAmericas className="text-dark-blue text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Global Recognition</h3>
              <p className="text-gray-600">
                Qualifications and certifications that are recognized worldwide, enhancing your international mobility and career prospects.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-light-gray rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaFileAlt className="text-dark-blue text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Curriculum and teaching methodologies that meet stringent international standards, ensuring you receive a high-quality education.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-light-gray rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaUserGraduate className="text-dark-blue text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Employment Advantages</h3>
              <p className="text-gray-600">
                Credentials that are valued by employers worldwide, giving you a competitive edge in the job market.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-light-gray rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaHandshake className="text-dark-blue text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Industry Connections</h3>
              <p className="text-gray-600">
                Access to our network of international partners, providing opportunities for internships, projects, and employment.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-light-gray rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaChalkboardTeacher className="text-dark-blue text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Specialized Training</h3>
              <p className="text-gray-600">
                Access to specialized training programs and resources developed in collaboration with our international partners.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-light-gray rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaAward className="text-dark-blue text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Ethical Education</h3>
              <p className="text-gray-600">
                Education that integrates ethical principles and social responsibility, preparing you to be a positive force in society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience the <span className="text-gold">Greenwich HSTC</span> Difference
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join us and benefit from our internationally recognized programs and extensive global network.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/courses" 
                className="bg-gold hover:bg-amber-500 text-dark-blue font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Explore Our Programs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage; 