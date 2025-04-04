import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

const supportedLanguages = {
  en: { name: 'English', nativeName: 'English' },
  hi: { name: 'Hindi', nativeName: 'हिंदी' },
  te: { name: 'Telugu', nativeName: 'తెలుగు' },
  ta: { name: 'Tamil', nativeName: 'தமிழ்' },
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  const changeLanguage = (lang) => {
    if (supportedLanguages[lang]) {
      setCurrentLang(lang);
    }
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLang, 
        changeLanguage, 
        supportedLanguages,
        currentLangName: supportedLanguages[currentLang].nativeName 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}; 