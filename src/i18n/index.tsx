import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { readPreference, writePreference } from '../lib/storage';
import { en } from './en';
import { tr } from './tr';
import { de } from './de';
import { fr } from './fr';
import { zh } from './zh';
import { ru } from './ru';
import type { Language, Messages } from './types';

export const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' }, { code: 'tr', name: 'Türkçe' },
  { code: 'de', name: 'Deutsch' }, { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' }, { code: 'ru', name: 'Русский' },
];
export const dictionaries: Record<Language, Messages> = { en, tr, de, fr, zh, ru };

export function detectLanguage(saved: string | null, preferences: readonly string[]): Language {
  if (saved && Object.hasOwn(dictionaries, saved)) return saved as Language;
  for (const preference of preferences) {
    const base = preference.toLowerCase().split(/[-_]/)[0];
    if (Object.hasOwn(dictionaries, base)) return base as Language;
  }
  return 'en';
}

const I18nContext = createContext<{ language: Language; t: Messages; setLanguage: (language: Language) => void } | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setCurrent] = useState<Language>(() => detectLanguage(readPreference('sonora-language'), navigator.languages));
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const setLanguage = (value: Language) => { setCurrent(value); writePreference('sonora-language', value); };
  return <I18nContext.Provider value={{ language, t: dictionaries[language], setLanguage }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('I18nProvider required');
  return context;
}
