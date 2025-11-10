// Person class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // call the parent (Person) constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage (you can comment these out during testing)
const person1 = new Person("Alice", 25);
person1.greet();  
// Output: Hello, my name is Alice, I am 25 years old.

const employee1 = new Employee("Bob", 30, "Manager");
employee1.greet();      
// Output: Hello, my name is Bob, I am 30 years old.
employee1.jobGreet();   
// Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
