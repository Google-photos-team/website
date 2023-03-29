import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation1 from './en/translation.json';
import translation2 from './ar/translation.json';

export const resources = {
  en: {
    translation: translation1,
  },
  ar:{
    translation: translation2,
  }
};

i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
});