import { test, expect } from "@playwright/test";

test("Practice test 3", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle(/Google/);
  console.log("Test 3 executed successfully");
} );

test("Practice test 4", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle(/GoogleWrapper/);
    console.log("Test 4 executed successfully");
} );    
