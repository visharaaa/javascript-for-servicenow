```javascript
// Basic if statement

let age = 22;

if (age >= 18) {
    console.log("Adult");
}


// if...else

let hasAccount = true;

if (hasAccount) {
    console.log("User has an account");
} else {
    console.log("User does not have an account");
}


// if...else if...else

let score = 75;

if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}


// Comparison operators

let priority = 1;

console.log(priority === 1);
console.log(priority !== 3);
console.log(priority > 2);
console.log(priority <= 3);


// Logical AND

let isActive = true;
let isAdmin = false;

if (isActive && isAdmin) {
    console.log("Active admin");
}


// Logical OR

if (isActive || isAdmin) {
    console.log("At least one condition is true");
}


// Logical NOT

if (!isAdmin) {
    console.log("User is not an admin");
}


// Ternary operator

let status = isActive ? "Active" : "Inactive";

console.log(status);
```
