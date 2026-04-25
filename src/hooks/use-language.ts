import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../lib/i18n";

export type SupportedLanguage = "en" | "id";

export function useLanguage() {
	const { i18n } = useTranslation();

	const changeLanguage = (lang: SupportedLanguage) => {
		i18n.changeLanguage(lang);
	};

	const currentLanguage = i18n.language as SupportedLanguage;

	return {
		t: i18n.t,
		i18n,
		language: currentLanguage,
		languages: SUPPORTED_LANGUAGES,
		changeLanguage,
	};
}
