"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { FaFileInvoiceDollar, FaArrowRight, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Head from 'next/head';

export default function RefundPolicyPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const lastUpdated = 'June 15, 2023';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Set document title since we can't use metadata export in client component
    document.title = 'Refund Policy | Global Education Institute';
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
              {t('refund_policy')} <span className="text-gold neon-text">{t('and_cancellations')}</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-4"
              variants={fadeIn}
              custom={2}
            >
              {t('refund_policy_subtitle')}
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
      
      {/* Overview Section */}
      <section className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-dark-blue mb-6">{t('policy_overview')}</h2>
              <p className="text-gray-600 mb-6">
                {t('refund_policy_overview')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <FaCheck className="text-gold" />
                  </div>
                  <h3 className="font-bold text-dark-blue mb-2">{t('course_cancellations')}</h3>
                  <p className="text-sm text-gray-600">{t('course_cancellations_desc')}</p>
                </div>
                
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <FaCheck className="text-gold" />
                  </div>
                  <h3 className="font-bold text-dark-blue mb-2">{t('cooling_off_period')}</h3>
                  <p className="text-sm text-gray-600">{t('cooling_off_period_desc')}</p>
                </div>
                
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <FaCheck className="text-gold" />
                  </div>
                  <h3 className="font-bold text-dark-blue mb-2">{t('special_circumstances')}</h3>
                  <p className="text-sm text-gray-600">{t('special_circumstances_desc')}</p>
                </div>
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
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-8 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">1</span> 
                  {t('scope_of_policy')}
                </h2>
                <p>
                  This Refund Policy applies to all fees paid to UK Institute for courses, programs, workshops, and other educational services. This includes both online and in-person programs, unless otherwise specified.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">2</span>
                  {t('course_cancellations_by_institute')}
                </h2>
                <p>
                  If UK Institute cancels a course or program for any reason, registered students will receive a full refund of all fees paid for that course or program. Such refunds will be processed within 14 business days from the date of cancellation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">3</span>
                  {t('withdrawals_cancellations')}
                </h2>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.1 {t('cooling_off_period')}</h3>
                <p>
                  You have the right to cancel your enrollment within 14 calendar days from the date of registration without any penalty. A full refund will be provided if cancellation is requested within this period, provided that the course has not already begun.
                </p>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.2 {t('withdrawals_before_start')}</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>If you withdraw more than 30 days before the course start date, you will receive a full refund minus a £50 administrative fee.</li>
                  <li>If you withdraw between 15-30 days before the course start date, you will receive a 70% refund of the total course fee.</li>
                  <li>If you withdraw less than 15 days before the course start date, you will receive a 50% refund of the total course fee.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.3 {t('withdrawals_after_start')}</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>If you withdraw within the first week of the course (or first module for online courses), you will receive a 30% refund of the total course fee.</li>
                  <li>No refunds will be provided for withdrawals after the first week of the course or first module completion.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-6 mb-3">3.4 {t('special_considerations')}</h3>
                <p>
                  In cases of serious illness, bereavement, or other extenuating circumstances that prevent a student from continuing their studies, UK Institute may consider partial refunds or credits on a case-by-case basis. Supporting documentation will be required.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">4</span>
                  {t('payment_plans')}
                </h2>
                <p>
                  For students on payment plans, the refund policy applies to the total course fee, not just the amount paid at the time of withdrawal. Any outstanding installments may still be due, depending on the timing of the withdrawal as per the above schedule.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-dark-blue mt-12 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold inline-flex items-center justify-center mr-3 text-sm font-medium">5</span>
                  {t('non_refundable_fees')}
                </h2>
                <p>
                  The following fees are non-refundable under any circumstances:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Application fees</li>
                  <li>Registration fees</li>
                  <li>Materials that have been dispatched or downloaded</li>
                  <li>Technology/platform access fees once access has been granted</li>
                </ul>
              </motion.div>
              
              <div className="text-center mt-12 pt-6 border-t border-gray-100">
                <p className="text-gray-500">{t('refund_policy_continues')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Request Process Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-dark-blue mb-4">{t('refund_process')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('refund_process_description')}</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-dark-blue p-8 text-white md:col-span-1">
                  <h3 className="text-xl font-bold mb-4">{t('how_to_request')}</h3>
                  <p className="text-white/80 mb-6">{t('refund_how_to_desc')}</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-gold/20 p-1 rounded text-gold mr-3 mt-1">1</span>
                      <span>{t('submit_request')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gold/20 p-1 rounded text-gold mr-3 mt-1">2</span>
                      <span>{t('include_details')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gold/20 p-1 rounded text-gold mr-3 mt-1">3</span>
                      <span>{t('provide_documentation')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 md:col-span-2">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">{t('processing_timeline')}</h3>
                  <p className="text-gray-600 mb-6">{t('timeline_description')}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-light-gray p-2 rounded-full mr-4">
                        <FaFileInvoiceDollar className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue">{t('request_review')}</h4>
                        <p className="text-sm text-gray-600">{t('review_timeline')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-light-gray p-2 rounded-full mr-4">
                        <FaCheck className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue">{t('approval_processing')}</h4>
                        <p className="text-sm text-gray-600">{t('processing_timeline')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-light-gray p-2 rounded-full mr-4">
                        <FaArrowRight className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue">{t('payment_method')}</h4>
                        <p className="text-sm text-gray-600">{t('payment_method_desc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-serif font-bold text-dark-blue mb-6">{t('questions_concerns')}</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t('contact_for_questions')}</p>
              
              <div className="bg-light-gray rounded-xl p-6 inline-block">
                <h3 className="font-bold text-dark-blue mb-2">{t('finance_department')}</h3>
                <p>UK Institute</p>
                <p>123 Education Street</p>
                <p>London, UK, SW1 1AA</p>
                <p className="mt-2">
                  <span className="font-medium">Email:</span> <a href="mailto:finance@ukinstitute.edu" className="text-gold hover:underline">finance@ukinstitute.edu</a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +44 20 1234 5681
                </p>
              </div>
              
              <p className="mt-8 text-sm text-gray-500">
                {t('by_enrolling')}
              </p>
              
              <div className="mt-6 space-x-4">
                <Link href="/privacy-policy" className="text-gold hover:text-dark-blue transition-colors hover:underline">
                  {t('privacy_policy')}
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/terms" className="text-gold hover:text-dark-blue transition-colors hover:underline">
                  {t('terms_of_service')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 