//import exportfile.ts file and use here
import { add, subtract, multiply, divide } from './exportfile';

// Example usage of the imported functions
const num1 = 10;
const num2 = 5;

add(num1, num2); // 15
subtract(num1, num2); // 5
multiply(num1, num2); // 50
try {
    divide(num1, num2); // 2
} catch (error) {
    console.error(error instanceof Error ? error.message : error);
}

console.log('Add:', add(num1, num2));
console.log('Subtract:', subtract(num1, num2));
console.log('Multiply:', multiply(num1, num2));
console.log('Divide:', divide(num1, num2));
