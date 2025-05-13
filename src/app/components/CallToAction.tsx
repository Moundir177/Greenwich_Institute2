"use client";

import { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaUser, FaPhone, FaGraduationCap, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your API
    // For demo purposes, we'll just show a success message
    setSubmitted(true);
  };
  
  return (
    <section className={`py-28 relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Abstract background shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-blue-800 to-indigo-900"></div>
      
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold opacity-10 mix-blend-overlay filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600 opacity-10 mix-blend-overlay filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* Geometric decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-white/10 rounded-3xl transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-gold/20 rounded-xl transform -rotate-12 opacity-20"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-16 bg-gold/20 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-4 bg-gold/20 rounded-full"></div>
      
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-white"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-gold text-sm font-medium mb-4 backdrop-blur-sm">
              {t('join_our_community')}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              {t('cta_title')}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent block mt-3">
                {t('cta_subtitle')}
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {t('cta_description')}
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                'cta_benefit_1',
                'cta_benefit_2',
                'cta_benefit_3',
                'cta_benefit_4'
              ].map((key, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="bg-white/10 rounded-full p-2 backdrop-blur-sm mr-4 text-gold">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <div>
                    <span className="text-lg">{t(key)}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* Glow effect behind the form */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 to-blue-600/30 rounded-2xl blur-xl opacity-70"></div>
              
              <div className="bg-white/95 backdrop-blur-xl text-dark-blue p-8 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-white/50 relative">
                <h3 className="text-2xl font-bold mb-8 text-center">{t('request_info_title')}</h3>
                
                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="text-green-500 text-4xl" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{t('thank_you')}</h4>
                    <p className="text-gray-600 text-lg">{t('form_success')}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-600">
                        {t('full_name')}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-dark-blue transition-colors">
                          <FaUser />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue/30 focus:border-dark-blue bg-white/50 backdrop-blur-sm transition-all"
                          required
                          placeholder={t('enter_your_name')}
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-600">
                        {t('email_address')}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-dark-blue transition-colors">
                          <FaEnvelope />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue/30 focus:border-dark-blue bg-white/50 backdrop-blur-sm transition-all"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder={t('enter_your_email')}
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="phone" className="block mb-2 font-medium text-gray-600">
                        {t('phone_number')}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-dark-blue transition-colors">
                          <FaPhone />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue/30 focus:border-dark-blue bg-white/50 backdrop-blur-sm transition-all"
                          placeholder={t('enter_your_phone')}
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="interest" className="block mb-2 font-medium text-gray-600">
                        {t('area_of_interest')}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-dark-blue transition-colors">
                          <FaGraduationCap />
                        </div>
                        <select
                          id="interest"
                          className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue/30 focus:border-dark-blue bg-white/50 backdrop-blur-sm transition-all appearance-none"
                          required
                        >
                          <option value="">{t('select_option')}</option>
                          <option value="business">{t('business')}</option>
                          <option value="technology">{t('technology')}</option>
                          <option value="design">{t('design')}</option>
                          <option value="marketing">{t('marketing')}</option>
                          <option value="finance">{t('finance')}</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                          <FaChevronDown />
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-gold to-amber-500 text-dark-blue py-4 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-gold/20 transition-all relative overflow-hidden shiny-button"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {t('request_info')}
                        <FaArrowRight className={`${isRtl ? 'mr-2' : 'ml-2'}`} />
                      </span>
                    </motion.button>
                    
                    <p className="text-sm text-gray-500 text-center mt-6">
                      {t('privacy_notice')}
                    </p>
                  </form>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-gold/40 to-amber-500/40 backdrop-blur-md border border-white/10 shadow-lg animate-float z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-lg bg-gradient-to-r from-dark-blue/30 to-blue-500/30 backdrop-blur-md border border-white/10 shadow-lg animate-float-slow z-10" style={{ animationDelay: "1s" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 