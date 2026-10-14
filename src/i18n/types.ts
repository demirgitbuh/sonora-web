export type Language = 'en' | 'tr' | 'de' | 'fr' | 'zh' | 'ru';

export interface Messages {
  meta: { home: string; download: string; help: string; privacy: string; description: string };
  common: {
    features: string; download: string; help: string; github: string; language: string;
    theme: string; light: string; dark: string; menu: string; close: string; skip: string;
    home: string; releaseNotes: string; privacy: string; source: string; issues: string;
    learnMore: string; for: string; latestRelease: string; retry: string;
  };
  home: {
    eyebrow: string; headline: [string, string]; intro: string; primary: string; secondary: string;
    platforms: string; artTop: string; artBottom: string; artCaption: string;
    values: [string, string, string]; featureEyebrow: string; featureTitle: string; featureIntro: string;
    features: { title: string; text: string; detail: string }[];
    formatEyebrow: string; formatTitle: string; formatText: string;
    privacyEyebrow: string; privacyTitle: string; privacyText: string; privacyPoints: [string, string, string];
    workflowEyebrow: string; workflowTitle: string; steps: { title: string; text: string }[];
    faqEyebrow: string; faqTitle: string; faqs: { question: string; answer: string }[];
    ctaTitle: string; ctaText: string;
  };
  download: {
    eyebrow: string; title: string; intro: string; recommended: string; allPlatforms: string;
    checking: string; available: string; pending: string; pendingText: string; error: string; errorText: string;
    viewRelease: string; follow: string; otherPlatforms: string; packagePending: string;
    packageAvailable: string; windows: string; mac: string; linux: string;
    installer: string; portable: string; architecture: string; sourceTitle: string; sourceText: string;
    helpTitle: string; helpText: string; security: string; desktopOnly: string;
  };
  help: {
    eyebrow: string; title: string; intro: string; notice: string; contents: string;
    sections: { id: string; title: string; paragraphs: string[] }[];
    shortcutsTitle: string; shortcuts: [string, string, string]; shortcutNote: string;
    supportTitle: string; supportText: string; supportNote: string; modelDownload: string;
  };
  privacy: {
    title: string; intro: string; sections: { title: string; text: string }[];
  };
  footer: { tagline: string; product: string; resources: string; openSource: string; madeBy: string; status: string; websiteSource: string };
  notFound: { title: string; text: string };
}
