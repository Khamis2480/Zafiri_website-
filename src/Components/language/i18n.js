import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/translation.json";
import sw from "./sw/translation.json";

i18n
  .use(initReactI18next) // bind react-i18next to i18next
  .init({
    resources: {
      en: { translation: en },
      sw: { translation: sw }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already escapes
    }
  });

export default i18n;
