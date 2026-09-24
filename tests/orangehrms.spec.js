const { test, expect } = require('@playwright/test');

test('Orange HRMS Login', async ({ page }) => {
  await page.goto('https://sureshitacademy.in/hrms/login.php');
  
  await page.fill('input[name="txtUserName"]', 'admin');
  await page.fill('input[name="txtPassword"]', 'admin');
  await page.click('input[type="submit"]');

  // Assertions
  await expect(page).toHaveTitle('Expected Title');
});
