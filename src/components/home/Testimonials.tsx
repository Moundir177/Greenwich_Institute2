"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../app/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khalid",
    role: "SIYB Program Graduate",
    image: "/images/testimonials/student1.jpg",
    content: "The 'Start and Improve Your Business' program transformed my entrepreneurial journey. I came with just an idea, but left with a comprehensive business plan, financial projections, and marketing strategies. Within six months of graduation, I secured funding and launched my tech startup that now employs 12 people.",
    rating: 5,
    program: "Start and Improve Your Business (SIYB)",
    year: "2023"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Project Management Professional",
    image: "/images/testimonials/student2.jpg",
    content: "The Project Cycle Management course provided practical tools that I immediately applied to my work with an international NGO. The instructors brought real-world experience and the case studies were directly relevant to development challenges. This certification has been instrumental in advancing my career in humanitarian project management.",
    rating: 5,
    program: "Project Cycle Management (PCM)",
    year: "2022"
  },
  {
    id: 3,
    name: "Mohammed Al-Farsi",
    role: "Business Consultant",
    image: "/images/testimonials/student3.jpg",
    content: "Completing the Professional Trainer and Consultant program was a turning point in my career. The ILO certification opened doors internationally, and the mentorship I received continues to guide my consulting practice. The business simulation exercises prepared me for real-world challenges I now help my clients overcome.",
    rating: 5,
    program: "Professional Trainer and Consultant (PMT/TOT)",
    year: "2023"
  },
  {
    id: 4,
    name: "Fatima Zahra",
    role: "Founder of EcoTech Solutions",
    image: "/images/testimonials/student4.jpg",
    content: "As a woman entrepreneur in a traditionally male-dominated field, the support I received through the 'Improve Your Business' program was invaluable. The instructors helped me refine my sustainable technology business model and connected me with mentors and funding opportunities. My company has since won two innovation awards.",
    rating: 5,
    program: "Improve Your Business (IYB)",
    year: "2022"
  },
  {
    id: 5,
    name: "Omar Benali",
    role: "Small Business Owner",
    image: "/images/testimonials/student5.jpg",
    content: "I was skeptical about whether formal business education could help my family restaurant, but the 'Manage Your Business' course transformed our operations. We implemented new inventory systems, improved our marketing, and developed employee training protocols. Our revenue increased by 35% in the first year after completing the program.",
    rating: 5,
    program: "Manage Your Business (MYB)",
    year: "2023"
  },
  {
    id: 6,
    name: "Leila Mansour",
    role: "Digital Marketing Specialist",
    image: "/images/testimonials/student6.jpg",
    content: "The Digital Marketing Mastery certificate equipped me with cutting-edge strategies and practical skills that set me apart in the job market. I appreciated the hands-on approach with real campaign development and analytics. Within weeks of completing the course, I received three job offers and was able to negotiate a higher salary.",
    rating: 4,
    program: "Digital Marketing Mastery",
    year: "2023"
  },
  {
    id: 7,
    name: "Ibrahim Touré",
    role: "Tech Entrepreneur",
    image: "/images/testimonials/student7.jpg",
    content: "The combination of business fundamentals and technical knowledge in the Full-Stack Web Development program was exactly what I needed. Instead of just learning to code, I learned to build products that solve real problems. The capstone project became the prototype for my current business that now serves clients across West Africa.",
    rating: 5,
    program: "Full-Stack Web Development",
    year: "2022"
  },
  {
    id: 8,
    name: "Amina Diallo",
    role: "Financial Analyst",
    image: "/images/testimonials/student8.jpg",
    content: "Greenwich Institute's Data Science and Analytics program provided me with the technical skills I needed to transition from traditional financial analysis to data-driven financial modeling. The program's emphasis on practical applications and industry-relevant tools made my resume stand out, helping me secure a position at a leading international bank.",
    rating: 5,
    program: "Data Science and Analytics",
    year: "2023"
  }
];

interface TestimonialsProps {
  isStandalone?: boolean;
}

export default function Testimonials({ isStandalone = false }: TestimonialsProps) {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setActiveIndex((current) => 
      (current + 1) % testimonials.length
    );
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  // If this is a standalone page, we'll show more testimonials and a different layout
  if (isStandalone) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-card overflow-hidden h-full"
          >
            <div className="p-8 flex flex-col h-full">
              <FaQuoteLeft className="text-gold/30 text-4xl mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <FaStar key={i + testimonial.rating} className="text-gray-200" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-gold/30 ring-offset-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-gray to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold opacity-10 mix-blend-overlay filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-blue opacity-10 mix-blend-overlay filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-gold/10 transform rotate-45 rounded-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-dark-blue/10 transform -rotate-12 rounded-xl opacity-20"></div>
      
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-dark-blue text-sm font-medium mb-3">
            {t('testimonials')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-blue mb-5">
            {t('what_students_say')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold">{t('about_us')}</span>
          </h2>
          <p className="text-gray max-w-3xl mx-auto text-lg">
            {t('testimonials_description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 to-accent-blue/10 rounded-2xl blur-xl opacity-70"></div>
              
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-card relative h-full border border-white/50 card-3d overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-gold/10 to-gold/0 rounded-bl-full"></div>
                <FaQuoteLeft className="text-gold/30 text-6xl absolute top-6 left-6" />
                
                <div className="relative z-10 pt-10">
                  <AnimatePresence custom={direction} initial={false} mode="wait">
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="min-h-[250px] flex flex-col"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="text-gold" />
                        ))}
                        {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                          <FaStar key={i + testimonials[activeIndex].rating} className="text-gray-200" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic flex-grow">
                        "{testimonials[activeIndex].content}"
                      </p>
                      <div className="flex items-center mt-auto">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-gold/30 ring-offset-2">
                          <Image
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-dark-blue">{testimonials[activeIndex].name}</h4>
                          <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 text-gray"
                  >
                    <FaArrowLeft className={`${isRtl ? 'transform rotate-180' : ''} text-sm`} />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          stopAutoPlay();
                          setDirection(index > activeIndex ? 1 : -1);
                          setActiveIndex(index);
                          startAutoPlay();
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeIndex === index 
                            ? 'bg-gold w-6' 
                            : 'bg-gray-300 hover:bg-gold/50'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 text-gray"
                  >
                    <FaArrowRight className={`${isRtl ? 'transform rotate-180' : ''} text-sm`} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative">
              {/* 3D effects for image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] border border-white/10 transform hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="/images/students-campus.jpg"
                  alt={t('students_campus_alt')}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-blue/80 to-transparent flex flex-col justify-end p-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="glass-morphism p-6 rounded-xl max-w-md backdrop-blur-sm"
                  >
                    <h3 className="text-white font-bold text-2xl mb-2">{t('join_community')}</h3>
                    <p className="text-white/90">{t('join_community_description')}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-gold to-amber-500 text-dark-blue font-medium rounded-full flex items-center gap-2 shiny-button"
                    >
                      {t('learn_more')}
                      <FaArrowRight />
                    </motion.button>
                  </motion.div>
                </div>
                
                {/* Glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-r from-gold/30 to-amber-500/30 backdrop-blur-md border border-white/20 shadow-xl animate-float z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-lg bg-gradient-to-r from-dark-blue/20 to-accent-blue/20 backdrop-blur-md border border-white/10 shadow-lg animate-float-slow z-10" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 