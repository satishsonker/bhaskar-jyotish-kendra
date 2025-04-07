import { supportedLanguages, defaultLanguage } from '../config/languages';
import en from './en';
import hi from './hi';
import te from './te';
import ta from './ta';

export const translations = {
  en,
  hi,
  te,
  ta
};

export const getTranslation = (langCode) => {
  return translations[langCode] || translations[defaultLanguage];
};

export { supportedLanguages, defaultLanguage }; 