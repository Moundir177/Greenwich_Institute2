"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFilter, FaSearch, FaSortAmountDown, FaSortAmountUpAlt, FaGraduationCap, 
  FaUsers, FaBook, FaLaptopCode, FaChartLine, FaBriefcase, FaPalette, 
  FaChartBar, FaAward, FaArrowRight } from 'react-icons/fa';
import CourseCard from '@/components/courses/CourseCard';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

// Mock course data (in a real app, this would come from an API)
const COURSES = [
  // Start and Improve Your Business (SIYB) Section
  {
    id: 'find-business-idea',
    title: 'Find a Successful Business Idea',
    titleAr: 'أوجد فكرة عمل ناجح',
    instructor: 'SIYB Certified Trainers',
    description: 'For potential entrepreneurs who want to establish a project or enter the business field and seek to acquire leadership and entrepreneurship skills.',
    descriptionAr: 'لرواد الأعمال المحتملين الذين يرغبون في تأسيس مشروع أو الدخول في مجال الأعمال و يسعون إلى كسب مهارات القيادة و الريادة و اختبار الأفكار الواعدة',
    duration: '5 days',
    level: 'Beginner',
    rating: 4.7,
    students: 850,
    price: 499,
    image: '/images/courses/business-management.jpg',
    featured: true,
    category: 'Business',
    programLevel: 1,
    features: [
      'Assess if you have the basic requirements for entering business',
      'Clearly explain any business or project idea that comes to your mind',
      'Identify potential sources for generating successful ideas',
      'Business Game Simulation (Level 1)'
    ],
    featuresAr: [
      'تقييم ما إذا كان لديك المتطلبات الأساسية اللازمة للدخول في مجال الأعمال',
      'شرح بوضوح أي فكرة مشروع أو عمل تبادر إلى ذهنك',
      'تحديد المصادر المحتملة لتوليد الأفكار الناجحة و إنشاء قائمة لها',
      'التسجيل و المشاركة في لعبة تطوير الأعمال التي تحاكي الواقع (المستوى 1)'
    ]
  },
  {
    id: 'start-your-business',
    title: 'Start Your Business',
    titleAr: 'إبدأ أعمالك',
    instructor: 'SIYB Certified Trainers',
    description: 'For those who have a project or business idea and want to implement it. Provides practical steps to start and develop a business plan for the proposed project.',
    descriptionAr: 'للذين لديهم فكرة مشروع أو عمل ويريدون وضعها حيز التنفيذ. يقدم الخطوات العملية للبدء و وضع خطة عمل للمشروع المقترح',
    duration: '5 days',
    level: 'Beginner',
    rating: 4.8,
    students: 1200,
    price: 599,
    image: '/images/courses/business-management.jpg',
    featured: true,
    category: 'Business',
    programLevel: 2,
    features: [
      'Describe the content of your project or business plan',
      'Support your project or business idea',
      'Start your project or business',
      'Business Game Simulation (Level 2)'
    ],
    featuresAr: [
      'وصف محتوى خطة المشروع أو العمل',
      'دعم فكرة المشروع أو العمل',
      'بدء المشروع أو العمل',
      'التسجيل و المشاركة في لعبة تطوير الأعمال التي تحاكي الواقع (المستوى 2)'
    ]
  },
  {
    id: 'improve-your-business',
    title: 'Develop and Expand Your Business',
    titleAr: 'طوّر و وسّع أعمالك',
    instructor: 'SIYB Certified Trainers',
    description: 'For entrepreneurs who want to improve and develop their businesses or projects. Set bigger goals and advance in your work.',
    descriptionAr: 'لرواد الأعمال الذين يرغبون في تحسين و تطوير أعمالهم أو مشاريعهم. سطر أهدافا أكبر و امضي قدما في عملك',
    duration: '10 days',
    level: 'Intermediate',
    rating: 4.9,
    students: 1547,
    price: 799,
    image: '/images/courses/business-management.jpg',
    featured: true,
    category: 'Business',
    programLevel: 4,
    features: [
      'Identify business growth prospects',
      'Learn how companies can be developed',
      'Basic principles for developing business strategy',
      'How to choose the right strategy for business development',
      'How to make growth strategy implementable',
      'Business Game Simulation (Level 4)'
    ],
    featuresAr: [
      'التعرف على احتمالات نمو الأعمال',
      'كيف يمكن تطوير الشركات',
      'المبادئ الأساسية لوضع استراتيجية عملية لتطوير الاعمال',
      'كيفية اختيار الاستراتيجية الصحيحة لتطوير الاعمال',
      'كيف يمكن أن نجعل استراتيجية النمو قابلة للتنفيذ',
      'التسجيل و المشاركة في لعبة تطوير الأعمال التي تحاكي الواقع (مستوى 4)'
    ]
  },
  {
    id: 'manage-your-business',
    title: 'Manage Your Business',
    titleAr: 'سيّر أعمالك',
    instructor: 'SIYB Certified Trainers',
    description: 'For those who have institutions, activities, or work in companies and organizations and want to improve the management of their businesses and projects.',
    descriptionAr: 'للذين لديهم مؤسسات، نشاطات أو يشتغلون في شركات و هيئات و يرغبون في تحسين تسيير أعمالهم و مشاريعهم',
    duration: '10 days',
    level: 'Intermediate',
    rating: 4.6,
    students: 1320,
    price: 699,
    image: '/images/courses/business-management.jpg',
    featured: false,
    category: 'Business',
    programLevel: 3,
    features: [
      'Learn marketing, negotiation, and sales management',
      'Acquire inventory management skills and tools',
      'Train in human resources management',
      'Learn about financial and accounting management for projects',
      'Train in planning methods and tools for institutions',
      'Business Game Simulation (Level 3)'
    ],
    featuresAr: [
      'تعلم فنيات التسويق، التفاوض و إدارة المبيعات',
      'اكتساب مهارات و وسائل إدارة المخازن',
      'التدرب على إدارة الموارد البشرية',
      'الإلمام بأساليب التسيير المالي و المحاسبي للمشاريع',
      'التدرب على أساليب و وسائل التخطيط في المؤسسات',
      'التسجيل و المشاركة في لعبة تطوير الأعمال التي تحاكي الواقع (المستوى 3)'
    ]
  },
  
  {
    id: 'siyb-international-program',
    title: 'Start and Improve Your Business (SIYB)',
    titleAr: 'ابدأ وحسن مشروعك (SIYB)',
    instructor: 'ILO Certified SIYB Master Trainers',
    description: 'SIYB is an international business management program certified in over 100 countries. It provides comprehensive training for entrepreneurs at every stage of business development.',
    descriptionAr: 'برنامج SIYB هو برنامج دولي لإدارة الأعمال معتمد في أكثر من 100 دولة. يوفر تدريباً شاملاً لرواد الأعمال في كل مرحلة من مراحل تطوير الأعمال.',
    duration: 'Varies by module',
    level: 'All Levels',
    rating: 4.9,
    students: 2500,
    price: 999,
    image: '/images/courses/business-management.jpg',
    featured: true,
    category: 'Business',
    features: [
      'Internationally recognized ILO certification',
      'Comprehensive business development training',
      'Practical tools for business planning and management',
      'Access to global SIYB network',
      'Business simulation exercises',
      'Personalized coaching and mentoring'
    ],
    featuresAr: [
      'شهادة معتمدة دولياً من منظمة العمل الدولية',
      'تدريب شامل لتطوير الأعمال',
      'أدوات عملية للتخطيط وإدارة الأعمال',
      'الوصول إلى شبكة SIYB العالمية',
      'تمارين محاكاة الأعمال',
      'التدريب والتوجيه الشخصي'
    ]
  },
  
  // Higher Education Section
  {
    id: 'project-cycle-management',
    title: 'Project Cycle Management (PCM)',
    titleAr: 'إدارة دورة مشروع | PCM',
    instructor: 'Dr. Ahmed Mahmoud',
    description: 'For national project coordinators, project managers, national development planning officials and NGO staff to improve efficiency in formulating, implementing, monitoring and evaluating development programs and projects.',
    descriptionAr: 'لمنسقي المشاريع الوطنية، مديري المشاريع، مسؤولي تخطيط التنمية الوطنية و موظفي المنظمات غير الحكومية لرفع كفاءة المشاركين في صياغة، تنفيذ، مراقبة و تقييم برامج و مشاريع التنمية',
    duration: '12 days',
    level: 'Advanced',
    rating: 4.8,
    students: 920,
    price: 1299,
    image: '/images/courses/data-science.jpg',
    featured: false,
    category: 'Project Management',
    features: [
      'Learn initial context analysis method',
      'Design logical framework (project results framework)',
      'Project planning and budgeting',
      'Training on monitoring, evaluation, and assessment'
    ],
    featuresAr: [
      'تعلم طريقة تحليل السياق الأول',
      'تصميم الإطار المنطقي (إطار نتائج المشروع)',
      'إنجاز التخطيط و الميزانية للمشروع',
      'التدرب على المراقبة و التقييم و التقويم'
    ]
  },
  
  // Trainer and Consultant Programs
  {
    id: 'trainer-consultant-program',
    title: 'Professional Trainer and Consultant (PMT/TOT)',
    titleAr: 'مدرب و مستشار | PMT / TOT',
    instructor: 'International Labour Organization Experts',
    description: 'Put your expertise at the service of companies and economic institutions with certification from the International Labour Organization in Geneva.',
    descriptionAr: 'ضع خبراتك في خدمة الشركات و المؤسسات الاقتصادية باعتماد من المنظمة الدولية للعمل بجنيف',
    duration: '15 days',
    level: 'Advanced',
    rating: 4.9,
    students: 750,
    price: 1599,
    image: '/images/courses/data-science.jpg',
    featured: true,
    category: 'Professional Development',
    features: [
      'Certification from the International Labour Organization in Geneva',
      'Access to all training materials (training guides, notes, PowerPoint presentations, videos, stories)',
      'Benefit from globally accredited expertise from the ILO',
      'Registration and membership on the official ILO platform as a certified expert',
      'Access to Business Game toolkit',
      'Participation in all levels of the Business Game simulation'
    ],
    featuresAr: [
      'اعتماد من المنظمة الدولية للعمل بجنيف',
      'إمكانية الولوج إلى كل الوسائل التدريبية (دليل التدريب، مذكرات، شرائح PowerPoint، فيديوهات، قصص)',
      'الاستفادة من الخبرات العالمية المعتمدة من المنظمة الدولية للعمل',
      'التسجيل و الحصول على عضوية في المنصة الرسمية للمنظمة الدولية للعمل كخبير معتمد من هيئة تابعة للأمم المتحدة',
      'الحصول على حقيبة لعبة تطوير الأعمال',
      'التسجيل و المشاركة في لعبة تطوير الأعمال التي تحاكي الواقع (كل المستويات)'
    ]
  },

  // Keeping some of the original courses
  {
    id: 'data-science',
    title: 'Data Science and Analytics',
    instructor: 'Prof. Michael Chang',
    description: 'Master the skills of data analysis, visualization, and machine learning to drive data-informed business decisions.',
    duration: '16 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 1893,
    price: 1299,
    image: '/images/courses/data-science.jpg',
    featured: false,
    category: 'Technology'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    instructor: 'Emma Phillips',
    description: 'Learn how to create effective digital marketing strategies across multiple platforms to grow your business online.',
    duration: '10 weeks',
    level: 'Beginner',
    rating: 4.7,
    students: 3215,
    price: 699,
    image: '/images/courses/digital-marketing.jpg',
    featured: false,
    category: 'Marketing'
  },
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    instructor: 'James Wilson',
    description: 'Build responsive websites and web applications using modern technologies like React, Node.js, and MongoDB.',
    duration: '20 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 2105,
    price: 1499,
    image: '/images/courses/web-development.jpg',
    featured: false,
    category: 'Technology'
  }
];

