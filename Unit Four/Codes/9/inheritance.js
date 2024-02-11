/* Inheritance and Subclasses */

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound.");
    }
}

// Subclass (Child class)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class using super(). `this.name` is now initialized by the parent class constructor via super()
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof! Woof!");
    }
}

// Create instances of the classes
const genericAnimal = new Animal("Generic");
const dog1 = new Dog("Benji", "Labrador");


// Call the method on instances
genericAnimal.makeSound(); // Output: Generic animal sound.
dog1.makeSound(); // Output: Woof! Woof!

console.log(genericAnimal.name); // Output: Generic
console.log(dog1.name); // Output: Benji
console.log(dog1.breed); // Output: Labrador

