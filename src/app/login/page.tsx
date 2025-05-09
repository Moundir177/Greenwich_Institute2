'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGoogle, FaApple, FaFacebook, FaEye, FaEyeSlash, FaLock, FaEnvelope, FaChevronRight, FaSpinner } from 'react-icons/fa';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function LoginPage() {
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
              Access Your <span className="text-gold text-shadow-gold shimmer">Account</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Login to access your courses, track your progress, and connect with instructors and fellow students.
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
            items={[{ label: 'Login' }]}
          />
        </div>
      </div>
      
      {/* Login Section */}
      <section className="section bg-uk-white pattern-dots">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="uk-border-gradient p-1 rounded-lg glass-light animate-fadeIn">
              <Card variant="elevated" className="p-0 overflow-hidden">
                {/* Login Form */}
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-uk-blue mb-6 gradient-text text-center">Sign In</h2>
                  
                  {loginError && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md animate-shake">
                      {loginError}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
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
                          autoComplete="email"
                          value={email}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-2 pl-10 border ${
                            formErrors.email ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>

                    <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
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
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          value={password}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-2 pl-10 border ${
                            formErrors.password ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm pr-10`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <FaEye className="h-5 w-5" aria-hidden="true" />
                          )}
                        </button>
                      </div>
                      {formErrors.password && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-uk-blue focus:ring-uk-blue border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <Link href="/forgot-password" className="font-medium text-uk-blue hover:text-uk-red transition-colors">
                          Forgot password?
                        </Link>
                      </div>
                    </div>

                    <div className="animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                      <Button
                        type="submit"
                        variant="primary"
                        effect="3d"
                        fullWidth
                        disabled={isLoading}
                        icon={isLoading ? <FaSpinner className="animate-spin mr-2" /> : <FaChevronRight />}
                      >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                      </Button>
                    </div>
                  </form>

                  <div className="mt-6 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <FaGoogle className="h-5 w-5 text-red-500" />
                      </button>

                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <FaFacebook className="h-5 w-5 text-blue-600" />
                      </button>

                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                      >
                        <span className="sr-only">Sign in with Apple</span>
                        <FaApple className="h-5 w-5 text-gray-900" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Registration Link */}
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Don't have an account?{' '}
                    <Link href="/register" className="font-medium text-uk-blue hover:text-uk-red transition-colors">
                      Register now
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
              Why Join <span className="text-uk-red">UK Institute</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Experience a world-class education with benefits designed to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="h-6 w-6 text-uk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.775-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253" />
                </svg>,
                title: "Access to Learning Resources",
                description: "Get instant access to our comprehensive library of learning materials, videos, and practice tests."
              },
              {
                icon: <svg className="h-6 w-6 text-uk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>,
                title: "Join a Global Community",
                description: "Connect with fellow students, alumni, and instructors from around the world."
              },
              {
                icon: <svg className="h-6 w-6 text-uk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>,
                title: "Verified Certificates",
                description: "Earn recognized certificates to showcase your skills and knowledge to employers."
              }
            ].map((benefit, index) => (
              <div key={index} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card variant="elevated">
                  <div className="flex flex-col items-center text-center p-2">
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
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Start Your Learning Journey?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Join thousands of students from around the world who are enhancing their skills with UK Institute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/register" 
                  variant="gold"
                  effect="3d"
                >
                  Create an Account
                </Button>
                <Button 
                  href="/courses" 
                  variant="white"
                  effect="hoverglow"
                >
                  Browse Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 