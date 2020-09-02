import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import transEn from './locales/en.json';
import transJa from './locales/ja.json';

const queries = new URLSearchParams(window.location.search);
const forceJP = queries.has('lang')

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: transEn,
    },
    ja: {
      translation: transJa,
    },
  },
});

if (forceJP) {
  i18n.changeLanguage('ja')
}

export default i18n;
