'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGoogle, FaApple, FaFacebook, FaEye, FaEyeSlash, FaLock, FaEnvelope, FaChevronRight, FaSpinner, FaArrowRight } from 'react-icons/fa';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

export default function LoginPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const errors = {
      email: '',
      password: '',
    };

    // Validate email
    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    
    // Clear any existing form errors for this field
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear general login error when user makes changes
    if (loginError) {
      setLoginError('');
    }
    
    // Update the appropriate state variable
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'remember-me') {
      setRememberMe(checked);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      setLoginError('');
      
      try {
        // Simulate API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock authentication success
        // In a real app, you would make an API call to your auth endpoint
        console.log('Login data:', { email, password, rememberMe });
        
        // Mock successful login (for demo purposes)
        if (email === 'test@example.com' && password === 'password123') {
          // Redirect to dashboard would happen here
          window.location.href = '/dashboard';
        } else {
          // Show authentication error
          setLoginError('Invalid email or password. Please try again.');
        }
      } catch (error) {
        console.error('Login error:', error);
        setLoginError('An error occurred during login. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={`min-h-screen bg-light-gray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-dark-blue p-6 text-center">
          <Link href="/" className="inline-block">
            <Image 
              src="/images/logo-light.png" 
              alt="Greenwich" 
              width={180}
              height={50}
              className="h-10 w-auto mx-auto"
            />
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-white">
            {t('login_to_your_account')}
          </h2>
          <p className="mt-2 text-white/80">
            {t('access_your_courses_and_materials')}
          </p>
        </div>
        
        <div className="p-8">
          {/* Social Login Options */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-white border border-gray-300 py-2.5 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-light-gray transition-colors">
              <FaGoogle className="text-red-500" />
              <span className="font-medium text-gray-700">Continue with Google</span>
            </button>
            <button className="w-full bg-[#1877F2] py-2.5 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors">
              <FaFacebook className="text-white" />
              <span className="font-medium text-white">Continue with Facebook</span>
            </button>
            <button className="w-full bg-black py-2.5 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors">
              <FaApple className="text-white" />
              <span className="font-medium text-white">Continue with Apple</span>
            </button>
          </div>
          
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('email_address')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleInputChange}
                  className={`appearance-none block w-full px-3 py-3 pl-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dark-blue focus:border-dark-blue ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                />
              </div>
              {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {t('password')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={handleInputChange}
                  className={`appearance-none block w-full px-3 py-3 pl-10 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dark-blue focus:border-dark-blue ${
                    formErrors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {formErrors.password && <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-dark-blue focus:ring-dark-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  {t('remember_me')}
                </label>
              </div>
              
              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-gold hover:text-dark-blue">
                  {t('forgot_your_password')}
                </Link>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-dark-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('signing_in')}
                  </>
                ) : (
                  <>
                    {t('sign_in')}
                    <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('dont_have_account')}
              <Link href="/register" className="ml-1 font-medium text-gold hover:text-dark-blue">
                {t('create_account')}
              </Link>
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-dark-blue">
              &larr; {t('back_to_home')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 