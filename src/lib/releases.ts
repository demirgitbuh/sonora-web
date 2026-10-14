import { useEffect, useState } from 'react';
import { PRODUCT_REPO, RELEASE_API } from '../config';
import type { Platform } from './platform';

export type ReleaseState =
  | { status: 'loading' | 'pending' | 'error' }
  | { status: 'available'; url: string; packages: Record<Platform, string[]> };

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;

export function parseRelease(value: unknown): ReleaseState {
  if (!isRecord(value) || value.draft === true || value.prerelease === true) return { status: 'pending' };
  if (typeof value.html_url !== 'string' || !value.html_url.startsWith(`${PRODUCT_REPO}/releases/tag/`) || !Array.isArray(value.assets)) {
    return { status: 'error' };
  }
  const packages: Record<Platform, string[]> = { windows: [], mac: [], linux: [] };
  for (const asset of value.assets) {
    if (!isRecord(asset) || typeof asset.name !== 'string' || typeof asset.browser_download_url !== 'string' || typeof asset.size !== 'number' || asset.size <= 0) continue;
    if (!asset.browser_download_url.startsWith(`${PRODUCT_REPO}/releases/download/`)) continue;
    if (/\.exe$/i.test(asset.name)) packages.windows.push(asset.name);
    if (/\.dmg$/i.test(asset.name)) packages.mac.push(asset.name);
    if (/\.(AppImage|deb)$/i.test(asset.name)) packages.linux.push(asset.name);
  }
  if (!Object.values(packages).some((files) => files.length)) return { status: 'pending' };
  return { status: 'available', url: value.html_url, packages };
}

export function useRelease() {
  const [state, setState] = useState<ReleaseState>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;
    const timeout = window.setTimeout(() => controller.abort(), 9000);
    setState({ status: 'loading' });
    fetch(RELEASE_API, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' }, credentials: 'omit' })
      .then(async (response): Promise<ReleaseState> => {
        if (response.status === 404) return { status: 'pending' };
        if (!response.ok) return { status: 'error' };
        return parseRelease(await response.json());
      })
      .then((result) => { if (!disposed) setState(result); })
      .catch(() => { if (!disposed) setState({ status: 'error' }); })
      .finally(() => window.clearTimeout(timeout));
    return () => { disposed = true; controller.abort(); window.clearTimeout(timeout); };
  }, [attempt]);
  return { state, retry: () => setAttempt((value) => value + 1) };
}
