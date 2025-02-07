import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import translations
import en from '../Locales/en.json';
import mr from '../Locales/mr.json';
import hi from '../Locales/hi.json';

// Translation resources
const resources = {
  en: { translation: en },
  hi: { translation: hi },
  mr: { translation: mr },
};

// Language Detector
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    try {
      const savedLanguage = await AsyncStorage.getItem('LANG');
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }
      const bestLanguage = Localization.findBestAvailableLanguage(Object.keys(resources));
      callback(bestLanguage?.languageTag ?? 'en'); // Ensure fallback
    } catch (error) {
      console.error('Error detecting language:', error);
      callback('en'); // Fallback to English
    }
  },
  init: () => { },
  cacheUserLanguage: async (language) => {
    try {
      await AsyncStorage.setItem('LANG', language);
    } catch (error) {
      console.warn('Failed to cache language:', language, error);
    }
  },
};

// i18n Configuration
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
