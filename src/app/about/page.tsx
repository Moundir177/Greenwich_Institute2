"use client";

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft, FaUsers, FaGlobe, FaUniversity, FaBook, FaChalkboardTeacher, FaUserGraduate, FaAward, FaMedal, FaArrowRight, FaShieldAlt, FaFileInvoiceDollar } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import OurCredibility from '../components/OurCredibility';

// Interfaces for typed data
interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise?: string[];
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Value {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  examples?: string[];
}

// Sample team data
const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Jonathan Hughes',
    title: 'President & CEO',
    image: '/images/team/president.jpg',
    bio: 'Dr. Hughes has over 25 years of experience in higher education and previously served as Dean of Business at Oxford University. He holds a PhD in Educational Leadership and has published numerous research papers on global education standards. His vision for Greenwich HSTC focuses on bridging traditional academic excellence with innovative learning approaches.',
    expertise: ['Educational Leadership', 'International Education Standards', 'Strategic Planning']
  },
  {
    id: 2,
    name: 'Prof. Maria Rodriguez',
    title: 'Academic Director',
    image: '/images/team/academic-director.jpg',
    bio: 'Prof. Rodriguez leads our academic programs with her extensive background in curriculum development and educational innovation. With over 20 years in academia, she has pioneered several groundbreaking educational methodologies that have been adopted by leading institutions worldwide. Her commitment to pedagogical excellence ensures our programs remain at the cutting edge of educational practices.',
    expertise: ['Curriculum Development', 'Pedagogical Innovation', 'Assessment Design']
  },
  {
    id: 3,
    name: 'Dr. David Chen',
    title: 'Director of Technology',
    image: '/images/team/tech-director.jpg',
    bio: 'Dr. Chen oversees our technology infrastructure and digital learning initiatives, bringing 15 years of EdTech experience. His previous work at MIT and Silicon Valley startups has given him unique insights into how technology can transform educational experiences. Under his leadership, Greenwich HSTC has developed state-of-the-art digital learning platforms that combine AI-driven personalization with human-centered teaching approaches.',
    expertise: ['Educational Technology', 'AI in Education', 'Digital Learning Platforms']
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    title: 'Chief Operating Officer',
    image: '/images/team/coo.jpg',
    bio: 'Sarah ensures the efficient operation of all institute functions with her background in organizational management. Her expertise in operational excellence has helped Greenwich HSTC achieve unprecedented growth while maintaining the highest quality standards. Previously, she held executive positions at multinational education companies, bringing global best practices to our operations. Her focus on student experience has resulted in consistent excellence in satisfaction ratings.',
    expertise: ['Operational Excellence', 'Organizational Development', 'Student Experience Management']
  },
  {
    id: 5,
    name: 'Dr. Amina Ndiaye',
    title: 'Director of International Programs',
    image: '/images/team/international-director.jpg',
    bio: 'Dr. Ndiaye manages our global partnerships and international student programs with distinction. With experience spanning four continents and fluency in five languages, she brings a truly global perspective to Greenwich HSTC. Her doctoral research on cross-cultural educational practices informs our approach to creating inclusive learning environments for students from diverse backgrounds.',
    expertise: ['Global Education Partnerships', 'Cross-Cultural Teaching', 'International Student Support']
  },
  {
    id: 6,
    name: 'Prof. James Wilson',
    title: 'Research Director',
    image: '/images/team/research-director.jpg',
    bio: 'Prof. Wilson leads our research initiatives, connecting academic exploration with practical applications. His work has been recognized with multiple awards and grants from prestigious organizations. Under his guidance, Greenwich HSTC has established research centers focusing on future-oriented educational approaches and workforce development strategies that respond to emerging global challenges.',
    expertise: ['Educational Research', 'Future of Work Studies', 'Research Grant Management']
  }
];

