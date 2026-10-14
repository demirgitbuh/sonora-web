import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ChevronDown, Globe2, Menu, Moon, Sun, X } from 'lucide-react';
import { languages, useI18n } from '../i18n';
import type { Language } from '../i18n/types';
import { ISSUES_URL, PRODUCT_REPO, RELEASES_URL, WEBSITE_REPO } from '../config';
import { readPreference, writePreference } from '../lib/storage';
import { Brand, ExternalLink } from './Shared';
import { AnalyticsBanner } from './Analytics';

function LanguageSelect() {
  const { t, language, setLanguage } = useI18n();
  return <label className="language-select"><Globe2 size={16} aria-hidden="true" /><select aria-label={t.common.language} value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
    {languages.map(({ code, name }) => <option value={code} key={code} lang={code}>{name}</option>)}
  </select><ChevronDown size={12} aria-hidden="true" /></label>;
}

function ThemeToggle() {
  const { t } = useI18n();
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'light');
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const followSystem = () => {
      if (readPreference('sonora-theme')) return;
      const next = media.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    media.addEventListener('change', followSystem);
    return () => media.removeEventListener('change', followSystem);
  }, []);
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next); document.documentElement.dataset.theme = next; writePreference('sonora-theme', next);
  };
  return <button className="icon-button theme-toggle" onClick={toggle} aria-label={`${t.common.theme}: ${theme === 'light' ? t.common.dark : t.common.light}`}>
    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
  </button>;
}

function Header() {
  const { t } = useI18n();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname, hash]);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <header className="site-header"><div className="header-inner container">
    <Brand />
    <nav className={`main-nav ${open ? 'is-open' : ''}`} id="main-navigation" aria-label={t.common.menu}>
      <Link to="/#features" onClick={() => setOpen(false)}>{t.common.features}</Link>
      <NavLink to="/download" onClick={() => setOpen(false)}>{t.common.download}</NavLink>
      <NavLink to="/help" onClick={() => setOpen(false)}>{t.common.help}</NavLink>
    </nav>
    <div className="header-actions"><LanguageSelect /><ThemeToggle /><Link className="button button-primary header-download" to="/download">{t.common.download}<ArrowDown size={14} aria-hidden="true" /></Link>
      <button ref={menuButton} className="icon-button menu-toggle" aria-label={open ? t.common.close : t.common.menu} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
  </div></header>;
}

function Footer() {
  const { t } = useI18n();
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid"><div className="footer-brand"><Brand footer /><p>{t.footer.tagline}</p><span className="footer-status"><i />{t.footer.status}</span></div>
      <div><h2>{t.footer.product}</h2><Link to="/#features">{t.common.features}</Link><Link to="/download">{t.common.download}</Link><ExternalLink href={RELEASES_URL}>{t.common.releaseNotes}<ArrowUpRight size={13} /></ExternalLink></div>
      <div><h2>{t.footer.resources}</h2><Link to="/help">{t.common.help}</Link><ExternalLink href={ISSUES_URL}>{t.common.issues}<ArrowUpRight size={13} /></ExternalLink><Link to="/privacy">{t.common.privacy}</Link></div>
      <div><h2>{t.footer.openSource}</h2><ExternalLink href={PRODUCT_REPO}>{t.common.source}<ArrowUpRight size={13} /></ExternalLink><ExternalLink href={WEBSITE_REPO}>{t.footer.websiteSource}<ArrowUpRight size={13} /></ExternalLink><ExternalLink href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0<ArrowUpRight size={13} /></ExternalLink></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sonora Sound Recorder</span><span>{t.footer.madeBy} <ExternalLink href="https://github.com/demirgitbuh">demirgitbuh<ArrowUpRight size={12} /></ExternalLink></span></div>
  </div></footer>;
}

function PageEffects() {
  const { pathname, hash } = useLocation();
  const { t, language } = useI18n();
  const initialPath = useRef(pathname);
  useEffect(() => {
    const key = pathname === '/download' ? 'download' : pathname === '/help' ? 'help' : pathname === '/privacy' ? 'privacy' : 'home';
    document.title = t.meta[key];
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.meta[key]);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.meta.description);
  }, [pathname, language, t]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id: string;
        try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
        document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        if (initialPath.current !== pathname) document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
      }
      initialPath.current = pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  const { t } = useI18n();
  return <><a className="skip-link" href="#main-content">{t.common.skip}</a><PageEffects /><Header /><main id="main-content" tabIndex={-1}><Outlet /></main><Footer /><AnalyticsBanner /></>;
}
