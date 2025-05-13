"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaClock, FaGraduationCap, FaStar, FaUsers, FaCheck, FaVideo, 
  FaBook, FaDownload, FaChalkboardTeacher, FaCalendarAlt, 
  FaTimes, FaQuestionCircle, FaFileAlt, FaFacebookF, FaTwitter, 
  FaLinkedinIn, FaHeart, FaShareAlt, FaPlay, FaPause, FaExpand, 
  FaVolumeUp, FaVolumeMute, FaUniversalAccess, FaFont, FaAdjust, 
  FaMousePointer, FaComments, FaPaperPlane, FaRobot, FaUserCircle, 
  FaLightbulb, FaRoad, FaUserGraduate, FaLock, FaTrophy, FaChartLine, 
  FaChartBar, FaChartPie, FaChartArea, FaCalendarCheck, FaFire, FaMedal, 
  FaRegClock, FaBrain, FaRegLightbulb, FaUserFriends, FaRegCalendarAlt, 
  FaGlobeAmericas, FaThumbsUp, FaRegStickyNote, FaFlag, FaAward
} from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

// Mock course data - in a real app this would come from an API
const COURSES = [
  {
    id: 'find-business-idea',
    title: 'Find a Successful Business Idea',
    titleAr: 'أوجد فكرة عمل ناجح',
    instructor: 'SIYB Certified Trainers',
    instructorImage: '/images/instructors/sarah-anderson.jpg',
    instructorBio: 'SIYB certified trainers with expertise in entrepreneurship and business development. Certified by the International Labour Organization.',
    description: 'For potential entrepreneurs who want to establish a project or enter the business field and seek to acquire leadership and entrepreneurship skills.',
    descriptionAr: 'لرواد الأعمال المحتملين الذين يرغبون في تأسيس مشروع أو الدخول في مجال الأعمال و يسعون إلى كسب مهارات القيادة و الريادة و اختبار الأفكار الواعدة',
    fullDescription: `This course is designed for potential entrepreneurs who want to establish a project or enter the business field. It helps participants assess if they have the basic requirements for business, clearly explain project ideas, and identify potential sources for generating successful ideas.

The course includes practical exercises and a Business Game Simulation (Level 1) to provide hands-on experience in a risk-free environment.`,
    fullDescriptionAr: `هذا البرنامج مصمم لرواد الأعمال المحتملين الذين يرغبون في تأسيس مشروع أو الدخول في مجال الأعمال. يساعد المشاركين على تقييم ما إذا كان لديهم المتطلبات الأساسية للأعمال، وشرح أفكار المشاريع بوضوح، وتحديد المصادر المحتملة لتوليد الأفكار الناجحة.

يتضمن البرنامج تدريبات عملية ومحاكاة لعبة الأعمال (المستوى 1) لتوفير خبرة عملية في بيئة خالية من المخاطر.`,
    duration: '5 days',
    level: 'Beginner',
    rating: 4.7,
    students: 850,
    reviews: 120,
    price: 499,
    image: '/images/courses/business-management.jpg',
    featured: true,
    category: 'Business',
    startDate: '2023-09-15',
    language: 'Arabic/English',
    certificate: true,
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
    ],
    syllabus: [
      {
        week: 1,
        title: 'Personal Requirements for Business',
        titleAr: 'المتطلبات الشخصية للأعمال',
        lessons: [
          'Entrepreneurial Characteristics Assessment',
          'Business Requirements Analysis',
          'Personal Skills Evaluation'
        ]
      },
      {
        week: 2,
        title: 'Business Idea Development',
        titleAr: 'تطوير فكرة العمل',
        lessons: [
          'Idea Generation Techniques',
          'Market Gap Analysis',
          'Business Idea Articulation'
        ]
      },
      {
        week: 3,
        title: 'Market Research Fundamentals',
        titleAr: 'أساسيات بحوث السوق',
        lessons: [
          'Customer Needs Assessment',
          'Competitive Analysis',
          'Market Size Estimation'
        ]
      },
      {
        week: 4,
        title: 'Idea Validation',
        titleAr: 'التحقق من صحة الفكرة',
        lessons: [
          'Minimum Viable Product',
          'Customer Feedback Collection',
          'Idea Refinement Process'
        ]
      },
      {
        week: 5,
        title: 'Business Game Simulation',
        titleAr: 'محاكاة لعبة الأعمال',
        lessons: [
          'Introduction to Business Simulation',
          'Practical Application',
          'Performance Analysis and Learning'
        ]
      }
    ],
    requirements: [
      'No prior business experience required',
      'Basic literacy and numeracy skills',
      'Strong interest in entrepreneurship',
      'Commitment to complete all practical exercises'
    ],
    outcomes: [
      'Ability to assess personal entrepreneurial potential',
      'Skills to clearly articulate business ideas',
      'Techniques for generating viable business concepts',
      'Understanding of basic market assessment',
      'Practical experience through business simulation'
    ],
    relatedCourses: ['start-your-business', 'improve-your-business', 'manage-your-business'],
    videoPreview: {
      src: "/videos/business-management-preview.mp4",
      thumbnail: "/images/courses/business-management-video-thumb.jpg"
    }
  },
  {
    id: 'data-science',
    title: 'Data Science and Analytics',
    instructor: 'Prof. Michael Chang',
    instructorImage: '/images/instructors/michael-chang.jpg',
    instructorBio: 'Prof. Michael Chang has over 10 years of experience in data science and machine learning. He previously worked as a Senior Data Scientist at Google and holds a PhD in Computer Science from MIT.',
    description: 'Master the skills of data analysis, visualization, and machine learning to drive data-informed business decisions.',
    fullDescription: `This comprehensive data science course will take you from the fundamentals of data analysis to advanced machine learning techniques. You'll gain hands-on experience with industry-standard tools and libraries to solve real-world data problems.

The curriculum is designed to build both theoretical understanding and practical skills, focusing on Python programming, statistical analysis, data visualization, and implementing various machine learning algorithms.

By the end of this course, you'll be able to collect, clean, analyze and interpret complex datasets, create compelling data visualizations, and build predictive models that can drive business decisions.`,
    duration: '16 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 1893,
    reviews: 302,
    price: 1299,
    image: '/images/courses/data-science.jpg',
    featured: true,
    category: 'Technology',
    startDate: '2023-10-01',
    language: 'English',
    certificate: true,
    syllabus: [
      {
        week: 1,
        title: 'Introduction to Data Science',
        lessons: [
          'What is Data Science?',
          'Data Science Process and Lifecycle',
          'Setting Up Your Python Environment'
        ]
      },
      {
        week: 2,
        title: 'Python for Data Science',
        lessons: [
          'Python Fundamentals',
          'NumPy and Pandas Basics',
          'Data Manipulation with Pandas'
        ]
      },
      {
        week: 3,
        title: 'Data Visualization',
        lessons: [
          'Visualization Principles',
          'Creating Visualizations with Matplotlib',
          'Interactive Visualizations with Plotly'
        ]
      },
      {
        week: 4,
        title: 'Statistical Analysis',
        lessons: [
          'Descriptive Statistics',
          'Probability Distributions',
          'Hypothesis Testing'
        ]
      },
      {
        week: 5,
        title: 'Machine Learning Fundamentals',
        lessons: [
          'Introduction to ML Concepts',
          'Supervised vs Unsupervised Learning',
          'Model Evaluation Metrics'
        ]
      },
      {
        week: 6,
        title: 'Supervised Learning',
        lessons: [
          'Linear and Logistic Regression',
          'Decision Trees and Random Forests',
          'Support Vector Machines'
        ]
      }
    ],
    requirements: [
      'Basic programming knowledge',
      'Understanding of fundamental mathematics (algebra, calculus)',
      'Statistics fundamentals',
      'Computer with minimum 8GB RAM'
    ],
    outcomes: [
      'Develop proficiency in Python for data analysis',
      'Build and interpret data visualizations',
      'Apply statistical methods to draw conclusions from data',
      'Build, evaluate and deploy machine learning models',
      'Extract actionable insights from complex datasets',
      'Present data findings to technical and non-technical audiences'
    ],
    relatedCourses: ['artificial-intelligence', 'web-development', 'finance-accounting'],
    faqs: [
      {
        question: "Do I need a strong mathematics background for this course?",
        answer: "A basic understanding of algebra and calculus is beneficial, but we provide refresher materials on essential mathematical concepts. The course gradually builds your mathematical intuition alongside practical data science skills."
      },
      {
        question: "What programming languages are covered in this course?",
        answer: "The course primarily focuses on Python, as it's the most widely used language in data science. We'll also briefly introduce R for specific statistical applications, but no prior experience with either language is required."
      },
      {
        question: "Will I be able to build a portfolio during this course?",
        answer: "Yes, you'll complete several projects that can be showcased in your portfolio. These include data analysis reports, visualization dashboards, and machine learning models addressing real-world problems."
      },
      {
        question: "How is this course different from other data science courses?",
        answer: "Our course emphasizes practical, industry-relevant skills over theoretical concepts. You'll work with real datasets, collaborate with peers on projects, and receive personalized feedback from instructors with industry experience."
      },
      {
        question: "Do you provide any job placement assistance?",
        answer: "We offer career guidance, technical interview preparation, and connections to our industry partners. Many graduates have successfully transitioned into data science roles within 6 months of course completion."
      }
    ],
    resources: [
      {
        title: "Python for Data Science Cheat Sheet",
        type: "PDF",
        size: "1.7 MB",
        url: "/resources/python-data-science-cheatsheet.pdf"
      },
      {
        title: "Statistical Analysis Reference Guide",
        type: "PDF",
        size: "2.9 MB",
        url: "/resources/statistical-analysis-guide.pdf"
      },
      {
        title: "Data Visualization Cookbook",
        type: "PDF",
        size: "4.2 MB",
        url: "/resources/data-visualization-cookbook.pdf"
      },
      {
        title: "Machine Learning Model Templates",
        type: "ZIP",
        size: "8.5 MB",
        url: "/resources/ml-model-templates.zip"
      }
    ],
    discussions: [
      {
        id: 1,
        user: "Priya Sharma",
        avatar: "/images/avatars/user5.jpg",
        date: "2023-07-28",
        content: "I'm getting a strange error when implementing the random forest classifier from week 5. Has anyone else encountered: 'ValueError: n_estimators must be an integer value'?",
        replies: [
          {
            user: "Prof. Michael Chang",
            avatar: "/images/instructors/michael-chang.jpg",
            date: "2023-07-29",
            content: "Hi Priya, this usually happens when you're passing a float instead of an integer to the n_estimators parameter. Check if you're doing something like n_estimators=100.0 instead of n_estimators=100. Let me know if this resolves it!"
          },
          {
            user: "Priya Sharma",
            avatar: "/images/avatars/user5.jpg",
            date: "2023-07-29",
            content: "That was exactly the issue! I was reading values from a config file and they were being parsed as floats. Thank you!"
          }
        ]
      },
      {
        id: 2,
        user: "Thomas Wright",
        avatar: "/images/avatars/user6.jpg",
        date: "2023-08-05",
        content: "For the final project, I'm thinking of analyzing climate data to predict crop yields. Would this be an appropriate scope, or is it too ambitious given the timeframe?",
        replies: [
          {
            user: "Prof. Michael Chang",
            avatar: "/images/instructors/michael-chang.jpg",
            date: "2023-08-06",
            content: "This is a great topic, Thomas! The scope could work well if you clearly define your variables and geographic boundary. I suggest focusing on 1-2 crop types in a specific region to keep it manageable. The USDA and NOAA have excellent public datasets you can use."
          }
        ]
      }
    ],
    videoPreview: {
      src: "/videos/data-science-preview.mp4",
      thumbnail: "/images/courses/data-science-video-thumb.jpg"
    },
    practiceQuizzes: [
      {
        id: 'quiz-1',
        title: 'Python and Data Basics',
        description: 'Test your understanding of Python fundamentals and basic data operations.',
        questions: [
          {
            id: 'q1',
            text: 'Which of the following is NOT a data structure in Python?',
            options: [
              { id: 'a', text: 'List' },
              { id: 'b', text: 'Dictionary' },
              { id: 'c', text: 'Schema' },
              { id: 'd', text: 'Tuple' }
            ],
            correctAnswer: 'c',
            explanation: 'Python has several built-in data structures including lists, dictionaries, tuples, and sets, but "Schema" is not one of them. Schema is a concept commonly used in database design.'
          },
          {
            id: 'q2',
            text: 'What does the pandas function df.head() do?',
            options: [
              { id: 'a', text: 'Returns column headers' },
              { id: 'b', text: 'Returns the first n rows of a DataFrame' },
              { id: 'c', text: 'Checks for null values' },
              { id: 'd', text: 'Sorts the DataFrame' }
            ],
            correctAnswer: 'b',
            explanation: 'The pandas function df.head() returns the first n rows of a DataFrame (by default, n=5). This is useful for quickly examining the structure and content of a dataset.'
          },
          {
            id: 'q3',
            text: 'What type of plot would be most appropriate for showing the relationship between two continuous variables?',
            options: [
              { id: 'a', text: 'Bar chart' },
              { id: 'b', text: 'Pie chart' },
              { id: 'c', text: 'Scatter plot' },
              { id: 'd', text: 'Histogram' }
            ],
            correctAnswer: 'c',
            explanation: 'A scatter plot is most appropriate for showing the relationship between two continuous variables. It allows you to visualize potential correlations and patterns between the variables.'
          }
        ]
      }
    ],
  }
];

