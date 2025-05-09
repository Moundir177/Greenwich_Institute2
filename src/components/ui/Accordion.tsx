'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <span className="ml-6 flex-shrink-0 text-uk-blue">
          {isOpen ? (
            <FaChevronUp className="h-5 w-5" aria-hidden="true" />
          ) : (
            <FaChevronDown className="h-5 w-5" aria-hidden="true" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div className={`divide-y divide-gray-200 ${className}`}>
      {children}
    </div>
  );
} 