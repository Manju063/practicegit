import { test, expect } from "@playwright/test";


// ============================================================
// TEST - API ADD TO CART + UI VALIDATION
// ============================================================

test(
    "API POST + UI - Validate Product Added To Cart",
    async ({ request, page }) => {

        // ====================================================
        // TEST DATA
        // ====================================================

        const productId = 3;
        const productName = "Nexus 6";
        const productPrice = 650;


        // ====================================================
        // API - ADD PRODUCT TO CART
        // ====================================================

        const addToCartResponse = await request.post(
            "https://api.demoblaze.com/addtocart",
            {
                data: {
                    id: "2b96def1-c6b4-2579-744b-d3db8287ddee",

                    cookie:
                        "d2lzaGluZmluaXRlMTc5MDU3Ng==",

                    prod_id: productId,

                    flag: true,
                },
            }
        );


        // ====================================================
        // VERIFY API RESPONSE
        // ====================================================

        expect(addToCartResponse.status()).toBe(200);

        console.log(
            "Add To Cart API Status:",
            addToCartResponse.status()
        );


        // ====================================================
        // UI - OPEN APPLICATION
        // ====================================================

        await page.goto(
            "https://demoblaze.com/index.html"
        );


        // ====================================================
        // UI - LOGIN
        // ====================================================

        await page.getByRole("link", {
            name: "Log in",
        }).click();


        await page.locator("#loginusername")
            .fill("wishinfinite");


        await page.locator("#loginpassword")
            .fill("wishinfinite");


        await expect(
            page.getByRole("button", {
                name: "Log in",
            })
        ).toBeVisible();


        await page.getByRole("button", {
            name: "Log in",
        }).click();


        // ====================================================
        // UI - OPEN CART
        // ====================================================

        await page.getByRole("link", {
            name: "Cart",
        }).click();


        // ====================================================
        // UI - FIND PRODUCT ROW
        // ====================================================

        const productRow = page.getByRole("row").filter({
            hasText: productName,
        });


        // ====================================================
        // VERIFY PRODUCT
        // ====================================================

        await expect(productRow).toBeVisible();


        // ====================================================
        // VERIFY PRODUCT PRICE
        // ====================================================

        await expect(productRow).toContainText(
            productPrice.toString()
        );


        // ====================================================
        // VERIFY DELETE OPTION
        // ====================================================

        await expect(
            productRow.getByRole("link", {
                name: "Delete",
            })
        ).toBeVisible();

       
        // ====================================================
        // VERIFY PLACE ORDER
        // ====================================================

        await expect(
            page.getByRole("button", {
                name: "Place Order",
            })
        ).toBeVisible();

     
        // ====================================================
        // FINAL LOG
        // ====================================================

        console.log(
            `Verified ${productName} with price ${productPrice} in Cart`
        );
    }
);
