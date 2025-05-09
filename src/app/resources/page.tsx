import Link from 'next/link';
import { 
  FaBook, 
  FaFileAlt, 
  FaVideo, 
  FaPodcast, 
  FaNewspaper,
  FaCalendarAlt,
  FaLaptop,
  FaChalkboardTeacher,
  FaDownload,
  FaExternalLinkAlt
} from 'react-icons/fa';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Student Resources | UK Institute',
  description: 'Access a wealth of learning resources, study materials, and academic tools to enhance your educational journey.',
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-uk-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-uk-white mb-2">Student Resources</h1>
            <p className="text-uk-white/90 max-w-xl mx-auto">
              Enhance your learning with our comprehensive collection of educational resources and study materials.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-uk-blue mb-4">Resource Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our extensive library of learning materials designed to support your academic success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="mb-4 text-uk-blue group-hover:text-uk-red transition-colors">
                <FaBook size={36} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">E-Books & Textbooks</h3>
              <p className="text-gray-600 mb-4">
                Access our digital library of textbooks, research papers, and academic publications.
              </p>
              <Link href="/resources/ebooks" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
                Browse Library <FaExternalLinkAlt className="ml-2" size={12} />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="mb-4 text-uk-blue group-hover:text-uk-red transition-colors">
                <FaVideo size={36} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Video Lectures</h3>
              <p className="text-gray-600 mb-4">
                Watch recorded lectures, tutorials, and demonstrations from industry experts.
              </p>
              <Link href="/resources/videos" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
                View Videos <FaExternalLinkAlt className="ml-2" size={12} />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="mb-4 text-uk-blue group-hover:text-uk-red transition-colors">
                <FaFileAlt size={36} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Study Guides</h3>
              <p className="text-gray-600 mb-4">
                Download comprehensive study guides, practice tests, and exam preparation materials.
              </p>
              <Link href="/resources/study-guides" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
                Access Guides <FaExternalLinkAlt className="ml-2" size={12} />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="mb-4 text-uk-blue group-hover:text-uk-red transition-colors">
                <FaPodcast size={36} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Podcasts & Audio</h3>
              <p className="text-gray-600 mb-4">
                Listen to educational podcasts, interviews, and audio lectures on various subjects.
              </p>
              <Link href="/resources/podcasts" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
                Listen Now <FaExternalLinkAlt className="ml-2" size={12} />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="mb-4 text-uk-blue group-hover:text-uk-red transition-colors">
                <FaNewspaper size={36} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Articles & Journals</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest research papers, articles, and academic journals.
              </p>
              <Link href="/resources/articles" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
                Read Articles <FaExternalLinkAlt className="ml-2" size={12} />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="mb-4 text-uk-blue group-hover:text-uk-red transition-colors">
                <FaCalendarAlt size={36} />
              </div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Academic Calendar</h3>
              <p className="text-gray-600 mb-4">
                View important dates, deadlines, and scheduled events for the academic year.
              </p>
              <Link href="/resources/calendar" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
                View Calendar <FaExternalLinkAlt className="ml-2" size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-uk-blue mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our most popular and recently added learning resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute top-0 right-0 bg-uk-red text-white text-xs px-2 py-1 m-2 rounded">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaBook className="mr-2" />
                  <span>Business Management</span>
                </div>
                <h3 className="text-lg font-bold text-uk-blue mb-2">
                  Leadership in the Digital Age: Comprehensive Guide
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore modern leadership strategies adapted for the rapidly evolving digital business landscape.
                </p>
                <Button href="/resources/ebooks/leadership-digital-age" variant="outline" size="sm">
                  Download PDF
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="h-40 bg-gray-300 relative"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaVideo className="mr-2" />
                  <span>Digital Marketing</span>
                </div>
                <h3 className="text-lg font-bold text-uk-blue mb-2">
                  Social Media Marketing Masterclass Series
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A comprehensive video series covering effective strategies for all major social media platforms.
                </p>
                <Button href="/resources/videos/social-media-masterclass" variant="outline" size="sm">
                  Watch Series
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="h-40 bg-gray-300 relative"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaPodcast className="mr-2" />
                  <span>Career Development</span>
                </div>
                <h3 className="text-lg font-bold text-uk-blue mb-2">
                  Future-Proof Your Career: Industry Insights
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Listen to industry leaders discuss emerging trends and skills needed for the next decade.
                </p>
                <Button href="/resources/podcasts/future-proof-career" variant="outline" size="sm">
                  Listen Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/resources/all" variant="primary">
              View All Resources
            </Button>
          </div>
        </div>
      </section>
      
      {/* Study Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-uk-blue mb-4">Study Tools & Software</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access powerful tools and software to enhance your learning experience and productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="mb-4 text-uk-blue mx-auto">
                <FaLaptop size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-uk-blue mb-2">Virtual Lab Access</h3>
              <p className="text-gray-600 text-sm mb-4">
                Remote access to specialized software and virtual labs for practical learning.
              </p>
              <Link href="/resources/virtual-labs" className="text-uk-blue text-sm font-medium hover:text-uk-red">
                Access Labs
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="mb-4 text-uk-blue mx-auto">
                <FaFileAlt size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-uk-blue mb-2">Citation Generator</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tools to properly format citations and bibliographies in various academic styles.
              </p>
              <Link href="/resources/citation-tool" className="text-uk-blue text-sm font-medium hover:text-uk-red">
                Use Tool
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="mb-4 text-uk-blue mx-auto">
                <FaChalkboardTeacher size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-uk-blue mb-2">Interactive Tutorials</h3>
              <p className="text-gray-600 text-sm mb-4">
                Self-paced interactive tutorials and simulations for complex subjects.
              </p>
              <Link href="/resources/tutorials" className="text-uk-blue text-sm font-medium hover:text-uk-red">
                Start Learning
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="mb-4 text-uk-blue mx-auto">
                <FaDownload size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-uk-blue mb-2">Software Downloads</h3>
              <p className="text-gray-600 text-sm mb-4">
                Free access to educational software licenses for enrolled students.
              </p>
              <Link href="/resources/software" className="text-uk-blue text-sm font-medium hover:text-uk-red">
                View Software
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Support */}
      <section className="py-16 bg-uk-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-uk-white mb-4">Academic Support Services</h2>
            <p className="text-uk-white/90 max-w-3xl mx-auto">
              Access additional support services to help you succeed in your academic journey.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">Tutoring Services</h3>
                <p className="text-uk-white/90 mb-6">
                  Get personalized academic support from qualified tutors in various subject areas. Our tutors can help with assignments, exam preparation, and clarifying complex concepts.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-gold">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-uk-white/90">One-on-one tutoring sessions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-gold">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-uk-white/90">Small group study sessions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-gold">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-uk-white/90">Online and in-person options available</p>
                  </li>
                </ul>
                <Button href="/resources/tutoring" variant="secondary">
                  Schedule Tutoring
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">Writing Center</h3>
                <p className="text-uk-white/90 mb-6">
                  Improve your academic writing skills with support from our writing specialists. Get feedback on essays, research papers, dissertations, and other written assignments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-gold">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-uk-white/90">Paper review and feedback</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-gold">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-uk-white/90">Citation and formatting assistance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-gold">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-uk-white/90">Writing workshops and skill development</p>
                  </li>
                </ul>
                <Button href="/resources/writing-center" variant="secondary">
                  Submit Paper for Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-uk-blue mb-4">Resource FAQ</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our student resources.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-uk-blue mb-2">How do I access the digital library?</h3>
              <p className="text-gray-600">
                Students can access the digital library through their student portal using their institute credentials. The library is available 24/7 and can be accessed from any device with an internet connection.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-uk-blue mb-2">Are tutoring services free for students?</h3>
              <p className="text-gray-600">
                All enrolled students receive a certain number of free tutoring hours each semester as part of their tuition. Additional hours can be purchased at a discounted student rate if needed.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-uk-blue mb-2">Can I download resources for offline use?</h3>
              <p className="text-gray-600">
                Yes, most documents, e-books, and study guides can be downloaded for offline use. Video and audio content may be available for offline access through our mobile app, subject to copyright restrictions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-uk-blue mb-2">How do I cite resources from the Institute's library?</h3>
              <p className="text-gray-600">
                Our citation generator tool provides automatic citation formatting for all resources in our library. Simply locate the resource and click the "Cite" button to generate citations in APA, MLA, Chicago, and other formats.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/resources/faq" className="text-uk-blue font-medium hover:text-uk-red inline-flex items-center">
              View All FAQs <FaExternalLinkAlt className="ml-2" size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 