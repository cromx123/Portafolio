import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // <-- importamos el detector

import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';

i18n
  .use(LanguageDetector)        
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    fallbackLng: 'en',           
    interpolation: { escapeValue: false },
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
