# JavaScript Arrays

An array is a collection of values stored in a single variable.

Arrays are useful when we need to work with multiple related values.

## 1. Creating an Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

An array can contain different types of values:

```javascript
let values = ["Vishara", 22, true];
```

However, it is generally better to keep related arrays consistent.

---

## 2. Array Indexes

JavaScript arrays are **zero-indexed**.

This means the first item has index `0`.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
```

The last item can be accessed using:

```javascript
console.log(fruits[fruits.length - 1]);
```

---

## 3. Array Length

Use `.length` to find the number of items.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output:

```text
3
```

---

## 4. Changing an Array Item

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

The array becomes:

```text
["Apple", "Orange", "Mango"]
```

---

## 5. Adding Items

### `push()`

Adds an item to the end.

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

### `unshift()`

Adds an item to the beginning.

```javascript
fruits.unshift("Orange");
```

---

## 6. Removing Items

### `pop()`

Removes the last item.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
```

### `shift()`

Removes the first item.

```javascript
fruits.shift();
```

---

## 7. Checking Whether an Array Contains Something

Use `includes()`:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
```

Output:

```text
true
```

---

## 8. Finding an Item's Position

Use `indexOf()`:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Mango"));
```

Output:

```text
2
```

If the value doesn't exist, `indexOf()` returns `-1`.

---

## 9. Arrays and `const`

An array declared with `const` can still have its contents changed.

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

This works because we are modifying the contents of the array, not reassigning the variable.

This would not work:

```javascript
fruits = ["Orange"];
```

---

## 10. ServiceNow Connection

When working with ServiceNow, you may eventually need to work with multiple values or records.

For example, you might have an array containing incident numbers:

```javascript
let incidents = ["INC001001", "INC001002", "INC001003"];
```

You could then loop through the array and perform an operation on each value.

Arrays become even more useful when combined with objects and loops.

---

## Things I Need to Practise

* Creating arrays
* Array indexes
* `.length`
* `push()` and `pop()`
* `shift()` and `unshift()`
* `includes()`
* `indexOf()`
* Modifying arrays declared with `const`
