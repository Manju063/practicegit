import { test, expect } from "@playwright/test";

//Anotations are used to control the execution of tests in Playwright. Annotations can be applied at the test level or at the suite level. The following annotations are available in Playwright:

//describe block is used to group the tests
//test.describe("Practice Negative -Test Suite", () => {
//test.skip("Practice Test 1", async () => {
//test.fixme("Practice Test 1", async () => {
//test.only("Practice Test 1", async () => {

//test.slow("Practice Test 1", async () => {
test.describe("Practice Positive -Test Suite", () => {

test("Practice Test 1", async () => {
test.slow(); //This test is marked as slow and will be retried if it fails.
console.log("Start of the test 1");
console.log("test1");
console.log("End of the test 1");

});
test("Practice Test 2", async () => {
console.log("Start of the test 2");
console.log("test2");
console.log("End of the test 2");
});

test("Practice Test 3", async () => {
console.log("Start of the test 3");
console.log("test3");
console.log("End of the test 3");
});
});

test("Practice Test 4", async () => {
console.log("Start of the test 4");
console.log("test4");
console.log("End of the test 4");

});
