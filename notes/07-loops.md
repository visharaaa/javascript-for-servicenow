# JavaScript Loops

Loops allow us to repeat code without writing the same code multiple times.

They are particularly useful when working with collections of data.

## 1. `for` Loop

A basic `for` loop:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

The three parts are:

```javascript
initialization; condition; update
```

In this example:

```javascript
let i = 0
```

starts the counter.

```javascript
i < 5
```

determines whether the loop continues.

```javascript
i++
```

increases the counter.

---

## 2. Looping Through an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

This is one of the most common uses of a `for` loop.

---

## 3. `while` Loop

A `while` loop continues while a condition is true.

```javascript
let count = 0;

while (count < 5) {
    console.log(count);

    count++;
}
```

Be careful to update the condition.

Otherwise, you can accidentally create an infinite loop.

---

## 4. `do...while`

A `do...while` loop executes the code at least once.

```javascript
let count = 0;

do {
    console.log(count);

    count++;
} while (count < 5);
```

---

## 5. `break`

`break` stops a loop completely.

```javascript
for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

The loop stops when `i` reaches `5`.

---

## 6. `continue`

`continue` skips the current iteration and moves to the next one.

```javascript
for (let i = 0; i < 5; i++) {

    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
0
1
3
4
```

---

## 7. `for...of`

`for...of` is a convenient way to loop through values in an array.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

This is often easier to read than a traditional `for` loop when you don't need the index.

---

## 8. `for...in`

`for...in` is commonly used to iterate over the keys of an object.

```javascript
const user = {
    name: "Vishara",
    age: 23,
    active: true
};

for (const key in user) {
    console.log(key);
}
```

To access both the key and its value:

```javascript
for (const key in user) {
    console.log(key, user[key]);
}
```

---

## 9. Choosing a Loop

Use a traditional `for` loop when you need the index:

```javascript
for (let i = 0; i < items.length; i++) {
}
```

Use `for...of` when you simply want the values:

```javascript
for (const item of items) {
}
```

Use `for...in` when working with object properties:

```javascript
for (const key in object) {
}
```

---

## 10. ServiceNow Connection

Loops become particularly important when working with multiple records.

Later, ServiceNow's `GlideRecord` API will allow you to query records and process them one at a time.

For example, you may eventually see:

```javascript
var gr = new GlideRecord("incident");

gr.query();

while (gr.next()) {
    // Process the current incident
}
```

The `while` loop here is JavaScript.

`GlideRecord`, `query()`, and `next()` are ServiceNow-specific.

Understanding ordinary JavaScript loops first makes this much easier to understand.

---

## Things I Need to Practise

* `for` loops
* `while` loops
* `do...while`
* `break`
* `continue`
* `for...of`
* `for...in`
* Looping through arrays
* Looping through objects
