'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import Button from './Button';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const errors: FormErrors = {};
    
    // First name validation
    if (!formValues.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    // Last name validation
    if (!formValues.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    // Email validation
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    
    // Subject validation
    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    } else if (formValues.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Mock API call - would be replaced with actual form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${className}`}>
      {isSuccess ? (
        <div className="text-center py-10">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-100">
            <FaCheck className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been received. We'll get back to you as soon as possible.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)} 
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  formErrors.firstName ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue`}
              />
              {formErrors.firstName && (
                <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
              )}
            </div>
            
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  formErrors.lastName ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue`}
              />
              {formErrors.lastName && (
                <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
              )}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  formErrors.email ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue"
              />
            </div>
          </div>
          
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                formErrors.subject ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue`}
            >
              <option value="">Please select</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Course Information">Course Information</option>
              <option value="Admission Query">Admission Query</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Partnership Opportunity">Partnership Opportunity</option>
              <option value="Other">Other</option>
            </select>
            {formErrors.subject && (
              <p className="mt-1 text-sm text-red-600">{formErrors.subject}</p>
            )}
          </div>
          
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formValues.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                formErrors.message ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue`}
            ></textarea>
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
            )}
          </div>
          
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {submitError}
            </div>
          )}
          
          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              <div className="flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </div>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
} 