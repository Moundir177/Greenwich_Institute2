import React from 'react';
import { IconType } from 'react-icons';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: IconType;
  iconColor?: string;
  trend?: number;
  trendLabel?: string;
  className?: string;
  variant?: 'default' | 'outlined' | 'filled';
}

export default function StatCard({
  value,
  label,
  icon: Icon,
  iconColor = 'text-uk-blue',
  trend,
  trendLabel,
  className = '',
  variant = 'default',
}: StatCardProps) {
  // Determine card style based on variant
  const cardStyles = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-uk-blue/20',
    filled: 'bg-uk-blue text-white',
  };

  // Determine if trend is positive or negative
  const isTrendPositive = trend !== undefined && trend >= 0;
  const TrendIcon = isTrendPositive ? FaArrowUp : FaArrowDown;
  const trendColorClass = isTrendPositive 
    ? variant === 'filled' ? 'text-green-300' : 'text-green-500' 
    : variant === 'filled' ? 'text-red-300' : 'text-red-500';

  return (
    <div 
      className={`
        ${cardStyles[variant]} rounded-lg p-6 shadow-sm hover:shadow-md transition-all
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-sm font-medium ${variant === 'filled' ? 'text-white/80' : 'text-gray-500'} mb-1`}>
            {label}
          </p>
          <h4 className={`text-2xl font-bold ${variant === 'filled' ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </h4>
          
          {trend !== undefined && (
            <div className="flex items-center mt-2">
              <span className={`flex items-center ${trendColorClass} text-sm font-medium`}>
                <TrendIcon className="w-3 h-3 mr-1" />
                {Math.abs(trend)}%
              </span>
              {trendLabel && (
                <span className={`ml-2 text-xs ${variant === 'filled' ? 'text-white/70' : 'text-gray-500'}`}>
                  {trendLabel}
                </span>
              )}
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={`
            rounded-full p-3 
            ${variant === 'filled' ? 'bg-white/10' : 'bg-gray-100'}
          `}>
            <Icon 
              className={`w-6 h-6 ${variant === 'filled' ? 'text-white' : iconColor}`} 
              aria-hidden="true" 
            />
          </div>
        )}
      </div>
    </div>
  );
} 