import { expect, test, type Page } from '@playwright/test';

test.describe('Route smoke checks', () => {
  const routes: Array<{ path: string; heading: RegExp }> = [
    { path: '/', heading: /Built to Capture More Opportunities/i },
    { path: '/solutions', heading: /Systems That Capture More.*Automatically/i },
    { path: '/pricing', heading: /Simple workflow-first pricing/i },
    { path: '/case-studies', heading: /Real projects\. Measurable operational wins/i },
    { path: '/faq', heading: /Clear answers before you commit to automation/i },
    { path: '/contact', heading: /Let's Fix What's Slowing You Down/i },
    { path: '/terms-and-conditions', heading: /Terms and Conditions/i },
    { path: '/privacy-policy', heading: /Privacy Policy/i },
    { path: '/insights', heading: /This page does not exist/i },
    { path: '/blog', heading: /This page does not exist/i },
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
    { path: '/', heading: /Built to Capture More Opportunities/i },
    { path: '/solutions', heading: /Systems That Capture More.*Automatically/i },
    { path: '/lead-follow-up-automation', heading: /Lead Capture & Follow-Up System/i },
    { path: '/case-studies', heading: /Real projects\. Measurable operational wins/i },
    { path: '/faq', heading: /Clear answers before you commit to automation/i },
    { path: '/contact', heading: /Let's Fix What's Slowing You Down/i },
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
    await mockWebhook(page, 200, { message: 'Workflow was started' });
    await page.goto('/contact');
    await page.getByRole('textbox', { name: 'Name' }).fill('Aqib QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@example.com');
    await page.getByRole('textbox', { name: 'WhatsApp number' }).fill('3432142032');
    await page.getByRole('textbox', { name: 'Website (optional)' }).fill('example.com');
    await page.getByRole('textbox', { name: 'Message' }).fill(
      'We need lead qualification and support ticket routing automation with alerts and retries.'
    );
    await page.getByRole('button', { name: 'Get My Automation Plan' }).click();
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
    await page.getByRole('textbox', { name: 'Website (optional)' }).fill('example.com');
    await page.getByRole('textbox', { name: 'Message' }).fill(
      'We need CRM sync, workflow retries, human approval checkpoints, and reporting automation.'
    );
    await page.getByRole('button', { name: 'Get My Automation Plan' }).click();
    await expect(
      page.getByText('Submission failed. Please try again or contact us on WhatsApp.')
    ).toBeVisible();
  });
});
