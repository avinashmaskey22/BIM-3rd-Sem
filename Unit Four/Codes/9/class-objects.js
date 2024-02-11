//creating a class
class Person {
    constructor(name, age, gender) {
        this.name = name; //this refers to current instance or object
        this.age = age;
        this.gender = gender;
    }

    //defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }

}

//creating a object
const person1 = new Person('angel', 35, 'male');
const person2 = new Person('cris', 38, 'male');

console.log(person1);
console.log(person2);

//accessing property
console.log(person1.age);
console.log(person2.age);

//accessing method
person1.greet();
person2.greet();