// Get more courses data based on IDs - simplified version for demo
const getRelatedCourses = (relatedIds: string[]) => {
  const allCourses = [
    {
      id: 'project-management',
      title: 'Project Management Professional',
      instructor: 'Dr. Robert Johnson',
      image: '/images/courses/project-management.jpg',
      rating: 4.6,
      students: 1750,
      price: 999,
      category: 'Business',
      duration: '14 weeks'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      instructor: 'Emma Phillips',
      image: '/images/courses/digital-marketing.jpg',
      rating: 4.7,
      students: 3215,
      price: 699,
      category: 'Marketing',
      duration: '10 weeks'
    },
    {
      id: 'finance-accounting',
      title: 'Financial Accounting and Analysis',
      instructor: 'Prof. Richard Morris',
      image: '/images/courses/finance.jpg',
      rating: 4.6,
      students: 1670,
      price: 899,
      category: 'Finance',
      duration: '14 weeks'
    },
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence and Machine Learning',
      instructor: 'Prof. David Lee',
      image: '/images/courses/ai-ml.jpg',
      rating: 4.9,
      students: 1425,
      price: 1599,
      category: 'Technology',
      duration: '18 weeks'
    },
    {
      id: 'web-development',
      title: 'Full-Stack Web Development',
      instructor: 'James Wilson',
      image: '/images/courses/web-development.jpg',
      rating: 4.9,
      students: 2105,
      price: 1499,
      category: 'Technology',
      duration: '20 weeks'
    }
  ];

  return allCourses.filter(course => relatedIds.includes(course.id));
};

