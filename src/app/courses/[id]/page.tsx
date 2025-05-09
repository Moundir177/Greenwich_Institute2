'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaClock, 
  FaUsers, 
  FaGraduationCap, 
  FaBook, 
  FaStar, 
  FaChalkboardTeacher,
  FaCertificate,
  FaLaptop,
  FaCalendarAlt,
  FaRegPlayCircle,
  FaRegFileAlt,
  FaRegQuestionCircle,
  FaRegCheckCircle
} from 'react-icons/fa';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import TestimonialCard from '@/components/ui/TestimonialCard';

// Mock data - would typically come from an API or CMS
const getCourseData = (id: string) => {
  const courses = {
    'business-management': {
      id: 'business-management',
      title: 'Business Management Fundamentals',
      description: 'Comprehensive introduction to business management principles, organizational structures, and strategic planning.',
      longDescription: `This comprehensive course provides a solid foundation in business management principles and practices. Whether you're an aspiring manager, a small business owner, or looking to advance your career, this course will equip you with the essential knowledge and skills needed to succeed in today's competitive business environment.

Throughout the course, you'll explore key management theories, organizational structures, leadership styles, and strategic planning methodologies. You'll learn how to effectively manage teams, allocate resources, implement change, and drive business growth. The course also covers important topics such as business ethics, corporate social responsibility, and global business considerations.`,
      imageSrc: '/images/courses/business-management.jpg',
      category: 'Business',
      duration: '12 weeks',
      level: 'Beginner',
      lectures: 24,
      students: 1243,
      language: 'English',
      certificate: true,
      price: 499,
      discountPrice: 399,
      rating: 4.8,
      reviews: 256,
      featured: true,
      lastUpdated: 'September 2023',
      instructor: {
        name: 'Dr. Sarah Johnson',
        title: 'Head of Business Studies',
        bio: 'Dr. Johnson has over 15 years of experience in business management and leadership roles. She holds an MBA and PhD in Organizational Management from London Business School.',
        imageSrc: '/images/instructors/sarah-johnson.jpg',
        rating: 4.9,
        courses: 12,
        students: 8570
      },
      curriculum: [
        {
          title: 'Introduction to Business Management',
          lessons: [
            { title: 'Course Overview', type: 'video', duration: '15 min' },
            { title: 'What is Business Management?', type: 'video', duration: '22 min' },
            { title: 'The Evolution of Management Theory', type: 'video', duration: '27 min' },
            { title: 'Module 1 Quiz', type: 'quiz', duration: '20 min' },
          ]
        },
        {
          title: 'Organizational Structures and Behavior',
          lessons: [
            { title: 'Types of Organizational Structures', type: 'video', duration: '31 min' },
            { title: 'Organizational Culture', type: 'video', duration: '25 min' },
            { title: 'Team Dynamics and Communication', type: 'video', duration: '28 min' },
            { title: 'Case Study: Successful Organizational Transformations', type: 'document', duration: '35 min' },
            { title: 'Module 2 Quiz', type: 'quiz', duration: '20 min' },
          ]
        },
        {
          title: 'Leadership and Decision Making',
          lessons: [
            { title: 'Leadership Styles and Their Impact', type: 'video', duration: '26 min' },
            { title: 'Effective Decision-Making Processes', type: 'video', duration: '24 min' },
            { title: 'Ethical Leadership', type: 'video', duration: '22 min' },
            { title: 'Leadership in Practice: Assignment', type: 'assignment', duration: '2 hours' },
            { title: 'Module 3 Quiz', type: 'quiz', duration: '20 min' },
          ]
        },
        {
          title: 'Strategic Planning and Management',
          lessons: [
            { title: 'The Strategic Planning Process', type: 'video', duration: '29 min' },
            { title: 'SWOT Analysis and Strategic Tools', type: 'video', duration: '26 min' },
            { title: 'Implementing and Evaluating Strategy', type: 'video', duration: '24 min' },
            { title: 'Strategic Plan Development: Group Project', type: 'project', duration: '4 hours' },
            { title: 'Module 4 Quiz', type: 'quiz', duration: '20 min' },
          ]
        },
        {
          title: 'Course Conclusion',
          lessons: [
            { title: 'Course Summary', type: 'video', duration: '18 min' },
            { title: 'Final Examination', type: 'exam', duration: '2 hours' },
            { title: 'Next Steps and Further Learning Resources', type: 'document', duration: '10 min' },
          ]
        },
      ],
      whatYouWillLearn: [
        'Understand fundamental business management principles and practices',
        'Analyze different organizational structures and their suitability for various business environments',
        'Develop effective leadership skills and decision-making processes',
        'Create strategic plans for business growth and competitive advantage',
        'Implement effective team management and communication strategies',
        'Apply ethical considerations to business decisions and operations',
        'Understand change management processes and their implementation',
        'Evaluate business performance and implement improvements'
      ],
      requirements: [
        'No prior business knowledge is required – this course is suitable for beginners',
        'Basic English language proficiency for following course materials',
        'Access to a computer with internet connection',
        'Enthusiasm to learn and apply business management concepts'
      ],
      testimonials: [
        {
          quote: "This course provided me with a solid foundation in business management that I've been able to apply immediately in my role. The instructor's real-world examples made complex concepts easy to understand.",
          name: "Michael T.",
          title: "Operations Manager",
          rating: 5
        },
        {
          quote: "As someone starting their own business, this course was invaluable. It covered all the essential aspects of management I needed to know, and the strategic planning section helped me develop a clear direction for my company.",
          name: "Jessica L.",
          title: "Entrepreneur",
          rating: 5
        },
        {
          quote: "Comprehensive content delivered in an engaging way. The course materials and assignments were practical and relevant to real business scenarios.",
          name: "David K.",
          title: "Project Coordinator",
          rating: 4
        }
      ]
    }
  };
  
  return courses[id as keyof typeof courses] || null;
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const course = getCourseData(params.id);
  
  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Course Not Found</h1>
          <p className="text-gray-500 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/courses" 
            className="bg-uk-blue text-white px-4 py-2 rounded-md hover:bg-uk-blue/90 transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-uk-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-serif font-bold text-uk-white mb-4">{course.title}</h1>
            <p className="text-uk-white/90 mb-6">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-uk-white/80 text-sm">
              <div className="flex items-center">
                <FaStar className="text-gold mr-1" />
                <span>{course.rating} ({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-1" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-1" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <FaGraduationCap className="mr-1" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                <span>Last updated: {course.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Courses', href: '/courses' },
              { label: course.title }
            ]}
          />
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Content */}
            <div className="lg:col-span-2">
              {/* Course Image */}
              <div className="rounded-lg overflow-hidden mb-8 shadow-md">
                <Image
                  src={course.imageSrc}
                  alt={course.title}
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Tabs Navigation */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'overview'
                        ? 'border-uk-blue text-uk-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'curriculum'
                        ? 'border-uk-blue text-uk-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab('instructor')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'instructor'
                        ? 'border-uk-blue text-uk-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'reviews'
                        ? 'border-uk-blue text-uk-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Reviews
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="tab-content">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div>
                    <div className="prose max-w-none mb-8">
                      <h2 className="text-2xl font-serif font-bold text-uk-blue mb-4">About This Course</h2>
                      <p className="text-gray-600 whitespace-pre-line">{course.longDescription}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-uk-blue mb-4">What You Will Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <FaRegCheckCircle className="text-uk-blue mt-1 mr-2 flex-shrink-0" />
                            <p className="text-gray-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-uk-blue mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {course.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-uk-blue mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-uk-blue mb-6">Course Curriculum</h2>
                    <div className="space-y-4">
                      {course.curriculum.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 px-6 py-4">
                            <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
                          </div>
                          <div className="divide-y divide-gray-200">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center">
                                  {lesson.type === 'video' && <FaRegPlayCircle className="text-uk-blue mr-3" />}
                                  {lesson.type === 'document' && <FaRegFileAlt className="text-uk-blue mr-3" />}
                                  {lesson.type === 'quiz' && <FaRegQuestionCircle className="text-uk-blue mr-3" />}
                                  {lesson.type === 'assignment' && <FaBook className="text-uk-blue mr-3" />}
                                  {lesson.type === 'project' && <FaLaptop className="text-uk-blue mr-3" />}
                                  {lesson.type === 'exam' && <FaCertificate className="text-uk-blue mr-3" />}
                                  <span className="text-gray-700">{lesson.title}</span>
                                </div>
                                <span className="text-sm text-gray-500">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Instructor Tab */}
                {activeTab === 'instructor' && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-uk-blue mb-6">Meet Your Instructor</h2>
                    <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                        <Image
                          src={course.instructor.imageSrc}
                          alt={course.instructor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-uk-blue mb-1">{course.instructor.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{course.instructor.title}</p>
                        
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <FaStar className="text-gold mr-1" />
                            <span>{course.instructor.rating} Instructor Rating</span>
                          </div>
                          <div className="flex items-center">
                            <FaBook className="mr-1" />
                            <span>{course.instructor.courses} Courses</span>
                          </div>
                          <div className="flex items-center">
                            <FaUsers className="mr-1" />
                            <span>{course.instructor.students} Students</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                      <h2 className="text-2xl font-serif font-bold text-uk-blue">Student Reviews</h2>
                      <div className="flex items-center mt-4 md:mt-0">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'text-gold' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">
                          {course.rating} out of 5 ({course.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.testimonials.map((testimonial, index) => (
                        <TestimonialCard
                          key={index}
                          quote={testimonial.quote}
                          name={testimonial.name}
                          title={testimonial.title}
                          rating={testimonial.rating}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Course Details and Enrollment */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 sticky top-24">
                <div className="p-6">
                  <div className="mb-6">
                    {course.discountPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-uk-blue">£{course.discountPrice}</span>
                        <span className="text-lg text-gray-500 line-through">£{course.price}</span>
                        <span className="text-sm bg-uk-red text-white px-2 py-1 rounded-md">
                          {Math.round(100 - (course.discountPrice / course.price) * 100)}% off
                        </span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-uk-blue">£{course.price}</span>
                    )}
                  </div>
                  
                  <Button
                    href={`/checkout/${course.id}`}
                    variant="primary"
                    fullWidth
                    className="mb-4"
                  >
                    Enroll Now
                  </Button>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    className="mb-6"
                  >
                    Add to Wishlist
                  </Button>
                  
                  <div className="text-sm text-gray-500 text-center mb-6">
                    30-day money-back guarantee
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-700">This course includes:</h3>
                    
                    <div className="flex items-start">
                      <FaRegPlayCircle className="text-gray-500 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">{course.lectures} on-demand video lectures</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaRegFileAlt className="text-gray-500 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">Downloadable resources and exercises</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaRegQuestionCircle className="text-gray-500 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">Practice quizzes and assessments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaLaptop className="text-gray-500 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">Access on mobile and desktop</p>
                      </div>
                    </div>
                    
                    {course.certificate && (
                      <div className="flex items-start">
                        <FaCertificate className="text-gray-500 mt-1 mr-3" />
                        <div>
                          <p className="text-gray-700">Certificate of completion</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-uk-blue mb-8">Related Courses You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would typically be populated with actual related courses */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image 
                  src="/images/courses/project-management.jpg"
                  alt="Project Management Course"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-uk-blue mb-2">Project Management Professional (PMP)</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Prepare for the PMP certification with comprehensive training in project management methodologies.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-uk-blue font-bold">£699</span>
                  <Link href="/courses/project-management" className="text-sm text-uk-blue hover:text-uk-red">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image 
                  src="/images/courses/financial-accounting.jpg"
                  alt="Financial Accounting Course"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-uk-blue mb-2">Financial Accounting & Analysis</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Comprehensive introduction to financial accounting principles, statements analysis, and reporting.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-uk-blue font-bold">£499</span>
                  <Link href="/courses/financial-accounting" className="text-sm text-uk-blue hover:text-uk-red">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image 
                  src="/images/courses/digital-marketing.jpg"
                  alt="Digital Marketing Course"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-uk-blue mb-2">Digital Marketing Masterclass</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Master digital marketing strategies, SEO, social media marketing, and marketing analytics.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-uk-red font-bold">£499</span>
                    <span className="text-gray-500 line-through text-sm ml-2">£599</span>
                  </div>
                  <Link href="/courses/digital-marketing" className="text-sm text-uk-blue hover:text-uk-red">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 