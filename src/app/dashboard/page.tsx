'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaCertificate, FaBell, FaCalendarAlt, FaClock, FaDownload, FaPlayCircle, FaLock, FaCheck, FaChartLine, FaGraduationCap, FaUserCircle, FaSearch, FaRegBell, FaTh, FaSignOutAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Student Dashboard | UK Institute',
  description: 'Access your courses, certificates, and learning progress in your personalized student dashboard.',
};

const enrolledCourses = [
  {
    id: 1,
    title: 'Business Management Fundamentals',
    slug: 'business-management',
    description: 'Learn key concepts in modern business management including leadership, strategy, and operational excellence.',
    progress: 65,
    nextLesson: 'Strategic Planning and Management',
    dueDate: 'May 30, 2023',
    isNew: false,
    instructor: 'Dr. James Wilson'
  },
  {
    id: 2,
    title: 'Digital Marketing Essentials',
    slug: 'digital-marketing',
    description: 'Master the fundamentals of digital marketing including SEO, content marketing, and social media strategies.',
    progress: 32,
    nextLesson: 'Social Media Marketing Strategies',
    dueDate: 'June 15, 2023',
    isNew: true,
    instructor: 'Prof. Sarah Johnson'
  },
  {
    id: 3,
    title: 'Project Management Professional',
    slug: 'project-management',
    description: 'Prepare for the PMP certification with comprehensive training on project management methodologies.',
    progress: 12,
    nextLesson: 'Risk Management Fundamentals',
    dueDate: 'July 10, 2023',
    isNew: false,
    instructor: 'Dr. Michael Brown'
  }
];

const certificates = [
  {
    id: 1,
    title: 'Introduction to Business Strategy',
    issueDate: 'April 15, 2023',
    credential: 'UK-CERT-2023-45678',
    imageUrl: '/images/certificates/business-strategy.jpg'
  }
];

