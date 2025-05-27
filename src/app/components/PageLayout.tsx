"use client";

import React, { ReactNode } from 'react';
import CallToAction from './CallToAction';
import { useLanguage } from '../contexts/LanguageContext';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      {children}
      <CallToAction />
    </div>
  );
};

export default PageLayout; 