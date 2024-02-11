function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error.message);
        return 'ERROR'; // the null value is returned when you return from the catch block to indicate that the error has been handled, and the program can continue its execution without further interruptions due to the caught error.
    } finally {
        // Code that will always run
        console.log("Execution completed.");
    }
}

// Example usage
console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(5, 0)); // Output: An error occurred: Cannot divide by zero!


/* 
class Calculator {
    add(a, b) {
        return a + b;
    }

    divide(a, b) {
        try {
            if (b === 0) {
                throw new Error("Cannot divide by zero!");
            }
            return a / b;
        } catch (error) {
            console.error("An error occurred:", error.message);
            return 'ERROR';
        }
    }
}

const calculator = new Calculator();

console.log(calculator.add(5, 3));   // Output: 8
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.divide(5, 0)); // Output: An error occurred: Cannot divide by zero!
 */

