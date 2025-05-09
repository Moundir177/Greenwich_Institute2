import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`flex py-3 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-uk-blue transition-colors">
            <FaHome className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <FaChevronRight className="h-3 w-3 text-gray-400 mx-2" aria-hidden="true" />
            {item.href && index !== items.length - 1 ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-uk-blue transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-uk-blue font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 