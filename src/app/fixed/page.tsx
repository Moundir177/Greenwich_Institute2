import SimpleHero from '@/components/home/SimpleHero';
import Link from 'next/link';

export default function FixedPage() {
  return (
    <>
      <SimpleHero />
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uk-blue">Why Choose UK Institute</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We provide world-class education with a focus on practical skills and industry relevance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 shadow-sm">
              <div className="bg-uk-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Accredited Courses</h3>
              <p className="text-gray-600">All our courses are fully accredited and recognized internationally</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 shadow-sm">
              <div className="bg-uk-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of practical experience</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 shadow-sm">
              <div className="bg-uk-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Career Support</h3>
              <p className="text-gray-600">Comprehensive career services to help you achieve your professional goals</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 shadow-sm">
              <div className="bg-uk-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-uk-blue mb-2">Global Community</h3>
              <p className="text-gray-600">Join a diverse community of students and alumni from around the world</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-uk-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto">
              Take the first step towards a brighter future with our world-class courses and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-uk-red hover:bg-uk-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uk-red"
              >
                Explore Courses
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-uk-blue bg-uk-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uk-blue"
              >
                Contact Advisors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 