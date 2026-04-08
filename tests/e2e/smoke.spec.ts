import { expect, test } from '@playwright/test';

test.describe('Route smoke checks', () => {
  const routes: Array<{ path: string; heading: RegExp }> = [
    { path: '/', heading: /Editing That Keeps People Watching/i },
    { path: '/portfolio', heading: /Selected edits, with more on the way\./i },
    { path: '/services', heading: /Editing services built for creators who need clean output and better retention/i },
    { path: '/faq', heading: /Clear answers before you hand off the footage/i },
    { path: '/terms-and-conditions', heading: /Terms and Conditions/i },
    { path: '/privacy-policy', heading: /Privacy Policy/i },
    { path: '/case-studies', heading: /Selected edits, with more on the way\./i },
    { path: '/solutions', heading: /Editing services built for creators who need clean output and better retention/i },
    { path: '/does-not-exist', heading: /This page does not exist/i },
  ];

  for (const route of routes) {
    test(`loads ${route.path}`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
    });
  }
});

test.describe('Mobile layout checks', () => {
  const routes: Array<{ path: string; heading: RegExp }> = [
    { path: '/', heading: /Editing That Keeps People Watching/i },
    { path: '/portfolio', heading: /Selected edits, with more on the way\./i },
    { path: '/services', heading: /Editing services built for creators who need clean output and better retention/i },
    { path: '/faq', heading: /Clear answers before you hand off the footage/i },
  ];

  for (const route of routes) {
    test(`stays inside viewport on ${route.path}`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(route.path);
      await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
      await page.waitForTimeout(250);

      const metrics = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));

      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 2);
    });
  }
});
