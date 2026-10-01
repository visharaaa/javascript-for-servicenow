# JavaScript Scope

Scope determines where a variable can be accessed in a program.

Understanding scope becomes particularly important when writing larger ServiceNow scripts.

## 1. Global Scope

A variable declared outside a function or block can be accessible from different parts of the program.

```javascript
let name = "Vishara";

function greet() {
    console.log(name);
}

greet();
```

`name` is outside the function, so the function can access it.

---

## 2. Function Scope

Variables declared inside a function are only available inside that function.

```javascript
function greet() {
    let message = "Hello";

    console.log(message);
}

greet();
```

This will not work:

```javascript
console.log(message);
```

because `message` only exists inside `greet()`.

---

## 3. Block Scope

`let` and `const` are block-scoped.

A block is usually represented by `{ }`.

```javascript
if (true) {
    let message = "Hello";

    console.log(message);
}
```

But:

```javascript
console.log(message);
```

will cause an error because `message` only exists inside the `if` block.

---

## 4. `var` and Scope

`var` behaves differently from `let` and `const`.

```javascript
if (true) {
    var message = "Hello";
}

console.log(message);
```

This can access `message` outside the `if` block.

This is one reason modern JavaScript generally prefers:

```javascript
let
const
```

over:

```javascript
var
```

---

## 5. Scope Example

```javascript
const company = "Auto Nexus";

function showCompany() {
    const department = "Sales";

    console.log(company);
    console.log(department);
}

showCompany();

console.log(company);
```

This works because `company` is accessible from inside the function.

But `department` only exists inside `showCompany()`.

---

## 6. Why Scope Matters

Without proper scope, variables can accidentally interfere with other parts of a program.

For example:

```javascript
let count = 10;

function updateCount() {
    let count = 20;

    console.log(count);
}

updateCount();

console.log(count);
```

Output:

```text
20
10
```

The two `count` variables are separate because the second one exists inside the function.

---

## ServiceNow Connection

ServiceNow scripts can involve many variables, functions and objects.

Understanding scope helps avoid accidentally creating or modifying variables that should not be accessible elsewhere.

This becomes especially useful when working with:

* Script Includes
* Business Rules
* Client Scripts
* Functions
* Callbacks
* Server-side JavaScript

We'll revisit scope when we start learning ServiceNow-specific scripting.
