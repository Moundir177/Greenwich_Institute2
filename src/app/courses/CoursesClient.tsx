"use client";

import { useState } from 'react';
import { FaFilter, FaSearch, FaGraduationCap } from 'react-icons/fa';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CourseCard from '@/components/ui/CourseCard';
import Button from '@/components/ui/Button';

interface Course {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  price: number;
  discountPrice?: number;
  featured: boolean;
}

interface Category {
  id: string;
  label: string;
}

interface Level {
  id: string;
  label: string;
}

interface Duration {
  id: string;
  label: string;
}

interface CoursesClientProps {
  courses: Course[];
  categories: Category[];
  levels: Level[];
  durations: Duration[];
}

export default function CoursesClient({ courses, categories, levels, durations }: CoursesClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter courses based on active filter and search query
  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeFilter === 'all' || 
      course.category.toLowerCase() === activeFilter.toLowerCase();
    
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-uk-blue py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-uk-blue via-uk-blue/90 to-uk-blue/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('/images/courses/courses-hero.jpg')] bg-cover bg-center"
            style={{ opacity: 0.2 }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-uk-white mb-6">Our Courses</h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto">
              Discover our range of professional courses designed to help you advance your career
            </p>
          </div>
        </div>
      </section>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Courses' }]}
          />
        </div>
      </div>
      
      {/* Course Listing Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-uk-blue mb-4 flex items-center">
                    <FaFilter className="mr-2" />
                    Filters
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Course Category</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveFilter(category.id)}
                          className={`text-sm w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeFilter === category.id
                              ? 'bg-uk-blue/10 text-uk-blue font-medium'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Level</h3>
                    <div className="space-y-2">
                      {levels.map(level => (
                        <div key={level.id} className="flex items-center">
                          <input
                            id={`level-${level.id}`}
                            name="level"
                            type="checkbox"
                            className="h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded"
                          />
                          <label htmlFor={`level-${level.id}`} className="ml-2 text-sm text-gray-600">
                            {level.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Duration</h3>
                    <div className="space-y-2">
                      {durations.map(duration => (
                        <div key={duration.id} className="flex items-center">
                          <input
                            id={`duration-${duration.id}`}
                            name="duration"
                            type="checkbox"
                            className="h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded"
                          />
                          <label htmlFor={`duration-${duration.id}`} className="ml-2 text-sm text-gray-600">
                            {duration.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded"
              >
                <FaFilter />
                {filtersOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {filtersOpen && (
                <div className="mt-4 bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Course Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveFilter(category.id)}
                          className={`text-xs px-3 py-1 rounded-full transition-colors ${
                            activeFilter === category.id
                              ? 'bg-uk-blue text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Level</h3>
                      <div className="space-y-2">
                        {levels.map(level => (
                          <div key={level.id} className="flex items-center">
                            <input
                              id={`mobile-level-${level.id}`}
                              name="level"
                              type="checkbox"
                              className="h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded"
                            />
                            <label htmlFor={`mobile-level-${level.id}`} className="ml-2 text-xs text-gray-600">
                              {level.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Duration</h3>
                      <div className="space-y-2">
                        {durations.map(duration => (
                          <div key={duration.id} className="flex items-center">
                            <input
                              id={`mobile-duration-${duration.id}`}
                              name="duration"
                              type="checkbox"
                              className="h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded"
                            />
                            <label htmlFor={`mobile-duration-${duration.id}`} className="ml-2 text-xs text-gray-600">
                              {duration.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Main Content */}
            <div className="flex-grow">
              {/* Search and Results Count */}
              <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
                <div className="relative flex-grow max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                  />
                </div>
                
                <div className="text-sm text-gray-600 flex items-center">
                  <span>
                    Showing <span className="font-medium">{filteredCourses.length}</span> of{' '}
                    <span className="font-medium">{courses.length}</span> courses
                  </span>
                </div>
              </div>
              
              {/* Featured Courses */}
              {filteredCourses.some(course => course.featured) && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-uk-blue mb-6 flex items-center">
                    <FaGraduationCap className="mr-2" />
                    Featured Courses
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCourses
                      .filter(course => course.featured)
                      .map(course => (
                        <CourseCard
                          key={course.id}
                          id={course.id}
                          title={course.title}
                          description={course.description}
                          imageSrc={course.imageSrc}
                          category={course.category}
                          duration={course.duration}
                          level={course.level}
                          rating={course.rating}
                          students={course.students}
                          price={course.price}
                          discountPrice={course.discountPrice}
                          featured={course.featured}
                        />
                      ))}
                  </div>
                </div>
              )}
              
              {/* All Courses */}
              <div>
                <h2 className="text-xl font-bold text-uk-blue mb-6">All Courses</h2>
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses
                      .filter(course => !course.featured)
                      .map(course => (
                        <CourseCard
                          key={course.id}
                          id={course.id}
                          title={course.title}
                          description={course.description}
                          imageSrc={course.imageSrc}
                          category={course.category}
                          duration={course.duration}
                          level={course.level}
                          rating={course.rating}
                          students={course.students}
                          price={course.price}
                          discountPrice={course.discountPrice}
                          featured={false}
                        />
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No courses found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setActiveFilter('all');
                        setSearchQuery('');
                      }}
                      className="mt-4 text-uk-blue hover:text-uk-red"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">Course Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer courses across a wide range of disciplines to help you achieve your educational and career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="bg-uk-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Business</h3>
              <p className="text-gray-600 mb-4">Courses in management, entrepreneurship, leadership, and business strategy.</p>
              <Button href="/courses?category=business" variant="outline">
                Explore Business Courses
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="bg-uk-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Technology</h3>
              <p className="text-gray-600 mb-4">Programming, data science, web development, and other technical skills.</p>
              <Button href="/courses?category=technology" variant="outline">
                Explore Tech Courses
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="bg-uk-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Design</h3>
              <p className="text-gray-600 mb-4">Graphic design, UX/UI, digital media, and creative arts courses.</p>
              <Button href="/courses?category=design" variant="outline">
                Explore Design Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Benefits */}
      <section className="py-16 bg-uk-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">Why Our Courses Stand Out</h2>
            <p className="text-lg text-uk-white/90 max-w-3xl mx-auto">
              We're committed to providing exceptional educational experiences that prepare you for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gold rounded-full mb-4">
                <svg className="w-6 h-6 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-white mb-2">Expert Instructors</h3>
              <p className="text-uk-white/80">Learn from industry professionals with years of practical experience</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gold rounded-full mb-4">
                <svg className="w-6 h-6 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-white mb-2">Practical Focus</h3>
              <p className="text-uk-white/80">Hands-on projects and real-world case studies to apply what you learn</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gold rounded-full mb-4">
                <svg className="w-6 h-6 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-white mb-2">Flexible Learning</h3>
              <p className="text-uk-white/80">Study at your own pace with on-demand video lectures and resources</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gold rounded-full mb-4">
                <svg className="w-6 h-6 text-uk-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-uk-white mb-2">Community Support</h3>
              <p className="text-uk-white/80">Connect with fellow students and instructors for collaboration and networking</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our courses and programs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">How are courses structured?</h3>
              <p className="text-gray-600">
                Our courses typically include video lectures, reading materials, interactive quizzes, hands-on projects, and peer discussions. Most courses are divided into weekly modules with clear learning objectives and assessments.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">What are the prerequisites for enrollment?</h3>
              <p className="text-gray-600">
                Prerequisites vary by course. Some beginner-level courses have no prerequisites, while advanced courses may require prior knowledge or completion of prerequisite courses. Specific requirements are listed on each course page.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">Are there payment plans available?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment plans for many of our courses. You can pay the full amount upfront or choose a monthly installment plan. Some courses may also be eligible for scholarships or financial aid.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-uk-blue mb-2">What kind of support do students receive?</h3>
              <p className="text-gray-600">
                Students receive comprehensive support including access to instructors through discussion forums and office hours, technical support, and peer learning communities. We also offer career services and academic advising.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact an Advisor
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 