// Course Enrollment Modal Component
const EnrollmentModal = ({ isOpen, onClose, course }: { isOpen: boolean, onClose: () => void, course: any }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'credit_card'
  });
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In a real app, this would submit the enrollment data to an API
    setTimeout(() => {
      setLoading(false);
      alert(t('enrollment_successful'));
      onClose();
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center border-b border-gray-200 p-5">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-dark-blue to-blue-500 bg-clip-text text-transparent">
                {t('enroll_in_course')}
              </h3>
              <button 
                onClick={onClose} 
                className="text-gray hover:text-dark-blue transition-colors duration-300 rounded-full p-2 hover:bg-gray-100"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden mr-4 shadow-lg">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-blue">{course.title}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-2xl font-bold text-dark-blue">£{course.price}</span>
                    <span className="text-gray mx-2">•</span>
                    <span className="text-gray">{course.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              {formStep < 3 && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    {[1, 2, 3].map((step) => (
                      <div 
                        key={step} 
                        className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            step < formStep 
                              ? 'bg-green-500 text-white' 
                              : step === formStep 
                                ? 'bg-dark-blue text-white' 
                                : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {step < formStep ? <FaCheck /> : step}
                        </div>
                        {step < 3 && (
                          <div 
                            className={`h-1 flex-1 mx-2 ${
                              step < formStep ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray">
                    <span>Personal Info</span>
                    <span>Payment Details</span>
                    <span>Confirmation</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-dark-blue font-medium mb-1">{t('full_name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-dark-blue font-medium mb-1">{t('email_address')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-dark-blue font-medium mb-1">{t('phone_number')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </motion.div>
                )}
                
                {formStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <label htmlFor="paymentMethod" className="block text-dark-blue font-medium mb-1">{t('payment_method')}</label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                      >
                        <option value="credit_card">{t('credit_card')}</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">{t('bank_transfer')}</option>
                      </select>
                    </div>
                    
                    {formData.paymentMethod === 'credit_card' && (
                      <>
                        <div className="mb-4">
                          <label className="block text-dark-blue font-medium mb-1">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-dark-blue font-medium mb-1">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-dark-blue font-medium mb-1">CVC</label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-blue bg-white/50 backdrop-blur-sm"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {formData.paymentMethod === 'paypal' && (
                      <div className="bg-blue-50 p-4 rounded-xl mb-4 text-center">
                        <p className="text-blue-600 mb-3">You'll be redirected to PayPal to complete the payment.</p>
                        <div className="w-20 h-20 mx-auto bg-white p-2 rounded-lg shadow">
                          <div className="bg-[#169BD7] h-full rounded flex items-center justify-center font-bold text-white text-xl">
                            Pay<span className="text-[#253B80]">Pal</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {formData.paymentMethod === 'bank_transfer' && (
                      <div className="bg-green-50 p-4 rounded-xl mb-4">
                        <p className="text-green-700 mb-2 font-medium">Bank Transfer Details:</p>
                        <p className="text-gray mb-1">Account Name: Education Institute Ltd</p>
                        <p className="text-gray mb-1">Account Number: 12345678</p>
                        <p className="text-gray mb-1">Sort Code: 12-34-56</p>
                        <p className="text-gray mb-1">Reference: Your full name</p>
                      </div>
                    )}
                  </motion.div>
                )}
                
                {formStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    {loading ? (
                      <div className="py-6">
                        <div className="w-16 h-16 border-4 border-t-dark-blue border-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-dark-blue font-medium">Processing your enrollment...</p>
                      </div>
                    ) : (
                      <>
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaCheck className="text-3xl text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold text-dark-blue mb-2">Ready to Complete Enrollment</h4>
                        <p className="text-gray mb-6">Please review your information before submitting:</p>
                        
                        <div className="bg-gray-50 p-4 rounded-xl mb-6 text-left">
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray">Name:</span>
                            <span className="font-medium text-dark-blue">{formData.name}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray">Email:</span>
                            <span className="font-medium text-dark-blue">{formData.email}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray">Phone:</span>
                            <span className="font-medium text-dark-blue">{formData.phone || 'Not provided'}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-gray">Payment Method:</span>
                            <span className="font-medium text-dark-blue">{formData.paymentMethod.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl mb-6">
                          <div>
                            <p className="font-medium text-dark-blue">Total:</p>
                            <p className="text-xs text-gray">Includes all taxes and fees</p>
                          </div>
                          <span className="text-2xl font-bold text-dark-blue">£{course.price}</span>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
                
                <div className="border-t border-gray-200 pt-6 flex gap-4 justify-between mt-6">
                  {formStep > 1 && formStep < 3 && (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-3 border border-gray-300 rounded-xl text-dark-blue hover:bg-light-gray transition-all duration-300"
                    >
                      Back
                    </button>
                  )}
                  
                  {formStep === 1 && (
                    <div className="flex gap-4 ml-auto">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 rounded-xl text-gray hover:bg-light-gray transition-all duration-300"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 py-3 bg-dark-blue text-white rounded-xl hover:bg-opacity-90 transition-all duration-300"
                      >
                        Next
                      </button>
                    </div>
                  )}
                  
                  {formStep === 2 && (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-8 py-3 bg-dark-blue text-white rounded-xl hover:bg-opacity-90 transition-all duration-300 ml-auto"
                    >
                      Review Order
                    </button>
                  )}
                  
                  {formStep === 3 && (
                    <div className="flex gap-4 ml-auto">
                      {!loading && (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 border border-gray-300 rounded-xl text-dark-blue hover:bg-light-gray transition-all duration-300"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={loading}
                        className={`px-8 py-3 rounded-xl transition-all duration-300 ${
                          loading 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-dark-blue to-blue-600 text-white hover:shadow-lg hover:shadow-blue-200'
                        }`}
                      >
                        Complete Enrollment
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Social Sharing Component
const SocialShare = ({ url, title }: { url: string, title: string }) => {
  const { t } = useLanguage();
  const [showShare, setShowShare] = useState(false);
  
  // Build sharing URLs
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };
  
  return (
    <div className="relative">
      <motion.button 
        onClick={() => setShowShare(!showShare)}
        className="flex items-center text-blue-100 hover:text-gold transition-colors duration-300 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaShareAlt className="mr-1.5" /> {t('share')}
      </motion.button>
      
      <AnimatePresence>
        {showShare && (
          <motion.div 
            className="absolute right-0 top-10 bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-3 z-10 border border-gray-200"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-gray-500 mb-2 text-center">Share this course with friends</p>
            <div className="flex space-x-3">
              <motion.a 
                href={shareUrls.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-200/50 transition-all duration-300"
                aria-label="Share on Facebook"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href={shareUrls.twitter} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-300/50 transition-all duration-300"
                aria-label="Share on Twitter"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(96, 165, 250, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href={shareUrls.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-700 to-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-700/50 transition-all duration-300"
                aria-label="Share on LinkedIn"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
            <div className="relative mt-3 pt-3 border-t border-gray-200">
              <input 
                type="text" 
                value={url} 
                readOnly 
                onClick={(e) => (e.target as HTMLInputElement).select()}
                className="w-full text-xs p-2 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  alert('URL copied to clipboard!');
                }}
                className="absolute right-1 top-4 text-xs bg-blue-500 text-white px-2 py-1 rounded"
              >
                Copy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Certificate Preview Component
const CertificatePreview = ({ course }: { course: any }) => {
  const { t } = useLanguage();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  if (!course.certificate) return null;
  
  return (
    <>
      <motion.button 
        onClick={() => setShowPreview(true)}
        className="text-blue-100 hover:text-gold flex items-center gap-2 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCheck className="text-gold" />
        <span>{t('preview_certificate')}</span>
      </motion.button>
      
      <AnimatePresence>
        {showPreview && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-3xl w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={() => setShowPreview(false)}
                className="absolute top-4 right-4 text-gray hover:text-dark-blue bg-white/80 backdrop-blur-sm p-2 rounded-full z-10 hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              
              <div className="relative">
                {/* Certificate decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold blur-xl opacity-60"></div>
                
                <motion.div 
                  className="border-8 border-double border-gold p-8 text-center bg-cream bg-certificate-texture relative overflow-hidden rounded-lg shadow-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onAnimationComplete={() => setIsLoaded(true)}
                >
                  {/* Certificate seal and ribbon */}
                  <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-gold/10 rounded-full"></div>
                  <div className="absolute right-8 bottom-8 w-24 h-24">
                    <div className="w-full h-full rounded-full border-4 border-double border-gold flex items-center justify-center bg-gold/5">
                      <div className="text-gold text-xs font-serif tracking-wider">OFFICIAL SEAL</div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="absolute -left-8 top-0 w-16 h-32 bg-gold/80"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)" }}
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  ></motion.div>
                  
                  {/* Certificate content */}
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-3xl font-serif text-dark-blue mb-2 font-bold tracking-wide">{t('certificate_of_completion')}</h3>
                      <div className="w-32 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 mx-auto mb-6"></div>
                    </motion.div>
                    
                    <AnimatePresence>
                      {isLoaded && (
                        <>
                          <motion.p 
                            className="text-lg mb-2 font-serif"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {t('this_is_to_certify')}
                          </motion.p>
                          
                          <motion.p 
                            className="text-3xl font-bold text-dark-blue mb-4 font-serif"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, type: "spring" }}
                          >
                            [Student Name]
                          </motion.p>
                          
                          <motion.p 
                            className="text-lg mb-2 font-serif"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            {t('has_completed')}
                          </motion.p>
                          
                          <motion.p 
                            className="text-2xl font-bold text-dark-blue mb-6 font-serif"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, type: "spring" }}
                          >
                            {course.title}
                          </motion.p>
                          
                          <motion.div 
                            className="flex justify-center items-center gap-12 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            <div className="text-center">
                              <p className="text-sm text-gray-500 mb-1">{t('date')}</p>
                              <p className="font-medium border-b border-gray-300 pb-1">January 15, 2024</p>
                            </div>
                            
                            <div className="h-20 w-px bg-gray-300"></div>
                            
                            <div className="text-center">
                              <p className="text-sm text-gray-500 mb-1">{t('instructor')}</p>
                              <div className="relative">
                                <p className="font-medium border-b border-gray-300 pb-1">{course.instructor}</p>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 italic text-blue-600/80 text-[10px] font-serif rotate-[-5deg]">
                                  Signature
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                    
                    <motion.div 
                      className="mt-6 bg-dark-blue/5 py-3 px-4 rounded-lg border border-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <p className="text-sm text-gray-600 mb-2">
                        {t('certificate_verification')
                          .replace('{duration}', course.duration)
                          .replace('{category}', course.category)}
                      </p>
                      <p className="text-sm font-medium text-dark-blue flex items-center justify-center">
                        <span className="mr-2">{t('certificate_id')}:</span>
                        <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200">
                          XYZ-{course.id.substring(0, 6).toUpperCase()}-2023
                        </span>
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray mb-4">{t('complete_to_earn')}</p>
                <motion.button 
                  onClick={() => setShowPreview(false)}
                  className="bg-gradient-to-r from-dark-blue to-blue-600 text-white py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('close_preview')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Video Preview Component
const VideoPreview = ({ videoSrc, thumbnailSrc, title }: { videoSrc: string, thumbnailSrc: string, title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [quality, setQuality] = useState('720p');
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleProgress = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const progressBar = progressRef.current.getBoundingClientRect();
      const seekPosition = (e.clientX - progressBar.left) / progressBar.width;
      const seekTime = seekPosition * videoRef.current.duration;
      
      videoRef.current.currentTime = seekTime;
      setProgress(seekPosition * 100);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };
  
  const toggleFullscreen = () => {
    if (playerRef.current) {
      if (!isFullscreen) {
        if (playerRef.current.requestFullscreen) {
          playerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };
  
  const changePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
    setShowSettings(false);
  };
  
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  // Auto-hide controls when not hovering
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPlaying && showControls) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isPlaying, showControls]);
  
  return (
    <>
      <motion.button 
        onClick={() => setShowPlayer(true)} 
        className="group relative w-full h-60 rounded-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 z-10"></div>
        <Image
          src={thumbnailSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300 z-20">
          <motion.div 
            className="w-20 h-20 bg-dark-blue/80 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-gold/90 transition-colors duration-300 border-2 border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPlay className="text-white text-2xl ml-1" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-30">
          <p className="text-white font-medium text-lg">Watch Course Preview</p>
          <p className="text-white/80 text-sm flex items-center">
            <FaClock className="mr-1" /> {formatTime(duration) || "3:45"}
          </p>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {showPlayer && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              ref={playerRef} 
              className="relative max-w-4xl w-full bg-black rounded-xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
              onMouseMove={() => setShowControls(true)}
            >
              <motion.button 
                className="absolute top-4 right-4 z-30 text-white bg-black/60 backdrop-blur-md p-2 rounded-full transition-transform duration-300 hover:bg-white/20"
                onClick={() => setShowPlayer(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full rounded-xl cursor-pointer"
                onClick={togglePlay}
                onTimeUpdate={handleProgress}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                playsInline
              />
              
              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-20"
                  onClick={togglePlay}
                >
                  <motion.div 
                    className="w-20 h-20 bg-dark-blue/80 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaPlay className="text-white text-2xl ml-1" />
                  </motion.div>
                </div>
              )}
              
              {/* Video Controls */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-all duration-300 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
              >
                {/* Progress Bar */}
                <div 
                  ref={progressRef}
                  className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer relative overflow-hidden"
                  onClick={handleSeek}
                >
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gold to-blue-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <div 
                    className="absolute w-3 h-3 bg-white rounded-full top-1/2 transform -translate-y-1/2 shadow-md"
                    style={{ left: `${progress}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <motion.button 
                      onClick={togglePlay}
                      className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </motion.button>
                    
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-xs">{formatTime(currentTime)}</span>
                      <span className="text-white/50">/</span>
                      <span className="text-xs">{formatTime(duration)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 relative">
                      <motion.button 
                        onClick={toggleMute}
                        className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                      </motion.button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-24 accent-gold h-1 cursor-pointer appearance-none bg-white/20 rounded-full hidden md:block"
                      />
                    </div>
                    
                    <div className="relative">
                      <motion.button 
                        onClick={() => setShowSettings(!showSettings)}
                        className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                      
                      {showSettings && (
                        <motion.div 
                          className="absolute bottom-full right-0 mb-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-30"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2 text-white text-sm">
                            <div className="mb-3">
                              <p className="text-white/70 mb-1 px-2">Quality</p>
                              <div className="flex gap-1">
                                {['720p', '1080p', '480p'].map((q) => (
                                  <button 
                                    key={q}
                                    onClick={() => setQuality(q)}
                                    className={`px-2 py-1 rounded ${quality === q ? 'bg-dark-blue' : 'hover:bg-white/10'}`}
                                  >
                                    {q}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-white/70 mb-1 px-2">Playback Speed</p>
                              <div className="flex flex-wrap gap-1">
                                {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                                  <button 
                                    key={rate}
                                    onClick={() => changePlaybackRate(rate)}
                                    className={`px-2 py-1 rounded ${playbackRate === rate ? 'bg-dark-blue' : 'hover:bg-white/10'}`}
                                  >
                                    {rate === 1 ? 'Normal' : `${rate}x`}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    <motion.button 
                      onClick={toggleFullscreen}
                      className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExpand />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Student Notes Component
const StudentNotes = ({ courseId }: { courseId: string }) => {
  const [notes, setNotes] = useState<{id: string, text: string, timestamp: string, moduleId?: string}[]>([]);
  const [newNote, setNewNote] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  // Load existing notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem(`course_notes_${courseId}`);
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error('Error loading saved notes:', e);
      }
    }
  }, [courseId]);
  
  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem(`course_notes_${courseId}`, JSON.stringify(notes));
    }
  }, [notes, courseId]);
  
  const addNote = () => {
    if (newNote.trim()) {
      const newNoteObj = {
        id: Date.now().toString(),
        text: newNote.trim(),
        timestamp: new Date().toISOString(),
      };
      setNotes([newNoteObj, ...notes]);
      setNewNote('');
    }
  };
  
  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (notes.length <= 1) {
      localStorage.removeItem(`course_notes_${courseId}`);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark-blue text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors"
      >
        <FaBook className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        {!isOpen && notes.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {notes.length}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-3 bg-dark-blue text-white flex justify-between items-center">
            <h3 className="font-medium">My Course Notes</h3>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <FaTimes />
            </button>
          </div>
          
          <div className="p-3">
            <div className="flex">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a new note..."
                className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-dark-blue"
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
              />
              <button
                onClick={addNote}
                className="bg-dark-blue text-white px-3 rounded-r-md hover:bg-opacity-90"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="max-h-80 overflow-y-auto border-t border-gray-200">
            {notes.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {notes.map(note => (
                  <div key={note.id} className="p-3 hover:bg-light-gray">
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-gray whitespace-pre-wrap break-words">{note.text}</p>
                      <button 
                        onClick={() => deleteNote(note.id)}
                        className="text-gray ml-2 hover:text-red-500 text-xs"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <p className="text-xs text-gray mt-1">{formatDate(note.timestamp)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray">
                <p>No notes yet. Start taking notes as you learn!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Quiz Component
const PracticeQuiz = ({ quiz }: { quiz: any }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    quiz.questions.forEach((question: any) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return {
      score: correctCount,
      total: quiz.questions.length,
      percentage: Math.round((correctCount / quiz.questions.length) * 100)
    };
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };
  
  return (
    <>
      <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer" onClick={() => setShowQuiz(true)}>
        <h3 className="font-bold text-dark-blue text-lg mb-2">{quiz.title}</h3>
        <p className="text-gray text-sm mb-3">{quiz.description}</p>
        <p className="text-sm">
          <span className="text-dark-blue font-medium">{quiz.questions.length} questions</span>
          <span className="mx-2">•</span>
          <span className="text-gray">Practice Quiz</span>
        </p>
      </div>
      
      {showQuiz && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-gray-200 p-4">
              <h3 className="text-xl font-bold text-dark-blue">{quiz.title}</h3>
              <button onClick={() => setShowQuiz(false)} className="text-gray hover:text-dark-blue">
                <FaTimes />
              </button>
            </div>
            
            <div className="p-6">
              {!showResults ? (
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray">Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                      <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-dark-blue h-full" 
                          style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium text-dark-blue mb-4">{currentQuestion.text}</h4>
                    
                    <div className="space-y-3 mb-6">
                      {currentQuestion.options.map((option: any, index: number) => (
                        <label 
                          key={option.id} 
                          className={`block border rounded-md p-3 cursor-pointer transition-colors ${
                            selectedAnswers[currentQuestion.id] === option.id 
                              ? 'border-dark-blue bg-dark-blue/5' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name={`question-${currentQuestion.id}`}
                              value={option.id}
                              checked={selectedAnswers[currentQuestion.id] === option.id}
                              onChange={() => handleAnswerSelect(currentQuestion.id, option.id)}
                              className="mr-3"
                            />
                            <span>{option.text}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestionIndex === 0}
                      className={`px-4 py-2 rounded-md border ${
                        currentQuestionIndex === 0
                          ? 'border-gray-200 text-gray cursor-not-allowed'
                          : 'border-dark-blue text-dark-blue hover:bg-dark-blue/5'
                      }`}
                    >
                      Previous
                    </button>
                    
                    <button
                      onClick={handleNext}
                      disabled={!selectedAnswers[currentQuestion.id]}
                      className={`px-4 py-2 rounded-md ${
                        !selectedAnswers[currentQuestion.id]
                          ? 'bg-gray-200 text-gray cursor-not-allowed'
                          : 'bg-dark-blue text-white hover:bg-opacity-90'
                      }`}
                    >
                      {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish Quiz'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-dark-blue mb-2">Quiz Results</h4>
                    <div className="mb-4">
                      <div className="inline-block w-24 h-24 rounded-full border-8 border-dark-blue flex items-center justify-center">
                        <span className="text-2xl font-bold text-dark-blue">{calculateScore().percentage}%</span>
                      </div>
                    </div>
                    <p className="text-lg">
                      You got <span className="font-bold text-dark-blue">{calculateScore().score}</span> out of <span className="font-bold text-dark-blue">{calculateScore().total}</span> questions correct!
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="font-bold text-dark-blue mb-4 text-left">Review Questions</h4>
                    <div className="space-y-6 text-left mb-6">
                      {quiz.questions.map((question: any, index: number) => (
                        <div key={question.id} className="border border-gray-200 rounded-md p-4">
                          <p className="font-medium text-dark-blue mb-2">
                            {index + 1}. {question.text}
                          </p>
                          <p className="text-sm mb-2">
                            Your answer: 
                            <span className={`font-medium ml-1 ${
                              selectedAnswers[question.id] === question.correctAnswer 
                                ? 'text-green-600' 
                                : 'text-red-600'
                            }`}>
                              {question.options.find((o: any) => o.id === selectedAnswers[question.id])?.text || 'Not answered'}
                            </span>
                          </p>
                          <p className="text-sm mb-2">
                            Correct answer: 
                            <span className="font-medium text-green-600 ml-1">
                              {question.options.find((o: any) => o.id === question.correctAnswer)?.text}
                            </span>
                          </p>
                          <p className="text-sm text-gray italic">{question.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="px-4 py-2 rounded-md border border-dark-blue text-dark-blue hover:bg-dark-blue/5"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={() => setShowQuiz(false)}
                      className="px-4 py-2 rounded-md bg-dark-blue text-white hover:bg-opacity-90"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Accessibility Menu Component
const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  
  // Apply accessibility settings when they change
  useEffect(() => {
    // Apply font size
    document.documentElement.style.setProperty('--accessibility-font-scale', fontSize.toString());
    
    // Apply high contrast mode
    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
    
    // Apply reduced motion
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
    
    // Apply dyslexic-friendly font
    if (dyslexicFont) {
      document.body.classList.add('dyslexic-font');
    } else {
      document.body.classList.remove('dyslexic-font');
    }
    
    // Save preferences to localStorage
    const preferences = { fontSize, highContrast, reducedMotion, dyslexicFont };
    localStorage.setItem('accessibility_preferences', JSON.stringify(preferences));
  }, [fontSize, highContrast, reducedMotion, dyslexicFont]);
  
  // Load saved preferences on component mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('accessibility_preferences');
    if (savedPreferences) {
      try {
        const { fontSize, highContrast, reducedMotion, dyslexicFont } = JSON.parse(savedPreferences);
        setFontSize(fontSize || 1);
        setHighContrast(highContrast || false);
        setReducedMotion(reducedMotion || false);
        setDyslexicFont(dyslexicFont || false);
      } catch (e) {
        console.error('Error loading accessibility preferences:', e);
      }
    }
  }, []);
  
  // Add a style tag to the document to set CSS variables
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      :root {
        --accessibility-font-scale: 1;
      }
      
      body {
        font-size: calc(1rem * var(--accessibility-font-scale));
      }
      
      .high-contrast-mode {
        filter: contrast(1.5);
        background-color: #000 !important;
        color: #fff !important;
      }
      
      .high-contrast-mode a, .high-contrast-mode button {
        color: #ffff00 !important;
      }
      
      .reduced-motion * {
        transition: none !important;
        animation: none !important;
      }
      
      .dyslexic-font {
        font-family: "Comic Sans MS", "Comic Sans", cursive !important;
        letter-spacing: 0.05em;
        word-spacing: 0.1em;
        line-height: 1.5;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark-blue text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors"
        aria-label="Accessibility Menu"
        title="Accessibility Options"
      >
        <FaUniversalAccess />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-14 left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-3 bg-dark-blue text-white flex justify-between items-center">
            <h3 className="font-medium">Accessibility Options</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white"
              aria-label="Close accessibility menu"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="flex items-center text-dark-blue">
                  <FaFont className="mr-2" />
                  <span>Text Size</span>
                </label>
                <div className="flex items-center">
                  <button 
                    onClick={() => setFontSize(Math.max(0.8, fontSize - 0.1))}
                    className="w-8 h-8 bg-light-gray rounded-l-md flex items-center justify-center hover:bg-gray-300"
                    disabled={fontSize <= 0.8}
                    aria-label="Decrease text size"
                  >
                    -
                  </button>
                  <span className="w-8 h-8 bg-light-gray flex items-center justify-center border-x border-white">
                    {Math.round(fontSize * 100)}%
                  </span>
                  <button 
                    onClick={() => setFontSize(Math.min(1.5, fontSize + 0.1))}
                    className="w-8 h-8 bg-light-gray rounded-r-md flex items-center justify-center hover:bg-gray-300"
                    disabled={fontSize >= 1.5}
                    aria-label="Increase text size"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center text-dark-blue">
                <FaAdjust className="mr-2" />
                <span>High Contrast</span>
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={highContrast}
                  onChange={() => setHighContrast(!highContrast)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-blue"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center text-dark-blue">
                <FaMousePointer className="mr-2" />
                <span>Reduce Motion</span>
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={reducedMotion}
                  onChange={() => setReducedMotion(!reducedMotion)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-blue"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center text-dark-blue">
                <FaFont className="mr-2" />
                <span>Dyslexia-Friendly Font</span>
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={dyslexicFont}
                  onChange={() => setDyslexicFont(!dyslexicFont)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-blue"></div>
              </label>
            </div>
            
            <button 
              onClick={() => {
                setFontSize(1);
                setHighContrast(false);
                setReducedMotion(false);
                setDyslexicFont(false);
              }}
              className="w-full mt-4 p-2 bg-light-gray rounded-md hover:bg-gray-300 text-dark-blue"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Live Support Chat Component
const LiveSupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'support', text: string, timestamp: Date}[]>([
    {
      sender: 'support',
      text: 'Hello! How can I help you with your course today?',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-responses for demo purposes - in a real app, this would be connected to a real support system
  const automatedResponses: string[] = [
    "That's a great question! The next module will cover that topic in detail.",
    "I'd recommend checking the resources tab for additional materials on this subject.",
    "Many students have found the practice quizzes helpful for reinforcing those concepts.",
    "Let me connect you with an instructor who can provide more specialized guidance on this topic.",
    "Have you tried the hands-on exercises in module 3? They specifically address this challenge.",
    "You're making excellent progress! Keep up the good work."
  ];
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      sender: 'user' as const,
      text: newMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate support agent typing
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      // Generate random support response
      const responseIndex = Math.floor(Math.random() * automatedResponses.length);
      const supportMessage = {
        sender: 'support' as const,
        text: automatedResponses[responseIndex],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1500);
  };
  
  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);
  
  // Format timestamps
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gold text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors"
        aria-label="Live Support Chat"
      >
        <FaComments />
        {!isOpen && (
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 top-0 right-0"></span>
        )}
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-dark-blue text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-2">
                <FaRobot className="text-white" />
              </div>
              <div>
                <h3 className="font-medium">Course Support</h3>
                <span className="text-xs flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <FaTimes />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg: {sender: 'user' | 'support', text: string, timestamp: Date}, index: number) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'support' && (
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-2 flex-shrink-0">
                      <FaRobot className="text-white" />
                    </div>
                  )}
                  
                  <div 
                    className={`rounded-lg py-2 px-3 max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-dark-blue text-white rounded-tr-none' 
                        : 'bg-gray-200 text-gray-700 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-75 block text-right mt-1">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                  
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 flex-shrink-0">
                      <FaUserCircle className="text-gray-500" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-2 flex-shrink-0">
                    <FaRobot className="text-white" />
                  </div>
                  <div className="bg-gray-200 text-gray-700 rounded-lg rounded-tl-none py-2 px-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200">
            <form 
              className="flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-dark-blue"
              />
              <button
                type="submit"
                className="bg-dark-blue text-white p-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                disabled={!newMessage.trim()}
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Personalized Learning Path Component
const PersonalizedLearningPath = ({ courseId }: { courseId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [learningStyle, setLearningStyle] = useState<string | null>(null);
  const [completedAssessment, setCompletedAssessment] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
  const [recommendedPath, setRecommendedPath] = useState<{
    type: string;
    description: string;
    modules: {title: string; description: string; locked?: boolean}[];
  } | null>(null);
  
  // Assessment questions
  const assessmentQuestions = [
    {
      id: 'q1',
      text: 'How do you prefer to learn new information?',
      options: [
        { id: 'a', text: 'By reading detailed explanations and theory' },
        { id: 'b', text: 'By watching demonstrations and videos' },
        { id: 'c', text: 'By doing hands-on exercises and practice' },
        { id: 'd', text: 'By discussing and explaining concepts to others' }
      ]
    },
    {
      id: 'q2',
      text: 'What is your primary goal for taking this course?',
      options: [
        { id: 'a', text: 'To gain academic knowledge and theory' },
        { id: 'b', text: 'To develop practical skills for my current job' },
        { id: 'c', text: 'To prepare for a career change or advancement' },
        { id: 'd', text: 'Personal interest and growth' }
      ]
    },
    {
      id: 'q3',
      text: 'How much time can you dedicate to this course each week?',
      options: [
        { id: 'a', text: 'Less than 3 hours' },
        { id: 'b', text: '3-5 hours' },
        { id: 'c', text: '5-10 hours' },
        { id: 'd', text: 'More than 10 hours' }
      ]
    },
    {
      id: 'q4',
      text: 'How do you prefer to approach complex problems?',
      options: [
        { id: 'a', text: 'Break them down into smaller, manageable parts' },
        { id: 'b', text: 'Look for patterns and connections to things I already know' },
        { id: 'c', text: 'Collaborate with others to discuss solutions' },
        { id: 'd', text: 'Experiment with different approaches until something works' }
      ]
    }
  ];
  
  // Learning paths based on assessment
  const learningPaths = {
    theoretical: {
      type: 'Theoretical Explorer',
      description: 'You learn best through deep understanding of concepts and theory. Your custom path emphasizes comprehensive explanations and academic resources.',
      modules: [
        { title: 'Foundational Concepts', description: 'Deep dive into core principles and academic frameworks' },
        { title: 'Theoretical Applications', description: 'Explore real-world applications of theoretical models' },
        { title: 'Advanced Analysis', description: 'Develop critical thinking through comprehensive case studies' },
        { title: 'Research Methods', description: 'Learn how to conduct and analyze research in the field', locked: true },
        { title: 'Theoretical Integration', description: 'Connect concepts across different domains and perspectives', locked: true }
      ]
    },
    visual: {
      type: 'Visual Learner',
      description: 'You absorb information most effectively through visual demonstrations. Your path features enhanced video content and visual learning materials.',
      modules: [
        { title: 'Visual Fundamentals', description: 'Learn core concepts through engaging visual presentations' },
        { title: 'Demonstration Workshop', description: 'Watch expert demonstrations of key techniques' },
        { title: 'Visual Problem-Solving', description: 'Develop skills through diagramming and visual mapping' },
        { title: 'Video Case Studies', description: 'Analyze real-world examples through video case studies', locked: true },
        { title: 'Visual Project Development', description: 'Create your own visual demonstrations and presentations', locked: true }
      ]
    },
    practical: {
      type: 'Hands-on Practitioner',
      description: 'You thrive when actively working on tasks and exercises. Your path emphasizes practical applications and project-based learning.',
      modules: [
        { title: 'Quick-Start Essentials', description: 'Rapidly build practical skills through hands-on exercises' },
        { title: 'Applied Techniques Workshop', description: 'Practice core techniques with guided projects' },
        { title: 'Real-world Problem Solving', description: 'Apply knowledge to authentic challenges from the field' },
        { title: 'Advanced Implementation', description: 'Develop complex solutions for challenging scenarios', locked: true },
        { title: 'Portfolio Project', description: 'Create a comprehensive showcase of your applied skills', locked: true }
      ]
    },
    collaborative: {
      type: 'Interactive Collaborator',
      description: 'You learn best through discussion and peer interaction. Your path includes collaborative activities and community engagement.',
      modules: [
        { title: 'Discussion Fundamentals', description: 'Explore core concepts through guided discussions' },
        { title: 'Peer Learning Labs', description: 'Collaborate with peers on interactive exercises' },
        { title: 'Group Problem-Solving', description: 'Tackle complex problems in team-based scenarios' },
        { title: 'Community Project', description: 'Work with a team on a comprehensive project', locked: true },
        { title: 'Leadership Workshop', description: 'Develop facilitation and collaborative leadership skills', locked: true }
      ]
    }
  };
  
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId
    });
  };
  
  const handleSubmitAssessment = () => {
    // Count the frequency of each answer type
    const answerCounts = Object.values(selectedAnswers).reduce((counts: {[key: string]: number}, answer: string) => {
      counts[answer] = (counts[answer] || 0) + 1;
      return counts;
    }, {} as {[key: string]: number});
    
    // Determine the most frequent answer
    let maxCount = 0;
    let dominantStyle = 'a';
    
    for (const [answer, count] of Object.entries(answerCounts)) {
      if (count > maxCount) {
        maxCount = count;
        dominantStyle = answer;
      }
    }
    
    // Map answer to learning style
    let style;
    switch (dominantStyle) {
      case 'a': style = 'theoretical'; break;
      case 'b': style = 'visual'; break;
      case 'c': style = 'practical'; break;
      case 'd': style = 'collaborative'; break;
      default: style = 'practical';
    }
    
    setLearningStyle(style);
    setRecommendedPath(learningPaths[style as keyof typeof learningPaths]);
    setCompletedAssessment(true);
    
    // Save to localStorage
    localStorage.setItem(`learning_style_${courseId}`, style);
  };
  
  // Load saved learning style on mount
  useEffect(() => {
    const savedStyle = localStorage.getItem(`learning_style_${courseId}`);
    if (savedStyle) {
      setLearningStyle(savedStyle);
      setRecommendedPath(learningPaths[savedStyle as keyof typeof learningPaths]);
      setCompletedAssessment(true);
    }
  }, [courseId]);
  
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-dark-blue text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center">
          <FaRoad className="mr-2" /> 
          Personalized Learning Path
        </h2>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-gold"
        >
          {isOpen ? <FaTimes /> : <FaLightbulb />}
        </button>
      </div>
      
      {isOpen && (
        <div className="p-6">
          {!completedAssessment ? (
            <div>
              <p className="text-dark-blue mb-6">
                Take this quick assessment to discover your optimal learning path.
                We'll customize your course experience based on your learning preferences.
              </p>
              
              <div className="space-y-6 mb-6">
                {assessmentQuestions.map((question: any, index: number) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-dark-blue mb-3">
                      {index + 1}. {question.text}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option: any) => (
                        <label 
                          key={option.id}
                          className={`block border rounded-md p-3 cursor-pointer transition-colors ${
                            selectedAnswers[question.id] === option.id 
                              ? 'border-dark-blue bg-dark-blue/5' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option.id}
                              checked={selectedAnswers[question.id] === option.id}
                              onChange={() => handleAnswerSelect(question.id, option.id)}
                              className="mr-3"
                            />
                            <span>{option.text}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleSubmitAssessment}
                disabled={Object.keys(selectedAnswers).length < assessmentQuestions.length}
                className={`w-full py-3 rounded-md ${
                  Object.keys(selectedAnswers).length < assessmentQuestions.length
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-dark-blue text-white hover:bg-opacity-90'
                }`}
              >
                Generate My Learning Path
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center mb-6">
                <div className="inline-block w-20 h-20 rounded-full bg-gold/10 p-4 mb-4">
                  <FaUserGraduate className="w-full h-full text-gold" />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-1">
                  Your Learning Style: {recommendedPath?.type}
                </h3>
                <p className="text-gray">
                  {recommendedPath?.description}
                </p>
              </div>
              
              <h4 className="font-bold text-dark-blue mb-4">Your Recommended Learning Path:</h4>
              <div className="space-y-4 mb-6">
                {recommendedPath?.modules.map((module: any, index: number) => (
                  <div 
                    key={index} 
                    className={`border rounded-lg p-4 ${module.locked ? 'border-gray-200 opacity-70' : 'border-gold/50'}`}
                  >
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-gold text-gold font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-bold text-dark-blue flex items-center">
                          {module.title}
                          {module.locked && <FaLock className="ml-2 text-gray-400 text-sm" />}
                        </h5>
                        <p className="text-sm text-gray">{module.description}</p>
                      </div>
                      {!module.locked && (
                        <div className="ml-2">
                          <FaTrophy className="text-gold" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setCompletedAssessment(false);
                    setSelectedAnswers({});
                    setLearningStyle(null);
                    setRecommendedPath(null);
                    localStorage.removeItem(`learning_style_${courseId}`);
                  }}
                  className="flex-1 py-2 border border-dark-blue text-dark-blue rounded-md hover:bg-dark-blue/5"
                >
                  Retake Assessment
                </button>
                <button className="flex-1 py-2 bg-dark-blue text-white rounded-md hover:bg-opacity-90">
                  Start This Path
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Course Analytics Dashboard Component
const CourseAnalyticsDashboard = ({ courseId }: { courseId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('progress');
  
  // Mock analytics data - in a real app, this would come from an API
  const analyticsData = {
    progress: {
      completion: 68,
      moduleBreakdown: [
        { name: 'Module 1', completed: 100 },
        { name: 'Module 2', completed: 100 },
        { name: 'Module 3', completed: 85 },
        { name: 'Module 4', completed: 50 },
        { name: 'Module 5', completed: 15 },
        { name: 'Module 6', completed: 0 },
      ],
      averageScore: 87,
      timeSpent: '28h 45m',
      lastActivity: '2 days ago'
    },
    performance: {
      quizScores: [
        { name: 'Quiz 1', score: 92 },
        { name: 'Quiz 2', score: 83 },
        { name: 'Quiz 3', score: 76 },
        { name: 'Quiz 4', score: 95 },
      ],
      assignmentGrades: [
        { name: 'Assignment 1', score: 90 },
        { name: 'Assignment 2', score: 85 },
        { name: 'Assignment 3', score: 88 },
      ],
      strengths: ['Data Analysis', 'Problem Solving'],
      areasForImprovement: ['Statistical Concepts', 'Data Visualization']
    },
    engagement: {
      streakDays: 14,
      activeDaysLastMonth: 18,
      discussionPosts: 7,
      peersHelped: 3,
      resourcesDownloaded: 12,
      videosWatched: 24,
      averageSessionLength: '45 minutes'
    },
    schedule: [
      { date: '2023-12-12', type: 'deadline', title: 'Assignment 4 Due', time: '11:59 PM' },
      { date: '2023-12-14', type: 'live', title: 'Live Q&A Session', time: '2:00 PM' },
      { date: '2023-12-18', type: 'exam', title: 'Module 5 Assessment', time: 'Any time' },
      { date: '2023-12-21', type: 'milestone', title: 'Course Halfway Point', time: '' },
      { date: '2024-01-10', type: 'deadline', title: 'Final Project Submission', time: '11:59 PM' },
    ]
  };
  
  // Format date for schedule
  const formatScheduleDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Get icon for schedule item
  const getScheduleIcon = (type: string) => {
    switch(type) {
      case 'deadline': return <FaRegClock className="text-red-500" />;
      case 'live': return <FaVideo className="text-blue-500" />;
      case 'exam': return <FaChartBar className="text-purple-500" />;
      case 'milestone': return <FaFlag className="text-green-500" />;
      default: return <FaRegCalendarAlt className="text-gray-500" />;
    }
  };

  const getProgressColor = (percent: number) => {
    if (percent < 30) return 'bg-red-500';
    if (percent < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-dark-blue text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center">
          <FaChartLine className="mr-2" /> 
          Your Course Analytics
        </h2>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-gold"
        >
          {isOpen ? <FaTimes /> : <FaChartBar />}
        </button>
      </div>
      
      {isOpen && (
        <div>
          {/* Dashboard Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'progress', label: 'Progress', icon: <FaChartLine /> },
                { id: 'performance', label: 'Performance', icon: <FaChartBar /> },
                { id: 'engagement', label: 'Engagement', icon: <FaFire /> },
                { id: 'schedule', label: 'Schedule', icon: <FaCalendarCheck /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'border-b-2 border-dark-blue text-dark-blue' 
                      : 'text-gray hover:text-dark-blue'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            {/* Progress Tab */}
            {activeTab === 'progress' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray text-sm">Completion</h3>
                      <span className="text-lg font-bold text-dark-blue">{analyticsData.progress.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${getProgressColor(analyticsData.progress.completion)}`} 
                        style={{ width: `${analyticsData.progress.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray text-sm">Average Quiz Score</h3>
                      <span className="text-lg font-bold text-dark-blue">{analyticsData.progress.averageScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${getProgressColor(analyticsData.progress.averageScore)}`} 
                        style={{ width: `${analyticsData.progress.averageScore}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-gray text-sm mb-1">Time Spent</h3>
                    <div className="flex items-center">
                      <FaRegClock className="text-gold mr-2" />
                      <span className="text-lg font-bold text-dark-blue">{analyticsData.progress.timeSpent}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-gray text-sm mb-1">Last Activity</h3>
                    <div className="flex items-center">
                      <FaRegCalendarAlt className="text-gold mr-2" />
                      <span className="text-lg font-bold text-dark-blue">{analyticsData.progress.lastActivity}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-dark-blue font-bold mb-4">Module Completion</h3>
                <div className="space-y-4 mb-4">
                  {analyticsData.progress.moduleBreakdown.map((module, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray">{module.name}</span>
                        <span className="font-medium text-dark-blue">{module.completed}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(module.completed)}`}
                          style={{ width: `${module.completed}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8">
                  <Link 
                    href="#" 
                    className="text-dark-blue hover:text-gold flex items-center"
                  >
                    <FaRegLightbulb className="mr-2" />
                    <span>View detailed progress report</span>
                  </Link>
                </div>
              </div>
            )}
            
            {/* Performance Tab */}
            {activeTab === 'performance' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-dark-blue font-bold mb-4">Quiz Scores</h3>
                    <div className="space-y-4">
                      {analyticsData.performance.quizScores.map((quiz, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray">{quiz.name}</span>
                            <span className={`font-medium ${quiz.score >= 80 ? 'text-green-600' : quiz.score >= 70 ? 'text-yellow-600' : 'text-red-500'}`}>
                              {quiz.score}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                quiz.score >= 80 ? 'bg-green-500' : quiz.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${quiz.score}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-dark-blue font-bold mb-4">Assignment Grades</h3>
                    <div className="space-y-4">
                      {analyticsData.performance.assignmentGrades.map((assignment, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray">{assignment.name}</span>
                            <span className={`font-medium ${assignment.score >= 80 ? 'text-green-600' : assignment.score >= 70 ? 'text-yellow-600' : 'text-red-500'}`}>
                              {assignment.score}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                assignment.score >= 80 ? 'bg-green-500' : assignment.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${assignment.score}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-dark-blue font-bold mb-4">Your Strengths</h3>
                    <ul className="space-y-2">
                      {analyticsData.performance.strengths.map((strength, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-dark-blue font-bold mb-4">Areas for Improvement</h3>
                    <ul className="space-y-2">
                      {analyticsData.performance.areasForImprovement.map((area, index) => (
                        <li key={index} className="flex items-start">
                          <FaRegLightbulb className="text-gold mr-2 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link 
                        href="#" 
                        className="text-dark-blue hover:text-gold text-sm flex items-center"
                      >
                        <FaBook className="mr-2" />
                        <span>View recommended resources for these areas</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Engagement Tab */}
            {activeTab === 'engagement' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-dark-blue to-blue-700 text-white rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold mb-2">{analyticsData.engagement.streakDays}</div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-3 h-10 mx-1 rounded-t-full ${i < Math.min(5, analyticsData.engagement.streakDays / 3) ? 'bg-gold' : 'bg-white/20'}`}
                          style={{ height: `${20 + i * 5}px` }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm">Day Streak</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-dark-blue mb-2">{analyticsData.engagement.activeDaysLastMonth}</div>
                    <p className="text-sm text-gray">Active Days This Month</p>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                      <div 
                        className="h-2 bg-dark-blue rounded-full" 
                        style={{ width: `${(analyticsData.engagement.activeDaysLastMonth / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                    <div className="text-xl font-bold text-dark-blue mb-2">{analyticsData.engagement.averageSessionLength}</div>
                    <p className="text-sm text-gray">Avg. Session Length</p>
                    <div className="mt-4">
                      <FaRegClock className="text-4xl text-gold" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <FaComments className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-dark-blue">{analyticsData.engagement.discussionPosts}</div>
                      <p className="text-sm text-gray">Discussion Posts</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <FaUserFriends className="text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-dark-blue">{analyticsData.engagement.peersHelped}</div>
                      <p className="text-sm text-gray">Peers Helped</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <FaDownload className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-dark-blue">{analyticsData.engagement.resourcesDownloaded}</div>
                      <p className="text-sm text-gray">Resources Downloaded</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FaVideo className="text-red-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-dark-blue">{analyticsData.engagement.videosWatched}</div>
                      <p className="text-sm text-gray">Videos Watched</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-dark-blue font-bold mb-4">Engagement Tips</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3">
                        <FaRegLightbulb className="text-gold" />
                      </div>
                      <div>
                        <p className="text-dark-blue font-medium">Participate in discussions</p>
                        <p className="text-sm text-gray">Engaging with peers can improve knowledge retention by up to 30%.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3">
                        <FaRegClock className="text-gold" />
                      </div>
                      <div>
                        <p className="text-dark-blue font-medium">Study consistently</p>
                        <p className="text-sm text-gray">Regular sessions of 30-45 minutes are more effective than cramming.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3">
                        <FaRegStickyNote className="text-gold" />
                      </div>
                      <div>
                        <p className="text-dark-blue font-medium">Take notes while learning</p>
                        <p className="text-sm text-gray">Students who take notes retain 40% more information.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div>
                <h3 className="text-dark-blue font-bold mb-4">Upcoming Deadlines & Events</h3>
                <div className="space-y-4 mb-8">
                  {analyticsData.schedule.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                      <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-center min-w-[60px]">
                        <div className="text-sm text-gray-500">{formatScheduleDate(item.date).split(' ')[0]}</div>
                        <div className="text-xl font-bold text-dark-blue">{formatScheduleDate(item.date).split(' ')[1]}</div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-1">
                          <span className="mr-2">
                            {getScheduleIcon(item.type)}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            item.type === 'deadline' ? 'bg-red-100 text-red-700' :
                            item.type === 'live' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'exam' ? 'bg-purple-100 text-purple-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        </div>
                        <h4 className="font-medium text-dark-blue">{item.title}</h4>
                        {item.time && <p className="text-sm text-gray">{item.time}</p>}
                      </div>
                      <div>
                        <button className="text-dark-blue hover:text-gold">
                          <FaRegCalendarAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="text-dark-blue hover:text-gold flex items-center"
                  >
                    <FaCalendarAlt className="mr-2" />
                    <span>Add to calendar</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.id;
  
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [selectedTab, setSelectedTab] = useState('overview');
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [certificatePreviewOpen, setCertificatePreviewOpen] = useState(false);
  const [videoPreviewOpen, setVideoPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [courseProgress, setCourseProgress] = useState(30); // Mock progress - would come from user data
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);
  const [supportChatOpen, setSupportChatOpen] = useState(false);
  const [learningPathOpen, setLearningPathOpen] = useState(false);
  const [analyticsDashboardOpen, setAnalyticsDashboardOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [relatedCourses, setRelatedCourses] = useState<any[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [course, setCourse] = useState<any>(null);

  // Intersection observer for parallax effects
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Find the course by ID
  useEffect(() => {
    const fetchedCourse = COURSES.find(c => c.id === courseId);
    
    if (fetchedCourse) {
      setCourse(fetchedCourse);
      setLoading(false);
      
      // Get related courses if available
      if (fetchedCourse.relatedCourses) {
        setRelatedCourses(getRelatedCourses(fetchedCourse.relatedCourses));
      }
      
      // Simulate checking if user is enrolled
      // In a real app, this would come from an API call
      const mockEnrollmentCheck = Math.random() > 0.5;
      setIsEnrolled(mockEnrollmentCheck);
    } else {
      // Course not found
      setLoading(false);
    }
  }, [courseId]);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        if (heroBottom < 0) {
          setShowFloatingBar(true);
        } else {
          setShowFloatingBar(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Simulate completing a course module to increase progress
  const completeModule = () => {
    if (courseProgress < 100) {
      const newProgress = Math.min(courseProgress + 10, 100);
      setCourseProgress(newProgress);
      
      if (newProgress === 100) {
        alert('Congratulations! You have completed the course!');
      }
    }
  };
  
  // Toggle wishlist status
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // In a real app, this would call an API to update the user's wishlist
    if (!isWishlisted) {
      alert('Course added to your wishlist!');
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-light-gray to-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-dark-blue border-r-transparent relative">
            <div className="absolute inset-0 rounded-full blur-md opacity-30 bg-dark-blue"></div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-dark-blue font-medium"
          >
            {t('loading_course')}
          </motion.p>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-light-gray to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
              <FaTimes className="text-red-500 text-4xl" />
            </div>
            <h1 className="text-2xl font-bold text-dark-blue mb-4">{t('course_not_found')}</h1>
            <p className="text-gray mb-6">{t('course_not_exist')}</p>
            <Link 
              href="/courses"
              className="bg-gradient-to-r from-dark-blue to-blue-600 text-white py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 inline-block"
            >
              Browse All Courses
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }
  
  // ... [rest of the original file content remains unchanged]
} 