"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaUsers, FaArrowRight, FaClock, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

// Sample featured courses data
const FEATURED_COURSES = [
  {
    id: 'business-management',
    title: 'Business Management and Leadership',
    instructor: 'Dr. Sarah Anderson',
    category: 'Business',
    level: 'Intermediate',
    rating: 4.8,
    students: 2547,
    price: 899,
    duration: '12 weeks',
    image: '/images/courses/business-management.jpg',
  },
  {
    id: 'data-science',
    title: 'Data Science and Analytics',
    instructor: 'Prof. Michael Chang',
    category: 'Technology',
    level: 'Advanced',
    rating: 4.9,
    students: 1893,
    price: 1299,
    duration: '16 weeks',
    image: '/images/courses/data-science.jpg',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    instructor: 'Emma Phillips',
    category: 'Marketing',
    level: 'Beginner',
    rating: 4.7,
    students: 3215,
    price: 699,
    duration: '10 weeks',
    image: '/images/courses/digital-marketing.jpg',
  },
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    instructor: 'James Wilson',
    category: 'Technology',
    level: 'Intermediate',
    rating: 4.9,
    students: 2105,
    price: 1499,
    duration: '20 weeks',
    image: '/images/courses/web-development.jpg',
  }
];

type CourseId = 'business-management' | 'data-science' | 'digital-marketing' | 'web-development';
type Language = 'en' | 'fr' | 'ar';

interface CourseTranslation {
  title: string;
  description: string;
}

// Define the structure of course translations with proper index signatures
interface CourseTranslations {
  [key: string]: {
    [key in CourseId]: CourseTranslation;
  };
}

// Course translations for multilingual support
const COURSE_TRANSLATIONS: CourseTranslations = {
  en: {
    'business-management': {
      title: 'Business Management and Leadership',
      description: 'Develop essential management skills and learn how to lead teams effectively in today\'s competitive business environment.'
    },
    'data-science': {
      title: 'Data Science and Analytics',
      description: 'Master the skills of data analysis, visualization, and machine learning to drive data-informed business decisions.'
    },
    'digital-marketing': {
      title: 'Digital Marketing Mastery',
      description: 'Learn cutting-edge digital marketing strategies to grow audiences, engage customers, and drive conversions.'
    },
    'web-development': {
      title: 'Full-Stack Web Development',
      description: 'Build modern, responsive web applications with the latest front-end and back-end technologies.'
    }
  },
  fr: {
    'business-management': {
      title: 'Gestion d\'Entreprise et Leadership',
      description: 'Développez des compétences essentielles en gestion et apprenez à diriger efficacement des équipes dans l\'environnement commercial concurrentiel d\'aujourd\'hui.'
    },
    'data-science': {
      title: 'Science des Données et Analytique',
      description: 'Maîtrisez les compétences d\'analyse de données, de visualisation et d\'apprentissage automatique pour prendre des décisions commerciales basées sur les données.'
    },
    'digital-marketing': {
      title: 'Maîtrise du Marketing Digital',
      description: 'Apprenez des stratégies de marketing digital de pointe pour développer votre audience, engager les clients et générer des conversions.'
    },
    'web-development': {
      title: 'Développement Web Full-Stack',
      description: 'Créez des applications web modernes et réactives avec les dernières technologies front-end et back-end.'
    }
  },
  ar: {
    'business-management': {
      title: 'إدارة الأعمال والقيادة',
      description: 'طور مهارات الإدارة الأساسية وتعلم كيفية قيادة الفرق بفعالية في بيئة الأعمال التنافسية اليوم.'
    },
    'data-science': {
      title: 'علوم البيانات والتحليلات',
      description: 'أتقن مهارات تحليل البيانات والتصور والتعلم الآلي لاتخاذ قرارات الأعمال المستندة إلى البيانات.'
    },
    'digital-marketing': {
      title: 'إتقان التسويق الرقمي',
      description: 'تعلم استراتيجيات التسويق الرقمي المتطورة لتنمية الجماهير وإشراك العملاء وتحقيق التحويلات.'
    },
    'web-development': {
      title: 'تطوير الويب الشامل',
      description: 'قم ببناء تطبيقات ويب حديثة وسريعة الاستجابة باستخدام أحدث تقنيات الواجهة الأمامية والخلفية.'
    }
  }
};

