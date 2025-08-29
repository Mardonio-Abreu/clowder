import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import pt from "./locales/pt/translation.json";

i18n
    .use(LanguageDetector) // Detects browser language
    .use(initReactI18next) // Passes i18n down to React
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            pt: { translation: pt }
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;
