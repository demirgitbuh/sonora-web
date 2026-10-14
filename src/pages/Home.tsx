import { ArrowDown, ArrowRight, AudioLines, Check, Circle, Folder, LockKeyhole, Mic, Plus, Scissors, ShieldCheck, Sparkles, Text, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { getPlatform, platformNames } from '../lib/platform';
import { PlatformIcon, SectionHeading, Waveform } from '../components/Shared';

function FeatureArt({ index }: { index: number }) {
  return <div className={`feature-art feature-art-${index}`} aria-hidden="true">
    {index === 0 && <><span className="source-orbit"><Mic size={26} strokeWidth={1.25} /></span><span className="source-connector" /><span className="source-orbit orbit-main"><AudioLines size={38} strokeWidth={1.25} /></span><span className="source-connector" /><span className="source-orbit"><Waves size={26} strokeWidth={1.25} /></span></>}
    {index === 1 && <div className="trim-art"><Waveform compact /><span className="trim-selection"><i /><i /></span><span className="scissors-badge"><Scissors size={18} /></span></div>}
    {index === 2 && <div className="folders-art"><Folder /><Folder /><Folder /><span><Check size={18} /></span></div>}
    {index === 3 && <><div className="speech-art"><AudioLines size={30} strokeWidth={1.3} /><span /><Text size={30} strokeWidth={1.3} /></div><div className="text-lines"><i /><i /><i /></div><LockKeyhole className="speech-lock" size={14} /></>}
  </div>;
}

export function Home() {
  const { t } = useI18n();
  const platform = getPlatform();
  return <div className="home-page">
    <section className="hero container">
      <p className="eyebrow hero-eyebrow"><span className="tiny-wave"><i /><i /><i /><i /><i /></span>{t.home.eyebrow}</p>
      <h1><span>{t.home.headline[0]}</span> <span className="muted-heading">{t.home.headline[1]}</span></h1>
      <p className="hero-intro">{t.home.intro}</p>
      <div className="button-row hero-actions"><Link className="button button-primary button-large" to="/download">{platform && <PlatformIcon platform={platform} size={18} />}{platform ? `${platformNames[platform]} · ${t.common.download}` : t.home.primary}<ArrowDown size={17} /></Link><Link className="button button-secondary button-large" to="/#features">{t.home.secondary}<ArrowRight size={17} /></Link></div>
      <div className="platform-caption"><div aria-hidden="true"><PlatformIcon platform="windows" size={13} /><PlatformIcon platform="mac" size={14} /><PlatformIcon platform="linux" size={14} /></div><span>{t.home.platforms}</span></div>
      <div className="sound-art">
        <div className="art-label"><span>{t.home.artTop}</span><span className="art-index" aria-hidden="true">01 — ∞</span></div>
        <div className="sound-stage"><div className="stage-line" /><Waveform /><div className="logo-tile"><img src="/icon.svg" alt="" width="116" height="116" /></div><span className="art-cross art-cross-left">+</span><span className="art-cross art-cross-right">+</span></div>
        <div className="art-label art-bottom"><span>{t.home.artCaption}</span><span>{t.home.artBottom}</span></div>
      </div>
      <div className="value-strip">{t.home.values.map((value, index) => { const Icon = [Circle, ShieldCheck, AudioLines][index]; return <div key={value}><Icon size={15} strokeWidth={1.5} aria-hidden="true" /><span>{value}</span></div>; })}</div>
    </section>

    <section id="features" className="section features-section container">
      <SectionHeading eyebrow={t.home.featureEyebrow} title={t.home.featureTitle} text={t.home.featureIntro} />
      <div className="features-grid">{t.home.features.map((feature, index) => <article className="feature-card" key={feature.title}><FeatureArt index={index} /><div className="feature-copy"><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p><div className="feature-detail">{feature.detail}</div></div></article>)}</div>
    </section>

    <section className="formats-section container"><div><p className="eyebrow">{t.home.formatEyebrow}</p><h2>{t.home.formatTitle}</h2><p>{t.home.formatText}</p></div><div className="format-tags" aria-label={t.home.formatEyebrow}>{['WAV', 'MP3', 'FLAC', 'OGG', 'M4A'].map((format) => <span key={format}><AudioLines size={16} strokeWidth={1.3} />{format}</span>)}</div></section>

    <section className="privacy-feature container"><div className="privacy-visual" aria-hidden="true"><div className="privacy-ring ring-one" /><div className="privacy-ring ring-two" /><div className="privacy-ring ring-three" /><div className="lock-tile"><LockKeyhole size={48} strokeWidth={1.1} /></div><span className="privacy-plus plus-one">+</span><span className="privacy-plus plus-two">+</span><span className="privacy-dot" /></div><div className="privacy-copy"><p className="eyebrow">{t.home.privacyEyebrow}</p><h2>{t.home.privacyTitle}</h2><p>{t.home.privacyText}</p><ul>{t.home.privacyPoints.map((point) => <li key={point}><Check size={16} aria-hidden="true" />{point}</li>)}</ul><Link to="/help#models" className="text-link">{t.common.learnMore}<ArrowRight size={16} /></Link></div></section>

    <section className="section workflow-section container"><SectionHeading eyebrow={t.home.workflowEyebrow} title={t.home.workflowTitle} centered /><div className="workflow-grid">{t.home.steps.map((step, index) => <article key={step.title}><div className="step-top"><span>0{index + 1}</span><i /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <section className="faq-section section container" id="faq"><SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} /><div className="faq-list">{t.home.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<Plus size={18} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></section>

    <section className="cta-section container"><Sparkles size={26} strokeWidth={1.2} aria-hidden="true" /><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaText}</p><Link className="button button-primary button-large" to="/download">{t.home.primary}<ArrowDown size={17} /></Link><span className="cta-footnote">{t.home.platforms}</span></section>
  </div>;
}
