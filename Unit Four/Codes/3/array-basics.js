/* Array Notes:
   -> In JavaScript, an array is one of the most commonly used data types. 
   -> It stores multiple values and elements in one variable.
   -> These values can be of any data type — meaning you can store a string, number, boolean, and other data types in one variable.
   -> There are two standard ways to declare an array in JavaScript. These are either via the array constructor or the literal notation.

   Syntax:
    // Using array constructor or using new keyword
    let array = new array("John Doe", 24, true);

    // Using the literal notation
    let array = ["John Doe", 24, true];

    //It is a common practice to declare arrays with the const keyword.
*/

//Accessing Array Elements
const cars = ["Tesla", "Volvo", "BMW"];
// document.write(cars[0]);

//Changing or Updating Array elements
/* cars[0] = "lamborghini";
document.write(cars[0]);
document.write("<br>" + cars); */

//returns length of an array
document.write(cars.length);
