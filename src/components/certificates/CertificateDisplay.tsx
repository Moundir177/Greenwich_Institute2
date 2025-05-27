'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCertificate, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CertificateDisplayProps {
  certificateImageUrl?: string;
  title?: string;
  description?: string;
  features?: string[];
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({
  certificateImageUrl = '/images/certificates/sample-certificate.jpg',
  title = 'Premium Quality Certification',
  description = 'Each Greenwich certificate is meticulously designed to reflect the prestige and quality of your educational achievement, featuring premium materials and advanced security features.',
  features = [
    'Secure verification with unique identification numbers',
    'Official seals and signatures from institutional authorities',
    'Premium paper quality with anti-forgery features',
    'Digital versions available for online sharing and verification',
    'Recognition by industry partners and employers'
  ]
}) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="lg:order-2 relative transform hover:scale-[1.02] transition-all duration-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-amber-400/0 to-uk-blue/20 rounded-xl blur-xl opacity-70"></div>
          
          {/* Certificate image with 3D effect */}
          <div className="relative">
            {/* Add shadow layers for 3D depth effect */}
            <div className="absolute -bottom-6 -right-6 left-6 top-6 bg-gold/5 rounded-lg transform skew-x-2 skew-y-1"></div>
            <div className="absolute -bottom-3 -right-3 left-3 top-3 bg-uk-blue/5 rounded-lg transform skew-x-1"></div>
            
            <div className="relative overflow-hidden border-8 border-white rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-uk-blue/0 via-white/40 to-uk-blue/0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {imageError ? (
                <div className="bg-gray-100 w-full aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <FaCertificate className="text-gray-400 text-5xl mx-auto mb-4" />
                    <p className="text-gray-500">Certificate image preview unavailable</p>
                  </div>
                </div>
              ) : (
                <Image 
                  src={certificateImageUrl} 
                  alt="Greenwich Certificate Sample"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
                  onError={() => setImageError(true)}
                />
              )}
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gold text-white flex items-center justify-center rounded-full shadow-lg z-20 font-serif font-bold text-sm"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold via-amber-500 to-gold animate-rotate-slow"></div>
                  <div className="relative bg-gradient-to-r from-gold to-amber-500 rounded-full p-5 flex items-center justify-center">
                    CERTIFIED
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-4 bg-white text-uk-blue rounded-lg px-3 py-2 shadow-xl z-20 text-xs font-medium flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <FaCertificate className="text-gold mr-2" /> Internationally Recognized
              </motion.div>
            </div>
          </div>
          
          {/* Certificate stamps */}
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-10 -left-10 bg-white p-3 rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-all duration-300 border-t-4 border-gold z-20"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-uk-blue to-blue-600 rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <FaGlobe className="text-gold text-xl mx-auto mb-1" />
                <div className="text-xs font-bold">VERIFIED</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 right-10 w-24 h-24 bg-white rounded-lg shadow-xl p-2 transform -rotate-6 hover:rotate-0 transition-all duration-300 z-10"
          >
            <div className="h-full w-full border-2 border-dashed border-uk-blue/30 rounded flex items-center justify-center p-2">
              <div className="text-center">
                <div className="text-uk-blue font-bold text-xs">GREENWICH</div>
                <div className="w-12 h-12 mx-auto my-1 bg-gradient-to-br from-gold/20 to-gold rounded-full flex items-center justify-center">
                  <FaCertificate className="text-gold text-2xl" />
                </div>
                <div className="text-gray-500 text-[8px]">EST. 2005</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="lg:order-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge badge-gold px-4 py-2 animate-flipIn">Premium Certificates</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">{title}</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gold/20 transform -skew-x-6"></span>
            </span>
          </h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-5 mb-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="group"
              >
                <div className="flex items-start bg-white rounded-xl p-4 shadow-md hover:shadow-xl border-l-4 border-gold group-hover:border-uk-blue transition-all duration-300 transform group-hover:translate-x-1">
                  <div className="mr-4 bg-gradient-to-br from-uk-blue to-blue-600 rounded-full p-2 text-gold shadow-md group-hover:shadow-blue-200/50 transition-all duration-500 group-hover:scale-110 flex-shrink-0">
                    <FaCertificate className="text-gold text-sm" />
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                    <div className="h-0.5 w-0 bg-gradient-to-r from-gold to-amber-400 group-hover:w-full transition-all duration-500 mt-1"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificateDisplay; 