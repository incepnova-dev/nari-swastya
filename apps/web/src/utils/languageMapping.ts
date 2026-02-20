import { SupportedLanguage } from '../i18n';

/**
 * Maps language codes from Header (EN, HI, etc.) to i18n language codes (en, hi, etc.)
 */
export const LANGUAGE_CODE_MAP: Record<string, SupportedLanguage> = {
  EN: 'en',
  HI: 'hi',
  BN: 'bn',
  KN: 'kn',
  TA: 'ta',
  TE: 'te',
  ML: 'ml',
  MR: 'mr',
  GU: 'gu'
};

/**
 * Maps i18n language codes to Header language codes
 */
export const I18N_TO_HEADER_MAP: Record<SupportedLanguage, string> = {
  en: 'EN',
  hi: 'HI',
  bn: 'BN',
  kn: 'KN',
  ta: 'TA',
  te: 'TE',
  ml: 'ML',
  mr: 'MR',
  gu: 'GU'
};

/**
 * Converts Header language code to i18n language code
 */
export const headerCodeToI18n = (headerCode: string): SupportedLanguage => {
  return LANGUAGE_CODE_MAP[headerCode] || 'en';
};

/**
 * Converts i18n language code to Header language code
 */
export const i18nToHeaderCode = (i18nCode: SupportedLanguage): string => {
  return I18N_TO_HEADER_MAP[i18nCode] || 'EN';
};

