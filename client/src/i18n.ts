import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json'; 
import ro from './translations/ro.json';  

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en,
      },
      ro: {
        translation: ro,
      },
    },
    lng: 'en',  
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
