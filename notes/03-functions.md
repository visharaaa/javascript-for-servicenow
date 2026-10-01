# JavaScript Functions

Functions are reusable blocks of code designed to perform a particular task.

## 1. Creating a Function

```javascript
function greet() {
    console.log("Hello!");
}
```

Creating a function does not automatically run it.

You need to call it:

```javascript
greet();
```

---

## 2. Function Parameters

Parameters allow us to give information to a function.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Vishara");
greet("John");
```

Output:

```text
Hello, Vishara!
Hello, John!
```

---

## 3. Multiple Parameters

A function can accept multiple parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 5);
```

Here:

* `a` and `b` are parameters
* `10` and `5` are arguments

---

## 4. Returning a Value

Instead of printing a result, a function can return a value.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 5);

console.log(result);
```

Output:

```text
15
```

The `return` statement sends a value back to the code that called the function.

---

## 5. Why Use `return`?

Consider:

```javascript
function add(a, b) {
    console.log(a + b);
}
```

This prints the result but doesn't give the result back to the caller.

With `return`:

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 5);
```

Now `result` contains `15`, so it can be used elsewhere.

```javascript
console.log(result * 2);
```

Output:

```text
30
```

---

## 6. Default Parameters

A parameter can have a default value.

```javascript
function greet(name = "User") {
    console.log(`Hello, ${name}!`);
}

greet();
greet("Vishara");
```

Output:

```text
Hello, User!
Hello, Vishara!
```

---

## 7. Function Expressions

Functions can also be stored inside variables.

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
```

---

## 8. Arrow Functions

Modern JavaScript provides a shorter function syntax.

```javascript
const add = (a, b) => {
    return a + b;
};
```

For a simple function, this can be shortened further:

```javascript
const add = (a, b) => a + b;
```

Another example:

```javascript
const greet = name => `Hello, ${name}!`;

console.log(greet("Vishara"));
```

You don't need to master arrow functions immediately, but you will encounter them frequently in modern JavaScript.

---

## 9. ServiceNow Connection

Functions are important in ServiceNow because many scripts involve reusable logic.

For example, ServiceNow Script Includes can contain functions that perform specific operations.

A simplified example:

```javascript
function calculatePriority(impact, urgency) {
    if (impact === 1 && urgency === 1) {
        return 1;
    }

    return 3;
}
```

The function itself is standard JavaScript.

ServiceNow-specific functionality will come from the platform APIs and objects used inside the function.

---

## Things I Need to Practise

* Creating functions
* Calling functions
* Parameters vs arguments
* Returning values
* Default parameters
* Function expressions
* Arrow functions
