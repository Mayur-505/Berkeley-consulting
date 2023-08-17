import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '../public/locales/en/common.json'
import koTranslations from '../public/locales/ko/common.json'
import chiTranslations from '../public/locales/chi/common.json'

const i18nInstance = i18n.createInstance();

i18nInstance
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslations,
      },
      ko: {
        translation: koTranslations,

      },
      chi: {
        translation: chiTranslations,
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18nInstance;
