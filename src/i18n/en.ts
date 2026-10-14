import type { Messages } from './types';

export const en: Messages = {
  meta: {
    home: 'Sonora — Sound, simply.', download: 'Download — Sonora', help: 'Getting started — Sonora', privacy: 'Privacy — Sonora',
    description: 'A quieter space for your sound. Discover Sonora, an open-source desktop audio recorder in development for Windows, macOS and Linux.',
  },
  common: {
    features: 'Features', download: 'Download', help: 'Getting started', github: 'GitHub', language: 'Language', theme: 'Change theme', light: 'Light', dark: 'Dark', menu: 'Open menu', close: 'Close', skip: 'Skip to content', home: 'Home', releaseNotes: 'Release notes', privacy: 'Privacy', source: 'Source code', issues: 'Report an issue', planned: 'Design goal', learnMore: 'Explore the details', for: 'For', latestRelease: 'Latest release', retry: 'Check again',
  },
  home: {
    eyebrow: 'LESS NOISE. MORE POSSIBILITY.', headline: ['Sound,', 'simply.'],
    intro: 'Your ideas deserve to be heard. A thoughtfully designed desktop recorder, bringing capture, editing and your audio library into one quiet space.',
    primary: 'Discover Sonora', secondary: 'Explore the features', platforms: 'Designed for Windows, macOS & Linux',
    artTop: 'A LITTLE CLARITY.', artBottom: 'A LOT OF POSSIBILITY.', artCaption: 'Make room for what matters.',
    values: ['Open source by design', 'A local-first approach', 'Three platforms. One space.'],
    featureEyebrow: 'THOUGHTFULLY SIMPLE', featureTitle: 'Everything in its right place.',
    featureIntro: 'From the first idea to the final export. A focused set of tools, designed to stay out of your way.',
    featureStatus: 'Sonora is in development. The features below describe the product design goals, not a verified released build.',
    features: [
      { title: 'Find your source.', text: 'A voice, your desktop, or both. Flexible audio sources with independent levels and recording sessions.', detail: 'Microphone · System audio · Multiple sessions' },
      { title: 'Keep the good parts.', text: 'Trim the edges, cut a section and jump to a marker. Shape your recording without losing the original.', detail: 'Trim · Cut · Time markers' },
      { title: 'A place for every idea.', text: 'An audio library that makes sense. Find recordings with folders, tags, favorites and your own notes.', detail: 'Folders · Tags · Search' },
      { title: 'From sound to words.', text: 'An optional, on-device transcription workflow. Choose a compatible local model and keep the processing on your computer.', detail: 'Local model · Optional transcription' },
    ],
    formatEyebrow: 'YOUR AUDIO. YOUR FORMAT.', formatTitle: 'One recording. More possibilities.',
    formatText: 'Five planned export formats, from uncompressed audio to everyday listening. The format support of each release will be documented on GitHub.',
    privacyEyebrow: 'PERSONAL BY NATURE', privacyTitle: 'Your voice.\nYour space.',
    privacyText: 'Built around a simple idea: a desktop recording tool should feel like your own. Local files, an optional local speech model and source code you can inspect.',
    privacyPoints: ['Local recording and archive design', 'No cloud transcription in the product plan', 'Open source under GPL-3.0'],
    workflowEyebrow: 'A NATURAL FLOW', workflowTitle: 'Less setup. More say.',
    steps: [
      { title: 'Make it yours.', text: 'Choose your language, audio source and recording folder.' },
      { title: 'Capture the moment.', text: 'Record, pause and mark the moments worth returning to.' },
      { title: 'Give it a home.', text: 'Review your audio, choose a format and keep your library organized.' },
    ],
    faqEyebrow: 'A FEW GOOD QUESTIONS', faqTitle: 'Good to know.',
    faqs: [
      { question: 'Is Sonora free and open source?', answer: 'Sonora is planned as free, GPL-3.0-licensed software. The application repository and its license will be available through the GitHub links when the project is published.' },
      { question: 'Can I download it right now?', answer: 'The first public release is being prepared. The download page checks GitHub for published installers and never presents an unavailable package as a working download.' },
      { question: 'Does my audio leave my computer?', answer: 'The product specification uses local recording files and optional on-device transcription. This website does not access your microphone or accept audio uploads. Review a released build and its documentation for the implementation details.' },
      { question: 'Will it record system audio?', answer: 'System-audio capture is a design goal for supported environments. Actual availability depends on your operating system, permissions and audio stack. Platform limitations must be confirmed in the released application.' },
      { question: 'Which audio formats are planned?', answer: 'WAV, MP3, FLAC, OGG Opus and M4A AAC. WAV is the planned default. Consult the release notes for verified format and quality support.' },
      { question: 'How will local transcription work?', answer: 'The plan is to use a whisper.cpp-compatible local model selected by you. Models will not be downloaded automatically. The exact model format and supported runners must be confirmed in the release documentation.' },
    ],
    ctaTitle: 'Make space for your next idea.', ctaText: 'A calmer way to capture sound is taking shape. Find the latest release information for your desktop.',
  },
  download: {
    eyebrow: 'AT HOME ON YOUR DESKTOP', title: 'Your next recording\nstarts here.', intro: 'One familiar space for Windows, macOS and Linux. Find the latest published packages on GitHub.', recommended: 'For your system', allPlatforms: 'All platforms', checking: 'Checking published releases…', available: 'A public release is available', pending: 'The first release is on its way.', pendingText: 'Sonora is being prepared for its first public release. Installers are not available yet. This page will link to the release when packages are published.', error: 'Release information is temporarily unavailable.', errorText: 'GitHub could not be reached or its request limit was exceeded. Try again, or check the release page directly.', viewRelease: 'Open download options', follow: 'Follow the project on GitHub', otherPlatforms: 'Looking for another platform?', packagePending: 'No published package found', packageAvailable: 'Published package available on GitHub', windows: 'A familiar home for your recordings.', mac: 'A little more clarity for your Mac.', linux: 'Your desktop. Your way.', installer: 'Installer', portable: 'Portable', architecture: 'Choose the processor architecture listed in the GitHub release. Package availability may differ by platform.', sourceTitle: 'Open at the source.', sourceText: 'Explore the project, read release notes and follow development on GitHub. The application repository is being prepared for publication.', helpTitle: 'A good place to start.', helpText: 'Installation, audio permissions and the first steps. Find your way around before your first recording.', security: 'Downloads are hosted on GitHub Releases. Always check the publisher, file type and supported architecture.', desktopOnly: 'Sonora is a desktop application. Choose your computer’s operating system below.',
  },
  help: {
    eyebrow: 'A LITTLE GUIDANCE', title: 'Start on a good note.', intro: 'A practical guide to installing Sonora and making it your own.', notice: 'Pre-release guide: these steps describe the intended workflow. Installers, permissions and model compatibility must be checked against the first published release.', contents: 'ON THIS PAGE',
    sections: [
      { id: 'installation', title: '01 — Installation', paragraphs: ['First, open the download page and check whether a package has been published for your operating system. Download only from the linked GitHub release.', 'Windows: choose the EXE installer or portable package when available. The installer is intended for a regular installation; the portable edition runs from its extracted folder.', 'macOS: choose a DMG that matches your processor, open it and follow the included installation instructions. Signing and notarization status must be checked in the release notes.', 'Linux: choose AppImage or DEB when available. For AppImage, allow execution in the file properties. Install a DEB with your distribution’s package manager. Check the release for supported distributions and dependencies.'] },
      { id: 'first-start', title: '02 — Your first launch', paragraphs: ['The first setup is designed to begin with language selection: English, Türkçe, Deutsch, Français, 中文 or Русский.', 'Choose a writable recording folder, then review microphone permissions, your default audio source and keyboard shortcuts. Microphone is the planned default source.', 'The planned initial audio target is WAV at 48 kHz, stereo, with the high-quality profile. Actual capture quality depends on the input device and any documented conversion.'] },
      { id: 'permissions', title: '03 — Audio & permissions', paragraphs: ['Windows: check microphone access in Settings → Privacy & security → Microphone, including access for desktop applications. System-audio availability depends on the implementation in the released build.', 'macOS: review Microphone and, when requested, Screen & System Audio Recording permissions in System Settings → Privacy & Security. Permission names vary by macOS version.', 'Linux: verify your input device and audio routing. PipeWire, PulseAudio, Wayland portals and desktop environment support may affect capture. Consult the platform notes for the released version.', 'A missing system-audio source is not a successful recording. Use a supported source and check levels before an important session.'] },
      { id: 'recording', title: '04 — Recording & your library', paragraphs: ['The intended workflow is to choose a source, start recording, pause when needed and add time markers without interrupting your flow.', 'After stopping, the default flow opens a full-workspace preview for listening and editing. Saving, copying and replacing an original should always be explicit.', 'The archive design includes folders, tags, favorites, notes and a recoverable trash area. Keep independent backups of recordings that matter to you.'] },
      { id: 'models', title: '05 — Local transcription', paragraphs: ['Transcription is optional and is intended to run on your computer using a separately selected whisper.cpp-compatible model. This site does not upload or transcribe audio.', 'After a release is available, read its model compatibility instructions before obtaining a model. A .bin extension alone is not proof of compatibility; runtime and model versions matter.', 'Select the model in the application’s transcription settings. Automatic model download is not part of the design. Processing speed and memory needs depend on your hardware and model size.'] },
      { id: 'updates', title: '06 — Releases & updates', paragraphs: ['All public release notes and download assets belong on GitHub Releases. The website points to the latest release without displaying a hard-coded version number.', 'Review the release notes for supported features, known limitations, architectures and upgrade instructions. Automatic installation support can differ between installer, portable, DMG, AppImage and DEB packages.'] },
    ],
    shortcutsTitle: 'A few keys, a little less friction.', shortcuts: ['Start / stop recording', 'Pause / resume', 'Add a time marker'], shortcutNote: 'Planned defaults: K, Space and L. Global shortcut support depends on the platform. In the app, typing in text fields should not trigger recording controls.', supportTitle: 'Need a hand?', supportText: 'When the repository is published, GitHub Issues is the place for reproducible bugs and questions. Include your operating system and relevant steps; do not attach private recordings.', supportPending: 'The application repository and its issue tracker are being prepared.',
  },
  privacy: {
    title: 'A clear view of privacy.', intro: 'This page explains this website, separately from the Sonora desktop application.',
    sections: [
      { title: 'This is a product website', text: 'This site does not request microphone access, record audio, accept audio uploads or run speech recognition. Download links take you to GitHub.' },
      { title: 'Preferences on your device', text: 'The site remembers your selected language, color theme and analytics choice in local storage. These preferences are not sent to an account or a Sonora server. If browser storage is blocked, the site still works for the current visit.' },
      { title: 'Release availability', text: 'The download page requests public release metadata from api.github.com to determine whether platform packages exist. GitHub receives ordinary network request information, such as your IP address. No recording or account credentials are included.' },
      { title: 'Optional Statcounter analytics', text: 'When the site owner configures Statcounter, it is loaded only after you choose to allow analytics. It may process visit information such as pages viewed, referrers, browser details and IP address under Statcounter’s privacy policy. Rejecting analytics does not limit the website. Revoking consent reloads the page to stop the previously loaded script.' },
      { title: 'Hosting and external links', text: 'The hosting provider handles the technical requests needed to serve this site and may keep operational logs. GitHub and other external services apply their own privacy policies after you follow their links. Fonts are served with the site, not requested from a font service.' },
    ],
    enabled: 'Statcounter is configured.', disabled: 'Statcounter is not configured; no analytics script is loaded.', accepted: 'Your choice: analytics allowed.', rejected: 'Your choice: analytics declined.', undecided: 'You have not enabled analytics.', allow: 'Allow analytics', deny: 'Decline analytics', preferences: 'Analytics preferences', bannerTitle: 'A small question about analytics.', bannerText: 'Allow optional Statcounter visit statistics? Your choice does not affect access to the website.', blocked: 'Your browser’s Do Not Track setting is on. Analytics stays off.',
  },
  footer: { tagline: 'A quieter space for your sound.', product: 'PRODUCT', resources: 'RESOURCES', openSource: 'OPEN BY DESIGN', madeBy: 'Made by', status: 'Desktop app in development', websiteSource: 'Website source' },
  notFound: { title: 'A moment of silence.', text: 'This page could not be found. Let’s head back home.' },
};
