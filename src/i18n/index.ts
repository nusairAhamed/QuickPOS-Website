import type { Language, TranslationDictionary } from './types';
import { en } from './locales/en';
import { si } from './locales/si';
import { ta } from './locales/ta';

const dictionaries: Record<Language, TranslationDictionary> = { en, si, ta };

let currentLang: Language = 'en';
const listeners: Array<(lang: Language) => void> = [];

export function getLanguage(): Language {
  return currentLang;
}

export function getTranslation(path: string, lang: Language = currentLang): string {
  const parts = path.split('.');
  let current: any = dictionaries[lang];
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      current = undefined;
      break;
    }
  }

  // Graceful fallback to English if missing in selected language
  if (typeof current !== 'string' && lang !== 'en') {
    let fallbackCurrent: any = dictionaries.en;
    for (const part of parts) {
      if (fallbackCurrent && typeof fallbackCurrent === 'object' && part in fallbackCurrent) {
        fallbackCurrent = fallbackCurrent[part];
      } else {
        fallbackCurrent = undefined;
        break;
      }
    }
    if (typeof fallbackCurrent === 'string') {
      return fallbackCurrent;
    }
  }

  return typeof current === 'string' ? current : path;
}

export const t = getTranslation;

export function onLanguageChange(cb: (lang: Language) => void): () => void {
  listeners.push(cb);
  return () => {
    const idx = listeners.indexOf(cb);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

function updateUrlParam(lang: Language): void {
  try {
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState(null, '', url.toString());
  } catch (e) {
    console.warn('Unable to sync URL with language parameter:', e);
  }
}

export function updateDOM(): void {
  // 1. Text elements
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });

  // 2. HTML elements (with gradient spans, formatting)
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key) {
      el.innerHTML = t(key);
    }
  });

  // 3. Placeholders
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.placeholder = t(key);
    }
  });

  // 4. Update language toggle button states
  document.querySelectorAll<HTMLElement>('.lang-toggle-btn').forEach((btn) => {
    const code = btn.getAttribute('data-lang-code');
    if (code === currentLang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

export function setLanguage(lang: Language, syncUrl = true): void {
  if (!['en', 'si', 'ta'].includes(lang)) return;

  currentLang = lang;

  try {
    localStorage.setItem('quickpos-lang', lang);
  } catch (e) {}

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  if (syncUrl) {
    updateUrlParam(lang);
  }

  updateDOM();

  // Notify listeners (e.g. ScrollTrigger recalibration)
  listeners.forEach((cb) => {
    try {
      cb(lang);
    } catch (e) {
      console.error('Error in language change listener:', e);
    }
  });
}

export function initI18n(): void {
  // Priority: 1. URL ?lang= 2. localStorage 3. default 'en'
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang') as Language | null;

  let initial: Language = 'en';
  if (langParam && ['en', 'si', 'ta'].includes(langParam)) {
    initial = langParam;
  } else {
    try {
      const saved = localStorage.getItem('quickpos-lang') as Language | null;
      if (saved && ['en', 'si', 'ta'].includes(saved)) {
        initial = saved;
      }
    } catch (e) {}
  }

  setLanguage(initial, false);

  // Bind delegated click listener for language toggle buttons
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const btn = target?.closest<HTMLElement>('.lang-toggle-btn');
    if (btn) {
      const code = btn.getAttribute('data-lang-code') as Language | null;
      if (code && code !== currentLang) {
        setLanguage(code, true);
      }
    }
  });
}
