import { test, expect } from "@playwright/test";

// ============================================================
// ONE TEST - API POST + GET 
// ============================================================

test("API Testing - Booking + Add Product to Cart + UI Validation", async ({
    request,
    page,
}) => {

    // ========================================================
    // PART 1 - BOOKING API
    // ========================================================

    // --------------------------------------------------------
    // Test Data
    // --------------------------------------------------------

    const firstName = "Govind";
    const lastName = "Gupta";
    const totalPrice = 1901;
    const depositPaid = true;

    const checkIn = "2026-01-01";
    const checkOut = "2026-01-01";

    const additionalNeeds = "Lunch";


    // --------------------------------------------------------
    // POST - Create Booking
    // --------------------------------------------------------

    const postResponse = await request.post("/booking", {

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        data: {
            firstname: firstName,
            lastname: lastName,
            totalprice: totalPrice,
            depositpaid: depositPaid,

            bookingdates: {
                checkin: checkIn,
                checkout: checkOut,
            },

            additionalneeds: additionalNeeds,
        },
    });


    // --------------------------------------------------------
    // Store POST Response
    // --------------------------------------------------------

    const postResponseBody = await postResponse.json();

    console.log("POST Response:", postResponseBody);


    // --------------------------------------------------------
    // Verify POST Response
    // --------------------------------------------------------

    expect(postResponse.ok()).toBeTruthy();

    expect(postResponse.status()).toBe(200);

    expect(postResponse.statusText()).toBe("OK");


    // --------------------------------------------------------
    // Validate POST Response Data
    // --------------------------------------------------------

    expect(postResponseBody.booking.firstname).toBe(firstName);

    expect(postResponseBody.booking.lastname).toBe(lastName);

    expect(postResponseBody.booking.totalprice).toBe(totalPrice);

    expect(postResponseBody.booking.depositpaid).toBe(depositPaid);

    expect(postResponseBody.booking.bookingdates.checkin)
        .toBe(checkIn);

    expect(postResponseBody.booking.bookingdates.checkout)
        .toBe(checkOut);

    expect(postResponseBody.booking.additionalneeds)
        .toBe(additionalNeeds);


    // --------------------------------------------------------
    // Extract Booking ID
    // --------------------------------------------------------

    const bookingId = postResponseBody.bookingid;

    expect(bookingId).toBeTruthy();

    console.log("Created Booking ID:", bookingId);


    // ========================================================
    // GET - Retrieve Created Booking
    // ========================================================

    const getResponse = await request.get(
        `/booking/${bookingId}`
    );


    // --------------------------------------------------------
    // Verify GET Response
    // --------------------------------------------------------

    expect(getResponse.ok()).toBeTruthy();

    expect(getResponse.status()).toBe(200);

    expect(getResponse.statusText()).toBe("OK");


    // --------------------------------------------------------
    // Store GET Response
    // --------------------------------------------------------

    const getResponseBody = await getResponse.json();

    console.log("GET Response:", getResponseBody);


    // --------------------------------------------------------
    // Validate GET Response Data
    // --------------------------------------------------------

    expect(getResponseBody.firstname)
        .toBe(firstName);

    expect(getResponseBody.lastname)
        .toBe(lastName);

    expect(getResponseBody.totalprice)
        .toBe(totalPrice);

    expect(getResponseBody.depositpaid)
        .toBe(depositPaid);

    expect(getResponseBody.bookingdates.checkin)
        .toBe(checkIn);

    expect(getResponseBody.bookingdates.checkout)
        .toBe(checkOut);

    expect(getResponseBody.additionalneeds)
        .toBe(additionalNeeds);
  
});
