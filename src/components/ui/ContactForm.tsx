'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheck, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';
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
    <div className={`bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl p-8 border border-blue-100 transition-all duration-300 hover:shadow-blue-100/20 ${className}`}>
      {isSuccess ? (
        <div className="text-center py-10">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-200">
            <FaCheck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Your message has been received. We'll get back to you as soon as possible.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)} 
            variant="outline"
            className="hover:scale-105 transition-transform duration-300"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="transition-all duration-300">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-4 py-3 border ${
                  formErrors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } rounded-lg shadow-sm focus:ring-2 focus:ring-uk-blue/50 focus:border-uk-blue transition-all duration-200`}
              />
              {formErrors.firstName && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <FaExclamationTriangle className="w-3 h-3 mr-1" />
                  {formErrors.firstName}
                </p>
              )}
            </div>
            
            {/* Last Name */}
            <div className="transition-all duration-300">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full px-4 py-3 border ${
                  formErrors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } rounded-lg shadow-sm focus:ring-2 focus:ring-uk-blue/50 focus:border-uk-blue transition-all duration-200`}
              />
              {formErrors.lastName && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <FaExclamationTriangle className="w-3 h-3 mr-1" />
                  {formErrors.lastName}
                </p>
              )}
            </div>
            
            {/* Email */}
            <div className="transition-all duration-300">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                className={`w-full px-4 py-3 border ${
                  formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } rounded-lg shadow-sm focus:ring-2 focus:ring-uk-blue/50 focus:border-uk-blue transition-all duration-200`}
              />
              {formErrors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <FaExclamationTriangle className="w-3 h-3 mr-1" />
                  {formErrors.email}
                </p>
              )}
            </div>
            
            {/* Phone */}
            <div className="transition-all duration-300">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="+44 20 1234 5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-uk-blue/50 focus:border-uk-blue transition-all duration-200"
              />
            </div>
          </div>
          
          {/* Subject */}
          <div className="transition-all duration-300">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                formErrors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
              } rounded-lg shadow-sm focus:ring-2 focus:ring-uk-blue/50 focus:border-uk-blue transition-all duration-200 appearance-none bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgNmw0IDQgNC00IiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-[center_right_1rem]`}
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
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="w-3 h-3 mr-1" />
                {formErrors.subject}
              </p>
            )}
          </div>
          
          {/* Message */}
          <div className="transition-all duration-300">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formValues.message}
              onChange={handleChange}
              placeholder="Please describe your inquiry in detail..."
              className={`w-full px-4 py-3 border ${
                formErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
              } rounded-lg shadow-sm focus:ring-2 focus:ring-uk-blue/50 focus:border-uk-blue transition-all duration-200 resize-none`}
            ></textarea>
            {formErrors.message && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="w-3 h-3 mr-1" />
                {formErrors.message}
              </p>
            )}
          </div>
          
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg shadow-sm flex items-center">
              <FaExclamationTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>{submitError}</span>
            </div>
          )}
          
          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              className="py-3 text-base font-medium shadow-xl shadow-blue-600/10 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2 h-5 w-5" />
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
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our <a href="/privacy-policy" className="text-uk-blue hover:underline">Privacy Policy</a> and <a href="/terms" className="text-uk-blue hover:underline">Terms of Service</a>.
          </p>
        </form>
      )}
    </div>
  );
} 