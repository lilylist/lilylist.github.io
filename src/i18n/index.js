import en from './en.js';
import zh from './zh.js';

export const translations = { en, zh };
export const languages = ['en', 'zh'];
export const defaultLang = 'en';

export function getLang() {
  if (typeof window === 'undefined') return defaultLang;
  return localStorage.getItem('lang') || defaultLang;
}

export function setLang(lang) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  window.dispatchEvent(new CustomEvent('lang-change', { detail: lang }));
}

export function t(key) {
  const lang = getLang();
  return translations[lang]?.[key] || translations[defaultLang]?.[key] || key;
}
