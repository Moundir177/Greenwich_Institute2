"use client";

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const courses = [
  {
    id: 1,
    title: 'Business Management',
    description: 'Develop essential management skills and learn key business strategies for leading teams effectively.',
    imageSrc: '/images/courses/business.jpg',
    href: '/courses/business-management',
  },
  {
    id: 2,
    title: 'Computer Science',
    description: 'Master programming fundamentals and advanced software development with hands-on projects.',
    imageSrc: '/images/courses/computer-science.jpg',
    href: '/courses/computer-science',
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Learn industry-standard design tools and techniques from experienced professional designers.',
    imageSrc: '/images/courses/graphic-design.jpg',
    href: '/courses/graphic-design',
  },
  {
    id: 4, 
    title: 'Digital Marketing',
    description: 'Develop skills in social media management, SEO, content marketing, and digital ad campaigns.',
    imageSrc: '/images/courses/digital-marketing.jpg',
    href: '/courses/digital-marketing',
  },
];

export default function FeaturedCourses() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the courses
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-uk-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Featured Courses
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our most popular courses designed to help you advance your career 
            and gain valuable skills in today's competitive job market.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            ))
          ) : (
            courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{ y: -5 }}
              >
                <Card
                  title={course.title}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  href={course.href}
                  footer={
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-uk-blue">£499</span>
                      <Button variant="outline" size="sm" href={course.href}>
                        Learn More
                      </Button>
                    </div>
                  }
                />
              </motion.div>
            ))
          )}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="/courses" variant="primary" size="lg">
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 