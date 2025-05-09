import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUsers, FaBook, FaStar, FaTag } from 'react-icons/fa';
import Button from './Button';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  duration?: string;
  level?: string;
  rating?: number;
  students?: number;
  price?: number;
  discountPrice?: number;
  className?: string;
  featured?: boolean;
  href?: string;
}

export default function CourseCard({
  id,
  title,
  description,
  imageSrc,
  category,
  duration,
  level,
  rating,
  students,
  price,
  discountPrice,
  className = '',
  featured = false,
  href,
}: CourseCardProps) {
  const courseHref = href || `/courses/${id}`;
  
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-md ${
        featured ? 'shadow-md ring-1 ring-uk-blue/10' : 'shadow-sm'
      } ${className}`}
    >
      {/* Course Image */}
      <Link href={courseHref} className="block relative h-48 overflow-hidden">
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
      
      {/* Course Content */}
      <div className="p-5">
        <Link href={courseHref}>
          <h3 className="text-lg font-bold text-uk-blue mb-2 hover:text-uk-red transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {description}
        </p>
        
        {/* Course Details */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
          {duration && (
            <div className="flex items-center">
              <FaClock className="mr-1" />
              <span>{duration}</span>
            </div>
          )}
          
          {level && (
            <div className="flex items-center">
              <FaBook className="mr-1" />
              <span>{level}</span>
            </div>
          )}
          
          {students !== undefined && (
            <div className="flex items-center">
              <FaUsers className="mr-1" />
              <span>{students} students</span>
            </div>
          )}
          
          {rating !== undefined && (
            <div className="flex items-center">
              <FaStar className="mr-1 text-gold" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            {price !== undefined && (
              <div className="flex items-center">
                {discountPrice !== undefined ? (
                  <>
                    <span className="text-uk-red font-bold">£{discountPrice}</span>
                    <span className="text-gray-500 line-through text-sm ml-2">£{price}</span>
                  </>
                ) : (
                  <span className="text-uk-blue font-bold">
                    {price === 0 ? 'Free' : `£${price}`}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <Button
            href={courseHref} 
            variant={featured ? 'primary' : 'outline'} 
            size="sm"
          >
            View Course
          </Button>
        </div>
      </div>
    </div>
  );
} 