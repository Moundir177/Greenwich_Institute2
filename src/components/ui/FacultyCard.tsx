import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa';

interface SocialLink {
  type: 'linkedin' | 'twitter' | 'email' | 'website';
  url: string;
}

interface FacultyCardProps {
  name: string;
  title: string;
  department?: string;
  bio: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
  className?: string;
  variant?: 'default' | 'compact';
}

export default function FacultyCard({
  name,
  title,
  department,
  bio,
  imageSrc,
  socialLinks = [],
  className = '',
  variant = 'default',
}: FacultyCardProps) {
  // Map social media types to icons
  const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: FaEnvelope,
    website: FaGlobe,
  };

  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm
        transition-all hover:shadow-md
        ${className}
      `}
    >
      {variant === 'default' ? (
        // Default layout (horizontal for large screens)
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <div className="aspect-w-4 aspect-h-5 md:aspect-none md:h-full">
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-uk-blue font-medium mb-1">{title}</p>
            {department && (
              <p className="text-gray-500 text-sm mb-4">{department}</p>
            )}
            <p className="text-gray-600 mb-4 line-clamp-4">{bio}</p>
            
            {socialLinks.length > 0 && (
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => {
                  const SocialIcon = socialIcons[link.type];
                  return (
                    <Link
                      key={index}
                      href={link.url}
                      className="text-gray-500 hover:text-uk-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon className="h-5 w-5" />
                      <span className="sr-only">{link.type}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Compact layout (vertical)
        <div>
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-uk-blue font-medium text-sm mb-2">{title}</p>
            {department && (
              <p className="text-gray-500 text-xs mb-3">{department}</p>
            )}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{bio}</p>
            
            {socialLinks.length > 0 && (
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => {
                  const SocialIcon = socialIcons[link.type];
                  return (
                    <Link
                      key={index}
                      href={link.url}
                      className="text-gray-500 hover:text-uk-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon className="h-4 w-4" />
                      <span className="sr-only">{link.type}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 