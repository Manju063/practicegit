import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {

    // Go to the URL
    await page.goto('https://sureshitacademy.in/hrms/login.php');

    // Assertions - verify the URL
    await expect(page).toHaveURL(/sureshitacademy.in/);

    // Assertions - verify the page title
    await expect(page).toHaveTitle('SureshIT');

});


test('basic test 2', async ({ browser }) => {

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    // Go to Playwright website
    await page.goto('https://playwright.dev/');

    // Locate the header
    const header = page.locator('.navbar__inner .navbar__title');

    // Assertions - verify header text
    await expect(header).toHaveText('Playwright');

    // Close the context
    await context.close();
});