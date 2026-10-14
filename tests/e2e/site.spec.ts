import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { RELEASE_API, PRODUCT_REPO, RELEASES_URL } from '../../src/config';
import { publishedRelease } from '../fixtures/release';

test.beforeEach(async ({ page }) => {
  await page.route(RELEASE_API, (route) => route.fulfill({ json: publishedRelease }));
  // Never send synthetic CI visits to the owner's actual analytics project.
  await page.route('**/_vercel/insights/**', (route) => route.fulfill({ contentType: 'application/javascript', body: '/* analytics mocked in CI */' }));
});

test('all six languages work, persist, and fit narrow screens', async ({ page }) => {
  await page.goto('/');
  for (const code of ['tr', 'de', 'fr', 'zh', 'ru', 'en']) {
    await page.locator('header select').selectOption(code);
    await expect(page.locator('html')).toHaveAttribute('lang', code);
    await expect(page.locator('h1')).not.toBeEmpty();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  }
  await page.locator('header select').selectOption('tr');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
  await expect(page.locator('h1')).toContainText('en sade hâliyle.');
  await page.goto('/help');
  await expect(page.locator('h1')).toHaveText('Güzel bir başlangıç.');
});

test('theme follows system initially and remembers manual selection', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.locator('.theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('missing release is explicit and never provides fake binaries', async ({ page }) => {
  await page.route(RELEASE_API, (route) => route.fulfill({ status: 404, json: { message: 'Not Found' } }));
  await page.goto('/download');
  await expect(page.getByRole('status')).toContainText('No current installer found.');
  await expect(page.locator('.platform-card')).toHaveCount(3);
  await expect(page.locator('.package-ready')).toHaveCount(0);
  await expect(page.locator('a[href$=".exe"], a[href$=".dmg"], a[href$=".deb"]')).toHaveCount(0);
});

test('only platforms with real assets receive release download links', async ({ page }) => {
  await page.route(RELEASE_API, (route) => route.fulfill({ json: {
    html_url: `${PRODUCT_REPO}/releases/tag/0.1`, draft: false, prerelease: false,
    assets: [{ name: 'Sonora-Windows-x64.exe', size: 100000, browser_download_url: `${PRODUCT_REPO}/releases/download/0.1/Sonora-Windows-x64.exe` }],
  } }));
  await page.goto('/download');
  await expect(page.getByRole('status')).toContainText('A public release is available');
  await expect(page.locator('.package-ready')).toHaveCount(1);
  await expect(page.locator('.platform-card').filter({ has: page.getByRole('heading', { name: 'Windows', exact: true }) }).getByRole('link')).toHaveAttribute('href', `${PRODUCT_REPO}/releases/tag/0.1`);
  await expect(page.locator('.platform-card').filter({ has: page.getByRole('heading', { name: 'macOS', exact: true }) }).getByRole('link')).toHaveAttribute('href', RELEASES_URL);
});

test('GitHub errors can be retried', async ({ page }) => {
  let attempts = 0;
  await page.route(RELEASE_API, (route) => { attempts++; return route.fulfill({ status: attempts === 1 ? 403 : 404, json: {} }); });
  await page.goto('/download');
  await expect(page.getByRole('status')).toContainText('Release information is temporarily unavailable.');
  await page.getByRole('button', { name: 'Check again' }).click();
  await expect(page.getByRole('status')).toContainText('No current installer found.');
});

test('navigation, FAQ and help anchors are usable', async ({ page, isMobile }) => {
  await page.goto('/');
  const faq = page.locator('details').first();
  await faq.locator('summary').click();
  await expect(faq).toHaveAttribute('open', '');
  if (isMobile) await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.locator('#main-navigation').getByRole('link', { name: 'Getting started', exact: true }).click();
  await expect(page).toHaveURL('/help');
  await page.locator('.help-sidebar a[href="#models"]').click();
  await expect(page).toHaveURL('/help#models');
  await expect(page.locator('#models')).toBeInViewport();
});

test('blocked storage does not prevent navigation or language changes', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('Storage blocked'); };
    Storage.prototype.setItem = () => { throw new Error('Storage blocked'); };
  });
  await page.goto('/');
  await page.locator('header select').selectOption('fr');
  await expect(page.locator('h1')).toContainText('simplement.');
  await page.locator('.hero-actions a').first().click();
  await expect(page.locator('h1')).toContainText('Votre prochaine prise');
});

test('Vercel Web Analytics loads once and privacy information is current', async ({ page }) => {
  await page.goto('/privacy');
  await expect(page.getByRole('heading', { name: 'Vercel Web Analytics', exact: true })).toBeVisible();
  await expect(page.locator('script[src*="/_vercel/insights/script.js"]')).toHaveCount(1);
  await expect.poll(() => page.evaluate(() => window.vaq?.filter(([event]) => event === 'pageview').map(([, data]) => data))).toContainEqual({ route: '/privacy', path: '/privacy' });
  await page.locator('.brand').first().click();
  await expect(page.locator('script[src*="/_vercel/insights/script.js"]')).toHaveCount(1);
  await expect.poll(() => page.evaluate(() => window.vaq?.filter(([event]) => event === 'pageview').map(([, data]) => data))).toContainEqual({ route: '/', path: '/' });
});

test('published package options show all architectures and remain usable in six languages', async ({ page }) => {
  await page.goto('/download');
  await expect(page.getByRole('status')).toContainText('A public release is available');
  await expect(page.locator('.package-ready')).toHaveCount(3);
  await expect(page.locator('.package-types span')).toHaveCount(6);
  await expect(page.getByText('DMG · arm64', { exact: true })).toBeVisible();
  await expect(page.getByText('DMG · x64', { exact: true })).toBeVisible();
  await expect(page.locator('.platform-card a')).toHaveCount(3);
  for (const code of ['tr', 'de', 'fr', 'zh', 'ru', 'en']) {
    await page.locator('header select').selectOption(code);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    await expect(page.locator('.package-types')).not.toContainText(['0.1.0']);
  }
});

test('pages are accessible and produce visual review artifacts', async ({ page }, testInfo) => {
  test.setTimeout(120000);
  for (const path of ['/', '/download', '/help', '/privacy']) {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(path);
    await expect(page.locator('h1')).toBeVisible();
    if (path === '/download') await expect(page.getByRole('status')).toContainText('A public release is available');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath(`${path === '/' ? 'home' : path.slice(1)}-${testInfo.project.name}.png`), fullPage: true });
  }
  await page.goto('/');
  await page.locator('header select').selectOption('tr');
  await page.locator('.theme-toggle').click();
  const dark = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(dark.violations).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath(`home-dark-tr-${testInfo.project.name}.png`), fullPage: true });
});
