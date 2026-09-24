import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  /* Maximum time for a single test */
  timeout: 60 * 1000,

  /* Where test artifacts are stored */
  outputDir: 'test-results/',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is accidentally committed */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests on CI */
  retries: process.env.CI ? 1 : 0,

  /* Use one worker on CI */
  workers: process.env.CI ? 1 : undefined,

  /* HTML report */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    /* Base URL */
    // baseURL: 'https://sureshitacademy.in',

    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders: {
      Accept: 'application/json',
      "Content-Type": 'application/json',
    },

    /* Maximum time for individual actions */
    actionTimeout: 60 * 1000,

    /* Maximum time for navigation */
    navigationTimeout: 60 * 1000,

    /* Run browser in headed mode */
    headless: false,

    /* Screenshot when test fails */
    screenshot: 'only-on-failure',

    /* Keep video when test fails */
    video: 'retain-on-failure',

    /* Collect trace when a failed test is retried */
    trace: 'retain-on-failure',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /*
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    */
  ],
});
