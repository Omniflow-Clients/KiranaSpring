import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import id from "../locales/id.json";

const SUPPORTED_LANGUAGES = {
	en: { label: "English", nativeName: "English" },
	id: { label: "Indonesia", nativeName: "Bahasa Indonesia" },
} as const;

export { SUPPORTED_LANGUAGES };

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			id: { translation: id },
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
		},
	});

export default i18n;
