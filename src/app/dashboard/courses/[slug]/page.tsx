'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaPlay, FaFile, FaClipboardCheck, FaLock, FaCheck, FaDownload, 
  FaCalendarAlt, FaClock, FaUserGraduate, FaChartLine, FaArrowLeft, 
  FaGraduationCap, FaBook, FaPlayCircle, FaStar, FaFolderOpen
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const courseData = {
  'business-management': {
    title: 'Business Management Fundamentals',
    description: 'Learn key concepts in modern business management including leadership, strategy, and operational excellence.',
    longDescription: 'This comprehensive course covers all aspects of business management fundamentals, from organizational structure to strategic planning. You\'ll learn from industry experts with real-world case studies and practical exercises designed to build your management capabilities. Whether you\'re looking to advance your career or develop essential business skills, this course provides the knowledge and tools you need to succeed in today\'s competitive business environment.',
    banner: '/images/courses/business-management-banner.jpg',
    instructor: {
      name: 'Dr. James Wilson',
      title: 'Professor of Business Management',
      image: '/images/instructors/james-wilson.jpg',
      bio: 'Dr. Wilson has over 20 years of experience in business management and leadership, with a PhD from Harvard Business School.'
    },
    progress: 65,
    duration: '12 weeks',
    level: 'Intermediate',
    enrolled: 1245,
    rating: 4.8,
    reviews: 186,
    lastUpdated: 'March 15, 2023',
    certification: true,
    modules: [
      {
        title: 'Introduction to Business Management',
        complete: true,
        lessons: [
          { title: 'Course Overview and Objectives', type: 'video', duration: '15 min', complete: true },
          { title: 'The Evolution of Management Theory', type: 'video', duration: '25 min', complete: true },
          { title: 'Core Management Functions', type: 'video', duration: '22 min', complete: true },
          { title: 'Module 1 Quiz', type: 'quiz', duration: '20 min', complete: true }
        ]
      },
      {
        title: 'Organizational Structure and Culture',
        complete: true,
        lessons: [
          { title: 'Types of Organizational Structures', type: 'video', duration: '28 min', complete: true },
          { title: 'Building and Maintaining Organizational Culture', type: 'video', duration: '26 min', complete: true },
          { title: 'Organizational Change Management', type: 'video', duration: '24 min', complete: true },
          { title: 'Case Study: Organizational Redesign', type: 'document', duration: '45 min', complete: true },
          { title: 'Module 2 Quiz', type: 'quiz', duration: '20 min', complete: true }
        ]
      },
      {
        title: 'Leadership and Decision Making',
        complete: false,
        lessons: [
          { title: 'Leadership Styles and Their Impact', type: 'video', duration: '26 min', complete: true },
          { title: 'Effective Decision-Making Processes', type: 'video', duration: '24 min', complete: true },
          { title: 'Ethical Leadership', type: 'video', duration: '22 min', complete: false },
          { title: 'Leadership in Practice: Assignment', type: 'assignment', duration: '2 hours', complete: false },
          { title: 'Module 3 Quiz', type: 'quiz', duration: '20 min', complete: false }
        ]
      },
      {
        title: 'Strategic Planning and Management',
        complete: false,
        lessons: [
          { title: 'The Strategic Planning Process', type: 'video', duration: '29 min', complete: false, locked: true },
          { title: 'SWOT Analysis and Strategic Tools', type: 'video', duration: '26 min', complete: false, locked: true },
          { title: 'Implementing and Evaluating Strategy', type: 'video', duration: '24 min', complete: false, locked: true },
          { title: 'Strategic Plan Development: Group Project', type: 'project', duration: '4 hours', complete: false, locked: true },
          { title: 'Module 4 Quiz', type: 'quiz', duration: '20 min', complete: false, locked: true }
        ]
      },
      {
        title: 'Course Conclusion',
        complete: false,
        lessons: [
          { title: 'Course Summary', type: 'video', duration: '18 min', complete: false, locked: true },
          { title: 'Final Examination', type: 'exam', duration: '2 hours', complete: false, locked: true },
          { title: 'Next Steps and Further Learning Resources', type: 'document', duration: '10 min', complete: false, locked: true }
        ]
      }
    ],
    resources: [
      { title: 'Business Management Handbook', type: 'PDF', size: '4.2 MB' },
      { title: 'Leadership Case Studies Collection', type: 'PDF', size: '3.8 MB' },
      { title: 'Strategic Planning Templates', type: 'ZIP', size: '2.1 MB' },
      { title: 'Recommended Reading List', type: 'PDF', size: '1.5 MB' }
    ],
    nextCourse: 'Advanced Business Strategy'
  },
  'digital-marketing': {
    title: 'Digital Marketing Essentials',
    description: 'Master the fundamentals of digital marketing including SEO, content marketing, and social media strategies.',
    progress: 32,
    instructor: {
      name: 'Prof. Sarah Johnson',
      title: 'Digital Marketing Specialist',
      image: '/images/instructors/sarah-johnson.jpg'
    }
  },
  'project-management': {
    title: 'Project Management Professional',
    description: 'Prepare for the PMP certification with comprehensive training on project management methodologies.',
    progress: 12,
    instructor: {
      name: 'Dr. Michael Brown',
      title: 'PMP Certified Instructor',
      image: '/images/instructors/michael-brown.jpg'
    }
  }
};

