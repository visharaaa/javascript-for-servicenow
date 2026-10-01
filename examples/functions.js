// Basic function

function greet() {
    console.log("Hello!");
}

greet();


// Function with a parameter

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Vishara");
greetUser("John");


// Function with multiple parameters

function add(a, b) {
    return a + b;
}

let result = add(10, 5);

console.log(result);


// Using the returned value

function multiply(a, b) {
    return a * b;
}

let total = multiply(5, 4);

console.log(total);


// Function with a default parameter

function welcome(name = "User") {
    console.log(`Welcome, ${name}!`);
}

welcome();
welcome("Vishara");


// Function expression

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 3));


// Arrow function

const divide = (a, b) => {
    return a / b;
};

console.log(divide(10, 2));


// Short arrow function

const square = number => number * number;

console.log(square(5));


// Practice: calculate an incident priority

function calculatePriority(impact, urgency) {
    if (impact === 1 && urgency === 1) {
        return 1;
    }

    if (impact === 1 || urgency === 1) {
        return 2;
    }

    return 3;
}

let priority = calculatePriority(1, 1);

console.log(`Priority: ${priority}`);
