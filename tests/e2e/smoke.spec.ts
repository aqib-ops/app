import { expect, test } from '@playwright/test';

test.describe('Route smoke checks', () => {
  const routes: Array<{ path: string; heading: RegExp }> = [
    { path: '/', heading: /Automate Repeated Work/i },
    { path: '/solutions', heading: /Landing pages for each workflow system you need/i },
    { path: '/pricing', heading: /Simple workflow-first pricing/i },
    { path: '/case-studies', heading: /Real projects\. Measurable operational wins/i },
    { path: '/contact', heading: /Tell us your workflow bottleneck/i },
    { path: '/terms-and-conditions', heading: /Terms and Conditions/i },
    { path: '/privacy-policy', heading: /Privacy Policy/i },
    { path: '/does-not-exist', heading: /This page does not exist/i },
  ];

  for (const route of routes) {
    test(`loads ${route.path}`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
    });
  }
});

test.describe('Contact form flows', () => {
  test('shows success state when webhook succeeds', async ({ page }) => {
    await page.route('**/webhook/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Workflow was started' }),
      });
    });

    await page.goto('/contact');
    await page.getByRole('textbox', { name: 'Name' }).fill('Aqib QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@example.com');
    await page.getByRole('textbox', { name: 'WhatsApp number' }).fill('3432142032');
    await page.getByRole('textbox', { name: 'Business or website' }).fill('example.com');
    await page.getByRole('textbox', { name: 'Project details' }).fill(
      'We need lead qualification and support ticket routing automation with alerts and retries.'
    );
    await page.getByRole('textbox', { name: /Human check/i }).fill('AQIB');
    await page.locator('input[name="termsAccepted"]').check();

    await page.waitForTimeout(2600);
    await page.getByRole('button', { name: 'Send Brief' }).click();
    await expect(
      page.getByText('Great, your message is received. We will be in touch with you shortly.')
    ).toBeVisible();
  });

  test('shows error state when webhook fails', async ({ page }) => {
    await page.route('**/webhook/**', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Server error' }),
      });
    });

    await page.goto('/contact');
    await page.getByRole('textbox', { name: 'Name' }).fill('Aqib QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@example.com');
    await page.getByRole('textbox', { name: 'WhatsApp number' }).fill('3432142032');
    await page.getByRole('textbox', { name: 'Business or website' }).fill('example.com');
    await page.getByRole('textbox', { name: 'Project details' }).fill(
      'We need CRM sync, workflow retries, human approval checkpoints, and reporting automation.'
    );
    await page.getByRole('textbox', { name: /Human check/i }).fill('AQIB');
    await page.locator('input[name="termsAccepted"]').check();

    await page.waitForTimeout(2600);
    await page.getByRole('button', { name: 'Send Brief' }).click();
    await expect(
      page.getByText('Submission failed. Please try again or contact us on WhatsApp.')
    ).toBeVisible();
  });
});
