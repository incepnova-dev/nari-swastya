// i18n configuration and setup
// This file initializes the i18n library for the application

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';
import bnTranslations from './locales/bn.json';
import knTranslations from './locales/kn.json';
import taTranslations from './locales/ta.json';
import teTranslations from './locales/te.json';
import mlTranslations from './locales/ml.json';
import mrTranslations from './locales/mr.json';
import guTranslations from './locales/gu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations },
      bn: { translation: bnTranslations },
      kn: { translation: knTranslations },
      ta: { translation: taTranslations },
      te: { translation: teTranslations },
      ml: { translation: mlTranslations },
      mr: { translation: mrTranslations },
      gu: { translation: guTranslations }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;

// Supported languages
export const supportedLanguages = ['en', 'hi', 'bn', 'kn', 'ta', 'te', 'ml', 'mr', 'gu'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

