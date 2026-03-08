import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English'
};

export const defaultLang = 'es';

// Tipado estricto: extrae las claves directamente del objeto 'es'
export type TranslationKey = keyof typeof es;

const ui = {
  es,
  en
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}