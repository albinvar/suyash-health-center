// Locale configuration
export const locales = ['mr', 'en', 'hi'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी',
};

export const localeShortNames: Record<Locale, string> = {
  en: 'EN',
  hi: 'HI',
  mr: 'MR',
};
