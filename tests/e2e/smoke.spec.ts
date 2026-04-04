import { expect, test, type Page } from '@playwright/test';

test.describe('Route smoke checks', () => {
  const routes: Array<{ path: string; heading: RegExp }> = [
    { path: '/', heading: /Editing That Keeps People Watching/i },
    { path: '/portfolio', heading: /One showreel\. Clean presentation\. Nothing extra\./i },
    { path: '/services', heading: /Editing services built for creators who publish consistently/i },
    { path: '/faq', heading: /Clear answers before you hand off the footage/i },
    { path: '/contact', heading: /Let's make your content more engaging/i },
    { path: '/terms-and-conditions', heading: /Terms and Conditions/i },
    { path: '/privacy-policy', heading: /Privacy Policy/i },
    { path: '/case-studies', heading: /One showreel\. Clean presentation\. Nothing extra\./i },
    { path: '/solutions', heading: /Editing services built for creators who publish consistently/i },
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
    { path: '/portfolio', heading: /One showreel\. Clean presentation\. Nothing extra\./i },
    { path: '/services', heading: /Editing services built for creators who publish consistently/i },
    { path: '/faq', heading: /Clear answers before you hand off the footage/i },
    { path: '/contact', heading: /Let's make your content more engaging/i },
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

const WEBHOOK_URL =
  process.env.VITE_N8N_WEBHOOK_URL ||
  'https://n8n-dniislmq.ap-southeast-1.clawcloudrun.com/webhook/d7d34c3a-4e3c-41a3-9bd3-21e0141dea8c';
const CORS_HEADERS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
};

async function mockWebhook(page: Page, status: number, body: Record<string, string>) {
  await page.route(WEBHOOK_URL, async (route) => {
    const request = route.request();
    if (request.method() === 'OPTIONS') {
      await route.fulfill({
        status: 204,
        headers: CORS_HEADERS,
      });
      return;
    }

    await route.fulfill({
      status,
      headers: CORS_HEADERS,
      contentType: 'application/json',
      body: JSON.stringify(body),
    });
  });
}

test.describe('Contact form flows', () => {
  test('shows success state when webhook succeeds', async ({ page }) => {
    await mockWebhook(page, 200, { message: 'Lead was received' });
    await page.goto('/contact');
    await page.getByRole('textbox', { name: 'Name' }).fill('Aqib QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@example.com');
    await page.getByRole('textbox', { name: 'WhatsApp number' }).fill('3432142032');
    await page.getByRole('textbox', { name: 'Channel / brand link (optional)' }).fill('youtube.com/@example');
    await page.getByRole('textbox', { name: 'Project details' }).fill(
      'I publish YouTube videos and want cleaner pacing plus short-form clips from the same recording.'
    );
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(
      page.getByText('Great, your message is received. We will be in touch with you shortly.')
    ).toBeVisible();
  });

  test('shows error state when webhook fails', async ({ page }) => {
    await mockWebhook(page, 500, { message: 'Server error' });

    await page.goto('/contact');
    await page.getByRole('textbox', { name: 'Name' }).fill('Aqib QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@example.com');
    await page.getByRole('textbox', { name: 'WhatsApp number' }).fill('3432142032');
    await page.getByRole('textbox', { name: 'Channel / brand link (optional)' }).fill('youtube.com/@example');
    await page.getByRole('textbox', { name: 'Project details' }).fill(
      'I need help editing talking-head YouTube videos and want stronger intros and retention.'
    );
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(
      page.getByText('Submission failed. Please try again or contact us on WhatsApp.')
    ).toBeVisible();
  });
});