const LessonIcon = ({ type, complete, locked }: { type: string; complete?: boolean; locked?: boolean }) => {
  if (locked) {
    return <FaLock className="text-gray-400" />;
  }
  
  if (complete) {
    return <FaCheck className="text-green-500" />;
  }
  
  switch (type) {
    case 'video':
      return <FaPlay className="text-uk-blue" />;
    case 'document':
      return <FaFile className="text-uk-blue" />;
    case 'quiz':
      return <FaClipboardCheck className="text-uk-red" />;
    case 'assignment':
      return <FaClipboardCheck className="text-orange-500" />;
    case 'project':
      return <FaFolderOpen className="text-purple-500" />;
    case 'exam':
      return <FaClipboardCheck className="text-red-500" />;
    default:
      return <FaFile className="text-uk-blue" />;
  }
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purposes, we'll just use our static data
    if (params.slug && courseData[params.slug as keyof typeof courseData]) {
      setCourse(courseData[params.slug as keyof typeof courseData]);
    }
    setLoading(false);
  }, [params.slug]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course Not Found</h1>
          <p className="mt-2 text-gray-600">The course you're looking for doesn't exist or has been removed.</p>
          <Button href="/dashboard" variant="primary" className="mt-4">
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Course Banner */}
      <div className="relative h-64 md:h-80 bg-uk-blue-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-uk-blue-dark to-uk-blue opacity-90">
          {course.banner && (
            <Image
              src={course.banner}
              alt={course.title}
              fill
              className="object-cover mix-blend-overlay opacity-50"
              unoptimized
            />
          )}
          <div className="pattern-overlay opacity-10"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex flex-col md:flex-row md:items-center text-white">
            <Link href="/dashboard" className="flex items-center text-white/80 hover:text-white mb-4 md:mb-0 md:mr-6 transition-colors">
              <FaArrowLeft className="mr-2" />
              Back to Dashboard
            </Link>
            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-uk-white/80 mt-2 max-w-2xl">{course.description}</p>
              
              <div className="flex flex-wrap items-center mt-4 text-sm text-white/80">
                {course.instructor && (
                  <div className="flex items-center mr-6 mb-2">
                    <FaUserGraduate className="mr-1" />
                    <span>{course.instructor.name}</span>
                  </div>
                )}
                {course.level && (
                  <div className="flex items-center mr-6 mb-2">
                    <FaGraduationCap className="mr-1" />
                    <span>{course.level}</span>
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center mr-6 mb-2">
                    <FaClock className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                )}
                {course.enrolled && (
                  <div className="flex items-center mr-6 mb-2">
                    <FaBook className="mr-1" />
                    <span>{course.enrolled} students</span>
                  </div>
                )}
                {course.rating && (
                  <div className="flex items-center mb-2">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(course.rating) ? "text-gold" : "text-white/30"}
                        />
                      ))}
                    </div>
                    <span>{course.rating} ({course.reviews} reviews)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'My Courses', href: '/dashboard/courses' },
              { label: course.title }
            ]}
          />
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-uk-blue">
              <FaChartLine className="mr-2" />
              <span className="font-medium">Your Progress</span>
            </div>
            <span className="text-uk-blue font-bold">{course.progress}% Complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-uk-blue to-uk-blue-light rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-1 scrollbar-hidden">
            <button 
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-2 font-medium text-sm rounded-md ${
                activeTab === 'curriculum' 
                  ? 'bg-uk-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Curriculum
            </button>
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-medium text-sm rounded-md ${
                activeTab === 'overview' 
                  ? 'bg-uk-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('instructor')}
              className={`px-4 py-2 font-medium text-sm rounded-md ${
                activeTab === 'instructor' 
                  ? 'bg-uk-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Instructor
            </button>
            <button 
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 font-medium text-sm rounded-md ${
                activeTab === 'resources' 
                  ? 'bg-uk-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Resources
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2">
            {activeTab === 'curriculum' && (
              <Card variant="elevated" className="animate-fadeIn">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-uk-blue">Course Curriculum</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {course.modules?.map((module: any, moduleIndex: number) => (
                    <div key={moduleIndex} className="animate-fadeIn" style={{ animationDelay: `${moduleIndex * 0.1}s` }}>
                      <div className="px-6 py-4 bg-gray-50">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900">
                            {module.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            {module.complete ? (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Complete</span>
                            ) : (
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">In Progress</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {module.lessons?.map((lesson: any, lessonIndex: number) => (
                          <div key={lessonIndex} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                              <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                <LessonIcon type={lesson.type} complete={lesson.complete} locked={lesson.locked} />
                              </div>
                              <div>
                                <h4 className={`text-sm font-medium ${lesson.locked ? 'text-gray-400' : 'text-gray-900'}`}>
                                  {lesson.title}
                                </h4>
                                <div className="flex items-center mt-1">
                                  <span className={`text-xs capitalize ${
                                    lesson.type === 'video' ? 'text-uk-blue' :
                                    lesson.type === 'quiz' ? 'text-uk-red' :
                                    lesson.type === 'assignment' ? 'text-orange-500' :
                                    lesson.type === 'project' ? 'text-purple-500' :
                                    'text-gray-500'
                                  }`}>
                                    {lesson.type}
                                  </span>
                                  <span className="mx-2 text-gray-300">•</span>
                                  <span className="text-xs text-gray-500">
                                    {lesson.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              {lesson.locked ? (
                                <span className="text-xs text-gray-400">
                                  <FaLock />
                                </span>
                              ) : lesson.complete ? (
                                <span className="text-xs text-green-500">
                                  <FaCheck />
                                </span>
                              ) : (
                                <Button 
                                  variant="primary" 
                                  size="sm"
                                  href={`/dashboard/courses/${params.slug}/${moduleIndex}/${lessonIndex}`}
                                  effect="hoverglow"
                                  icon={lesson.type === 'video' ? <FaPlayCircle className="mr-1" /> : undefined}
                                >
                                  {lesson.type === 'video' ? 'Watch' : 
                                   lesson.type === 'quiz' ? 'Start Quiz' : 
                                   lesson.type === 'assignment' ? 'View Assignment' : 
                                   lesson.type === 'project' ? 'Start Project' : 
                                   'View'}
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
            
            {activeTab === 'overview' && (
              <Card variant="elevated" className="animate-fadeIn">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-uk-blue">Course Overview</h2>
                </div>
                <div className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-6">{course.longDescription}</p>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">What You'll Learn</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Understand core business management principles and frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Develop effective organizational structures</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Apply leadership theories to real-world scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Create and implement strategic business plans</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Analyze business problems using proven methodologies</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Make ethical decisions in complex business environments</span>
                      </li>
                    </ul>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Course Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="text-base font-medium">{course.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Level</p>
                          <p className="text-base font-medium">{course.level}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Last Updated</p>
                          <p className="text-base font-medium">{course.lastUpdated}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Certification</p>
                          <p className="text-base font-medium">{course.certification ? 'Yes, Certificate of Completion' : 'No'}</p>
                        </div>
                      </div>
                    </div>
                    
                    {course.nextCourse && (
                      <div className="bg-uk-blue/5 p-6 rounded-lg border border-uk-blue/20">
                        <h3 className="text-lg font-bold text-uk-blue mb-2">Ready for the Next Step?</h3>
                        <p className="mb-4">After completing this course, we recommend continuing your learning journey with:</p>
                        <div className="flex items-center">
                          <div className="mr-4">
                            <FaGraduationCap className="text-uk-blue h-12 w-12" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{course.nextCourse}</h4>
                            <p className="text-sm text-gray-600 mb-2">Take your skills to the advanced level and become an expert</p>
                            <Button 
                              variant="outline" 
                              size="sm"
                              href={`/courses/${course.nextCourse.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )}
            
            {activeTab === 'instructor' && course.instructor && (
              <Card variant="elevated" className="animate-fadeIn">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-uk-blue">Meet Your Instructor</h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden uk-border-gradient p-0.5">
                        <Image 
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          fill
                          className="object-cover rounded-full"
                          unoptimized
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{course.instructor.name}</h3>
                      <p className="text-gray-600 font-medium">{course.instructor.title}</p>
                      
                      {course.instructor.bio && (
                        <p className="mt-4 text-gray-700">{course.instructor.bio}</p>
                      )}
                      
                      <div className="mt-4 flex space-x-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          href={`/instructors/${course.instructor.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          View Profile
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          href={`/messages/new?to=${course.instructor.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Contact Instructor
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
            
            {activeTab === 'resources' && course.resources && (
              <Card variant="elevated" className="animate-fadeIn">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-uk-blue">Course Resources</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {course.resources.map((resource: any, index: number) => (
                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                            {resource.type === 'PDF' ? (
                              <FaFile className="text-uk-red" />
                            ) : resource.type === 'ZIP' ? (
                              <FaFile className="text-uk-blue" />
                            ) : (
                              <FaFile className="text-gray-500" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{resource.title}</h4>
                            <p className="text-xs text-gray-500">{resource.type} • {resource.size}</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          effect="hoverglow"
                          icon={<FaDownload className="mr-1" size={12} />}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Continue Learning Card */}
            <Card variant="elevated" className="animate-fadeIn overflow-hidden">
              <div className="bg-gradient-to-r from-uk-blue to-uk-blue-light p-4 text-white">
                <h3 className="font-bold">Continue Learning</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">Pick up where you left off:</p>
                
                {course.modules?.map((module: any) => {
                  const nextLesson = module.lessons.find((lesson: any) => !lesson.complete && !lesson.locked);
                  if (nextLesson) {
                    return (
                      <div key={module.title} className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Next Lesson</p>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">{nextLesson.title}</h4>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <span className="capitalize">{nextLesson.type}</span>
                          <span className="mx-2">•</span>
                          <span>{nextLesson.duration}</span>
                        </div>
                        <Button
                          variant="primary"
                          fullWidth
                          effect="3d"
                          icon={<FaPlayCircle className="mr-1" />}
                        >
                          Continue Learning
                        </Button>
                        <div className="mt-2 text-center">
                          <p className="text-xs text-gray-500">Module: {module.title}</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </Card>
            
            {/* Course Stats Card */}
            <Card variant="bordered" className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">Your Course Stats</h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Lessons Completed</span>
                      <span className="font-medium text-uk-blue">
                        {course.modules?.reduce((acc: number, module: any) => 
                          acc + module.lessons.filter((lesson: any) => lesson.complete).length, 0
                        )}
                        {' / '}
                        {course.modules?.reduce((acc: number, module: any) => 
                          acc + module.lessons.length, 0
                        )}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Modules Completed</span>
                      <span className="font-medium text-uk-blue">
                        {course.modules?.filter((module: any) => module.complete).length}
                        {' / '}
                        {course.modules?.length}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Time Spent</span>
                      <span className="font-medium text-uk-blue">12h 45m</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Assignments Completed</span>
                      <span className="font-medium text-uk-blue">
                        {course.modules?.reduce((acc: number, module: any) => 
                          acc + module.lessons.filter((lesson: any) => 
                            lesson.complete && (lesson.type === 'assignment' || lesson.type === 'project')
                          ).length, 0
                        )}
                        {' / '}
                        {course.modules?.reduce((acc: number, module: any) => 
                          acc + module.lessons.filter((lesson: any) => 
                            lesson.type === 'assignment' || lesson.type === 'project'
                          ).length, 0
                        )}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Quizzes Passed</span>
                      <span className="font-medium text-uk-blue">
                        {course.modules?.reduce((acc: number, module: any) => 
                          acc + module.lessons.filter((lesson: any) => 
                            lesson.complete && lesson.type === 'quiz'
                          ).length, 0
                        )}
                        {' / '}
                        {course.modules?.reduce((acc: number, module: any) => 
                          acc + module.lessons.filter((lesson: any) => lesson.type === 'quiz').length, 0
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Need Help Card */}
            <Card variant="glass" className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  If you're having trouble with the course or have questions, our support team is here to help.
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    fullWidth 
                    href="/dashboard/support"
                  >
                    Contact Support
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    href={`/dashboard/courses/${params.slug}/discussion`}
                  >
                    Discussion Forum
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 