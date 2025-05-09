import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

interface StudentSuccessCardProps {
  quote: string;
  name: string;
  program: string;
  imageSrc: string;
  graduation?: string;
  achievement?: string;
  rating?: number;
  className?: string;
  variant?: 'default' | 'featured';
}

export default function StudentSuccessCard({
  quote,
  name,
  program,
  imageSrc,
  graduation,
  achievement,
  rating,
  className = '',
  variant = 'default',
}: StudentSuccessCardProps) {
  return (
    <div 
      className={`
        rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg
        ${variant === 'featured' ? 'bg-uk-blue/5 border border-uk-blue/20' : 'bg-white border border-gray-100'} 
        ${className}
      `}
    >
      <div className="p-6">
        <div className="flex items-center mb-5">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-uk-blue/10 mr-4">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">{name}</h4>
            <p className="text-sm text-uk-blue">{program}</p>
          </div>
        </div>
        
        <div className="relative">
          <FaQuoteRight className="absolute -top-1 -left-1 h-6 w-6 text-uk-blue/10" aria-hidden="true" />
          <p className="pl-4 text-gray-600 italic text-sm md:text-base">{quote}</p>
        </div>

        {(graduation || achievement || rating) && (
          <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-4">
            {graduation && (
              <div className="flex-1 min-w-[100px]">
                <p className="text-xs text-gray-500">Graduation Year</p>
                <p className="font-semibold text-gray-800">{graduation}</p>
              </div>
            )}
            {achievement && (
              <div className="flex-1 min-w-[100px]">
                <p className="text-xs text-gray-500">Achievement</p>
                <p className="font-semibold text-gray-800">{achievement}</p>
              </div>
            )}
            {rating && (
              <div className="flex-1 min-w-[100px]">
                <p className="text-xs text-gray-500">Course Rating</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 