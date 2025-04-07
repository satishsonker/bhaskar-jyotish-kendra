import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  supportedLanguages, 
  defaultLanguage, 
  getBrowserLanguage,
  getLanguageDirection 
} from '../config/languages';
import { getTranslation } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = getLanguageDirection(currentLang);
  }, [currentLang]);

  const changeLanguage = (lang) => {
    if (supportedLanguages[lang]) {
      setCurrentLang(lang);
    }
  };

  const t = (key, variables = {}) => {
    const keys = key.split('.');
    let value = getTranslation(currentLang);
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }

    return typeof value === 'string'
      ? value.replace(/\{\{(\w+)\}\}/g, (_, v) => variables[v] || '')
      : value;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLang, 
        changeLanguage, 
        supportedLanguages,
        currentLangName: supportedLanguages[currentLang].nativeName,
        currentLangIcon: supportedLanguages[currentLang].icon,
        isRTL: getLanguageDirection(currentLang) === 'rtl',
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}; 