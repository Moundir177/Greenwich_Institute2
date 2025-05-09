import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  imageSrc?: string;
  rating?: number;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
}

export default function TestimonialCard({
  quote,
  name,
  title,
  imageSrc,
  rating,
  className = '',
  variant = 'default',
}: TestimonialCardProps) {
  const variantClasses = {
    default: 'bg-white shadow-sm rounded-lg p-6 border border-gray-100',
    compact: 'bg-gray-50 rounded-md p-4',
    featured: 'bg-uk-blue/5 border border-uk-blue/20 rounded-lg p-8 shadow-md',
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      <div className="flex flex-col h-full">
        <FaQuoteLeft className="h-6 w-6 text-uk-blue/30 mb-4" aria-hidden="true" />

        <blockquote className="flex-grow">
          <p className={`text-gray-600 ${variant === 'featured' ? 'text-lg' : 'text-base'} italic`}>
            "{quote}"
          </p>
        </blockquote>

        <div className="mt-6 flex items-center">
          {imageSrc && (
            <div className="mr-4 flex-shrink-0">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div>
            <p className={`font-bold ${variant === 'featured' ? 'text-uk-blue text-lg' : 'text-gray-800'}`}>
              {name}
            </p>
            {title && (
              <p className="text-gray-500 text-sm">
                {title}
              </p>
            )}
          </div>
        </div>

        {rating && (
          <div className="mt-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 