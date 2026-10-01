// Variables

const name = "Vishara";
let age = 22;

console.log(name);
console.log(age);


// Changing a let variable

age = 23;

console.log(age);


// Data types

const isStudent = true;
const score = 85.5;
const nothing = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof score);
console.log(typeof nothing);


// Arithmetic operators

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// Assignment operators

let points = 10;

points += 5;
console.log(points);

points -= 2;
console.log(points);

points *= 2;
console.log(points);


// Comparison operators

console.log(age === 23);
console.log(age !== 18);
console.log(age > 18);
console.log(age < 30);


// Template literals

console.log(`My name is ${name} and I am ${age} years old.`);


// Object

const user = {
    name: "Vishara",
    age: 23,
    active: true
};

console.log(user);
console.log(user.name);
console.log(user.active);

