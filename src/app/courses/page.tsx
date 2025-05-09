"use client";

import { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CourseCard from '@/components/ui/CourseCard';
import Button from '@/components/ui/Button';
import { FaSearch, FaFilter, FaChevronRight, FaSortAmountDown, FaGraduationCap } from 'react-icons/fa';

// Mock course data
const courses = [
  {
    id: 'business-management',
    title: 'Business Management Fundamentals',
    description: 'Comprehensive introduction to business management principles, organizational structures, and strategic planning.',
    imageSrc: '/images/courses/business-management.jpg',
    category: 'Business',
    duration: '12 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 1243,
    price: 499,
    discountPrice: 399,
    featured: true,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Masterclass',
    description: 'Master digital marketing strategies, SEO, social media marketing, PPC advertising, and marketing analytics.',
    imageSrc: '/images/courses/digital-marketing.jpg',
    category: 'Marketing',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 2156,
    price: 599,
    discountPrice: 499,
    featured: true,
  },
  {
    id: 'web-development',
    title: 'Web Development Bootcamp',
    description: 'Comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, and database integration.',
    imageSrc: '/images/courses/web-development.jpg',
    category: 'Technology',
    duration: '16 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 1876,
    price: 799,
    featured: false,
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Learn essential data analysis techniques, machine learning algorithms, and data visualization with Python and R.',
    imageSrc: '/images/courses/data-science.jpg',
    category: 'Technology',
    duration: '14 weeks',
    level: 'Advanced',
    rating: 4.6,
    students: 1562,
    price: 899,
    featured: false,
  },
  {
    id: 'project-management',
    title: 'Project Management Professional (PMP)',
    description: 'Prepare for the PMP certification with comprehensive training in project management methodologies and best practices.',
    imageSrc: '/images/courses/project-management.jpg',
    category: 'Business',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 1345,
    price: 699,
    featured: false,
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design Essentials',
    description: 'Master graphic design fundamentals, Adobe Creative Suite, typography, branding, and visual communication principles.',
    imageSrc: '/images/courses/graphic-design.jpg',
    category: 'Creative',
    duration: '10 weeks',
    level: 'Beginner',
    rating: 4.5,
    students: 982,
    price: 599,
    featured: false,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn essential cybersecurity concepts, threat detection, ethical hacking techniques, and security best practices.',
    imageSrc: '/images/courses/cybersecurity.jpg',
    category: 'Technology',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 1123,
    price: 799,
    featured: false,
  },
  {
    id: 'financial-accounting',
    title: 'Financial Accounting & Analysis',
    description: 'Comprehensive introduction to financial accounting principles, statements analysis, and financial reporting.',
    imageSrc: '/images/courses/financial-accounting.jpg',
    category: 'Finance',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.6,
    students: 876,
    price: 499,
    featured: false,
  },
];

const categories = [
  { id: 'all', label: 'All Categories' },
  { id: 'business', label: 'Business' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'technology', label: 'Technology' },
  { id: 'creative', label: 'Creative' },
  { id: 'finance', label: 'Finance' },
];

const levels = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

const durations = [
  { id: 'all', label: 'Any Duration' },
  { id: 'short', label: '< 8 weeks' },
  { id: 'medium', label: '8-12 weeks' },
  { id: 'long', label: '> 12 weeks' },
];

export default function CoursesPage() {
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [sortOption, setSortOption] = useState('popular');
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Filter courses based on selected filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                          course.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesLevel = selectedLevel === 'all' || 
                      course.level.toLowerCase() === selectedLevel.toLowerCase();
    
    let matchesDuration = true;
    if (selectedDuration !== 'all') {
      const weeks = parseInt(course.duration.split(' ')[0]);
      if (selectedDuration === 'short') matchesDuration = weeks < 8;
      else if (selectedDuration === 'medium') matchesDuration = weeks >= 8 && weeks <= 12;
      else if (selectedDuration === 'long') matchesDuration = weeks > 12;
    }
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });
  
  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOption === 'price-low') return (a.discountPrice || a.price) - (b.discountPrice || b.price);
    if (sortOption === 'price-high') return (b.discountPrice || b.price) - (a.discountPrice || a.price);
    if (sortOption === 'rating') return b.rating - a.rating;
    // Default: popular (by number of students)
    return b.students - a.students;
  });
  
  if (!isClient) {
    return null;
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-enhanced">
        <div className="pattern-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="container hero-content">
          <div className="text-center">
            <h1 className="text-uk-white animate-bounceIn">
              Our <span className="text-gold text-shadow-gold shimmer">Courses</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Comprehensive educational programs designed to help you achieve your academic and career goals.
            </p>
            <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#explore-courses" 
                variant="gold"
                effect="hoverglow"
                icon={<FaChevronRight />}
              >
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-2">
          <Breadcrumbs items={[{ label: 'Courses' }]} />
        </div>
      </div>
      
      {/* Main Content */}
      <section id="explore-courses" className="section bg-uk-white pattern-dots">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Education</span>
            <h2 className="section-title text-uk-blue mt-4">
              <span className="gradient-text">Find Your Perfect Course</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Browse our wide range of courses and programs designed to help you excel in your chosen field.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-10 uk-border-gradient animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-uk-blue focus:border-uk-blue"
                  />
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-uk-blue focus:border-uk-blue"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={e => setSortOption(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-uk-blue focus:border-uk-blue"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="mr-4">
                <span className="text-gray-600 font-medium flex items-center">
                  <FaFilter className="mr-2" /> Filters:
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <select
                  value={selectedLevel}
                  onChange={e => setSelectedLevel(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-uk-blue focus:border-uk-blue"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>{level.label}</option>
                  ))}
                </select>
                
                <select
                  value={selectedDuration}
                  onChange={e => setSelectedDuration(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-uk-blue focus:border-uk-blue"
                >
                  {durations.map(duration => (
                    <option key={duration.id} value={duration.id}>{duration.label}</option>
                  ))}
                </select>
                
                {(selectedCategory !== 'all' || selectedLevel !== 'all' || selectedDuration !== 'all' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                      setSelectedDuration('all');
                      setSearchQuery('');
                    }}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              Showing {sortedCourses.length} of {courses.length} courses
            </div>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedCourses.map((course, index) => (
              <div key={course.id} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
                <CourseCard
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
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {sortedCourses.length === 0 && (
            <div className="text-center py-12">
              <FaGraduationCap className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSelectedDuration('all');
                  setSearchQuery('');
                }}
                variant="primary"
              >
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* More Courses */}
          <div className="text-center mt-16">
            <Button href="/courses" variant="secondary" effect="3d">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-uk-blue-dark to-uk-blue">
        <div className="container">
          <div className="callout-ribbon p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-fadeIn">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Start Learning?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Contact our admissions team today to learn more about our courses and enrollment process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/contact" 
                  variant="gold"
                  effect="3d"
                >
                  Contact Admissions
                </Button>
                <Button 
                  href="/register" 
                  variant="white"
                  effect="hoverglow"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 