//switch statements
import * as readline from "readline";

let a = 2;
let b = 3;

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Enter operation (1-4): ", (answer) => {
    const operation = Number(answer);

    switch (operation) {
    case 1:
        console.log("Addition");
        console.log("a+b = " + (a + b));
        break;
    case 2:
        console.log("Subtraction");
        console.log("a-b = " + (a - b));
        break;
    case 3:
        console.log("Multiplication");
        console.log("a*b = " + (a * b));
        break;
    case 4:
        console.log("Division");
        console.log("a/b = " + (a / b));
        break;
    default:
        console.log("Invalid operation");
    }

    input.close();
});
