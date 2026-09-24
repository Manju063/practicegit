// Inheritance concept

//Parent class
class Calculator {

    protected num1: number = 10;
    protected num2: number = 2;

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        if (this.num2 === 0) {
            throw new Error("Cannot divide by zero");
        }

        return this.num1 / this.num2;
    }

    parent() {
        console.log("This is the parent class method");
    }
}

//Child class inheriting parent class
class ScientificCalculator extends Calculator {

    child() {
        console.log("This is child method");
    }

    power() {
        return Math.pow(this.num1, this.num2);
    }

    squareRoot() {
        if (this.num1 < 0) {
            throw new Error(
                "Cannot calculate square root of a negative number"
            );
        }

        return Math.sqrt(this.num1);
    }

    log() {
        if (this.num1 <= 0) {
            throw new Error(
                "Cannot calculate logarithm of a non-positive number"
            );
        }

        return Math.log(this.num1);
    }
}


// Create object of child class

let calc = new ScientificCalculator();


// Parent class methods

console.log("Addition:", calc.add());

console.log("Subtraction:", calc.subtract());

console.log("Multiplication:", calc.multiply());

console.log("Division:", calc.divide());


// Child class methods

console.log("Power:", calc.power());

console.log("Square Root:", calc.squareRoot());

console.log("Log:", calc.log());

