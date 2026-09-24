// ============================================================
// IMPORTS
// ============================================================

import { test, expect } from "@playwright/test";

// Single select dropdown test
test("verify the single select dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // verify the single select dropdown
    const dropdown = page.getByRole('combobox', { name: 'Country:' })
    //assert that the dropdown is visible
    await expect(dropdown).toBeVisible();

    //select the option from the dropdown using the text
    await dropdown.selectOption('India');
    await dropdown.selectOption('United States');

    //select the option from the dropdown using the index
    await dropdown.selectOption({ index: 2 });
    await dropdown.selectOption({ index: 3 });

    //select the option from the dropdown using the value
    await dropdown.selectOption({ value: 'usa' });
    await expect(dropdown).toHaveValue('usa');
    await dropdown.selectOption({ value: 'germany' });
    await expect(dropdown).toHaveValue('germany');

    //select the option from the dropdown using the label
    await dropdown.selectOption({ label: 'United States' });
    await expect(dropdown).toHaveValue('usa');

    await page.waitForTimeout(2000);

    //Capture the total number of options in the dropdown
    const optionscount = await dropdown.locator('option').all();
    console.log(`Total number of options in the dropdown: ${optionscount.length}`);

    //Capture the text of all the options in the dropdown in a array and print them to the console
    const optionTexts = [];
    for (const option of optionscount) {
        const text = await option.textContent();
        
        //trim the text to remove any leading or trailing whitespace
        const trimmedText = text.trim();
        optionTexts.push(trimmedText);
        console.log(`Option text: ${trimmedText}`);
    }

    //Capture the value of all the options in the dropdown
    for (const option of optionscount) {
        const value = await option.getAttribute('value');
        console.log(`Option value: ${value}`);
    }

    //assert that the dropdown has the expected number of options
    await expect(dropdown.locator('option')).toHaveCount(optionscount.length);

});

// Multi select dropdown test
test("verify the multi select dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const multiselectDropdown = page.getByRole('listbox', { name: 'Colors:' });
  awaitmultiselectDropdown.selectOption(['red', 'green', 'blue']);

  //assert how many options are selected in the dropdown
    const selectedOptionsCount = await multiselectDropdown.evaluate((select) => {
    return select.selectedOptions.length;
    });

    //assert that the selected options are as expected
  expect(selectedOptions).toEqual(['red', 'green', 'blue']);

  //assert that the dropdown has the expected number of options
  const optionscount = await multiselectDropdown.locator('option').all();
  await expect(multiselectDropdown.locator('option')).toHaveCount(optionscount.length); 

  //collect the selected options and print them to the console
  const selectedOptions = await multiselectDropdown.evaluate((select) => {
    return Array.from(select.selectedOptions).map(option => option.value);
  });

  //assert that the dropdown is visible
  await expect(multiselectDropdown).toBeVisible();


});

