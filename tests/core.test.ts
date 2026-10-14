import { describe, expect, it } from 'vitest';
import { dictionaries, detectLanguage, languages } from '../src/i18n';
import { detectPlatform } from '../src/lib/platform';
import { getPackageLabel, parseRelease } from '../src/lib/releases';
import { PRODUCT_REPO } from '../src/config';
import { publishedRelease } from './fixtures/release';

function stringEntries(value: unknown, prefix = ''): [string, string][] {
  if (typeof value === 'string') return [[prefix, value]];
  if (typeof value !== 'object' || value === null) throw new Error(`Unexpected translation value at ${prefix}`);
  return Object.entries(value).flatMap(([key, child]) => stringEntries(child, `${prefix}.${key}`));
}

describe('six complete languages', () => {
  const base = stringEntries(dictionaries.en).map(([key]) => key);
  for (const { code } of languages) {
    it(`${code} has the same structure and nonempty translations`, () => {
      const entries = stringEntries(dictionaries[code]);
      expect(entries.map(([key]) => key)).toEqual(base);
      expect(entries.every(([, value]) => value.trim().length > 0)).toBe(true);
      expect(dictionaries[code].help.sections.map((section) => section.id)).toEqual(dictionaries.en.help.sections.map((section) => section.id));
    });
  }
  it('uses saved choices before browser preferences and safely falls back', () => {
    expect(detectLanguage('tr', ['de-DE'])).toBe('tr');
    expect(detectLanguage('bad', ['es-ES', 'fr-CA'])).toBe('fr');
    expect(detectLanguage(null, ['zh-Hans-CN'])).toBe('zh');
    expect(detectLanguage(null, ['pt-BR'])).toBe('en');
    expect(detectLanguage('__proto__', [])).toBe('en');
  });
  it('keeps native language names', () => {
    expect(languages.map((item) => item.name)).toEqual(['English', 'Türkçe', 'Deutsch', 'Français', '中文', 'Русский']);
  });
});

describe('desktop recommendations', () => {
  it('recognizes desktops without treating mobile and ChromeOS as desktop targets', () => {
    expect(detectPlatform('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')).toBe('windows');
    expect(detectPlatform('Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)')).toBe('mac');
    expect(detectPlatform('Mozilla/5.0 (X11; Linux x86_64)')).toBe('linux');
    expect(detectPlatform('Mozilla/5.0 (Linux; Android 15) Mobile')).toBeNull();
    expect(detectPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)')).toBeNull();
    expect(detectPlatform('Mozilla/5.0 (X11; CrOS x86_64)')).toBeNull();
  });
});

describe('honest release availability', () => {
  const asset = (name: string) => ({ name, size: 1024, browser_download_url: `${PRODUCT_REPO}/releases/download/0.1/${name}` });
  const release = (assets: unknown[]) => ({ html_url: `${PRODUCT_REPO}/releases/tag/0.1`, assets, draft: false, prerelease: false });
  it('identifies all published packages and displays architecture without a version number', () => {
    const parsed = parseRelease(publishedRelease);
    expect(parsed.status).toBe('available');
    if (parsed.status !== 'available') throw new Error('Expected public packages');
    expect(Object.values(parsed.packages).map((packages) => packages.length)).toEqual([2, 2, 2]);
    const labels = { installer: 'Installer', portable: 'Portable' };
    expect(publishedRelease.assets.map((asset) => getPackageLabel(asset.name, labels))).toEqual([
      'EXE · Installer · x64', 'EXE · Portable · x64', 'DMG · arm64', 'DMG · x64', 'AppImage · x64', 'DEB · x64',
    ]);
  });
  it('does not offer downloads for source archives, empty releases or drafts', () => {
    expect(parseRelease(release([])).status).toBe('pending');
    expect(parseRelease(release([asset('source.zip')])).status).toBe('pending');
    expect(parseRelease({ ...release([asset('Sonora.exe')]), draft: true }).status).toBe('pending');
    expect(parseRelease({ ...release([asset('Sonora.exe')]), prerelease: true }).status).toBe('pending');
  });
  it('tracks actual platforms independently', () => {
    const result = parseRelease(release([asset('Sonora-setup-x64.exe'), asset('Sonora-portable.exe'), asset('Sonora-arm64.dmg'), asset('Sonora.AppImage'), asset('Sonora.deb')]));
    expect(result.status).toBe('available');
    if (result.status !== 'available') throw new Error('Expected available');
    expect(result.packages.windows).toHaveLength(2);
    expect(result.packages.mac).toHaveLength(1);
    expect(result.packages.linux).toHaveLength(2);
    const windowsOnly = parseRelease(release([asset('Sonora.exe')]));
    expect(windowsOnly.status === 'available' && windowsOnly.packages.mac).toEqual([]);
  });
  it('rejects malformed, empty or untrusted download destinations', () => {
    expect(parseRelease({ html_url: 'https://malicious.example/releases/tag/0.1', assets: [] }).status).toBe('error');
    expect(parseRelease(release([{ ...asset('Sonora.exe'), browser_download_url: 'https://example.com/a.exe' }])).status).toBe('pending');
    expect(parseRelease(release([{ ...asset('Sonora.exe'), size: 0 }])).status).toBe('pending');
    expect(parseRelease(release([null, {}])).status).toBe('pending');
  });
});
