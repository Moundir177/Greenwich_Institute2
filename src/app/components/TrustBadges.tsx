"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/5 blur-3xl"></div>
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
            Trust Badges
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-dark-blue">
            Accredited by leading international organizations
          </h2>
          <p className="text-gray max-w-3xl mx-auto text-lg">
            Our programs are recognized globally, ensuring that your education meets international standards of excellence.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-64 h-32 relative bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Image 
                src="/images/logos/unesco-logo.png" 
                alt="International Labour Organization" 
                width={240}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="mt-4 text-base font-medium text-gray-700">International Labour Organization</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-64 h-32 relative bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Image 
                src="/images/logos/aau-logo.png" 
                alt="Peace Ambassadors Foundation" 
                width={240}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="mt-4 text-base font-medium text-gray-700">Peace Ambassadors Foundation</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-64 h-32 relative bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Image 
                src="/images/logos/iau-logo.png" 
                alt="Sindibad Foundation" 
                width={240}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="mt-4 text-base font-medium text-gray-700">Sindibad Foundation</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-64 h-32 relative bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Image 
                src="/images/logos/pioneers-logo.png" 
                alt="Pioneers of Intellectual Development" 
                width={240}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="mt-4 text-base font-medium text-gray-700">Pioneers of Intellectual Development</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges; 