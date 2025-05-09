import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  author: string;
  category: string;
  className?: string;
  featured?: boolean;
  readTime?: string;
  href?: string;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  imageSrc,
  date,
  author,
  category,
  className = '',
  featured = false,
  readTime,
  href,
}: ArticleCardProps) {
  const articleHref = href || `/blog/${id}`;
  
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all
      ${featured ? 'border-2 border-uk-blue/20' : 'border border-gray-100'} ${className}`}
    >
      {/* Article Image */}
      <Link href={articleHref} className="block relative h-48 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
        {featured && (
          <div className="absolute top-2 right-2 bg-uk-red text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        {category && (
          <div className="absolute bottom-2 left-2 bg-uk-blue/90 text-white text-xs px-2 py-1 rounded">
            {category}
          </div>
        )}
      </Link>
      
      {/* Article Content */}
      <div className="p-5">
        <Link href={articleHref}>
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-uk-blue transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        {/* Article Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-auto">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center">
            <FaUser className="mr-1" />
            <span>{author}</span>
          </div>
          
          {readTime && (
            <div className="flex items-center ml-auto">
              <span>{readTime} read</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            href={articleHref}
            className="text-uk-blue hover:text-uk-red text-sm font-medium flex items-center"
          >
            Read Article
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 