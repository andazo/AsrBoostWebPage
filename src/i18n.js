import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de recursos de idiomas
import translationEN from './locales/en/translation.json';

// Los recursos de idiomas
const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next) // pasa i18n hacia abajo a react-i18next
  .init({
    resources,
    lng: "es", // idioma por defecto
    keySeparator: false, // podemos usar claves simples
    interpolation: {
      escapeValue: false, // no es necesario escapar de xss
    },
  });

export default i18n;