"use client";

import React from 'react';
import Image from 'next/image';
import { FaShieldAlt, FaCheck, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OurCredibility = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/5 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-dark-blue text-sm font-medium mb-3">
            Trust & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-dark-blue">
            Our Credibility
          </h2>
          <p className="text-gray max-w-3xl mx-auto text-lg">
            Committed to excellence through prestigious international accreditations
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-morphism p-8 md:p-12 rounded-xl shadow-lg mb-16 text-center md:text-left border border-white"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-dark-blue/5 flex items-center justify-center">
                <FaShieldAlt className="text-4xl text-gold" />
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-800 leading-relaxed italic">
                "We are proud to be an accredited company by the International Labor Organization (ILO) for our commitment to international labor standards, and by the Peace Ambassadors Foundation for our role in promoting humanitarian values. In addition, we contribute to the development of entrepreneurship through the Sindbad Investment Foundation, which we established to support emerging projects."
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ILO Accreditation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center border border-gray-100"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto mb-6 w-24 h-24 relative">
              <Image 
                src="/images/logos/ilo-logo.png" 
                alt="International Labour Organization" 
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-3">International Labour Organization</h3>
            <p className="text-gray-600">
              Recognized for our commitment to upholding international labor standards and promoting fair employment practices.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center text-gold">
              <FaCheck className="mr-2" />
              <span className="text-sm font-medium">Officially Accredited</span>
            </div>
          </motion.div>

          {/* Peace Ambassadors Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center border border-gray-100"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto mb-6 w-24 h-24 relative">
              <Image 
                src="/images/logos/peace-ambassadors-logo.png" 
                alt="Peace Ambassadors Foundation" 
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-3">Peace Ambassadors Foundation</h3>
            <p className="text-gray-600">
              Acknowledged for our role in promoting humanitarian values and fostering a culture of peace through education.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center text-gold">
              <FaCheck className="mr-2" />
              <span className="text-sm font-medium">Officially Accredited</span>
            </div>
          </motion.div>

          {/* Sindbad Investment Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center border border-gray-100"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto mb-6 w-24 h-24 relative bg-blue-50 rounded-full flex items-center justify-center">
              <FaHandshake className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-3">Sindbad Investment Foundation</h3>
            <p className="text-gray-600">
              Our initiative to support emerging entrepreneurial projects and contribute to sustainable economic development.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center text-gold">
              <FaCheck className="mr-2" />
              <span className="text-sm font-medium">Founder & Supporter</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCredibility; 