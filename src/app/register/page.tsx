"use client";

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { FaLock, FaUser, FaEnvelope, FaGoogle, FaFacebook, FaApple, FaChevronRight, FaGlobe } from 'react-icons/fa';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear errors when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: ''
    };

    // Validate first name
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      valid = false;
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
      valid = false;
    }

    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      valid = false;
    } else if (!/(?=.*[0-9])/.test(formData.password)) {
      errors.password = 'Password must contain at least one number';
      valid = false;
    } else if (!/(?=.*[!@#$%^&*])/.test(formData.password)) {
      errors.password = 'Password must contain at least one special character';
      valid = false;
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    // Validate terms acceptance
    if (!formData.terms) {
      errors.terms = 'You must accept the terms and conditions';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, would typically make an API call here
      console.log('Form submitted:', formData);
      
      // Mock success message
      alert('Registration successful! Redirecting to login...');
      // In a real app, you would redirect to login page or show a success state
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-enhanced">
        <div className="pattern-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="container hero-content">
          <div className="text-center">
            <h1 className="text-uk-white animate-bounceIn">
              Join Our <span className="text-gold text-shadow-gold shimmer">Community</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Create your account to access world-class courses and start your learning journey with UK Institute.
            </p>
          </div>
        </div>
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-2">
          <Breadcrumbs
            items={[{ label: 'Register' }]}
          />
        </div>
      </div>
      
      {/* Registration Form */}
      <section className="section bg-uk-white pattern-dots">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">Get Started</span>
            <h2 className="section-title text-uk-blue mt-4">
              Create Your <span className="gradient-text">Account</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Join thousands of students learning with UK Institute. Start your educational journey today.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="uk-border-gradient p-1 rounded-lg glass-light animate-fadeIn">
              <Card variant="elevated">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 px-3 py-2 border ${
                            formErrors.firstName ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                          placeholder="John"
                        />
                      </div>
                      {formErrors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                      )}
                    </div>
                    
                    <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 px-3 py-2 border ${
                            formErrors.lastName ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                          placeholder="Doe"
                        />
                      </div>
                      {formErrors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`block w-full pl-10 px-3 py-2 border ${
                          formErrors.email ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className={`block w-full pl-10 px-3 py-2 border ${
                          formErrors.password ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                        placeholder="••••••••"
                      />
                    </div>
                    {formErrors.password ? (
                      <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                    ) : (
                      <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters long with a number and a special character.</p>
                    )}
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className={`block w-full pl-10 px-3 py-2 border ${
                          formErrors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                        placeholder="••••••••"
                      />
                    </div>
                    {formErrors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
                    )}
                  </div>
                  
                  <div className="flex items-start animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                        className={`h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded ${
                          formErrors.terms ? 'border-red-300' : ''
                        }`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-600">
                        I agree to the{' '}
                        <Link href="/terms" className="font-medium text-uk-blue hover:text-uk-red transition-colors">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy-policy" className="font-medium text-uk-blue hover:text-uk-red transition-colors">
                          Privacy Policy
                        </Link>
                      </label>
                      {formErrors.terms && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.terms}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="animate-scaleIn" style={{ animationDelay: '0.7s' }}>
                    <Button 
                      type="submit" 
                      variant="primary"
                      effect="3d"
                      fullWidth
                      icon={<FaChevronRight />}
                    >
                      Create Account
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <FaGoogle className="h-5 w-5 text-red-500" />
                    </button>
                    
                    <button
                      type="button"
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <FaFacebook className="h-5 w-5 text-blue-600" />
                    </button>
                    
                    <button
                      type="button"
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <FaApple className="h-5 w-5 text-gray-800" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-uk-blue hover:text-uk-red transition-colors">
                      Sign in
                    </Link>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-secondary animate-flipIn">Benefits</span>
            <h2 className="section-title text-uk-blue mt-4">
              Why Students <span className="text-uk-red">Choose Us</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Join thousands of learners worldwide who have experienced the UK Institute difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUser className="h-8 w-8" />,
                title: "Personalized Learning Path",
                description: "Our adaptive learning system tailors the educational experience to your specific needs and pace."
              },
              {
                icon: <FaGlobe className="h-8 w-8" />,
                title: "Global Recognition",
                description: "Our certificates are recognized by employers and institutions worldwide."
              },
              {
                icon: <FaLock className="h-8 w-8" />,
                title: "Lifetime Access",
                description: "Once enrolled, enjoy lifetime access to your courses and all future updates."
              }
            ].map((benefit, index) => (
              <div key={index} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card variant="bordered" className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-uk-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gold shimmer">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-uk-blue mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-uk-blue-dark to-uk-blue">
        <div className="container">
          <div className="callout-ribbon p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-fadeIn">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Begin Your Educational Journey Today</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Transform your future with world-class courses and expert guidance from UK Institute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
                >
                  Explore Courses
                </Button>
                <Button 
                  href="/contact" 
                  variant="white"
                  effect="hoverglow"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 