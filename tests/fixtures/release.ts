import { PRODUCT_REPO } from '../../src/config';

// Package names from the public 0.1 release, checked on 2026-10-14.
// Network responses are mocked; this fixture does not test the desktop binaries.
const names = [
  'Sonora-Sound-Recorder-0.1.0-Setup-x64.exe',
  'Sonora-Sound-Recorder-0.1.0-Portable-x64.exe',
  'Sonora-Sound-Recorder-0.1.0-arm64.dmg',
  'Sonora-Sound-Recorder-0.1.0-x64.dmg',
  'Sonora-Sound-Recorder-0.1.0-x86_64.AppImage',
  'sonora-sound-recorder_0.1.0_amd64.deb',
];

export const publishedRelease = {
  html_url: `${PRODUCT_REPO}/releases/tag/0.1`,
  draft: false,
  prerelease: false,
  assets: names.map((name) => ({ name, size: 100000, browser_download_url: `${PRODUCT_REPO}/releases/download/0.1/${name}` })),
};
