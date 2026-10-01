# JavaScript Conditionals

Conditionals allow a program to make decisions based on whether a condition is true or false.

## 1. `if`

The simplest conditional:

```javascript
let age = 22;

if (age >= 18) {
    console.log("Adult");
}
```

The code inside the `{ }` only runs if the condition is `true`.

---

## 2. `if...else`

Use `else` when there are two possible outcomes.

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## 3. `else if`

Use `else if` when there are multiple conditions.

```javascript
let score = 75;

if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}
```

JavaScript checks the conditions from top to bottom and stops once it finds a true condition.

---

## 4. Comparison Operators

These are commonly used inside conditions.

```javascript
let age = 22;

age === 22    // equal
age !== 18    // not equal
age > 18      // greater than
age < 30      // less than
age >= 18     // greater than or equal
age <= 30     // less than or equal
```

### `===` vs `==`

Prefer `===`.

```javascript
5 === "5"; // false
5 == "5";  // true
```

`===` checks both the value and the data type.

---

## 5. Logical Operators

### AND `&&`

Both conditions must be true.

```javascript
let age = 22;
let hasID = true;

if (age >= 18 && hasID === true) {
    console.log("Access granted");
}
```

### OR `||`

At least one condition must be true.

```javascript
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access granted");
}
```

### NOT `!`

Reverses a boolean value.

```javascript
let isActive = true;

console.log(!isActive); // false
```

---

## 6. Truthy and Falsy Values

JavaScript can treat some values as `false` inside a condition.

Common falsy values include:

```text
false
0
""
null
undefined
NaN
```

Example:

```javascript
let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}
```

---

## 7. Ternary Operator

A ternary is a shorter way to write a simple `if...else`.

```javascript
let age = 22;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

The structure is:

```javascript
condition ? valueIfTrue : valueIfFalse
```

Use ternaries for simple decisions. For complicated logic, normal `if...else` statements are usually easier to read.

---

## 8. ServiceNow Connection

Conditionals are extremely common in ServiceNow scripts.

For example, a script might check whether an incident is active:

```javascript
if (current.active === true) {
    // Do something
}
```

Later, when working with ServiceNow APIs, you will often see conditions involving fields:

```javascript
if (current.priority == 1) {
    // Critical incident
}
```

The important distinction is that `if`, `else`, `===`, `&&`, etc. are **JavaScript**.

Objects such as `current` and ServiceNow-specific APIs are part of the **ServiceNow platform**.
