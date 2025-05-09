"use client";

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/ui/Button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Management Graduate',
    testimonial: 'The Business Management course provided me with practical knowledge and skills that I immediately applied to my career. The instructors were industry professionals who shared real-world experiences.',
    imageSrc: '/images/testimonials/sarah.jpg',
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Computer Science Student',
    testimonial: 'As someone transitioning into tech, the Computer Science program gave me a solid foundation and hands-on experience that employers value. I secured a developer role before even finishing the course.',
    imageSrc: '/images/testimonials/james.jpg',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Graphic Design Professional',
    testimonial: 'The Graphic Design course transformed my creative process and gave me the confidence to start my own design studio. The portfolio I built during the program helped me attract my first clients.',
    imageSrc: '/images/testimonials/emma.jpg',
  },
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-uk-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Student Success Stories
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from our graduates about how our courses have helped them achieve their career goals 
            and transform their professional lives.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {isLoading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-sm relative border border-gray-100 animate-pulse"
              >
                <div className="absolute -top-5 -left-5 bg-gray-200 rounded-full p-3 shadow-md w-12 h-12"></div>
                <div className="mb-6 mt-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 bg-gray-200 rounded-full w-12 h-12"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-lg shadow-sm relative border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -top-5 -left-5 bg-uk-blue rounded-full p-3 shadow-md">
                  <FaQuoteLeft className="text-uk-white" size={20} />
                </div>
                <div className="mb-6 mt-4">
                  <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold">
                    <div className="absolute inset-0 bg-gray-300"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-uk-blue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
        
        <motion.div 
          className="mt-16 p-8 bg-uk-blue rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-uk-white/80 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with our courses.
          </p>
          <Button href="/courses" variant="secondary" size="lg">
            Enroll Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 