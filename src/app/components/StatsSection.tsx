"use client";

import { useEffect, useState, useRef } from 'react';
import { FaGraduationCap, FaUsers, FaGlobeAmericas, FaStar } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    icon: <FaGraduationCap className="text-3xl text-gold" />,
    value: 200,
    label: 'stats_courses',
    suffix: '+',
  },
  {
    id: 2,
    icon: <FaUsers className="text-3xl text-gold" />,
    value: 25000,
    label: 'stats_students',
    suffix: '+',
  },
  {
    id: 3,
    icon: <FaGlobeAmericas className="text-3xl text-gold" />,
    value: 50,
    label: 'stats_countries',
    suffix: '+',
  },
  {
    id: 4,
    icon: <FaStar className="text-3xl text-gold" />,
    value: 95,
    label: 'stats_satisfaction',
    suffix: '%',
  }
];

const StatsSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // For each stat, create a state to track its current value during animation
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  
  // Function to check if element is in viewport
  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };
  
  // Animate the counter when section comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !hasAnimated && isInViewport(sectionRef.current)) {
        setHasAnimated(true);
        
        // Animate each stat
        stats.forEach((stat, index) => {
          const duration = 2000; // Animation duration in ms
          const frameDuration = 1000 / 60; // 60fps
          const totalFrames = Math.round(duration / frameDuration);
          const easeOutQuad = (t: number) => t * (2 - t); // Easing function
          
          let frame = 0;
          const countToStat = () => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(stat.value * progress);
            
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = currentCount;
              return newValues;
            });
            
            if (frame < totalFrames) {
              requestAnimationFrame(countToStat);
            }
          };
          
          requestAnimationFrame(countToStat);
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Check on mount as well
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className={`py-24 relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-light-gray"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-dark-blue/10 to-accent-blue/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-gold/10 to-accent-purple/5 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/10 transform rotate-45 rounded-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-dark-blue/10 transform -rotate-12 rounded-lg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-accent-blue/10 text-dark-blue text-sm font-medium mb-3">
            {t('our_impact')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-dark-blue">
            {t('stats_title')}
          </h2>
          <p className="text-gray max-w-3xl mx-auto text-lg">
            {t('stats_description')}
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-xl p-8 shadow-card transition-all duration-300 hover:shadow-card-hover border border-gray-100 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-light-gray flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-4xl font-bold text-dark-blue mb-2 text-center group-hover:text-gold-light transition-colors duration-300">
                {animatedValues[index]}{stat.suffix}
              </div>
              
              <div className="text-gray font-medium text-center">
                {t(stat.label)}
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gold/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative floating element */}
        <div className="absolute -bottom-10 left-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-md border border-white/10 shadow-lg animate-float-slow z-0"></div>
      </div>
    </section>
  );
};

export default StatsSection; 