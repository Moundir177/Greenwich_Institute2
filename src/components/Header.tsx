'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Courses', href: '/courses' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Disclosure as="nav" className="bg-uk-blue shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-12 w-12 mr-3">
                      <Image 
                        src="/logo.png" 
                        alt="UK Institute Logo" 
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div>
                      <h1 className="text-gold font-serif font-bold text-xl md:text-2xl">UK Institute</h1>
                      <p className="text-uk-white text-xs md:text-sm">Excellence in Education</p>
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-uk-white hover:text-gold inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {isLoggedIn ? (
                  <Link href="/profile" className="flex items-center space-x-2 bg-uk-red bg-opacity-80 hover:bg-uk-red px-4 py-2 rounded-md text-uk-white">
                    <FaUser />
                    <span>My Profile</span>
                  </Link>
                ) : (
                  <Link href="/login" className="flex items-center space-x-2 bg-uk-red bg-opacity-80 hover:bg-uk-red px-4 py-2 rounded-md text-uk-white">
                    <FaUser />
                    <span>Login</span>
                  </Link>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-uk-white hover:text-gold focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-uk-white hover:bg-uk-red block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 text-uk-white hover:bg-uk-red px-3 py-2 text-base font-medium"
                >
                  <FaUser />
                  <span>My Profile</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center space-x-2 text-uk-white hover:bg-uk-red px-3 py-2 text-base font-medium"
                >
                  <FaUser />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 