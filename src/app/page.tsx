"use client";

import React, { useEffect } from 'react';
import { FaAward, FaUserGraduate, FaBriefcase, FaGlobe, FaChevronRight, FaGraduationCap, FaBook, FaCertificate } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Testimonials from '@/components/home/Testimonials';
import HeroSection from './components/HeroSection';
import FeaturedCourses from './components/FeaturedCourses';
import StatsSection from './components/StatsSection';
import CallToAction from './components/CallToAction';
import { useLanguage } from './contexts/LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  // Optional: Scrolling animation for page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedCourses />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  );
}