const notifications = [
  {
    id: 1,
    title: 'New Course Material Available',
    message: 'New materials have been added to Business Management Fundamentals.',
    date: '2 hours ago',
    isRead: false
  },
  {
    id: 2,
    title: 'Assignment Graded',
    message: 'Your assignment "Marketing Plan Analysis" has been graded.',
    date: '1 day ago',
    isRead: false
  },
  {
    id: 3,
    title: 'New Comment on Your Discussion',
    message: 'Prof. Johnson commented on your discussion post.',
    date: '3 days ago',
    isRead: true
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Live Q&A: Business Strategy',
    date: 'May 24, 2023',
    time: '7:00 PM - 8:30 PM GMT',
    description: 'Join Dr. James Wilson for a live Q&A session on business strategy implementation.',
  },
  {
    id: 2,
    title: 'Workshop: Marketing Analytics',
    date: 'May 27, 2023',
    time: '5:00 PM - 7:00 PM GMT',
    description: 'Hands-on workshop on using analytics tools for marketing decision making.',
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-uk-blue-dark to-uk-blue py-8 relative">
        <div className="pattern-overlay opacity-10"></div>
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: `${Math.random() * 10 + 3}px`,
                height: `${Math.random() * 10 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-white mr-4 uk-border-gradient p-0.5">
                <div className="absolute inset-0 bg-gray-300 rounded-full overflow-hidden">
                  <Image 
                    src="/images/avatars/default-avatar.jpg" 
                    alt="User profile"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white animate-fadeIn">Welcome back, <span className="text-gold shimmer">John!</span></h1>
                <p className="text-uk-white/80">Student ID: UK-2023-78945</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="white" 
                size="sm" 
                href="/dashboard/profile"
                effect="hoverglow"
              >
                <FaUserCircle className="mr-1" />
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white hover:bg-white/10"
              >
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-1 md:space-x-4 overflow-x-auto py-2 scrollbar-hidden">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeTab === 'overview' 
                    ? 'bg-uk-blue/10 text-uk-blue' 
                    : 'text-gray-600 hover:text-uk-blue hover:bg-gray-100'
                }`}
              >
                <FaTh className="inline mr-1 -mt-1" size={14} />
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeTab === 'courses' 
                    ? 'bg-uk-blue/10 text-uk-blue' 
                    : 'text-gray-600 hover:text-uk-blue hover:bg-gray-100'
                }`}
              >
                <FaBook className="inline mr-1 -mt-1" size={14} />
                My Courses
              </button>
              <button 
                onClick={() => setActiveTab('certificates')}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeTab === 'certificates' 
                    ? 'bg-uk-blue/10 text-uk-blue' 
                    : 'text-gray-600 hover:text-uk-blue hover:bg-gray-100'
                }`}
              >
                <FaCertificate className="inline mr-1 -mt-1" size={14} />
                Certificates
              </button>
              <button 
                onClick={() => setActiveTab('progress')}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeTab === 'progress' 
                    ? 'bg-uk-blue/10 text-uk-blue' 
                    : 'text-gray-600 hover:text-uk-blue hover:bg-gray-100'
                }`}
              >
                <FaChartLine className="inline mr-1 -mt-1" size={14} />
                My Progress
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-uk-blue rounded-full hover:bg-gray-100">
                <FaSearch />
              </button>
              <button className="p-2 text-gray-500 hover:text-uk-blue rounded-full hover:bg-gray-100 relative">
                <FaRegBell />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-uk-red"></span>
              </button>
              <button className="p-2 text-gray-500 hover:text-uk-red rounded-full hover:bg-gray-100">
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[{ label: 'Dashboard' }]}
          />
        </div>
      </div>
      
      {/* Dashboard Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-3d animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <Card variant="elevated" className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-uk-blue/10 text-uk-blue mr-4">
                  <FaBook size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-uk-blue">3</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="card-3d animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <Card variant="elevated" className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-uk-red/10 text-uk-red mr-4">
                  <FaPlayCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours Learned</p>
                  <p className="text-2xl font-bold text-uk-blue">42</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="card-3d animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <Card variant="elevated" className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-gold/10 text-gold mr-4">
                  <FaCertificate size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificates</p>
                  <p className="text-2xl font-bold text-uk-blue">1</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="card-3d animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Card variant="elevated" className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                  <FaCheck size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completed Modules</p>
                  <p className="text-2xl font-bold text-uk-blue">12</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* My Courses */}
            <Card variant="elevated" className="mb-8">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-uk-blue">My Courses</h2>
                <Link href="/dashboard/courses" className="text-sm text-uk-blue hover:text-uk-red transition-colors">
                  View all courses
                </Link>
              </div>
              
              <div className="p-6 space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="glass-card animate-fadeIn">
                    <Card variant="bordered" className="overflow-hidden h-full transition-transform hover:scale-[1.01]">
                      <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1 relative h-48 md:h-auto">
                          <div className="absolute inset-0 bg-gray-300">
                            <Image 
                              src={`/images/courses/${course.slug}.jpg`} 
                              alt={course.title}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          {course.isNew && (
                            <div className="absolute top-2 left-2 bg-uk-red text-white text-xs px-2 py-1 rounded">NEW</div>
                          )}
                        </div>
                        <div className="md:col-span-3 p-6">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-uk-blue">{course.title}</h3>
                            <Link href={`/dashboard/courses/${course.slug}`} className="text-sm text-uk-blue hover:text-uk-red transition-colors">
                              View Course
                            </Link>
                          </div>
                          <p className="text-sm text-gray-600 my-2">{course.description}</p>
                          
                          <div className="flex items-center text-xs text-gray-500 mt-2 mb-4">
                            <FaGraduationCap className="mr-1" />
                            <span>Instructor: {course.instructor}</span>
                          </div>
                          
                          <div className="mt-4 mb-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-medium text-gray-700">Progress</span>
                              <span className="text-xs font-medium text-uk-blue">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-gradient-to-r from-uk-blue to-uk-blue-light h-2.5 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:justify-between mt-4 space-y-2 sm:space-y-0">
                            <div>
                              <p className="text-xs text-gray-500">Next Lesson:</p>
                              <p className="text-sm font-medium text-gray-800">{course.nextLesson}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Due Date:</p>
                              <p className="text-sm font-medium text-gray-800">{course.dueDate}</p>
                            </div>
                            <Button 
                              href={`/dashboard/courses/${course.slug}/continue`} 
                              variant="primary"
                              size="sm"
                              effect="hoverglow"
                            >
                              Continue Learning
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* My Certificates */}
            <Card variant="elevated" className="mb-8">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-uk-blue">My Certificates</h2>
              </div>
              <div className="p-6">
                {certificates.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((certificate) => (
                      <div key={certificate.id} className="card-3d animate-fadeIn">
                        <Card variant="bordered" className="overflow-hidden">
                          <div className="relative h-48">
                            <div className="absolute inset-0 bg-gray-300">
                              <Image 
                                src={certificate.imageUrl || '/images/certificates/default.jpg'} 
                                alt={certificate.title}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="font-bold text-white text-shadow-sm">{certificate.title}</h3>
                              <p className="text-sm text-white/80">Credential: {certificate.credential}</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-500 mb-3">Issued: {certificate.issueDate}</p>
                            <div className="flex justify-between">
                              <Button variant="outline" size="sm" effect="3d">
                                View
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center" effect="3d">
                                <FaDownload className="mr-1" size={12} />
                                Download
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FaCertificate className="text-gray-400" size={24} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No Certificates Yet</h3>
                    <p className="text-gray-500 mb-4">Complete a course to earn your first certificate</p>
                    <Button href="/courses" variant="primary" size="sm">
                      Explore Courses
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
          
          <div>
            {/* Notifications */}
            <Card variant="elevated" className="mb-8">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-uk-blue">Notifications</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-uk-blue text-white">
                  {notifications.filter(n => !n.isRead).length} New
                </span>
              </div>
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-4 ${!notification.isRead ? 'bg-blue-50' : ''} animate-fadeIn`}>
                    <div className="flex">
                      <div className="flex-shrink-0 mt-0.5">
                        <FaBell className={!notification.isRead ? 'text-uk-blue' : 'text-gray-400'} />
                      </div>
                      <div className="ml-3">
                        <h3 className={`text-sm font-medium ${!notification.isRead ? 'text-uk-blue' : 'text-gray-800'}`}>
                          {notification.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-gray-100">
                <Link href="/dashboard/notifications" className="text-sm text-uk-blue hover:text-uk-red transition-colors">
                  View all notifications
                </Link>
              </div>
            </Card>
            
            {/* Upcoming Events */}
            <Card variant="elevated" className="mb-8">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-uk-blue">Upcoming Events</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="p-4 animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-uk-blue/10 flex items-center justify-center">
                          <FaCalendarAlt className="text-uk-blue" size={16} />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-uk-blue">{event.title}</h3>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <FaCalendarAlt className="mr-1" size={10} />
                          {event.date}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center">
                          <FaClock className="mr-1" size={10} />
                          {event.time}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                        <button className="mt-2 text-sm text-uk-blue hover:text-uk-red transition-colors">
                          Add to calendar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-gray-100">
                <Link href="/dashboard/events" className="text-sm text-uk-blue hover:text-uk-red transition-colors">
                  View all events
                </Link>
              </div>
            </Card>
            
            {/* Recommended Courses */}
            <Card variant="elevated">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-uk-blue">Recommended For You</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="card-3d animate-fadeIn">
                  <Card variant="bordered" className="overflow-hidden">
                    <div className="relative h-36">
                      <div className="absolute inset-0 bg-gray-300">
                        <Image 
                          src="/images/courses/advanced-project-management.jpg" 
                          alt="Advanced Project Management"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4">
                          <h3 className="font-bold text-white text-shadow-sm">Advanced Project Management</h3>
                          <p className="text-xs text-white/80">The perfect next step after your project management introduction</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <Button href="/courses/advanced-project-management" variant="primary" size="sm" fullWidth effect="hoverglow">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </div>
                
                <div className="card-3d animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                  <Card variant="bordered" className="overflow-hidden">
                    <div className="relative h-36">
                      <div className="absolute inset-0 bg-gray-300">
                        <Image 
                          src="/images/courses/data-analytics.jpg" 
                          alt="Data Analytics Fundamentals"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4">
                          <h3 className="font-bold text-white text-shadow-sm">Data Analytics Fundamentals</h3>
                          <p className="text-xs text-white/80">Learn to analyze and visualize data to make better business decisions</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <Button href="/courses/data-analytics" variant="primary" size="sm" fullWidth effect="hoverglow">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 