// Sample timeline data
const HISTORY_TIMELINE: TimelineEvent[] = [
  {
    year: '2005',
    title: 'Foundation',
    description: 'Greenwich was founded with a mission to provide world-class education accessible to students worldwide.',
  },
  {
    year: '2008',
    title: 'First International Campus',
    description: 'Expanded with our first international campus, establishing a global presence in education.',
  },
  {
    year: '2012',
    title: 'Online Learning Launch',
    description: 'Pioneered our digital learning platform, bringing quality education to remote students around the world.',
  },
  {
    year: '2016',
    title: 'Industry Partnerships',
    description: 'Formed strategic partnerships with leading global companies to enhance our career-focused curriculum.',
  },
  {
    year: '2020',
    title: 'Global Recognition',
    description: 'Achieved accreditation from international education bodies, recognizing our commitment to excellence.',
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Launched our Innovation Hub, fostering entrepreneurship and technological advancement in education.',
  }
];

// Sample values data
const VALUES: Value[] = [
  {
    id: 'excellence',
    title: 'Academic Excellence',
    icon: <FaAward className="text-4xl text-gold mb-4" />,
    description: 'We maintain the highest standards in education, continuously striving to improve our teaching methods and curriculum. Our faculty consists of industry experts and academic leaders who bring real-world experience to the classroom. We regularly update our programs to incorporate the latest research and industry developments, ensuring our students receive education that is both rigorous and relevant.',
    examples: [
      'Curriculum developed in partnership with industry leaders',
      'Regular academic review by international education experts',
      'Comprehensive quality assurance processes'
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation',
    icon: <FaBook className="text-4xl text-gold mb-4" />,
    description: 'We embrace new technologies and pedagogical approaches to enhance the learning experience for our students. Our innovation hub serves as an incubator for new educational methodologies and technologies. We believe that education must evolve to meet the changing needs of society and the workplace, and we are committed to leading that evolution rather than simply responding to it.',
    examples: [
      'AI-enhanced learning platforms tailored to individual student needs',
      'Virtual reality labs for immersive learning experiences',
      'Blockchain-verified credentials for secure certification'
    ]
  },
  {
    id: 'diversity',
    title: 'Diversity & Inclusion',
    icon: <FaGlobe className="text-4xl text-gold mb-4" />,
    description: 'We celebrate diversity and create an inclusive environment where all students can thrive regardless of background. Our campus welcomes students from over 120 countries, creating a rich multicultural learning environment. We actively work to eliminate barriers to education and ensure that our programs are accessible to qualified students from all backgrounds. Cultural exchange is not just encouraged but integrated into our educational philosophy.',
    examples: [
      'Scholarship programs targeting underrepresented communities',
      'Curriculum that incorporates diverse global perspectives',
      'Cultural competency training for all faculty and staff'
    ]
  },
  {
    id: 'integrity',
    title: 'Integrity',
    icon: <FaMedal className="text-4xl text-gold mb-4" />,
    description: 'We uphold the highest ethical standards in all our operations, fostering trust with our students and partners. Transparency in our processes, honesty in our communications, and fairness in our assessments are non-negotiable principles. We believe that education built on a foundation of integrity produces graduates who will bring those same values to their professional lives, contributing to a more ethical society.',
    examples: [
      'Transparent admission and assessment processes',
      'Clear policies on academic integrity with zero tolerance for violations',
      'Ethical decision-making frameworks integrated into all courses'
    ]
  },
  {
    id: 'community',
    title: 'Community Engagement',
    icon: <FaUsers className="text-4xl text-gold mb-4" />,
    description: 'We believe in giving back to society and actively engage with local and global communities. Through service-learning projects, community partnerships, and outreach programs, we extend our educational mission beyond our campus. Our students and faculty participate in initiatives addressing social challenges, environmental sustainability, and economic development, applying their knowledge to create positive change.',
    examples: [
      'Annual service-learning projects in local communities',
      'Partnerships with NGOs for global development initiatives',
      'Pro bono consulting services for community organizations'
    ]
  },
  {
    id: 'student-success',
    title: 'Student Success',
    icon: <FaUserGraduate className="text-4xl text-gold mb-4" />,
    description: 'Our primary focus is the success of our students, both academically and in their future careers. We provide comprehensive support services, career guidance, and networking opportunities to ensure that our graduates are well-prepared for professional success. Our definition of student success goes beyond grades to encompass personal growth, professional development, and lifelong learning capabilities.',
    examples: [
      'Personalized career coaching and job placement services',
      'Lifetime access to alumni network and resources',
      'Industry mentorship programs connecting students with professionals'
    ]
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    icon: <FaShieldAlt className="text-4xl text-gold mb-4" />,
    description: 'We cultivate resilience and adaptability in our educational approach, preparing students for a rapidly changing world. Our curriculum emphasizes not just current knowledge but the skills to continuously learn and adapt throughout one\'s career. We teach students to be comfortable with uncertainty, to embrace change as opportunity, and to develop the agility needed in today\'s dynamic professional environments.',
    examples: [
      'Scenario-based learning simulating real-world challenges',
      'Cross-disciplinary programs developing versatile skill sets',
      'Future-focused curriculum anticipating industry changes'
    ]
  },
  {
    id: 'affordability',
    title: 'Accessibility & Affordability',
    icon: <FaFileInvoiceDollar className="text-4xl text-gold mb-4" />,
    description: 'We are committed to making quality education accessible through innovative financing options and scholarship programs. We believe that financial constraints should not be a barrier to educational opportunity, and we work creatively to ensure that qualified students can access our programs regardless of their economic circumstances. Our flexible learning formats also accommodate students with diverse life situations and responsibilities.',
    examples: [
      'Flexible payment plans tailored to individual circumstances',
      'Need-based and merit-based scholarship programs',
      'Partnerships with employers for tuition assistance programs'
    ]
  }
];

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

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check for hash in URL to determine which tab to show
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const tabMap: Record<string, string> = {
        'story': 'history',
        'mission': 'mission',
        'leadership': 'team',
        'campus': 'facilities'
      };
      
      if (tabMap[hash]) {
        setActiveTab(tabMap[hash]);
      }
    }
    
    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      const tabMap: Record<string, string> = {
        'story': 'history',
        'mission': 'mission',
        'leadership': 'team',
        'campus': 'facilities'
      };
      
      if (tabMap[newHash]) {
        setActiveTab(tabMap[newHash]);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Function to change tab and update URL hash
  const changeTab = (tab: string) => {
    setActiveTab(tab);
    const hashMap: Record<string, string> = {
      'history': 'story',
      'mission': 'mission',
      'team': 'leadership',
      'facilities': 'campus'
    };
    
    if (hashMap[tab]) {
      window.history.pushState(null, '', `#${hashMap[tab]}`);
    }
  };
  
  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white relative overflow-hidden">
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
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-dark-blue/30 blur-3xl"></div>
        </div>
        
        {/* 3D Polygons */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 transform rotate-45 rounded-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-gold/20 transform -rotate-12 rounded-xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              variants={fadeIn}
              custom={1}
            >
              {t('about')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-400 to-gold neon-text">Greenwich</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              variants={fadeIn}
              custom={2}
            >
              <span className="relative">
                <span className="absolute -left-8 -top-4 text-4xl text-gold/20">❝</span>
                Empowering minds, transforming lives, and building futures through world-class education since 2005.
                <span className="absolute -right-8 -bottom-3 text-4xl text-gold/20">❞</span>
              </span>
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={fadeIn}
              custom={3}
            >
              <Link 
                href="/courses" 
                className="relative group overflow-hidden bg-gradient-to-r from-gold to-amber-500 text-dark-blue px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-15px_rgba(240,198,116,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  {t('explore_courses')}
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative overflow-hidden bg-transparent border border-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/10 transform hover:translate-y-[-2px]"
              >
                <span className="relative z-10">
                  {t('contact_us')}
                </span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
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
      
      {/* Tabs Navigation - enhanced version */}
      <section className="bg-white py-4 border-b border-gray-200 sticky top-0 z-20 shadow-md backdrop-blur-lg bg-white/90">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex overflow-x-auto scrollbar-hide justify-center"
          >
            <div className="inline-flex p-1 bg-light-gray/50 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-inner">
              {[
                { id: 'mission', label: t('mission_values') },
                { id: 'history', label: t('our_story') },
                { id: 'team', label: t('leadership_team') },
                { id: 'facilities', label: t('campus_facilities') }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id ? 'text-dark-blue' : 'text-gray'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white rounded-full shadow-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center">
                    {tab.id === 'mission' && (
                      <span className={`${activeTab === tab.id ? 'text-gold' : 'text-gray'} mr-2`}>
                        <FaBook className="inline-block" size={14} />
                      </span>
                    )}
                    {tab.id === 'history' && (
                      <span className={`${activeTab === tab.id ? 'text-gold' : 'text-gray'} mr-2`}>
                        <FaUniversity className="inline-block" size={14} />
                      </span>
                    )}
                    {tab.id === 'team' && (
                      <span className={`${activeTab === tab.id ? 'text-gold' : 'text-gray'} mr-2`}>
                        <FaUsers className="inline-block" size={14} />
                      </span>
                    )}
                    {tab.id === 'facilities' && (
                      <span className={`${activeTab === tab.id ? 'text-gold' : 'text-gray'} mr-2`}>
                        <FaGlobe className="inline-block" size={14} />
                      </span>
                    )}
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Values Tab */}
      {activeTab === 'mission' && (
        <>
          <section className="py-16 bg-light-gray">
            <div className="container mx-auto px-4">
              {/* Mission Statement */}
              <motion.div 
                className="max-w-4xl mx-auto mb-16 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-6"
                  variants={fadeIn}
                  custom={1}
                >
                  Our Mission
                </motion.h2>
                <motion.div 
                  className="relative p-8 glass-morphism rounded-lg shadow-xl"
                  variants={scaleIn}
                  custom={2}
                >
                  <FaQuoteLeft className="text-gold/20 text-6xl absolute top-6 left-6" />
                  <p className="text-xl text-dark-blue z-10 relative italic">
                    To provide accessible, innovative, and high-quality education that empowers students to make meaningful contributions to society and achieve their full potential in a rapidly changing global landscape.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Values Grid */}
              <motion.h2 
                className="text-3xl font-serif font-bold text-dark-blue mb-10 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={3}
              >
                Our Core Values
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VALUES.map((value, index) => (
                  <motion.div 
                    key={value.id}
                    className="glass-morphism p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform text-center card-3d cursor-pointer"
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn}
                    custom={index + 4}
                    whileHover={{ y: -10 }}
                  >
                    {value.icon}
                    <h3 className="text-xl font-bold text-dark-blue mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Add Our Credibility section here */}
          <OurCredibility />
        </>
      )}
      
      {/* History & Timeline Tab - enhanced with advanced animations */}
      {activeTab === 'history' && (
        <section className="py-16 relative overflow-hidden">
          {/* Background Gradient with advanced effects */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-accent-blue/10 text-dark-blue text-sm font-medium mb-3"
              >
                {t('since_2005')}
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-5xl font-serif font-bold text-dark-blue mb-6"
                variants={fadeIn}
                custom={1}
              >
                Our <span className="text-gold relative">
                  Journey
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-gold/10 -z-10"></span>
                </span>
              </motion.h2>
              <motion.p 
                className="text-gray text-lg"
                variants={fadeIn}
                custom={2}
              >
                From our humble beginnings to becoming a globally recognized educational institution, our journey has been defined by innovation, excellence, and a commitment to student success.
              </motion.p>
            </motion.div>
            
            <div className="relative">
              {/* Glowing vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold/30 via-gold/50 to-gold/30 neon-glow"></div>
              
              {/* Timeline items with enhanced animations */}
              <div className="space-y-24">
                {HISTORY_TIMELINE.map((item, index) => (
                  <motion.div 
                    key={item.year} 
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.215, 0.61, 0.355, 1.0]
                    }}
                  >
                    {/* Year Circle with glow effect */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-gold to-amber-500 flex items-center justify-center text-dark-blue font-bold z-10 shadow-[0_0_15px_rgba(240,198,116,0.5)]"
                      whileHover={{ 
                        scale: 1.2, 
                        boxShadow: "0 0 25px rgba(240,198,116,0.7)"
                      }}
                    >
                      {item.year}
                    </motion.div>
                    
                    {/* Content with improved styling */}
                    <motion.div 
                      className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16'}`}
                      whileHover={{ 
                        scale: 1.05, 
                        transition: { duration: 0.3 } 
                      }}
                    >
                      <div className="glass-morphism p-6 rounded-xl shadow-xl border border-white backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-dark-blue mb-2 flex items-center">
                          {index % 2 === 0 ? (
                            <>
                              <span className="text-gold">{item.title}</span>
                              <span className="ml-2 text-gold">&rarr;</span>
                            </>
                          ) : (
                            <>
                              <span className="mr-2 text-gold">&larr;</span>
                              <span className="text-gold">{item.title}</span>
                            </>
                          )}
                        </h3>
                        <p className="text-gray">{item.description}</p>
                        
                        {/* Decorative corner accent */}
                        <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-8 h-8 border-t-2 ${index % 2 === 0 ? 'border-r-2' : 'border-l-2'} border-gold/20 rounded-tr-lg`}></div>
                      </div>
                    </motion.div>
                    
                    {/* Empty space for the other side */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Final dot at the end of timeline */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-6 h-6 rounded-full bg-gold shadow-[0_0_15px_rgba(240,198,116,0.5)]"
              ></motion.div>
            </div>
            
            {/* Floating decorations */}
            <div className="absolute top-1/4 right-10 w-24 h-24 border border-gold/10 rounded-full rotate-45 opacity-40 animate-float-slow"></div>
            <div className="absolute bottom-1/3 left-20 w-16 h-16 border border-gold/10 rounded-full -rotate-12 opacity-30 animate-float-slow animation-delay-1000"></div>
          </div>
        </section>
      )}
      
      {/* Leadership Team Tab */}
      {activeTab === 'team' && (
        <section className="py-16 bg-light-gray relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-6"
                variants={fadeIn}
                custom={1}
              >
                Our Leadership Team
              </motion.h2>
              <motion.p 
                className="text-gray"
                variants={fadeIn}
                custom={2}
              >
                Meet the dedicated professionals leading our institution with vision, expertise, and a passion for education.
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {LEADERSHIP_TEAM.map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="glass-morphism rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer transform perspective-card"
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  custom={index + 3}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform hover:scale-110 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent opacity-70"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-blue mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold font-medium mb-4 neon-text">
                      {member.title}
                    </p>
                    <p className="text-gray text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Campus Facilities Tab */}
      {activeTab === 'facilities' && (
        <section className="py-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-6"
                variants={fadeIn}
                custom={1}
              >
                World-Class Facilities
              </motion.h2>
              <motion.p 
                className="text-gray"
                variants={fadeIn}
                custom={2}
              >
                Our state-of-the-art campuses provide the perfect environment for learning, innovation, and personal growth.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  Modern Learning Spaces
                </h3>
                <p className="text-gray mb-6">
                  Our classrooms and lecture halls are equipped with the latest technology and designed to facilitate interactive learning and collaboration.
                </p>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={4}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Interactive smart boards and projection systems</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={5}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Flexible seating arrangements for various teaching methodologies</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={6}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>High-speed internet and digital resources available throughout</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={7}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Recording capabilities for lecture capture and review</span>
                  </motion.li>
                </ul>
              </div>
              
              <motion.div 
                className="order-1 lg:order-2 relative rounded-xl overflow-hidden h-80 glass-morphism shadow-2xl"
                variants={scaleIn}
                custom={4}
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src="/images/facilities/classrooms.jpg"
                  alt="Modern classrooms"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 to-transparent"></div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={8}
            >
              <motion.div 
                className="relative rounded-xl overflow-hidden h-80 glass-morphism shadow-2xl"
                variants={scaleIn}
                custom={9}
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src="/images/facilities/library.jpg"
                  alt="Library and research center"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 to-transparent"></div>
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  Library & Research Center
                </h3>
                <p className="text-gray mb-6">
                  Our extensive library houses thousands of books, journals, and digital resources, providing a quiet environment for study and research.
                </p>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={10}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Over 50,000 physical volumes and extensive digital collections</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={11}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Subscription to major academic journals and databases</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={12}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Private study rooms and collaborative spaces</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={13}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Professional librarians to assist with research needs</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={14}
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  Innovation Hub & Technology Labs
                </h3>
                <p className="text-gray mb-6">
                  Our innovation hub provides students with access to cutting-edge technology and equipment for practical learning and project development.
                </p>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={15}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Computer labs with industry-standard software</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={16}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>3D printing and prototyping facilities</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={17}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Virtual reality and simulation equipment</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={18}
                  >
                    <span className="text-gold mr-2 neon-text">•</span>
                    <span>Spaces for startups and entrepreneurial ventures</span>
                  </motion.li>
                </ul>
              </div>
              
              <motion.div 
                className="order-1 lg:order-2 relative rounded-xl overflow-hidden h-80 glass-morphism shadow-2xl"
                variants={scaleIn}
                custom={19}
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src="/images/facilities/tech-lab.jpg"
                  alt="Technology labs"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 to-transparent"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Policies Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-blue mb-4">
                <span className="text-gold neon-text">{t('our_policies')}</span> {t('and_guidelines')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('policies_description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-dark-blue">
                    <div className="absolute inset-0 opacity-20" style={{ 
                      backgroundImage: 'url(/images/patterns/pattern1.png)',
                      backgroundSize: 'cover'
                    }}></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                    <FaShieldAlt className="text-5xl text-gold mb-4" />
                    <h3 className="text-2xl font-bold text-white">{t('privacy_policy')}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {t('privacy_policy_brief')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold mr-2 neon-text">•</span>
                      <span>{t('data_collection')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 neon-text">•</span>
                      <span>{t('data_use')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 neon-text">•</span>
                      <span>{t('your_rights')}</span>
                    </li>
                  </ul>
                  <Link 
                    href="/privacy-policy"
                    className="flex items-center justify-center w-full bg-dark-blue hover:bg-gold text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    {t('read_privacy_policy')}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-dark-blue">
                    <div className="absolute inset-0 opacity-20" style={{ 
                      backgroundImage: 'url(/images/patterns/pattern2.png)',
                      backgroundSize: 'cover'
                    }}></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                    <FaFileInvoiceDollar className="text-5xl text-gold mb-4" />
                    <h3 className="text-2xl font-bold text-white">{t('refund_policy')}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {t('refund_policy_brief')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold mr-2 neon-text">•</span>
                      <span>{t('refund_eligibility')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 neon-text">•</span>
                      <span>{t('refund_process')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 neon-text">•</span>
                      <span>{t('special_circumstances')}</span>
                    </li>
                  </ul>
                  <Link 
                    href="/refund-policy"
                    className="flex items-center justify-center w-full bg-dark-blue hover:bg-gold text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    {t('read_refund_policy')}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 