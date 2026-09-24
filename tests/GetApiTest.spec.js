import { test, request, expect } from "@playwright/test";

let reqcontext2;

test.beforeAll("Before All Test @api", async () => {
   reqcontext2 = await request.newContext({

     baseURL: 'https://restful-booker.herokuapp.com/', extraHTTPHeaders: {
        Accept: 'application/json'
    } 

});
});

// ============================================================
// API GET Request Testing
// ============================================================

//Approach 1: Using request.get() method directly with the full URL
// request.get() method is used to send a GET request to the specified URL and returns a response object.
test("API Testing Get Practice 1 @api", async ({ request }) => {

    const Getresponse = await request.get('https://restful-booker.herokuapp.com/booking', {
        headers: { //set the headers for the request
            Accept: 'application/json'
        }
    });
    console.log(await Getresponse.json());
    console.log(await Getresponse.text());

    //assert the status code
    expect(Getresponse.status()).toBe(200);
    
})

//Approach 2: Using request.newContext() method to create a new request context 
// with a base URL
//request.newContext() method is used to create a new request context with a base URL, which can be used to send requests to the specified base URL.

test("API Testing Get Practice 2  @api", async ( ) => {
    const reqcontext = await request.newContext({
        //set the base URL for the request context
        //headers can be set for the request context, which will be used for all requests sent using this context.
            baseURL: 'https://restful-booker.herokuapp.com/',extraHTTPHeaders: {
                Accept: 'application/json'
            }
        }
    );
    const Getresponse = await reqcontext.get('/booking');
    console.log(await Getresponse.json());

    //assert the status code
    expect(Getresponse.status()).toBe(200);
    
});

//Approach 3: Using request.newContext() method to create a new request context 
// with a base URL and using it in the test
//request.newContext() method is used to create a new request context with a base URL, which can be used to send requests to the specified base URL.
test("API Testing Get Practice 3  @api", async ( ) => {
    const Getresponse = await reqcontext2.get('/booking');
    console.log(await Getresponse.json());

    //assert the status code
    expect(Getresponse.status()).toBe(200);
    
});

//Approad 4: Using Base URL and headers from playwright.config.ts file
//request.newContext() method is used to create a new request context with a base URL, which can be used to send requests to the specified base URL.
test("API Testing Get Practice 4  @api", async  ({ request }) => {
    const Getresponse = await request.get('/booking');
    console.log(await Getresponse.json());
});

// ============================================================
// Curl Get Request
// curl -X GET "https://restful-booker.herokuapp.com/booking" -H "accept: application/json"
// ============================================================


//Approad 5: Using Base URL and headers from playwright.config.ts file
//Curl Get Request
test("API Testing Get Practice 5  @api", {tag: ['@api', '@smoke']}, async  ({ request }) => {
    const Getresponse = await request.get('/booking/15');
    console.log(await Getresponse.json());

    //expect(Getresponse.status()).toBe(200)
    //expect(Getresponse.ok()).toBeTruthy();

    //assert the response body
    expect(await Getresponse.json()).toMatchObject({
        "firstname": "Jane",
    "lastname": "Doe",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Extra pillows please"
    }); 

    const jsonResponse = await Getresponse.json();
    expect(jsonResponse.firstname).toBe("Jane");
    expect(jsonResponse.lastname).toBe("Doe");
    expect(jsonResponse.totalprice).toBe(111);
    expect(jsonResponse.depositpaid).toBe(true);
    expect(jsonResponse.bookingdates.checkin).toBe("2018-01-01");
    expect(jsonResponse.bookingdates.checkout).toBe("2019-01-01");
    expect(jsonResponse.additionalneeds).toBe("Extra pillows please");
});




// ============================================================
// Query Parameters Get Request
// =============================================================

//Approad 6: Using Base URL and headers from playwright.config.ts file
//Query Parameters in Get Request
test("API Testing Get Practice 6  ", async  ({ request }) => { 
    const Getresponse = await request.get('/booking?firstname=sally&lastname=brown');
    console.log(await Getresponse.json());

});


//Approad 7: Using Base URL and headers from playwright.config.ts file
//Query Parameters in Get Request
test("API Testing Get Practice 7  ", async  ({ request }) => { 
    const Getresponse = await request.get('/booking', {
        params: {
            firstname: 'John',
            lastname: 'Smith'
        }
    }  );
    console.log(await Getresponse.json());

    expect(Getresponse.status()).toBe(200);

});

// ============================================================
// API Validation with UI responses
// =============================================================

//Approad 8: Validating API response with UI responses
//Step 1 : First get the API response and store it in a variable
//Step 2 : Then navigate to the UI page and get the UI response and store it in a variable
//Step 3 : Then compare the API response with the UI response
test("API with UI responses", async  ({ request,page }) => {
    //Step 1 : First get the API response and store it in a variable
    const Getresponse = await request.get('https://api.demoblaze.com/entries');
    const jsonResponse = await Getresponse.json(); //step 2
    console.log(jsonResponse.Items[0].title);  

    page.goto('https://www.demoblaze.com/');
    page.getByRole('link', { name: 'Samsung galaxy s6' })

    //Step 3 : Then compare the API response with the UI response
    awaitexpect (getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsonResponse.Items[0].title);

});
