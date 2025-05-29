"use client";

import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft, FaUsers, FaGlobe, FaUniversity, FaBook, FaChalkboardTeacher, FaUserGraduate, FaAward, FaMedal, FaArrowRight, FaShieldAlt, FaFileInvoiceDollar, FaLinkedin, FaTwitter, FaCertificate, FaMapMarkerAlt, FaCalendarAlt, FaHandshake, FaCheck } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageHeroSection from '../components/PageHeroSection';
import PageLayout from '../components/PageLayout';

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
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0]
    }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0]
    }
  })
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  // State for active tab
  const [activeTab, setActiveTab] = useState<string>('mission');
    
  // Handle hash change for deep linking
  useEffect(() => {
    // Set initial tab based on URL hash
    const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
      if (['mission', 'history', 'team', 'facilities'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    
    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  // Update hash when tab changes
  const changeTab = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState(null, '', `#${tab}`);
  };
  
  return (
    <PageLayout>
      {/* Page Hero */}
      <PageHeroSection 
        title={t('about_hero_title')}
        titleHighlight={t('about_hero_highlight')}
        description={t('about_hero_description')}
        buttonText={t('about_hero_button')}
        buttonLink="/contact"
        imageSrc="/images/about/about-hero-bg.jpg"
        imageAlt="Greenwich Institute"
      />
      
      {/* Enhanced Tabs Navigation */}
      <section className="bg-white py-4 border-b border-gray-200 sticky top-0 z-20 shadow-lg backdrop-blur-lg bg-white/90">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex overflow-x-auto scrollbar-hide justify-center"
          >
            <div className="inline-flex p-1.5 bg-gray-50/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-inner">
              {[
                { id: 'mission', label: t('mission_values'), icon: <FaBook /> },
                { id: 'history', label: t('our_story'), icon: <FaUniversity /> },
                { id: 'team', label: t('leadership_team'), icon: <FaUsers /> },
                { id: 'facilities', label: t('campus_facilities'), icon: <FaGlobe /> }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`relative px-5 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id ? 'text-dark-blue' : 'text-gray-500'
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
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className={`${activeTab === tab.id ? 'text-gold' : 'text-gray-400'}`}>
                      {tab.icon}
                      </span>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Mission & Values Tab */}
      {activeTab === 'mission' && (
        <>
          <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gold/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/5 to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Mission Statement */}
              <motion.div 
                className="max-w-4xl mx-auto mb-20 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={0}
              >
                <motion.span
                  variants={fadeIn}
                  custom={0.5}
                  className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 text-gold text-sm font-semibold mb-3"
                >
                  Notre Mission
                </motion.span>
                
                <motion.h2 
                  className="text-3xl md:text-5xl font-serif font-bold text-dark-blue mb-6"
                  variants={fadeIn}
                  custom={1}
                >
                  Excellence, Innovation, <span className="text-gold">Impact</span>
                </motion.h2>
                
                <motion.div 
                  className="relative p-10 glass-morphism rounded-2xl shadow-xl border border-white"
                  variants={scaleIn}
                  custom={2}
                  whileHover={{ y: -5 }}
                >
                  <FaQuoteLeft className="text-gold/20 text-8xl absolute top-6 left-6" />
                  <p className="text-xl md:text-2xl text-dark-blue z-10 relative italic leading-relaxed">
                    Fournir une éducation accessible, innovante et de haute qualité qui permet aux étudiants d'apporter des contributions significatives à la société et d'atteindre leur plein potentiel dans un paysage mondial en constante évolution.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Values Grid with Enhanced UI */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="text-center mb-16">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-semibold mb-3"
                  >
                    Ce qui nous définit
                  </motion.span>
                  
              <motion.h2 
                    className="text-3xl md:text-5xl font-serif font-bold text-dark-blue mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Nos Valeurs <span className="text-gold">Fondamentales</span>
              </motion.h2>
                  
                  <motion.p
                    className="text-gray-600 max-w-3xl mx-auto text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Ces principes fondamentaux guident chaque aspect de notre approche éducative et façonnent l'expérience que nous offrons à nos étudiants.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {VALUES.map((value, index) => (
                  <motion.div 
                    key={value.id}
                      className="relative group rounded-xl overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      {/* Card with stacked effect */}
                      <div className="absolute inset-1 bg-gray-100 rounded-xl transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                      <div className="glass-morphism p-8 rounded-xl shadow-lg border border-white backdrop-blur-sm hover:shadow-2xl transition-all transform card-3d h-full relative z-10">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-gold/10 to-transparent rounded-full -translate-x-5 -translate-y-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 text-gold mb-6">
                    {value.icon}
                          </div>
                          
                    <h3 className="text-xl font-bold text-dark-blue mb-3">
                      {value.title}
                    </h3>
                          
                          <p className="text-gray-600 mb-6 text-base flex-grow">
                            {value.description.length > 180 
                              ? `${value.description.substring(0, 180)}...` 
                              : value.description}
                          </p>
                          
                          <div className="mt-auto">
                            {value.examples && (
                              <div className="mt-4">
                                <span className="text-sm font-semibold text-dark-blue block mb-2">Exemples:</span>
                                <ul className="space-y-1">
                                  {value.examples.slice(0, 2).map((example, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                      <span className="text-gold mr-2 flex-shrink-0 mt-1">•</span>
                                      <span>{example}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <button className="mt-4 text-gold hover:text-amber-600 font-medium flex items-center text-sm transition-colors duration-300">
                              En savoir plus <FaArrowRight className="ml-1 text-xs" />
                            </button>
                          </div>
                        </div>
                      </div>
                  </motion.div>
                ))}
              </div>
              </motion.div>
              
              {/* Value Impact Metrics */}
              <motion.div 
                className="rounded-2xl bg-gradient-to-br from-dark-blue to-blue-900 text-white p-8 md:p-12 shadow-xl mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">L'Impact de Nos Valeurs</h3>
                  <p className="text-white/80 max-w-3xl mx-auto">
                    Notre engagement envers ces valeurs fondamentales a généré des résultats significatifs pour nos étudiants et notre communauté.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gold mb-2">98%</div>
                    <div className="text-white/80 text-sm md:text-base">Taux de satisfaction des étudiants</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gold mb-2">92%</div>
                    <div className="text-white/80 text-sm md:text-base">Taux d'emploi post-diplôme</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gold mb-2">120+</div>
                    <div className="text-white/80 text-sm md:text-base">Pays représentés</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gold mb-2">15K+</div>
                    <div className="text-white/80 text-sm md:text-base">Anciens élèves dans le monde</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
      
      {/* Enhanced History & Timeline Tab */}
      {activeTab === 'history' && (
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto mb-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-semibold mb-3"
              >
                Depuis 2005
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-serif font-bold text-dark-blue mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Notre <span className="text-gold relative">
                  Parcours
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,3 Q50,7 100,3" stroke="#F0C674" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                De nos humbles débuts à notre statut d'institution éducative mondialement reconnue, notre parcours a été défini par l'innovation, l'excellence et un engagement envers la réussite des étudiants.
              </motion.p>
            </motion.div>
            
            {/* Enhanced interactive timeline */}
            <div className="relative mx-auto max-w-6xl">
              {/* Glowing central line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-gold/20 via-gold/50 to-gold/20 rounded-full shadow-[0_0_10px_rgba(240,198,116,0.3)]"></div>
              
              {/* Timeline items with enhanced animations */}
              <div className="space-y-28 md:space-y-32 relative pb-20">
                {HISTORY_TIMELINE.map((item, index) => (
                  <motion.div 
                    key={item.year} 
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.7,
                      delay: index * 0.15,
                      ease: [0.215, 0.61, 0.355, 1.0]
                    }}
                  >
                    {/* Center Dot */}
                    <motion.div 
                      className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-gold flex items-center justify-center text-dark-blue font-bold shadow-[0_0_15px_rgba(240,198,116,0.5)]">
                        <span className="text-xl">{item.year}</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-gold to-transparent opacity-40"></div>
                    </motion.div>
                    
                    {/* Content with improved styling */}
                    <div className={`md:w-5/12 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mt-20 md:mt-0`}>
                    <motion.div 
                        className={`glass-morphism p-8 rounded-xl shadow-xl border border-white max-w-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                      whileHover={{ 
                          y: -5,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                        transition: { duration: 0.3 } 
                      }}
                    >
                        <div className="relative">
                          {/* Decorative accents */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-gold/5 to-transparent rounded-full -translate-x-5 -translate-y-5"></div>
                          
                          <h3 className="text-2xl font-bold text-dark-blue mb-3 flex items-center">
                              <span className="text-gold">{item.title}</span>
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed relative z-10">{item.description}</p>
                          
                          {/* Milestone achievements - added details */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <h4 className="text-sm font-semibold text-dark-blue mb-2">Réalisations clés:</h4>
                            <ul className="space-y-1">
                              {index === 0 && (
                                <>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Établissement de notre première campus avec 120 étudiants</span>
                                  </li>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Développement de 5 programmes éducatifs initiaux</span>
                                  </li>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Augmentation des inscriptions internationales de 250%</span>
                                  </li>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Création d'un programme d'échange avec 10 universités</span>
                                  </li>
                            </>
                          )}
                              {index === 2 && (
                                <>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Plus de 5,000 étudiants inscrits aux programmes en ligne</span>
                                  </li>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Intégration de la technologie LMS primée</span>
                                  </li>
                                </>
                              )}
                              {index === 3 && (
                                <>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Partenariats avec 35 entreprises du Fortune 500</span>
                                  </li>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Création de 150+ stages d'entreprise pour nos étudiants</span>
                                  </li>
                                </>
                              )}
                              {index === 4 && (
                                <>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Accréditation par 5 organismes internationaux</span>
                                  </li>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Classement parmi les 50 meilleures institutions mondiales</span>
                                  </li>
                                </>
                              )}
                              {index === 5 && (
                                <>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Lancement de 12 startups étudiantes</span>
                                  </li>
                                  <li className="flex items-start text-sm text-gray-600">
                                    <span className="text-gold mr-2 flex-shrink-0">•</span>
                                    <span>Développement d'un incubateur de projets technologiques</span>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                      </div>
                    </motion.div>
                    </div>
                    
                    {/* Empty space for the other side */}
                    <div className="md:w-5/12 hidden md:block"></div>
                  </motion.div>
                ))}
              
                {/* Future marker */}
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(240,198,116,0.6)]">
                    <FaArrowRight className="text-white" />
                  </div>
                  <p className="mt-3 text-dark-blue font-medium">Notre histoire continue...</p>
                </motion.div>
              </div>
            </div>
            
            {/* Key Milestones Section */}
            <motion.div 
              className="mt-32 bg-white rounded-2xl shadow-xl p-10 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4">Les Chiffres Clés de Notre Histoire</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Notre croissance et notre impact au fil des années démontrent notre engagement continu envers l'excellence éducative.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-amber-500/10 border border-gold/20">
                      <FaUserGraduate className="text-gold text-2xl" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-dark-blue mb-2">30K+</div>
                    <div className="text-gray-600">Diplômés</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-amber-500/10 border border-gold/20">
                      <FaGlobe className="text-gold text-2xl" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-dark-blue mb-2">15</div>
                    <div className="text-gray-600">Campus Mondiaux</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-amber-500/10 border border-gold/20">
                      <FaUniversity className="text-gold text-2xl" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-dark-blue mb-2">50+</div>
                    <div className="text-gray-600">Programmes Académiques</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-amber-500/10 border border-gold/20">
                      <FaHandshake className="text-gold text-2xl" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-dark-blue mb-2">200+</div>
                    <div className="text-gray-600">Institutional Partners</div>
                  </div>
                </div>
                
                {/* Discover more button */}
                <div className="flex justify-center mt-12">
                  <Link 
                    href="/our-history"
                    className="inline-flex items-center justify-center px-8 py-3 bg-dark-blue text-white rounded-full hover:bg-gold hover:text-dark-blue transition-colors duration-300 font-medium"
                  >
                    Explorer notre histoire complète
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Enhanced Leadership Team Tab */}
      {activeTab === 'team' && (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              <motion.span
                variants={fadeIn}
                custom={0.5}
                className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-semibold mb-3"
              >
                Notre Équipe
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-serif font-bold text-dark-blue mb-6"
                variants={fadeIn}
                custom={1}
              >
                L'Équipe de <span className="text-gold">Direction</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                variants={fadeIn}
                custom={2}
              >
                Rencontrez les professionnels dévoués qui dirigent notre institution avec vision, expertise et passion pour l'éducation.
              </motion.p>
            </motion.div>
            
            {/* Featured Leaders - First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {LEADERSHIP_TEAM.slice(0, 2).map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-80 md:h-auto md:w-2/5 overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover h-full w-full transition-transform hover:scale-110 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex gap-2">
                        <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-dark-blue transition-colors duration-300">
                          <FaLinkedin size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-dark-blue transition-colors duration-300">
                          <FaTwitter size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:w-3/5 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-dark-blue mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gold font-medium text-lg">
                        {member.title}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-base mb-4 flex-grow">
                      {member.bio}
                    </p>
                    
                    {member.expertise && (
                      <div className="mt-auto">
                        <h4 className="text-sm font-semibold text-dark-blue mb-2">Domaines d'expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Rest of the team - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {LEADERSHIP_TEAM.slice(2).map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full relative">
                    <div className="relative h-72 w-full overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2">
                          <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-dark-blue transition-colors duration-300">
                            <FaLinkedin size={14} />
                          </a>
                          <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-dark-blue transition-colors duration-300">
                            <FaTwitter size={14} />
                          </a>
                        </div>
                      </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-blue mb-1">
                      {member.name}
                    </h3>
                      <p className="text-gold font-medium mb-3">
                      {member.title}
                    </p>
                      
                      <div className="relative overflow-hidden">
                        <p className="text-gray-600 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {member.bio}
                    </p>
                        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      
                      {member.expertise && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-1">
                            {member.expertise.slice(0, 2).map((skill, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Team Statistics */}
            <motion.div 
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-xl bg-gradient-to-br from-dark-blue to-blue-800 p-8 text-white shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/10 mx-auto">
                  <FaCertificate className="text-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">25+</h3>
                <p className="text-white/80 text-center">Années d'expérience moyenne</p>
              </div>
              
              <div className="rounded-xl bg-gradient-to-br from-gold/90 to-amber-500 p-8 text-dark-blue shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-dark-blue/10 mx-auto">
                  <FaGlobe className="text-dark-blue text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">12</h3>
                <div className="text-dark-blue/80 text-center">Nationalities represented</div>
              </div>
              
              <div className="rounded-xl bg-gradient-to-br from-dark-blue to-blue-800 p-8 text-white shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/10 mx-auto">
                  <FaAward className="text-gold text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">30+</h3>
                <div className="text-white/80 text-center">Awards and recognitions received</div>
              </div>
            </motion.div>
            
            {/* Join the Team CTA */}
            <motion.div 
              className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4">Rejoignez Notre Équipe</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Nous sommes toujours à la recherche de talents exceptionnels pour rejoindre notre équipe dédiée. Découvrez les opportunités actuelles et faites partie de notre mission éducative.
                </p>
                <Link 
                  href="/careers"
                  className="inline-flex items-center justify-center px-8 py-3 bg-dark-blue text-white rounded-full hover:bg-gold hover:text-dark-blue transition-colors duration-300 font-medium"
                >
                  Voir les opportunités
                  <FaArrowRight className="ml-2" />
                </Link>
                
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-gold mr-2" />
                    <span>Emplacements mondiaux</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaCalendarAlt className="text-gold mr-2" />
                    <span>Horaires flexibles</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaGlobe className="text-gold mr-2" />
                    <span>Environnement diversifié</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Enhanced Campus Facilities Tab */}
      {activeTab === 'facilities' && (
        <section className="py-20 relative overflow-hidden bg-gray-50">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-dark-blue/10 to-blue-500/10 text-dark-blue text-sm font-semibold mb-3"
              >
                Environnement d'apprentissage
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-serif font-bold text-dark-blue mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Des Installations <span className="text-gold">De Classe Mondiale</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Nos campus à la pointe de la technologie offrent l'environnement idéal pour l'apprentissage, l'innovation et l'épanouissement personnel.
              </motion.p>
            </motion.div>
            
            {/* Interactive campus map - NEW COMPONENT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-24 rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100"
            >
              <div className="relative h-96 w-full">
                <Image
                  src="/images/facilities/campus-map.jpg"
                  alt="Vue aérienne du campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Campus Principal</h3>
                  <p className="text-white/80 max-w-2xl">
                    Notre campus principal s'étend sur plus de 15 hectares et comprend des installations modernes conçues pour favoriser l'apprentissage et l'innovation.
                  </p>
                </div>
              </div>
              
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaChalkboardTeacher className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue">25 Bâtiments</h4>
                    <p className="text-gray-600 text-sm">Répartis stratégiquement sur le campus</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue">Capacité de 12,000</h4>
                    <p className="text-gray-600 text-sm">Étudiants sur le campus simultanément</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue">Éco-responsable</h4>
                    <p className="text-gray-600 text-sm">Campus certifié écologique</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Facility Features - Grid Cards */}
            <div className="space-y-24">
              {/* Modern Learning Spaces */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="order-2 lg:order-1 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark-blue mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaChalkboardTeacher className="text-blue-600 text-sm" />
                    </span>
                    Espaces d'Apprentissage Modernes
                </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nos salles de classe et amphithéâtres sont équipés des technologies les plus récentes et conçus pour faciliter l'apprentissage interactif et la collaboration.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Tableaux interactifs et systèmes de projection",
                      "Dispositions de sièges flexibles pour diverses méthodologies d'enseignement",
                      "Internet haut débit et ressources numériques disponibles partout",
                      "Capacités d'enregistrement pour la capture et la révision des cours"
                    ].map((item, index) => (
                  <motion.li 
                        key={index}
                    className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                          <FaCheck className="text-xs" />
                        </span>
                        <span className="text-gray-600">{item}</span>
                  </motion.li>
                    ))}
                </ul>
              </div>
              
              <motion.div 
                  className="order-1 lg:order-2 relative h-96 glass-morphism shadow-2xl rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/facilities/classrooms.jpg"
                    alt="Salles de classe modernes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 to-transparent group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
                      12 Amphithéâtres
                    </span>
                    <h4 className="text-white text-xl font-bold">Salles de Classe Connectées</h4>
                  </div>
              </motion.div>
            </motion.div>
            
              {/* Library & Research Center */}
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              <motion.div 
                  className="relative h-96 glass-morphism shadow-2xl rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/facilities/library.jpg"
                    alt="Bibliothèque et centre de recherche"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 to-transparent group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
                      5 Étages
                    </span>
                    <h4 className="text-white text-xl font-bold">Centre de Ressources Complet</h4>
                  </div>
              </motion.div>
              
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark-blue mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                      <FaBook className="text-amber-600 text-sm" />
                    </span>
                    Bibliothèque & Centre de Recherche
                </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Notre vaste bibliothèque abrite des milliers de livres, revues et ressources numériques, offrant un environnement calme pour l'étude et la recherche.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Plus de 50 000 volumes physiques et vastes collections numériques",
                      "Abonnement aux principales revues académiques et bases de données",
                      "Salles d'étude privées et espaces collaboratifs",
                      "Bibliothécaires professionnels pour répondre aux besoins de recherche"
                    ].map((item, index) => (
                  <motion.li 
                        key={index}
                    className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3 mt-0.5 flex-shrink-0">
                          <FaCheck className="text-xs" />
                        </span>
                        <span className="text-gray-600">{item}</span>
                  </motion.li>
                    ))}
                </ul>
              </div>
            </motion.div>
            </div>
            
            {/* Virtual Tour CTA */}
            <motion.div 
              className="mt-24 bg-gradient-to-r from-dark-blue to-blue-800 rounded-2xl overflow-hidden shadow-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/facilities/campus-aerial.jpg"
                  alt="Campus aérien"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Visite Virtuelle de Notre Campus</h3>
                  <p className="text-white/80 md:text-lg">
                    Explorez notre campus depuis chez vous avec notre visite interactive à 360°. Découvrez nos installations, ressentez l'atmosphère et imaginez-vous faire partie de notre communauté.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <Link 
                    href="/virtual-tour"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark-blue rounded-full hover:bg-gold transition-colors duration-300 font-medium group"
                  >
                    Visite Virtuelle
                    <span className="ml-2 w-8 h-8 rounded-full bg-gold flex items-center justify-center group-hover:bg-dark-blue group-hover:text-white transition-colors duration-300">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </PageLayout>
  );
} 