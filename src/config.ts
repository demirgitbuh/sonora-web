export const PRODUCT_REPO = 'https://github.com/demirgitbuh/SonoraSoundRecorder';
export const RELEASES_URL = `${PRODUCT_REPO}/releases`;
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;
export const ISSUES_URL = `${PRODUCT_REPO}/issues`;
export const WEBSITE_REPO = 'https://github.com/demirgitbuh/sonora-web';
export const SITE_URL = 'https://sonoravc.vercel.app';
export const RELEASE_API = 'https://api.github.com/repos/demirgitbuh/SonoraSoundRecorder/releases/latest';

// Default Statcounter code for Sonora https://sonoravc.vercel.app/
// Public browser-side identifiers supplied in the owner's latest Statcounter snippet.
// These are website tracking identifiers, not account credentials.
export const STATCOUNTER = { project: '13359932', security: '6a134e35' } as const;

// The application repository was not public when the website was created.
// Keep feature descriptions labelled as design goals until a released version is reviewed.
export const FEATURES_VERIFIED = false;
