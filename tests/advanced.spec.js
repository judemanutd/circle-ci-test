
import { test, expect } from '@playwright/test';

test.describe('Simple Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Check that the page title contains "Playwright"
    await expect(page).toHaveTitle(/Playwright/);
    
    // Check that the main heading is visible
    await expect(page.getByRole('heading', { name: 'Playwright' })).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Click on the "Get started" link
    await page.getByRole('link', { name: 'Get started' }).click();
    
    // Verify we're on the docs page
    await expect(page).toHaveURL(/.*docs.*/);
  });
});
