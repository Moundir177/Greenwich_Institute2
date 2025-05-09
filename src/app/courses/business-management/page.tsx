import Image from 'next/image';
import { FaStar, FaRegStar, FaStarHalfAlt, FaCheck, FaPlay, FaClock, FaFileAlt, FaLaptop, FaUserTie } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Business Management | UK Institute',
  description: 'Develop essential management skills and learn key business strategies for leading teams effectively with our comprehensive Business Management course.',
};

const instructors = [
  {
    name: 'Dr. James Wilson',
    role: 'Lead Instructor',
    bio: 'Former CEO with 20+ years of experience in corporate leadership. MBA and PhD in Business Administration from Harvard Business School.',
    imageSrc: '/images/instructors/james-wilson.jpg',
  },
  {
    name: 'Sarah Thompson',
    role: 'Assistant Instructor',
    bio: 'Management consultant with expertise in organizational development and strategic planning. MBA from London Business School.',
    imageSrc: '/images/instructors/sarah-thompson.jpg',
  },
];

const curriculum = [
  {
    title: 'Module 1: Introduction to Business Management',
    duration: '2 weeks',
    lessons: [
      { title: 'The Role of Management in Organizations', duration: '45 min' },
      { title: 'Management Theories and Approaches', duration: '1 hr' },
      { title: 'The Business Environment', duration: '50 min' },
      { title: 'Case Study: Successful Management Strategies', duration: '1.5 hrs' },
    ],
  },
  {
    title: 'Module 2: Leadership and Team Management',
    duration: '3 weeks',
    lessons: [
      { title: 'Leadership Styles and Their Impact', duration: '1 hr' },
      { title: 'Building and Managing Effective Teams', duration: '1.5 hrs' },
      { title: 'Conflict Resolution in the Workplace', duration: '1 hr' },
      { title: 'Emotional Intelligence for Managers', duration: '45 min' },
      { title: 'Practical Leadership Workshop', duration: '2 hrs' },
    ],
  },
  {
    title: 'Module 3: Strategic Planning and Decision Making',
    duration: '2 weeks',
    lessons: [
      { title: 'Strategic Planning Process', duration: '1 hr' },
      { title: 'SWOT Analysis and Competitive Advantage', duration: '1 hr' },
      { title: 'Decision-Making Models', duration: '45 min' },
      { title: 'Risk Management in Business', duration: '1 hr' },
    ],
  },
  {
    title: 'Module 4: Marketing and Customer Relations',
    duration: '2 weeks',
    lessons: [
      { title: 'Marketing Fundamentals for Managers', duration: '1 hr' },
      { title: 'Customer Relationship Management', duration: '1 hr' },
      { title: 'Digital Marketing Strategies', duration: '1.5 hrs' },
      { title: 'Marketing Plan Development', duration: '2 hrs' },
    ],
  },
  {
    title: 'Module 5: Financial Management',
    duration: '3 weeks',
    lessons: [
      { title: 'Financial Statements and Analysis', duration: '1.5 hrs' },
      { title: 'Budgeting and Forecasting', duration: '1 hr' },
      { title: 'Cost Management Strategies', duration: '1 hr' },
      { title: 'Investment Decision Making', duration: '1 hr' },
      { title: 'Financial Management Case Studies', duration: '2 hrs' },
    ],
  },
  {
    title: 'Module 6: Capstone Project',
    duration: '2 weeks',
    lessons: [
      { title: 'Project Briefing and Planning', duration: '1 hr' },
      { title: 'Research and Analysis Phase', duration: '3 hrs' },
      { title: 'Strategy Development', duration: '2 hrs' },
      { title: 'Final Presentation and Assessment', duration: '2 hrs' },
    ],
  },
];

