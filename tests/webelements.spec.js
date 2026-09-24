// ============================================================
// IMPORTS
// ============================================================

import { test, expect } from "@playwright/test";


// ============================================================
// TEXT BOXES
// ============================================================

class TextBox {

  // ----------------------------------------------------------
  // Method to verify and enter values in text boxes
  // ----------------------------------------------------------

  async verifyTextBoxes(page) {

    // --------------------------------------------------------
    // Name Text Box
    // --------------------------------------------------------

    // Locate Name text box
    const nameInput = page.getByRole("textbox", {
      name: "Enter Name",
    });

    // Verify Name text box is visible
    await expect(nameInput).toBeVisible();

    // Enter name
    await nameInput.fill("Kaushik VM");

    // Verify entered name
    await expect(nameInput).toHaveValue("Kaushik VM");

    // Get and print entered value
    console.log(
      `Name input value: ${await nameInput.inputValue()}`
    );


    // --------------------------------------------------------
    // Email Text Box
    // --------------------------------------------------------

    // Locate Email text box
    const emailInput = page.getByRole("textbox", {
      name: "Enter EMail",
    });

    // Verify Email text box is visible
    await expect(emailInput).toBeVisible();

    // Enter email
    await emailInput.fill("kaushik.icon@gmail.com");

    // Verify entered email
    await expect(emailInput).toHaveValue(
      "kaushik.icon@gmail.com"
    );

    // Get and print entered value
    console.log(
      `Email input value: ${await emailInput.inputValue()}`
    );


    // --------------------------------------------------------
    // Phone Text Box
    // --------------------------------------------------------

    // Locate Phone text box
    const phoneInput = page.getByRole("textbox", {
      name: "Enter Phone",
    });

    // Verify Phone text box is visible
    await expect(phoneInput).toBeVisible();

    // Enter phone number
    await phoneInput.fill("8199172829");

    // Verify entered phone number
    await expect(phoneInput).toHaveValue("8199172829");

    // Get and print entered value
    console.log(
      `Phone input value: ${await phoneInput.inputValue()}`
    );


    // --------------------------------------------------------
    // Address Text Box
    // --------------------------------------------------------

    // Address value
    const address =
      "289392k4nkjnk239u2\n2kj3n4jkn23090\nBangalore 560077";

    // Locate Address text box
    const addressInput = page.getByRole("textbox", {
      name: "Address:",
    });

    // Verify Address text box is visible
    await expect(addressInput).toBeVisible();

    // Enter address
    await addressInput.fill(address);

    // Verify entered address
    await expect(addressInput).toHaveValue(address);

    // Get and print entered value
    console.log(
      `Address input value: ${await addressInput.inputValue()}`
    );
  }
}


// ============================================================
// RADIO BUTTONS
// ============================================================

class RadioButtons {

  // ----------------------------------------------------------
  // Method to verify radio buttons
  // ----------------------------------------------------------

  async verifyRadioButtons(page) {

    // --------------------------------------------------------
    // Male Radio Button
    // --------------------------------------------------------

    // Locate Male radio button
    const maleRadio = page.getByRole("radio", {
      name: "Male",
      exact: true,
    });

    // Verify Male radio button is visible
    await expect(maleRadio).toBeVisible();

    // Select Male
    await maleRadio.check();

    // Verify Male is selected
    await expect(maleRadio).toBeChecked();

    console.log("Male radio button is selected");


    // --------------------------------------------------------
    // Female Radio Button
    // --------------------------------------------------------

    // Locate Female radio button
    const femaleRadio = page.getByRole("radio", {
      name: "Female",
      exact: true,
    });

    // Verify Female radio button is visible
    await expect(femaleRadio).toBeVisible();

    // Select Female
    // Selecting Female automatically unselects Male
    await femaleRadio.check();

    // Verify Female is selected
    await expect(femaleRadio).toBeChecked();

    // Verify Male is now unselected
    await expect(maleRadio).not.toBeChecked();

    console.log("Female radio button is selected");
    console.log("Male radio button is unselected");
  }
}


// ============================================================
// CHECKBOXES
// ============================================================

class Checkboxes {

  // ----------------------------------------------------------
  // Method to verify checkboxes
  // ----------------------------------------------------------

  async verifyCheckboxes(page) {

    // List of all days
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];


    // --------------------------------------------------------
    // 1. Verify total number of days
    // --------------------------------------------------------

    expect(days.length).toBe(7);

    console.log(
      `Total number of days: ${days.length}`
    );


    // --------------------------------------------------------
    // 2. Check and uncheck one checkbox
    // --------------------------------------------------------

    // Locate Sunday checkbox
    const sunday = page.getByLabel("Sunday");

    // Verify Sunday checkbox exists
    await expect(sunday).toHaveCount(1);

    // Check Sunday
    await sunday.check();

    // Verify Sunday is checked
    await expect(sunday).toBeChecked();

    console.log("Sunday checkbox checked");

    // Uncheck Sunday
    await sunday.uncheck();

    // Verify Sunday is unchecked
    await expect(sunday).not.toBeChecked();

    console.log("Sunday checkbox unchecked");


