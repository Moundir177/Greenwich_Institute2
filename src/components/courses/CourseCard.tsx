import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaGraduationCap, FaStar, FaUsers } from 'react-icons/fa';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  featured?: boolean;
  category: string;
}

export default function CourseCard({ 
  id, 
  title, 
  instructor, 
  description, 
  duration, 
  level, 
  rating, 
  students, 
  price, 
  image,
  featured = false,
  category
}: CourseCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${featured ? 'ring-2 ring-gold' : ''}`}>
      <div className="relative">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {featured && (
          <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold uppercase py-1 px-2 rounded">
            Featured
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-dark-blue/90 to-transparent">
          <span className="inline-block bg-gray text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl text-dark-blue mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`${i < rating ? 'text-gold' : 'text-gray-300'} text-sm`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray">({students} students)</span>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-gray text-sm">
            <FaClock className="mr-1 text-dark-blue" />
            {duration}
          </div>
          <div className="flex items-center text-gray text-sm">
            <FaGraduationCap className="mr-1 text-dark-blue" />
            {level}
          </div>
          <div className="flex items-center text-gray text-sm">
            <FaUsers className="mr-1 text-dark-blue" />
            {students} enrolled
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-dark-blue font-bold">
            £{price.toFixed(2)}
          </div>
          <Link 
            href={`/courses/${id}`}
            className="bg-dark-blue hover:bg-opacity-90 text-white py-2 px-4 rounded-md text-sm transition-colors duration-300"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
} 