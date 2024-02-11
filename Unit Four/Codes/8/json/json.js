/*
   JSON:
   -> JSON stands for JavaScript Object Notation
   -> it is widely used data format for data interchange on the web
   -> it is language independent
   -> it is lightweight and easy to write / read
   -> it is commonly used for API's
   -> it comprises of key-value pairs, where keys must be strings and values must
      be a valid JSON data type (strings, number, object, array, boolean or null).
      Each key-value pairs is separated by a comma.
*/

//Json Example For storing single data
let person = {
    "name": "shanker dev",
    "address": "putalisadak",
    "contact": 9999999999,
    "isHappy": true,
    "hobbies": ["football", "music"],
    "siblings": {
        "first": "Harry",
        "second": "Marry"
    }
}
// console.log(person);
// console.log(person.siblings.first);
// console.log(person.hobbies[1]);

//Json Example For storing multiple data (or also called JSON Arrays)
let persons = [
    {
        "name": "shanker dev",
        "address": "putalisadak",
        "contact": 9999999999,
        "isHappy": true,
        "hobbies": ["football", "music"],
        "siblings": {
            "first": "Harry",
            "second": "Marry"
        }
    },
    {
        "name": "Ram Nepali",
        "address": "kamalpokhari",
        "contact": 8888888888,
        "isHappy": true,
        "hobbies": ["football", "music", "trekking"],
        "siblings": {
            "first": "sita",
            "second": "shyam"
        }
    }
]

/* JSON.stringify() Method:
    -> is used to convert JavaScript objects into JSON strings. 
    -> This method only takes a single argument, and that argument is an object to be converted into JSON strings.
*/

// Example
const playerInfo = {
    Name: "Angel Dimaria",
    Age: 35,
    Nationality: "Argentina",
    Occupation: "Footballer",
    Nickname: "El Fideo",
    Club: "S.L. Benfica"
}
const Obj = JSON.stringify(playerInfo);
// console.log(Obj);

/* JSON.parse() Method:
    -> is used to convert JSON (or JSON file or JSON string) to JavaScript Object
    -> JavaScript objects are basically storage that store some data of that respective class.
    -> It takes a single argument, which is the JSON string to be parsed.
*/

//Example

// Sample JSON string
const jsonString = '{"Name":"Angel Dimaria","Age":35,"Nationality":"Argentina","Occupation":"Footballer","Nickname":"El Fideo","Club":"S.L. Benfica"}';

// Convert JSON string to JavaScript object
const javascriptObject = JSON.parse(jsonString);

// console.log(javascriptObject); 
