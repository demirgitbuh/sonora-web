import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { readPreference, writePreference } from '../lib/storage';
import { STATCOUNTER } from '../config';

type Choice = 'accepted' | 'rejected' | null;
const project = import.meta.env.VITE_STATCOUNTER_PROJECT?.trim() || STATCOUNTER.project;
const security = import.meta.env.VITE_STATCOUNTER_SECURITY?.trim() || STATCOUNTER.security;
export const analyticsConfigured = import.meta.env.VITE_STATCOUNTER_ENABLED !== 'false' && /^\d+$/.test(project) && /^[a-zA-Z0-9]+$/.test(security);
const Context = createContext<{ choice: Choice; choose: (choice: Exclude<Choice, null>) => void; blocked: boolean } | null>(null);

declare global {
  interface Window { sc_project?: number; sc_security?: string; sc_invisible?: number; }
}

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<Choice>(() => {
    const saved = readPreference('sonora-analytics');
    return saved === 'accepted' || saved === 'rejected' ? saved : null;
  });
  const blocked = navigator.doNotTrack === '1';
  useEffect(() => {
    if (!analyticsConfigured || choice !== 'accepted' || blocked || document.getElementById('statcounter-script')) return;
    window.sc_project = Number(project);
    window.sc_security = security;
    window.sc_invisible = 1;
    const script = document.createElement('script');
    script.id = 'statcounter-script';
    script.src = 'https://www.statcounter.com/counter/counter.js';
    script.async = true;
    document.head.appendChild(script);
  }, [choice, blocked]);
  const choose = (value: Exclude<Choice, null>) => {
    const wasActive = choice === 'accepted' && document.getElementById('statcounter-script');
    writePreference('sonora-analytics', value);
    setChoice(value);
    if (wasActive && value === 'rejected') window.location.reload();
  };
  return <Context.Provider value={{ choice, choose, blocked }}>{children}</Context.Provider>;
}

export function useAnalytics() {
  const context = useContext(Context);
  if (!context) throw new Error('AnalyticsProvider required');
  return context;
}

export function AnalyticsBanner() {
  const { t } = useI18n();
  const { choice, choose, blocked } = useAnalytics();
  if (!analyticsConfigured || choice || blocked) return null;
  return <aside className="analytics-banner" aria-label={t.privacy.preferences}>
    <div><strong>{t.privacy.bannerTitle}</strong><p>{t.privacy.bannerText} <Link to="/privacy">{t.common.privacy}</Link></p></div>
    <div className="button-row"><button className="button button-secondary" onClick={() => choose('rejected')}>{t.privacy.deny}</button><button className="button button-primary" onClick={() => choose('accepted')}>{t.privacy.allow}</button></div>
  </aside>;
}
