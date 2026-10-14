import { LockKeyhole } from 'lucide-react';
import { useI18n } from '../i18n';
import { ExternalLink } from '../components/Shared';

export function Privacy() {
  const { t } = useI18n();
  return <div className="container page-content privacy-page"><section className="page-hero"><LockKeyhole className="page-symbol" size={30} strokeWidth={1.4} /><h1>{t.privacy.title}</h1><p>{t.privacy.intro}</p></section><div className="prose">{t.privacy.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<ExternalLink href="https://vercel.com/docs/analytics/privacy-policy" className="text-link">Vercel Web Analytics · {t.common.privacy} ↗</ExternalLink></div></div>;
}
