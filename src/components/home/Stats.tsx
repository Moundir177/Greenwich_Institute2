"use client";

import { motion, useAnimation } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaCertificate, FaGlobe } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    id: 1,
    title: 'Students Enrolled',
    value: '5,000+',
    icon: FaUsers,
    color: 'text-uk-blue',
  },
  {
    id: 2,
    title: 'Courses Offered',
    value: '120+',
    icon: FaGraduationCap,
    color: 'text-uk-red',
  },
  {
    id: 3,
    title: 'Certifications Awarded',
    value: '15,000+',
    icon: FaCertificate,
    color: 'text-gold',
  },
  {
    id: 4,
    title: 'Countries Reached',
    value: '90+',
    icon: FaGlobe,
    color: 'text-uk-blue',
  },
];

export default function Stats() {
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
    <section className="py-16 bg-uk-blue relative overflow-hidden">
      {/* Accent elements */}
      <motion.div 
        className="absolute top-0 left-0 h-2 w-32 bg-uk-red"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 h-32 w-2 bg-uk-red"
        initial={{ height: 0 }}
        whileInView={{ height: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 h-2 w-32 bg-uk-red"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-uk-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Since our founding, we've been committed to delivering world-class education 
            to students around the globe. Here's what we've accomplished so far.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 animate-pulse"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 mx-auto mb-4"></div>
                <div className="h-10 bg-white/20 rounded w-24 mx-auto mb-2"></div>
                <div className="h-4 bg-white/20 rounded w-32 mx-auto"></div>
              </div>
            ))
          ) : (
            stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`${stat.color} mx-auto rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-bold text-uk-white mb-2">{stat.value}</h3>
                <p className="text-sm text-uk-white/80">{stat.title}</p>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
} 