/*
//Primitive Data Types
    1. string 
    2. number
    3. boolean
    4. null
    5. undefined
    6. BigInt
 */

//remember var or let is optional because javascript is loosely typed or dynamically typed.

var name = "John Doe";//string
var a = 5; //number
isValid = true; //boolean
var address = null; // null
var mobileNo; //undefined

/*
//Non-primitive Data Types
1. objects
2. Array
3. Functions
4. Date
5. RegEx (pattern matching)

*/

//Object Example
let foodInfo = {
    name: "MOMO",
    type: "Buff",
    price: 120
}

// console.log(foodInfo.name);
// console.log(foodInfo['name']);


/* Important: Difference between type conversion and type coercion?

    //Type Conversion
    -> When we manually convert from one data type to another.

    //Type coercion
    -> When javascript automatically converts the type behind the scenes for us
*/

//Type conversion

/* const favNumber = "11";
console.log(favNumber);
console.log(Number(favNumber)); */ //it only converts to a string, a number or a boolean

//Type coercion

// console.log("John Doe is " + 23 + " years old.");
// console.log('50' - '40' - '10');
// console.log('50' + '40' + '10'); 
