/* Classification based on number of operands

    1. Unary
        -> One operand
        -> +, -, &, *, ! ++, --
        -> e.g., +x or -x
    
    2. Binary
        -> Two Operands
        -> +, -, *, /, %, <, <=, >, >=, ==, !=, &&, ||
        -> e.g., a + b
    
    3. Ternary Operator
        -> allows us to assign one value to a variable if the condition is true,
           and another value if the condition is false.

        -> Also called shorthand of if else statement
        
        -> e.g., var age = 21;
                 var beverage = (age >= 21) ? "Hard Drinks" : "Juice"
                 console.log(beverage);

*/

//Note: Discuss Strict Operators
//=== strict operator

a = "10";
b = "10";

if (a === b) {
    console.log("success");
} else {
    console.log("failure");
}