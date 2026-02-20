import { useTranslation } from 'react-i18next';
import { SupportedLanguage } from '../i18n';

/**
 * Custom hook for language management
 * Provides translation function and language switching utilities
 */
export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language as SupportedLanguage;

  return {
    t,
    currentLanguage,
    changeLanguage,
    isReady: i18n.isInitialized
  };
};

