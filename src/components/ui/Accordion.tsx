'use client';

import React, { useState, ReactNode, ReactElement } from 'react';
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  allowHtml?: boolean;
  icon?: 'chevron' | 'plus' | 'none';
  variant?: 'default' | 'bordered' | 'separated' | 'minimal' | 'fancy';
  titleClassName?: string;
  contentClassName?: string;
  iconColor?: string;
}

export function AccordionItem({ 
  title, 
  children, 
  defaultOpen = false, 
  allowHtml = false,
  icon = 'chevron',
  variant = 'default',
  titleClassName = '',
  contentClassName = '',
  iconColor = 'text-uk-blue'
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHovering, setIsHovering] = useState(false);

  // Variant styles
  const variantStyles = {
    default: 'border-b border-gray-200 last:border-b-0',
    bordered: 'border border-gray-200 rounded-lg mb-2',
    separated: 'bg-white rounded-lg shadow-sm mb-3',
    minimal: 'mb-2',
    fancy: 'bg-white rounded-xl mb-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
  };

  // Icon components
  const icons = {
    chevron: isOpen 
      ? <FaChevronUp className={`h-4 w-4 ${iconColor} transition-transform duration-300`} /> 
      : <FaChevronDown className={`h-4 w-4 ${iconColor} transition-transform duration-300`} />,
    plus: isOpen 
      ? <FaMinus className={`h-4 w-4 ${iconColor} transition-transform duration-300`} /> 
      : <FaPlus className={`h-4 w-4 ${iconColor} transition-transform duration-300`} />,
    none: null
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      } 
    },
    visible: { 
      height: 'auto',
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  // Button styles based on variant
  const getButtonStyles = () => {
    if (variant === 'fancy') {
      return `flex w-full items-center justify-between py-5 px-6 text-left transition-all 
        ${isOpen ? 'text-dark-blue rounded-t-xl' : 'text-gray-900 rounded-xl'} 
        ${isHovering && !isOpen ? 'bg-gray-50' : ''}
        ${isOpen ? 'bg-gray-50' : 'bg-white'} ${titleClassName}`;
    }
    
    return `flex w-full items-center justify-between py-4 px-1 text-left transition-colors 
      hover:bg-gray-50 ${isOpen ? 'text-uk-blue' : 'text-gray-900'} rounded-lg ${titleClassName}`;
  };

  // Get icon container styles based on variant
  const getIconContainerStyles = () => {
    if (variant === 'fancy') {
      return `ml-6 flex items-center justify-center flex-shrink-0 
        ${isOpen ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600'} 
        w-8 h-8 rounded-full transition-all duration-300
        ${isHovering && !isOpen ? 'bg-gray-200' : ''}`;
    }
    
    return "ml-6 flex items-center justify-center flex-shrink-0 w-6 h-6";
  };

  // Get content container styles based on variant
  const getContentStyles = () => {
    if (variant === 'fancy') {
      return `text-gray-600 leading-relaxed px-6 pt-2 pb-6 ${contentClassName} 
        ${isOpen ? 'border-t border-gray-100' : ''}`;
    }
    
    return `text-gray-600 leading-relaxed px-1 pt-0 pb-5 ${contentClassName}`;
  };

  return (
    <div className={variantStyles[variant]}>
      <button
        type="button"
        className={getButtonStyles()}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className={getIconContainerStyles()}>
          {icons[icon]}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <div className={getContentStyles()}>
              {allowHtml ? (
                <div dangerouslySetInnerHTML={{ __html: children as string }} />
              ) : (
                children
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'separated' | 'minimal' | 'fancy';
  icon?: 'chevron' | 'plus' | 'none';
  allowMultiple?: boolean;
  iconColor?: string;
}

export default function Accordion({ 
  children, 
  className = '',
  variant = 'default',
  icon = 'chevron',
  allowMultiple = true,
  iconColor = 'text-uk-blue'
}: AccordionProps) {
  // Pass props to all child AccordionItems
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Only clone if it's a valid React element
      return React.cloneElement(child as ReactElement<AccordionItemProps>, {
        variant,
        icon,
        iconColor
      });
    }
    return child;
  });

  const accordionClasses = variant === 'default' 
    ? `divide-y divide-gray-200 ${className}`
    : className;

  return (
    <div className={accordionClasses}>
      {enhancedChildren}
    </div>
  );
} 