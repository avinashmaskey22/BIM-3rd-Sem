/*
    JS strings:
      -> JavaScript strings are for storing and manipulating text.
      -> A JavaScript string is zero or more characters written inside quotes.
      -> JavaScript counts positions from zero.
      -> First position is 0. Second position is 1.

      Basic Syntax: (Primitive Values)
      let collegeName1 = "SDC";  // Double quotes
      let collegeName2 = 'Thames';  // Single quotes

      Syntax: JavaScript Strings as Objects
      let collegeName1 = new String("SDC");
      let collegeName2 = new String("Thames");
*/

// Counting String Length
/* let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
document.write(length); */

//Escape Character
/* let str = 'hello\'s'; // here this string is escaped
document.write(str); */

/*
    JS String Methods are:
     -> String length
     -> String slice()
     -> String substring()
     -> String substr()
     -> String replace()
     -> String replaceAll()
     -> String toUpperCase()
     -> String toLowerCase()
     -> String concat()
     -> String trim()
     -> String trimStart()
     -> String trimEnd()
     -> String charAt()
     -> String split()
*/

//JavaScript String slice()
/* let text = "Apple, Mango, Kiwi";
// let part = text.slice(7, 12);
// let part = text.slice(-11, -6);
document.write(part); */

//JavaScript String substring()
/* let str = "Apple, Mango, Kiwi";
// let part = str.substring(7, 12);
// let part = str.substring(-7);
document.write(part); */

/* Note: substring() is similar to slice(). The difference is in substring() If any of the parameters are negative, they are treated as 0. */

// JavaScript String substr()
/* let str = "Apple, Mango, Kiwi";
let part = str.substr(7, 6);
document.write(part); */

/* Note: substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part. */

/*
  Replacing String Content:
  -> The replace() method replaces a specified value with another value in a string.
  -> The replace() method does not change the string it is called on.
  -> The replace() method returns a new string.
  -> The replace() method replaces only the first match
  -> If you want to replace all matches, use a regular expression with the /g flag set.
*/

/* let text = "Please visit New York and New York!";
// let newText = text.replace("New York", "Nepal");
// let newText = text.replace(/New York/g, "Nepal");
// let newText = text.replaceAll("New York", "Nepal");
document.write(newText); */

//upercase
/* let str = "hello world!";
let newStr = str.toUpperCase();
document.write(newStr); */

//JavaScript String concat()
/* let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
document.write(text3); */

//JavaScript String trim(): The trim() method removes whitespace from both sides of a string.
/* let text1 = "      Hello World!      ";
document.write(text1.length + "<br>"); //length before space removal
let text2 = text1.trim(); //removing space from both the ends
document.write(text2);
document.write("<br>" + text2.length); */ //length after space removal

//JavaScript String charAt(): The charAt() method returns the character at a specified index (position) in a string.

/* let text = "HELLO WORLD";
let char = text.charAt(0);
document.write(char); */

/* myString = new String("Learning about Built-in Objects is easy");
myString = myString.substring(15, 32);
myString = myString.toUpperCase();
document.write(myString); */

//JavaScript String split(): A string can be converted to an array with the split() method.
/* let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray); */

/*
  String Interpolation:

  -> Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
  -> Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.

*/
//String Interpolation Example
/* let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
document.write(text); */






