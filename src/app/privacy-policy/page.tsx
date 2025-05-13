"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Head from 'next/head';

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const lastUpdated = 'June 15, 2023';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Set document title since we can't use metadata export in client component
    document.title = 'Privacy Policy | Global Education Institute';
  }, []);
  
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
      <section className="pt-32 pb-20 bg-dark-blue text-white relative overflow-hidden">
        {/* Background Gradient Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-dark-blue/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              variants={fadeIn}
              custom={1}
            >
              {t('privacy_policy')} <span className="text-gold neon-text">{t('and_data_protection')}</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-4"
              variants={fadeIn}
              custom={2}
            >
              {t('privacy_policy_description')}
            </motion.p>
            <motion.p
              className="text-sm text-white/70 mt-4"
              variants={fadeIn}
              custom={3}
            >
              {t('last_updated')}: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Table of Contents */}
      <section className="py-12 bg-light-gray border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-dark-blue mb-6">{t('contents')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li>
                    <a href="#introduction" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">1</span>
                      {t('introduction')}
                    </a>
                  </li>
                  <li>
                    <a href="#information-we-collect" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">2</span>
                      {t('information_we_collect')}
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-use" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">3</span>
                      {t('how_we_use_your_information')}
                    </a>
                  </li>
                  <li>
                    <a href="#legal-basis" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">4</span>
                      {t('legal_basis_for_processing')}
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">5</span>
                      {t('cookies_and_technologies')}
                    </a>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <a href="#sharing" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">6</span>
                      {t('sharing_your_information')}
                    </a>
                  </li>
                  <li>
                    <a href="#data-retention" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">7</span>
                      {t('data_retention')}
                    </a>
                  </li>
                  <li>
                    <a href="#data-security" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">8</span>
                      {t('data_security')}
                    </a>
                  </li>
                  <li>
                    <a href="#your-rights" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">9</span>
                      {t('your_data_protection_rights')}
                    </a>
                  </li>
                  <li>
                    <a href="#international-transfers" className="flex items-center text-dark-blue hover:text-gold transition-colors">
                      <span className="w-6 h-6 rounded-full bg-light-gray inline-flex items-center justify-center mr-2 text-sm font-medium">10</span>
                      {t('international_data_transfers')}
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="prose prose-lg max-w-none text-gray-600"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id="introduction"
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-8 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">1</span> 
                  {t('introduction')}
                </h2>
                <p>
                  This Privacy Policy explains how UK Institute ("we," "us," or "our") collects, uses, shares, and protects personal information obtained from individuals ("you") who visit our website, use our services, or otherwise interact with us. We are committed to ensuring the privacy and security of your personal information.
                </p>
                <p>
                  By accessing our website at <a href="https://www.ukinstitute.edu" className="text-gold hover:underline">www.ukinstitute.edu</a> and using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with these terms, please do not use our website or services.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id="information-we-collect"
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">2</span>
                  {t('information_we_collect')}
                </h2>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">2.1 {t('personal_information')}</h3>
                <p>{t('we_may_collect_following')}:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>{t('contact_information')}:</strong> {t('name_email_address')}</li>
                  <li><strong>{t('account_information')}:</strong> {t('username_password')}</li>
                  <li><strong>{t('educational_information')}:</strong> {t('academic_history')}</li>
                  <li><strong>{t('payment_information')}:</strong> {t('credit_card_details')}</li>
                  <li><strong>{t('demographic_information')}:</strong> {t('age_gender')}</li>
                  <li><strong>{t('identity_verification')}:</strong> {t('date_of_birth')}</li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">2.2 {t('automatically_collected')}</h3>
                <p>{t('when_visit_website')}:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>{t('usage_data')}:</strong> {t('pages_visited')}</li>
                  <li><strong>{t('device_information')}:</strong> {t('ip_address')}</li>
                  <li><strong>{t('location_information')}:</strong> {t('general_location')}</li>
                  <li><strong>{t('cookies')}:</strong> {t('information_collected_cookies')}</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id="how-we-use"
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">3</span>
                  {t('how_we_use_your_information')}
                </h2>
                <p>{t('we_use_your_information')}:</p>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.1 {t('providing_improving_services')}</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>{t('processing_enrollments')}</li>
                  <li>{t('managing_account')}</li>
                  <li>{t('processing_payments')}</li>
                  <li>{t('issuing_certificates')}</li>
                  <li>{t('improving_website')}</li>
                  <li>{t('analyzing_usage')}</li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.2 {t('communication')}</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>{t('sending_notifications')}</li>
                  <li>{t('responding_inquiries')}</li>
                  <li>{t('providing_information')}</li>
                  <li>{t('sending_promotional')}</li>
                  <li>{t('conducting_surveys')}</li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.3 {t('legal_security_purposes')}</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>{t('complying_legal')}</li>
                  <li>{t('enforcing_terms')}</li>
                  <li>{t('detecting_preventing')}</li>
                  <li>{t('protecting_rights')}</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id="legal-basis"
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">4</span>
                  {t('legal_basis_for_processing')}
                </h2>
                <p>{t('we_process_your_information')}:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>{t('performance_contract')}:</strong> {t('processing_necessary_contract')}</li>
                  <li><strong>{t('legitimate_interests')}:</strong> {t('processing_necessary_legitimate')}</li>
                  <li><strong>{t('consent')}:</strong> {t('processing_based_consent')}</li>
                  <li><strong>{t('legal_obligation')}:</strong> {t('processing_necessary_legal')}</li>
                </ul>
              </motion.div>
              
              <div className="text-center mt-12 pt-6 border-t border-gray-100">
                <p className="text-gray-500">{t('privacy_policy_continues')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-dark-blue rounded-2xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <FaShieldAlt className="text-gold text-4xl mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">
                  {t('data_privacy_important')}
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  {t('questions_about_privacy')}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-gold text-dark-blue px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  {t('contact_us')}
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Related Policies */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-dark-blue mb-6 text-center">
              {t('related_policies')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-light-gray rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-dark-blue mb-2">{t('terms_of_service')}</h3>
                <p className="text-gray-600 mb-4">{t('terms_description')}</p>
                <Link 
                  href="/terms" 
                  className="text-gold hover:text-dark-blue transition-colors flex items-center"
                >
                  {t('read_more')}
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-light-gray rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-dark-blue mb-2">{t('refund_policy')}</h3>
                <p className="text-gray-600 mb-4">{t('refund_description')}</p>
                <Link 
                  href="/refund-policy" 
                  className="text-gold hover:text-dark-blue transition-colors flex items-center"
                >
                  {t('read_more')}
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 