const FeaturedCourses = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'all', label: t('all') },
    { id: 'Business', label: t('business') },
    { id: 'Technology', label: t('technology') },
    { id: 'Marketing', label: t('marketing') }
  ];
  
  // Filter courses based on active category
  const filteredCourses = activeCategory === 'all' 
    ? FEATURED_COURSES 
    : FEATURED_COURSES.filter(course => course.category === activeCategory);
  
  // Get course title and description in current language
  const getLocalizedCourse = (courseId: string): CourseTranslation => {
    return COURSE_TRANSLATIONS[language]?.[courseId as CourseId] || COURSE_TRANSLATIONS.en[courseId as CourseId];
  };

  const handleImageError = (courseId: string) => {
    setImageErrors(prev => ({ ...prev, [courseId]: true }));
  };

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
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };
  
  return (
    <section className={`py-24 bg-gradient-to-b from-light-gray to-white relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/5 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-medium mb-3">
            {t('featured_courses')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-dark-blue">
            {t('expand_your_knowledge')}
          </h2>
          <p className="text-gray max-w-3xl mx-auto text-lg">
            {t('featured_courses_description')}
          </p>
        </motion.div>
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-dark-blue to-dark-blue-700 text-white shadow-lg shadow-dark-blue/20 ring-2 ring-white/20 ring-offset-2 ring-offset-light-gray'
                  : 'bg-white text-gray hover:bg-dark-blue/5 shadow-subtle'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Courses Grid */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={childVariants}
              custom={index}
              className="card-3d h-full"
            >
              <Link
                href={`/courses/${course.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full transform-gpu group card-3d-inner"
              >
                <div className="relative h-52 bg-dark-blue/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-dark-blue/80 to-transparent opacity-50 z-10"></div>
                  {!imageErrors[course.id] ? (
                    <Image
                      src={course.image}
                      alt={getLocalizedCourse(course.id).title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(course.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-blue/20 to-accent-blue/10">
                      <div className="text-center p-4">
                        <div className="text-4xl font-bold text-dark-blue/40">{course.category}</div>
                        <div className="text-gray/60">{course.level}</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-20 glass-morphism-dark text-white text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {t(course.category.toLowerCase())}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="absolute bottom-3 left-4 z-20 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mr-2 shadow-lg">
                      <FaGraduationCap className="text-dark-blue" />
                    </div>
                    <div>
                      <span className="text-white/80 text-xs block">{t('instructor')}</span>
                      <span className="text-white font-medium text-sm">{course.instructor}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="font-bold text-dark-blue text-xl mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                      {getLocalizedCourse(course.id).title}
                    </h3>
                    
                    <p className="text-gray/80 text-sm line-clamp-3 mb-4">
                      {getLocalizedCourse(course.id).description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center px-2 py-1 rounded-md bg-light-gray">
                        <FaClock className="text-gold text-xs mr-1" />
                        <span className="text-xs text-gray">{course.duration}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded-md bg-light-gray">
                        <span className="text-xs font-medium text-dark-blue">{course.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`${i < Math.floor(course.rating) ? 'text-gold' : 'text-gray-300'} text-sm`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray ml-2 font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray">
                      <FaUsers className="mr-1" /> 
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray">{t('price')}</span>
                      <p className="text-dark-blue font-bold text-xl">£{course.price}</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-light-gray flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                      <FaArrowRight className="text-gray group-hover:text-white transition-colors duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/courses" 
              className="inline-flex items-center py-3 px-8 rounded-full bg-white border border-gray-200 text-dark-blue font-medium shadow-subtle hover:shadow-lg transition-all duration-300 relative overflow-hidden shiny-button"
            >
              {t('view_all_courses')}
              <FaArrowRight className={`${isRtl ? 'mr-2' : 'ml-2'}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses; 