export const supportedLanguages = {
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'hh:mm A',
    fallback: 'en',
    icon: '🇺🇸'
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिंदी',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'hh:mm A',
    fallback: 'en',
    icon: '🇮🇳'
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'hh:mm A',
    fallback: 'en',
    icon: '🇮🇳'
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'hh:mm A',
    fallback: 'en',
    icon: '🇮🇳'
  }
};

export const defaultLanguage = 'en';

export const getLanguageByCode = (code) => {
  return supportedLanguages[code] || supportedLanguages[defaultLanguage];
};

export const getLanguageDirection = (code) => {
  return getLanguageByCode(code).direction;
};

export const formatLanguageCode = (code) => {
  return code.toLowerCase().split('-')[0];
};

export const getBrowserLanguage = () => {
  const browserLang = formatLanguageCode(navigator.language);
  return supportedLanguages[browserLang] ? browserLang : defaultLanguage;
}; 