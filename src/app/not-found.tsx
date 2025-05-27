import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue py-16">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gold mb-6">Page Not Found</h2>
        <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/"
            className="bg-gold hover:bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <FaHome /> Back to Home
          </Link>
          <Link 
            href="/courses"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/10 flex items-center gap-2"
          >
            <FaSearch /> Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
} 