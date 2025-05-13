"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

// Sample testimonial data
const TESTIMONIALS = [
  {
    id: 1,
    name: 'James Miller',
    role: 'Software Engineer',
    course: 'Full-Stack Web Development',
    image: '/testimonials/student1.jpg',
    rating: 5,
    text: 'The course exceeded all my expectations. The instructor was incredibly knowledgeable and supportive. I was able to apply what I learned to my job immediately, which led to a promotion within three months!',
  },
  {
    id: 2,
    name: 'Emma Rodriguez',
    role: 'Marketing Director',
    course: 'Digital Marketing Mastery',
    image: '/testimonials/student2.jpg',
    rating: 5,
    text: 'This program transformed my approach to digital marketing. The practical strategies I learned helped me increase our company\'s conversion rates by 45% within just a few weeks of implementing them.',
  },
  {
    id: 3,
    name: 'Ahmed Hassan',
    role: 'Business Analyst',
    course: 'Data Science and Analytics',
    image: '/testimonials/student3.jpg',
    rating: 4,
    text: 'As someone transitioning into data science, this course provided exactly what I needed - a solid foundation with practical projects. The instructor made complex concepts easy to understand.',
  },
  {
    id: 4,
    name: 'Sophie Chen',
    role: 'Team Lead',
    course: 'Business Management and Leadership',
    image: '/testimonials/student4.jpg',
    rating: 5,
    text: 'The leadership strategies I learned have completely changed how I manage my team. Employee satisfaction has improved, and we\'re consistently exceeding our targets now. This was a career-changing experience.',
  }
];

const Testimonials = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-20 bg-dark-blue text-white ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {t('student_testimonials')}
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            {t('testimonials_description')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(${-activeIndex * 100}%)`,
                flexDirection: isRtl ? 'row-reverse' : 'row' 
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="bg-white text-dark-blue rounded-lg p-8 shadow-lg relative">
                    <FaQuoteLeft className="text-gold/20 text-5xl absolute top-6 left-6" />
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gold">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray text-sm">{testimonial.role}</p>
                        <p className="text-gold text-sm">{testimonial.course}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`${
                                i < testimonial.rating ? 'text-gold' : 'text-gray-300'
                              } text-xs`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 relative z-10">
                      {testimonial.text}
                    </p>
                    
                    <FaQuoteRight className="text-gold/20 text-3xl absolute bottom-6 right-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-gold' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 