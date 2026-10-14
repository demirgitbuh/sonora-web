import { ArrowUpRight, Command, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { AnchorHTMLAttributes, CSSProperties } from 'react';
import type { Platform } from '../lib/platform';
import { useI18n } from '../i18n';

export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export function Brand({ footer = false }: { footer?: boolean }) {
  const { t } = useI18n();
  return <Link to="/" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label={`Sonora — ${t.common.home}`}>
    <img src="/icon.svg" alt="" width="40" height="40" />
    <span>sonora<span className="brand-period">.</span></span>
  </Link>;
}

export function PlatformIcon({ platform, size = 20 }: { platform: Platform; size?: number }) {
  if (platform === 'mac') return <Command size={size} aria-hidden="true" strokeWidth={1.5} />;
  if (platform === 'linux') return <Terminal size={size} aria-hidden="true" strokeWidth={1.5} />;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" /></svg>;
}

export function Waveform({ compact = false }: { compact?: boolean }) {
  const count = compact ? 43 : 107;
  return <div className={`waveform ${compact ? 'waveform-compact' : ''}`} aria-hidden="true">
    {Array.from({ length: count }, (_, index) => {
      const x = index / (count - 1);
      const envelope = Math.sin(Math.PI * x) ** 1.3;
      const pulse = Math.abs(Math.sin(index * 1.79) * Math.cos(index * .41));
      const height = 5 + envelope * (24 + pulse * 112);
      return <span key={index} style={{ '--height': `${height}px`, '--delay': `${(index % 13) * -0.17}s` } as CSSProperties} />;
    })}
  </div>;
}

export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>;
}

export function Arrow() { return <ArrowUpRight size={17} aria-hidden="true" />; }
