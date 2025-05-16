import { en } from '../i18n/en';
import { hi } from '../i18n/hi';
import { te } from '../i18n/te';
import { ta } from '../i18n/ta';

const flattenObject = (obj, prefix = '') => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
};

export const findMissingTranslations = (language, languageCode) => {
  const englishKeys = Object.keys(flattenObject(en));
  const languageKeys = Object.keys(flattenObject(language));
  
  const missing = englishKeys.filter(key => !languageKeys.includes(key));
  
  if (missing.length > 0) {
    console.warn(`Missing translations in ${languageCode}:`, missing);
  }
  
  return missing;
};

export const validateAllTranslations = () => {
  const languages = { hi, te, ta };
  const results = {};
  
  Object.entries(languages).forEach(([code, translations]) => {
    const missing = findMissingTranslations(translations, code);
    if (missing.length > 0) {
      results[code] = missing;
    }
  });
  
  return results;
};

export const validateTranslationValues = (language, languageCode) => {
  const flattened = flattenObject(language);
  const emptyValues = Object.entries(flattened)
    .filter(([_, value]) => !value || value.trim() === '')
    .map(([key]) => key);
    
  if (emptyValues.length > 0) {
    console.warn(`Empty translation values in ${languageCode}:`, emptyValues);
  }
  
  return emptyValues;
};

// Add error logging enhancement to the translation function
export const enhanceTranslationLogging = (t, currentLang) => (key) => {
  const result = t(key);
  if (result === key) {
    console.warn(`Translation key not found: ${key} in language: ${currentLang}`);
  }
  return result;
}; 