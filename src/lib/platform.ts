export type Platform = 'windows' | 'mac' | 'linux';

export function detectPlatform(userAgent: string): Platform | null {
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(userAgent)) return null;
  if (/Windows/i.test(userAgent)) return 'windows';
  if (/Macintosh|Mac OS X/i.test(userAgent)) return 'mac';
  if (/Linux|X11/i.test(userAgent) && !/CrOS/i.test(userAgent)) return 'linux';
  return null;
}

export function getPlatform(): Platform | null {
  // iPadOS can identify as a desktop Mac. Do not recommend a DMG to a tablet.
  if (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1) return null;
  return detectPlatform(navigator.userAgent);
}

export const platformNames: Record<Platform, string> = { windows: 'Windows', mac: 'macOS', linux: 'Linux' };
