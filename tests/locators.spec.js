/* These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect } from '@playwright/test';

//Locators using getByAltText() method to locate an element by its text alternative
//these getAltText() locators are recommended for images, icons, and other non-text elements that have an alt attribute.
//getAltText() locators are more resilient to changes in the UI and are less likely to break if the text content of the page changes.

test('Verify Playwright locators', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.pause();
  //Get by Alt Text
  const logo = page.getByAltText("nopCommerce demo store");

  //Assert that the logo is visible
  await expect(logo).toBeVisible();

//getByText() locators are recommended for locating elements based on their text content. These locators are more resilient to changes in the UI and are less likely to break if the text content of the page changes.
//getByText() usually locates elements that are visible on the page, such as buttons, links, and headings.
//div, span, p, h1, h2, h3, h4, h5, h6, a, button, li, td, th, label, and other elements that contain text content.

  //Get by Text
  //substring will also work with getByText() locators, so you can locate elements based on a portion of their text content.
  const welcomeText = page.getByText("Welcome to our store");
  
  //Assert that the welcome text is visible
  await expect(welcomeText).toBeVisible();

  //Regular expressions
  //how to make case-insensitive matches with regex, you can use the /i flag at the end of the regex pattern. 
  // This will match the text content regardless of its case.
  await expect(welcomeText).toHaveText(/welcome\s+to\s+our\s+store/i); // using regex to match the text content");

});



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

});