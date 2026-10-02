# JavaScript Array Methods

JavaScript provides built-in methods for working with arrays.

Some of the most useful are:

* `forEach()`
* `map()`
* `filter()`
* `find()`
* `some()`
* `every()`

---

## 1. `forEach()`

`forEach()` runs a function for every item in an array.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

It can also be written using an arrow function:

```javascript
fruits.forEach(fruit => {
    console.log(fruit);
});
```

---

## 2. `map()`

`map()` creates a new array by transforming every item.

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

The original array is not changed.

---

## 3. `filter()`

`filter()` creates a new array containing only items that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[2, 4]
```

---

## 4. `find()`

`find()` returns the first item that satisfies a condition.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.find(number => number > 20);

console.log(result);
```

Output:

```text
30
```

If nothing matches, `find()` returns `undefined`.

---

## 5. `some()`

`some()` checks whether at least one item satisfies a condition.

```javascript
const numbers = [1, 3, 5, 8];

const hasEvenNumber = numbers.some(number => number % 2 === 0);

console.log(hasEvenNumber);
```

Output:

```text
true
```

---

## 6. `every()`

`every()` checks whether all items satisfy a condition.

```javascript
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(number => number % 2 === 0);

console.log(allEven);
```

Output:

```text
true
```

---

## 7. Working With Arrays of Objects

These methods become particularly useful with arrays of objects.

```javascript
const users = [
    {
        name: "Vishara",
        active: true
    },
    {
        name: "John",
        active: false
    },
    {
        name: "Sarah",
        active: true
    }
];
```

### Filter active users

```javascript
const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

### Find a specific user

```javascript
const user = users.find(user => user.name === "Vishara");

console.log(user);
```

### Get only the names

```javascript
const names = users.map(user => user.name);

console.log(names);
```

---

## 8. Chaining Methods

Methods can be combined.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 10);

console.log(result);
```

First:

```text
[2, 4, 6]
```

Then:

```text
[20, 40, 60]
```

---

## 9. `forEach()` vs `map()`

A common difference:

`forEach()` is generally used when you want to perform an action for each item.

```javascript
numbers.forEach(number => {
    console.log(number);
});
```

`map()` is used when you want to create a **new array** from the existing values.

```javascript
const doubled = numbers.map(number => number * 2);
```

---

## 10. ServiceNow Connection

These methods are useful when working with data returned from APIs or other JavaScript code.

For example, you might receive an array of records and want to:

* find a specific record
* filter records
* transform values
* check whether a condition applies to any record

However, don't assume every ServiceNow API returns a normal JavaScript array. ServiceNow has its own APIs and data structures, such as `GlideRecord`.

The goal is to understand the JavaScript concepts first and then learn how ServiceNow's APIs implement similar tasks.

---

## Things I Need to Practise

* `forEach()`
* `map()`
* `filter()`
* `find()`
* `some()`
* `every()`
* Arrays of objects
* Chaining array methods
* Understanding when to use `forEach()` vs `map()`
