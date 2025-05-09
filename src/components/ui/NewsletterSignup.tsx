'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Button from './Button';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  variant?: 'default' | 'card' | 'inline';
}

export default function NewsletterSignup({
  title = 'Subscribe to our newsletter',
  description = 'Get the latest news, updates and educational resources delivered directly to your inbox.',
  buttonText = 'Subscribe',
  className = '',
  variant = 'default',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Mock API call - would be replaced with actual newsletter signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const variantStyles = {
    default: 'bg-white border border-gray-200 rounded-lg p-6 shadow-sm',
    card: 'bg-uk-blue text-white rounded-lg p-8 shadow-md',
    inline: 'p-0',
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h3 className={`text-xl font-bold mb-2 ${variant === 'card' ? 'text-white' : 'text-uk-blue'}`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`${variant === 'card' ? 'text-white/80' : 'text-gray-600'} text-sm`}>
              {description}
            </p>
          )}
        </div>
      )}

      {success ? (
        <div className={`text-center py-4 rounded ${variant === 'card' ? 'bg-white/10' : 'bg-green-50 text-green-700'}`}>
          <FaPaperPlane className="w-6 h-6 mx-auto mb-2" />
          <p>Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={variant === 'inline' ? 'flex' : 'space-y-3'}>
            <div className={variant === 'inline' ? 'flex-grow mr-2' : 'w-full'}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  error ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                placeholder="Your email address"
              />
              {error && <p className={`mt-1 text-sm ${variant === 'card' ? 'text-red-300' : 'text-red-600'}`}>{error}</p>}
            </div>
            <Button
              type="submit"
              variant={variant === 'card' ? 'white' : 'primary'}
              disabled={isSubmitting}
              className={variant === 'inline' ? 'whitespace-nowrap' : 'w-full'}
            >
              {isSubmitting ? 'Subscribing...' : buttonText}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
} 