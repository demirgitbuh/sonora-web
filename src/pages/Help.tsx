import { ArrowUpRight, Info, MessageSquare } from 'lucide-react';
import { useI18n } from '../i18n';
import { ExternalLink } from '../components/Shared';
import { ISSUES_URL } from '../config';

export function Help() {
  const { t } = useI18n();
  return <div className="container page-content help-page"><section className="page-hero"><p className="eyebrow">{t.help.eyebrow}</p><h1>{t.help.title}</h1><p>{t.help.intro}</p></section><div className="help-notice"><Info size={18} /><p>{t.help.notice}</p></div><div className="help-layout"><aside className="help-sidebar"><p className="eyebrow">{t.help.contents}</p><nav>{t.help.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#shortcuts">{t.help.shortcutsTitle}</a></nav></aside><div className="help-body">{t.help.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section id="shortcuts"><h2>{t.help.shortcutsTitle}</h2><div className="shortcuts">{t.help.shortcuts.map((label, index) => <div key={label}><span>{label}</span><kbd>{['K', '␣', 'L'][index]}</kbd></div>)}</div><p>{t.help.shortcutNote}</p></section><section className="support-card"><MessageSquare size={24} strokeWidth={1.4} /><h2>{t.help.supportTitle}</h2><p>{t.help.supportText}</p><ExternalLink href={ISSUES_URL} className="button button-primary">GitHub Issues<ArrowUpRight size={16} /></ExternalLink><p className="support-note">{t.help.supportPending}</p></section></div></div></div>;
}
