"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import enTranslations from './translations/en.js';
import frTranslations from './translations/fr.js';
import arTranslations from './translations/ar.js';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
      if (savedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // Set RTL direction for Arabic
    if (newLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  // Translation function
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 