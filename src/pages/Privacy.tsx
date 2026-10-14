import { LockKeyhole } from 'lucide-react';
import { useI18n } from '../i18n';
import { analyticsConfigured, useAnalytics } from '../components/Analytics';
import { ExternalLink } from '../components/Shared';

export function Privacy() {
  const { t } = useI18n();
  const { choice, choose, blocked } = useAnalytics();
  return <div className="container page-content privacy-page"><section className="page-hero"><LockKeyhole className="page-symbol" size={30} strokeWidth={1.4} /><h1>{t.privacy.title}</h1><p>{t.privacy.intro}</p></section><div className="prose">{t.privacy.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<section><h2>{t.privacy.preferences}</h2><p>{analyticsConfigured ? t.privacy.enabled : t.privacy.disabled}</p><p role="status">{blocked ? t.privacy.blocked : choice === 'accepted' ? t.privacy.accepted : choice === 'rejected' ? t.privacy.rejected : t.privacy.undecided}</p>{analyticsConfigured && !blocked && <div className="button-row"><button className="button button-secondary" onClick={() => choose('rejected')}>{t.privacy.deny}</button><button className="button button-primary" onClick={() => choose('accepted')}>{t.privacy.allow}</button></div>}<ExternalLink href="https://statcounter.com/about/legal/#privacy" className="text-link">Statcounter · {t.common.privacy} ↗</ExternalLink></section></div></div>;
}
