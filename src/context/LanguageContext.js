import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLanguageDirection } from '../config/languages';
import { en } from '../i18n/en';
import { hi } from '../i18n/hi';
import { te } from '../i18n/te';
import { ta } from '../i18n/ta';
import { validateAllTranslations, validateTranslationValues, enhanceTranslationLogging } from '../utils/translationUtils';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const SUPPORTED_LANGUAGES = {
  en: { name: 'English', nativeName: 'English', icon: '🇺🇸' },
  hi: { name: 'Hindi', nativeName: 'हिंदी', icon: '🇮🇳' },
  te: { name: 'Telugu', nativeName: 'తెలుగు', icon: '🇮🇳' },
  ta: { name: 'Tamil', nativeName: 'தமிழ்', icon: '🇮🇳' }
};

const TRANSLATIONS = {
  en,
  hi,
  te,
  ta
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('language');
      return savedLang && SUPPORTED_LANGUAGES[savedLang] ? savedLang : 'en';
    } catch (error) {
      console.error('Error reading language from localStorage:', error);
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', currentLang);
      document.documentElement.lang = currentLang;
      document.documentElement.dir = getLanguageDirection(currentLang);
    } catch (error) {
      console.error('Error setting language preferences:', error);
    }
  }, [currentLang]);

  // Validate translations in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      try {
        const missingTranslations = validateAllTranslations();
        if (Object.keys(missingTranslations).length > 0) {
          console.warn('Missing translations found:', missingTranslations);
        }

        Object.entries(TRANSLATIONS).forEach(([code, translations]) => {
          validateTranslationValues(translations, code);
        });
      } catch (error) {
        console.error('Error validating translations:', error);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES[lang]) {
      try {
        setCurrentLang(lang);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    }
  };

  const getNestedTranslation = (obj, path) => {
    try {
      return path.reduce((prev, curr) => {
        if (!prev || typeof prev !== 'object') return undefined;
        return prev[curr];
      }, obj);
    } catch (error) {
      console.error('Error getting nested translation:', error);
      return undefined;
    }
  };

  const t = (key, variables = {}) => {
    if (!key) return '';
    
    try {
      const keys = key.split('.');
      const translation = getNestedTranslation(TRANSLATIONS[currentLang], keys);
      
      if (translation !== undefined && translation !== null) {
        return interpolateVariables(translation, variables);
      }
      
      // Fallback to English
      const englishTranslation = getNestedTranslation(TRANSLATIONS.en, keys);
      if (englishTranslation !== undefined && englishTranslation !== null) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Translation missing for key: ${key} in language: ${currentLang}, using English fallback`);
        }
        return interpolateVariables(englishTranslation, variables);
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Translation missing for key: ${key} in both ${currentLang} and English`);
      }
      return key;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  const interpolateVariables = (text, variables) => {
    try {
      return text.replace(/\{(\w+)\}/g, (match, key) => {
        return variables[key] !== undefined ? variables[key] : match;
      });
    } catch (error) {
      console.error('Error interpolating variables:', error);
      return text;
    }
  };

  // Enhance translation function with logging in development
  const translationFunction = process.env.NODE_ENV === 'development' 
    ? enhanceTranslationLogging(t, currentLang)
    : t;

  const value = {
    currentLang,
    changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    t: translationFunction,
    isRTL: getLanguageDirection(currentLang) === 'rtl',
    currentLanguage: SUPPORTED_LANGUAGES[currentLang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 