    // --------------------------------------------------------
    // 3. Check all checkboxes
    // --------------------------------------------------------

    console.log("Checking all checkboxes...");

    for (const day of days) {

      // Locate checkbox using day name
      const checkbox = page.getByLabel(day);

      // Verify checkbox exists
      await expect(checkbox).toHaveCount(1);

      // Check checkbox
      await checkbox.check();

      // Verify checkbox is checked
      await expect(checkbox).toBeChecked();

      console.log(`Checked: ${day}`);
    }


    // --------------------------------------------------------
    // 4. Uncheck last 3 checkboxes
    // --------------------------------------------------------

    console.log("Unchecking last 3 checkboxes...");

    for (
      let i = days.length - 3;
      i < days.length;
      i++
    ) {

      // Get day using array index
      const day = days[i];

      // Locate checkbox
      const checkbox = page.getByLabel(day);

      // Uncheck checkbox
      await checkbox.uncheck();

      // Verify checkbox is unchecked
      await expect(checkbox).not.toBeChecked();

      console.log(`Unchecked: ${day}`);

      // Print current state
      console.log(
        `Checked state of ${day}: ${await checkbox.isChecked()}`
      );
    }


    // --------------------------------------------------------
    // 5. Toggle every checkbox
    // --------------------------------------------------------

    console.log("Toggling all checkboxes...");

    for (const day of days) {

      // Locate checkbox
      const checkbox = page.getByLabel(day);

      // Check current state
      const isChecked = await checkbox.isChecked();

      // If checked, uncheck it
      if (isChecked) {

        await checkbox.uncheck();

        console.log(`Unchecked: ${day}`);

      }

      // If unchecked, check it
      else {

        await checkbox.check();

        console.log(`Checked: ${day}`);
      }
    }


    // --------------------------------------------------------
    // 6. Select random checkboxes
    // --------------------------------------------------------

    // Array indexes:
    // 1 = Monday
    // 4 = Thursday
    // 6 = Saturday

    const randomCheckboxes = [1, 4, 6];

    console.log("Selecting random checkboxes...");

    for (const index of randomCheckboxes) {

      // Get day name using index
      const day = days[index];

      // Locate checkbox
      const checkbox = page.getByLabel(day);

      // Check checkbox
      await checkbox.check();

      // Verify checkbox is checked
      await expect(checkbox).toBeChecked();

      console.log(`Checked: ${day}`);
    }


    // --------------------------------------------------------
    // 7. Unselect random checkboxes
    // --------------------------------------------------------

    // Array indexes:
    // 0 = Sunday
    // 2 = Tuesday
    // 5 = Friday

    const randomUncheckCheckboxes = [0, 2, 5];

    console.log("Unchecking random checkboxes...");

    for (const index of randomUncheckCheckboxes) {

      // Get day name using index
      const day = days[index];

      // Locate checkbox
      const checkbox = page.getByLabel(day);

      // Uncheck checkbox
      await checkbox.uncheck();

      // Verify checkbox is unchecked
      await expect(checkbox).not.toBeChecked();

      console.log(`Unchecked: ${day}`);
    }


    // --------------------------------------------------------
    // 8. Select checkbox based on value
    // --------------------------------------------------------

    const checkboxValueToSelect = "Wednesday";

    console.log(
      `Selecting only: ${checkboxValueToSelect}`
    );

    for (const day of days) {

      // Locate checkbox
      const checkbox = page.getByLabel(day);

      // If current day is Wednesday
      if (day === checkboxValueToSelect) {

        // Check Wednesday
        await checkbox.check();

        // Verify Wednesday is checked
        await expect(checkbox).toBeChecked();

        console.log(`Checked: ${day}`);
      }

      // For all other days
      else {

        // Uncheck checkbox
        await checkbox.uncheck();

        // Verify checkbox is unchecked
        await expect(checkbox).not.toBeChecked();

        console.log(`Unchecked: ${day}`);
      }
    }
  }
}

//dropdown 


// ============================================================
// TEST 1 - TEXT BOXES
// ============================================================

test("Verify the Textboxes", async ({ page }) => {

  // Navigate to the website
  await page.goto(
    "https://testautomationpractice.blogspot.com/"
  );

  // Create object of TextBox class
  const textBox = new TextBox();

  // Call TextBox method and pass page
  await textBox.verifyTextBoxes(page);



});


// ============================================================
// TEST 2 - RADIO BUTTONS
// ============================================================

test("Verify the Radio buttons", async ({ page }) => {

  // Navigate to the website
  await page.goto(
    "https://testautomationpractice.blogspot.com/"
  );

  // Create object of RadioButtons class
  const radioButtons = new RadioButtons();

  // Call RadioButtons method and pass page
  await radioButtons.verifyRadioButtons(page);
});


// ============================================================
// TEST 3 - CHECKBOXES
// ============================================================

test("Verify the Checkboxes", async ({ page }) => {

  // Navigate to the website
  await page.goto(
    "https://testautomationpractice.blogspot.com/"
  );

  // Create object of Checkboxes class
  const checkboxes = new Checkboxes();

  // Call Checkboxes method and pass page
  await checkboxes.verifyCheckboxes(page);

  
});

