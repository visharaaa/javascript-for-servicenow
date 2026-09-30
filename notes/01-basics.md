# JavaScript Basics

JavaScript is a programming language used to add logic and behaviour to applications. In ServiceNow, JavaScript is heavily used for scripting and automating platform behaviour.

## 1. Running JavaScript

A simple JavaScript statement:

```javascript
console.log("Hello, JavaScript!");
```

`console.log()` prints a value to the console.

---

## 2. Variables

Variables are used to store values.

### `let`

Use `let` when the value may change.

```javascript
let name = "Vishara";
let age = 22;

age = 23;
```

### `const`

Use `const` when the variable should not be reassigned.

```javascript
const country = "Sri Lanka";
```

Trying to reassign it will cause an error:

```javascript
country = "India";
```

### `var`

`var` is an older way of declaring variables.

```javascript
var username = "vishara";
```

For modern JavaScript, prefer `let` and `const`.

---

## 3. Data Types

Some common JavaScript data types:

### String

Text enclosed in quotes.

```javascript
let name = "Vishara";
```

### Number

```javascript
let age = 22;
let price = 1500.50;
```

### Boolean

A value that is either `true` or `false`.

```javascript
let isActive = true;
```

### Undefined

A variable that has been declared but has not been given a value.

```javascript
let result;

console.log(result);
```

### Null

Used to explicitly represent the absence of a value.

```javascript
let selectedUser = null;
```

### Object

Used to store related data as key-value pairs.

```javascript
let user = {
    name: "Vishara",
    age: 22,
    active: true
};
```

---

## 4. Checking a Data Type

Use `typeof`:

```javascript
let name = "Vishara";

console.log(typeof name);
```

Output:

```text
string
```

Example:

```javascript
console.log(typeof 25);       // number
console.log(typeof true);     // boolean
console.log(typeof "Hello");  // string
```

---

## 5. Basic Operators

### Arithmetic

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

`%` gives the remainder.

### Assignment

```javascript
let score = 10;

score += 5; // 15
score -= 2; // 13
score *= 2; // 26
```

### Comparison

```javascript
let age = 22;

console.log(age > 18);   // true
console.log(age < 18);   // false
console.log(age === 22); // true
console.log(age !== 18); // true
```

Prefer `===` and `!==` for comparisons because they also check the data type.

---

## 6. Template Literals

Template literals make it easier to combine strings and variables.

```javascript
let name = "Vishara";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Template literals use backticks:

```text
`
```

rather than normal quotes.

---

## 7. Comments

Single-line comment:

```javascript
// This is a comment
```

Multi-line comment:

```javascript
/*
This is a
multi-line comment.
*/
```

Comments are useful for explaining why code works a certain way, rather than explaining every obvious line.

---

## ServiceNow Connection

These fundamentals are important because ServiceNow scripting uses JavaScript for things such as:

* Business Rules
* Client Scripts
* Script Includes
* UI Actions
* Scheduled Scripts
* Background Scripts
* Glide APIs

The JavaScript itself is the foundation. ServiceNow then adds its own APIs and objects on top of it.

For example, later we will encounter code like:

```javascript
var gr = new GlideRecord('incident');
```

`GlideRecord` is **ServiceNow-specific**, while concepts such as variables, objects, functions, conditions and loops are JavaScript fundamentals.

---

## Things I Need to Practise

* Declaring variables with `let` and `const`
* Understanding JavaScript data types
* Using `typeof`
* Arithmetic and comparison operators
* Template literals
* Understanding the difference between `==` and `===`
* Identifying which parts of ServiceNow scripts are standard JavaScript and which are ServiceNow APIs