export default function BusinessManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-uk-blue py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-uk-blue via-uk-blue/90 to-uk-blue/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('/images/courses/business-hero.jpg')] bg-cover bg-center"
            style={{ opacity: 0.2 }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-uk-red text-uk-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-uk-white mt-4 mb-6">Business Management</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-gold mr-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-uk-white">(4.8/5 based on 248 reviews)</span>
              </div>
              <p className="text-xl text-uk-white/90 mb-8">
                Develop essential management skills and learn key business strategies for leading teams effectively in today's dynamic business environment.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center text-uk-white/90">
                  <FaClock className="mr-2 text-gold" />
                  <span>6 months</span>
                </div>
                <div className="flex items-center text-uk-white/90">
                  <FaFileAlt className="mr-2 text-gold" />
                  <span>24 modules</span>
                </div>
                <div className="flex items-center text-uk-white/90">
                  <FaLaptop className="mr-2 text-gold" />
                  <span>Online access</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="#enroll" variant="secondary" size="lg">
                  Enroll Now
                </Button>
                <Button href="#curriculum" variant="white" size="lg">
                  View Curriculum
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl border-8 border-white/10">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-uk-blue/80 flex items-center justify-center cursor-pointer hover:bg-uk-blue transition-colors">
                    <FaPlay className="text-white ml-1" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-uk-blue mb-4">What You'll Learn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This comprehensive course covers all aspects of modern business management, from leadership and strategy to financial management and marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="mb-4 text-uk-blue">
                <FaUserTie size={32} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Leadership Skills</h3>
              <p className="text-gray-600 mb-4">
                Develop effective leadership styles, learn to motivate teams, and build a positive organizational culture.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Adaptive leadership techniques</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Conflict resolution strategies</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Team building and motivation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="mb-4 text-uk-blue">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Strategic Planning</h3>
              <p className="text-gray-600 mb-4">
                Master the art of strategic planning and decision-making to drive business growth and competitive advantage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">SWOT analysis techniques</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Strategic planning frameworks</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Risk assessment and mitigation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="mb-4 text-uk-blue">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Financial Management</h3>
              <p className="text-gray-600 mb-4">
                Learn to interpret financial data, create budgets, and make informed financial decisions for business success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Financial statement analysis</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Budgeting and forecasting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Investment decision-making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Curriculum */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-uk-blue mb-4">Course Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured curriculum is designed to progressively build your management skills over the course of 14 weeks.
            </p>
          </div>
          
          <div className="space-y-6">
            {curriculum.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-uk-blue">{module.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Duration: {module.duration}</p>
                    </div>
                    <span className="bg-uk-blue/10 text-uk-blue text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {module.lessons.length} lessons
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {module.lessons.map((lesson, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-center">
                          <FaPlay className="text-uk-red mr-3" size={12} />
                          <span className="text-gray-700">{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-uk-blue mb-4">Meet Your Instructors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts with decades of real-world business and management experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gray-300"></div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-uk-blue">{instructor.name}</h3>
                    <p className="text-uk-red font-medium mb-4">{instructor.role}</p>
                    <p className="text-gray-600">{instructor.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enrollment CTA */}
      <section id="enroll" className="py-16 bg-uk-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-serif font-bold text-gold mb-4">Ready to Advance Your Management Career?</h2>
                <p className="text-uk-white/90 mb-6">
                  Enroll now in our Business Management course and gain the skills and knowledge needed to lead teams, drive strategic initiatives, and advance your career in management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-uk-white/90">24/7 access to all course materials for 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-uk-white/90">Personal feedback from expert instructors</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-uk-white/90">Industry-recognized certification upon completion</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-uk-white/90">Flexible learning schedule to fit around your commitments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-uk-blue mb-1">Course Fee</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold text-uk-blue">£499</span>
                    <span className="text-gray-500 ml-2 line-through">£699</span>
                  </div>
                  <span className="text-sm text-uk-red font-medium">28% discount - Limited time offer</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-uk-blue mr-2" />
                    <span>Full course access</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-uk-blue mr-2" />
                    <span>Official UK Institute certificate</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-uk-blue mr-2" />
                    <span>6 months of mentorship</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-uk-blue mr-2" />
                    <span>Lifetime access to course community</span>
                  </li>
                </ul>
                
                <Button variant="secondary" size="lg" fullWidth>
                  Enroll Now
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-uk-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our Business Management course.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">Are there any prerequisites for this course?</h3>
              <p className="text-gray-600">
                There are no formal prerequisites. This course is designed for individuals at all levels, from aspiring managers to experienced professionals looking to enhance their skills. Basic business knowledge is helpful but not required.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">How much time should I dedicate to this course each week?</h3>
              <p className="text-gray-600">
                We recommend allocating 8-10 hours per week for optimal learning. This includes watching lectures, completing assignments, and participating in discussions. The course is designed to be flexible, allowing you to learn at your own pace.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">Is the certificate recognized by employers?</h3>
              <p className="text-gray-600">
                Yes, our Business Management certificate is recognized by leading employers across industries. UK Institute is accredited by professional business associations, ensuring the value of your certification in the job market.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">Can I pay in installments?</h3>
              <p className="text-gray-600">
                Yes, we offer a flexible payment plan that allows you to pay in three monthly installments. There's a small administrative fee for using the installment option. Contact our admissions team for more details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 