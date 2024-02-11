/* Function Basics */

//Declaring a function
/* function greet() {
    document.write("Namaste Everyone!");
}

//Invoking or Running or Calling the function
greet(); */

//function with no parameter
/* function display() {
    sum = 10 + 10;
    document.write("The sum of the number is: " + sum);
}

display(); */

//function with one parameter
/* function areaSquare(s) {
    area = s * s;
    return area; //the return value terminates the function
}

var out = areaSquare(10);
document.writeln("The area of a square is: " + out); */

//function with two parameters
/* function areaRect(width, length) {
    area = width * length;
    return area; //the return value terminates the function
}

var output = areaRect(5, 10);
document.writeln("The area of a rectangle is: " + output); */


/* Scopes in JavaScript */

// Var Vs let and const

//Global Scope (It is accessible anywhere)

/* let a = 10;

function display() {
    document.write(a);
}

display(); */

//Function Scope (it can be accessed only inside a function, var is a funtion scope. Also called local scope)

/* function display() {
    var a = 10;
    console.log(a);
}
display();
console.log(a); */

//Block Scope (let and const are block scope; block are area within control statements)
/* if (5 > 4) {
    let i = 1;
    console.log(i);
}
console.log(i); */

/* Difference between function scope and block scope */

//Function Scope

/* function myFunction() {
    var a = 10;

    if (a == 10) {
        var a = 20;
        console.log("I am inside of if block: " + a);
    }
    console.log("I am outside of if block: " + a);
}

myFunction(); */

//Block Scope
function myFunction() {
    var a = 10;

    if (a == 10) {
        let a = 20;
        console.log("I am inside of if block: " + a);
    }
    console.log("I am outside of if block: " + a);
}

myFunction();