'use client';

import { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { translations, type Locale, type TranslationKeys } from '@/lib/translations';

const STORAGE_KEY = 'expresskilo-locale';

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === 'fr' || stored === 'en' || stored === 'es') return stored;
  return 'fr';
}

type LangContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <K extends keyof TranslationKeys>(key: K) => TranslationKeys[K];
};

const LanguageContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next === 'fr' ? 'fr' : next === 'es' ? 'es' : 'en';
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === 'fr' ? 'fr' : locale === 'es' ? 'es' : 'en';
  }, [locale, mounted]);

  const t = useCallback(
    <K extends keyof TranslationKeys>(key: K): TranslationKeys[K] => {
      return translations[locale][key] as TranslationKeys[K];
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
