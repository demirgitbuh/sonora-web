import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, CircleAlert, Code2, LoaderCircle, Package, RefreshCw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExternalLink, PlatformIcon } from '../components/Shared';
import { LATEST_RELEASE_URL, PRODUCT_REPO } from '../config';
import { useI18n } from '../i18n';
import { getPlatform, platformNames, type Platform } from '../lib/platform';
import { useRelease } from '../lib/releases';

export function Download() {
  const { t } = useI18n();
  const { state, retry } = useRelease();
  const selected = getPlatform();
  const platforms: Platform[] = selected ? [selected, ...(['windows', 'mac', 'linux'] as Platform[]).filter((platform) => platform !== selected)] : ['windows', 'mac', 'linux'];
  const statusTitle = state.status === 'available' ? t.download.available : state.status === 'loading' ? t.download.checking : state.status === 'pending' ? t.download.pending : t.download.error;
  const selectedAvailable = selected && state.status === 'available' && state.packages[selected].length > 0;
  return <div className="download-page container page-content">
    <section className="page-hero"><p className="eyebrow">{t.download.eyebrow}</p><h1>{t.download.title}</h1><p>{t.download.intro}</p></section>
    <div className={`release-status release-${state.status}`} role="status" aria-live="polite">
      <div className="release-status-icon">{state.status === 'loading' ? <LoaderCircle className="spin" size={22} /> : state.status === 'available' ? <Check size={22} /> : state.status === 'error' ? <CircleAlert size={22} /> : <Package size={22} />}</div>
      <div><h2>{statusTitle}</h2>{state.status !== 'available' && state.status !== 'loading' && <p>{state.status === 'pending' ? t.download.pendingText : t.download.errorText}</p>}</div>
      {state.status !== 'loading' && <button className="icon-button retry-button" onClick={retry} aria-label={t.common.retry} title={t.common.retry}><RefreshCw size={18} /></button>}
    </div>
    {selectedAvailable && state.status === 'available' && <div className="recommended-download"><ExternalLink className="button button-primary button-large" href={state.url}><PlatformIcon platform={selected} />{platformNames[selected]} · {t.common.download}<ArrowDown size={18} /></ExternalLink><a className="text-link" href="#platforms">{t.download.otherPlatforms}<ArrowDown size={14} /></a></div>}
    {!selected && <p className="desktop-note">{t.download.desktopOnly}</p>}
    <div className="download-grid" id="platforms">{platforms.map((platform) => {
      const available = state.status === 'available' && state.packages[platform].length > 0;
      return <article key={platform} className={`platform-card ${selected === platform ? 'platform-recommended' : ''}`}>
        <div className="platform-card-top"><div className="platform-icon"><PlatformIcon platform={platform} size={30} /></div>{selected === platform && <span className="recommendation">{t.download.recommended}</span>}</div>
        <h2>{platformNames[platform]}</h2><p className="platform-description">{t.download[platform]}</p>
        <div className="package-types">{(platform === 'windows' ? [`EXE · ${t.download.installer}`, t.download.portable] : platform === 'mac' ? ['DMG'] : ['AppImage', 'DEB']).map((item) => <span key={item}>{item}</span>)}</div>
        <p className={`package-state ${available ? 'package-ready' : ''}`}>{state.status === 'loading' ? <LoaderCircle size={14} className="spin" /> : available ? <Check size={14} /> : <Package size={14} />}{state.status === 'loading' ? t.download.checking : available ? t.download.packageAvailable : state.status === 'error' ? t.download.error : t.download.packagePending}</p>
        {available && state.status === 'available' ? <ExternalLink className="button button-primary" href={state.url}>{t.download.viewRelease}<ArrowUpRight size={16} /></ExternalLink> : <ExternalLink className="button button-secondary" href={state.status === 'error' ? LATEST_RELEASE_URL : PRODUCT_REPO}>{state.status === 'error' ? t.common.latestRelease : t.download.follow}<ArrowUpRight size={16} /></ExternalLink>}
      </article>;
    })}</div>
    <p className="architecture-note">{t.download.architecture}</p>
    <div className="download-resources"><article><BookOpen size={23} strokeWidth={1.4} /><h2>{t.download.helpTitle}</h2><p>{t.download.helpText}</p><Link className="text-link" to="/help">{t.common.help}<ArrowRight size={16} /></Link></article><article><Code2 size={24} strokeWidth={1.4} /><h2>{t.download.sourceTitle}</h2><p>{t.download.sourceText}</p><ExternalLink className="text-link" href={PRODUCT_REPO}>{t.common.source}<ArrowUpRight size={16} /></ExternalLink></article></div>
    <p className="download-security"><ShieldCheck size={17} />{t.download.security}</p>
  </div>;
}
