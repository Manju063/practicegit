import { test, expect } from "@playwright/test";

test("Practice test 1", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle(/Google/);
  console.log("Test 1 executed successfully");
} );

test("Practice test 2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle(/Google/);
    console.log("Test 2 executed successfully");
} );    