// Featured categories - update to include new categories
const CATEGORIES = [
  {
    id: 'business',
    name: 'Business',
    icon: <FaBriefcase className="text-4xl text-gold mb-4" />,
    description: 'Develop essential business skills with ILO-certified SIYB programs to start and improve your business.',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 'project-management',
    name: 'Project Management',
    icon: <FaChartLine className="text-4xl text-gold mb-4" />,
    description: 'Master project cycle management and learn to plan, implement, and evaluate development projects.',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'professional-development',
    name: 'Professional Development',
    icon: <FaAward className="text-4xl text-gold mb-4" />,
    description: 'Become a certified trainer and consultant with ILO accreditation and serve businesses globally.',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: <FaLaptopCode className="text-4xl text-gold mb-4" />,
    description: 'Master cutting-edge technology skills from web development to artificial intelligence.',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: <FaChartBar className="text-4xl text-gold mb-4" />,
    description: 'Learn how to create effective marketing strategies to grow your business.',
    color: 'from-yellow-600 to-yellow-800'
  }
];

// Get unique categories for filter
const courseCategories = [...new Set(COURSES.map(course => course.category))];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

export default function CoursesPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const [filteredCourses, setFilteredCourses] = useState(COURSES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    
    // Check for hash in URL to determine which tab to show
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveTab(hash);
      
      // Also set category filter if relevant
      if (hash !== 'all' && hash !== 'featured') {
        const categoryMap = CATEGORIES.reduce((acc, cat) => {
          acc[cat.id] = cat.name;
          return acc;
        }, {} as Record<string, string>);
        
        if (categoryMap[hash]) {
          setSelectedCategory(categoryMap[hash]);
        }
      }
    }
  }, []);

  useEffect(() => {
    let result = [...COURSES];
    
    // Show only featured courses if activeTab is 'featured'
    if (activeTab === 'featured') {
      result = result.filter(course => course.featured);
    }
    // Filter by category if activeTab matches a category
    else if (activeTab !== 'all') {
      const category = CATEGORIES.find(cat => cat.id === activeTab)?.name;
      if (category) {
        result = result.filter(course => course.category === category);
      }
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Filter by level
    if (selectedLevel !== 'All') {
      result = result.filter(course => course.level === selectedLevel);
    }
    
    // Sort courses
    result.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'featured':
          comparison = (a.featured === b.featured) ? 0 : a.featured ? -1 : 1;
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'popularity':
          comparison = a.students - b.students;
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === 'desc' ? -comparison : comparison;
    });
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, selectedLevel, sortBy, sortOrder, activeTab]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  // Function to change tab and update URL hash
  const changeTab = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState(null, '', `#${tab}`);
    
    // Reset other filters when changing tabs
    if (tab === 'all') {
      setSelectedCategory('All');
    } else if (tab === 'featured') {
      // Keep other filters when switching to featured
    } else {
      // When selecting a category tab, update the category filter
      const category = CATEGORIES.find(cat => cat.id === tab)?.name;
      if (category) {
        setSelectedCategory(category);
      }
    }
  };

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white relative overflow-hidden">
        {/* Particle Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 20 }).map((_, index) => (
                <div 
                  key={index}
                  className="absolute rounded-full bg-gold/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    animation: `float-particle ${Math.random() * 10 + 15}s infinite ease-in-out`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Gradient Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gold/20 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-dark-blue/30 blur-3xl"></div>
        </div>
        
        {/* 3D Polygons */}
        <div className="absolute top-20 right-10 w-32 sm:w-64 h-32 sm:h-64 border border-white/10 transform rotate-45 rounded-3xl opacity-20 hidden sm:block"></div>
        <div className="absolute bottom-20 left-10 w-16 sm:w-32 h-16 sm:h-32 border border-gold/20 transform -rotate-12 rounded-xl opacity-30 hidden sm:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6"
              variants={fadeIn}
              custom={1}
            >
              {t('explore_our')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold neon-text">Courses</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 px-4"
              variants={fadeIn}
              custom={2}
            >
              <span className="relative">
                Discover a wide range of professional and academic courses designed to help you achieve your career goals and unlock your potential.
              </span>
            </motion.p>
            
            <motion.div 
              className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto"
              variants={fadeIn}
              custom={3}
            >
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-3 md:py-4 px-4 md:px-6 w-full pl-10 md:pl-12 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold shadow-lg text-sm sm:text-base"
              />
              <FaSearch className="absolute left-3 md:left-4 top-3 md:top-4 text-white/60" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 hidden md:block"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-bounce border border-white/20 cursor-pointer shadow-xl" onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}>
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 9L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Tabs Navigation */}
      <section className="bg-white py-2 sm:py-4 border-b border-gray-200 sticky top-0 z-20 shadow-md backdrop-blur-lg bg-white/90">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex overflow-x-auto scrollbar-hide justify-start sm:justify-center"
          >
            <div className="inline-flex p-1 bg-light-gray/50 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-inner">
              <button 
                onClick={() => changeTab('all')}
                className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'all' ? 'text-dark-blue' : 'text-gray'
                }`}
              >
                {activeTab === 'all' && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <span className={`${activeTab === 'all' ? 'text-gold' : 'text-gray'} mr-1.5 sm:mr-2`}>
                    <FaBook className="inline-block text-xs sm:text-sm" />
                  </span>
                  All Courses
                </span>
              </button>
              
              <button 
                onClick={() => changeTab('featured')}
                className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'featured' ? 'text-dark-blue' : 'text-gray'
                }`}
              >
                {activeTab === 'featured' && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <span className={`${activeTab === 'featured' ? 'text-gold' : 'text-gray'} mr-1.5 sm:mr-2`}>
                    <FaAward className="inline-block text-xs sm:text-sm" />
                  </span>
                  Featured
                </span>
              </button>
              
              {CATEGORIES.map(category => (
                <button 
                  key={category.id}
                  onClick={() => changeTab(category.id)}
                  className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === category.id ? 'text-dark-blue' : 'text-gray'
                  }`}
                >
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white rounded-full shadow-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center">
                    <span className={`${activeTab === category.id ? 'text-gold' : 'text-gray'} mr-1.5 sm:mr-2`}>
                      {React.cloneElement(category.icon, { className: "inline-block text-xs sm:text-sm" })}
                    </span>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Categories Section - Only show on "All Courses" tab */}
      {activeTab === 'all' && (
        <section className="py-10 md:py-16 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-8 md:mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-4 md:mb-6"
                variants={fadeIn}
                custom={1}
              >
                Explore Our Course <span className="text-gold">Categories</span>
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-gray max-w-2xl mx-auto px-4"
                variants={fadeIn}
                custom={2}
              >
                Browse through our diverse range of categories to find the perfect course for your career advancement and personal growth.
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8">
              {CATEGORIES.map((category, index) => (
                <motion.div 
                  key={category.id}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  custom={index + 3}
                  onClick={() => changeTab(category.id)}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[220px]">
                    {React.cloneElement(category.icon, { className: "text-white text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" })}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">
                      {category.description}
                    </p>
                    <div className="text-white/90 flex items-center text-xs sm:text-sm font-medium mt-auto">
                      <span>Explore Courses</span>
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* SIYB Featured Program Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-light-gray to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-3 md:mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-amber-500">SIYB</span> Program
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 font-medium mb-4 md:mb-6 italic">
                    is an international program certified in over 100 countries
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-5 md:mb-6">
                    The Start and Improve Your Business (SIYB) program is a management training program with a focus on starting and improving small businesses as a strategy for creating more and better employment in developing economies and economies in transition.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8">
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 flex-shrink-0">
                        <FaUsers className="text-gold text-sm sm:text-base" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue text-sm sm:text-base">Global Network</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Join a community of entrepreneurs across 100+ countries</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 flex-shrink-0">
                        <FaAward className="text-gold text-sm sm:text-base" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue text-sm sm:text-base">ILO Certified</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Internationally recognized certification</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 flex-shrink-0">
                        <FaBriefcase className="text-gold text-sm sm:text-base" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue text-sm sm:text-base">Business Skills</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Practical tools for all stages of business</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 flex-shrink-0">
                        <FaGraduationCap className="text-gold text-sm sm:text-base" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-blue text-sm sm:text-base">Expert Trainers</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Learn from certified SIYB master trainers</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => changeTab('business')}
                    className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-gold to-amber-500 text-dark-blue px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center sm:justify-start"
                  >
                    <span className="relative z-10">Explore SIYB Courses</span>
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </button>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  className="relative mx-auto max-w-md lg:max-w-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-xl border-4 sm:border-8 border-white relative z-10">
                    <Image 
                      src="/images/features/siyb_program.jpg" 
                      alt="SIYB Program" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 sm:w-40 h-24 sm:h-40 bg-gold/10 rounded-full z-0 hidden sm:block"></div>
                  <div className="absolute -top-6 -left-6 w-16 sm:w-24 h-16 sm:h-24 bg-dark-blue/10 rounded-full z-0 hidden sm:block"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Advanced Filters */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 text-dark-blue bg-light-gray py-2 px-3 sm:px-4 rounded-md lg:hidden text-sm"
                >
                  <FaFilter size={12} /> 
                  <span>Filters</span>
                </button>
                
                <div className={`lg:flex gap-4 ${isFilterOpen ? 'block' : 'hidden'}`}>
                  <div className="mb-3 sm:mb-0">
                    <label className="block text-gray text-xs sm:text-sm mb-1">Category</label>
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-light-gray border border-gray-200 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-dark-blue focus:outline-none focus:ring-1 focus:ring-dark-blue text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <option value="All">All Categories</option>
                      {courseCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray text-xs sm:text-sm mb-1">Level</label>
                    <select 
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="bg-light-gray border border-gray-200 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-dark-blue focus:outline-none focus:ring-1 focus:ring-dark-blue text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <option value="All">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-gray text-xs sm:text-sm mb-1">Sort By</label>
                  <div className="flex items-center">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-light-gray border border-gray-200 rounded-md rounded-r-none px-2 sm:px-3 py-1.5 sm:py-2 text-dark-blue focus:outline-none focus:ring-1 focus:ring-dark-blue text-xs sm:text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="price">Price</option>
                      <option value="rating">Rating</option>
                      <option value="popularity">Popularity</option>
                    </select>
                    <button 
                      onClick={toggleSortOrder}
                      className="bg-dark-blue text-white p-1.5 sm:p-2 rounded-md rounded-l-none"
                    >
                      {sortOrder === 'desc' ? <FaSortAmountDown size={14} /> : <FaSortAmountUpAlt size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Summary */}
            <div className="mb-4 sm:mb-6">
              <p className="text-gray text-xs sm:text-sm">
                Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedLevel !== 'All' && ` for ${selectedLevel} level`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-6 sm:py-8 pb-12 sm:pb-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredCourses.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
              >
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    variants={scaleIn}
                    custom={index + 1}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-dark-blue mb-2">No courses found</h3>
                <p className="text-gray text-sm mb-4">Try adjusting your filters or search term</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedLevel('All');
                    setActiveTab('all');
                    window.history.pushState(null, '', '#all');
                  }}
                  className="bg-dark-blue text-white py-2 px-4 rounded-md hover:bg-dark-blue/90 transition-colors duration-300 text-sm"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-dark-blue to-blue-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gold/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="text-gold">Transform</span> Your Career?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Join thousands of students who have advanced their careers with our industry-leading courses.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link 
                href="/contact" 
                className="relative group overflow-hidden bg-gradient-to-r from-gold to-amber-500 text-dark-blue px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-15px_rgba(240,198,116,0.5)] text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Personalized Advice
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              <Link 
                href="/register" 
                className="relative overflow-hidden bg-transparent border border-white/30 backdrop-blur-sm text-white px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/10 transform hover:translate-y-[-2px] text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Create Account
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 