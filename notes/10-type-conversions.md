# JavaScript Type Conversion

JavaScript allows values to be converted from one data type to another.

This is important because data doesn't always arrive in the type we expect.

## 1. String to Number

Use `Number()`:

```javascript
const value = "25";

const number = Number(value);

console.log(number);
console.log(typeof number);
```

Output:

```text
25
number
```

---

## 2. Number to String

Use `String()`:

```javascript
const age = 23;

const textAge = String(age);

console.log(typeof textAge);
```

---

## 3. `parseInt()`

`parseInt()` converts a value to an integer.

```javascript
const value = "25";

const number = parseInt(value);

console.log(number);
```

It can also be used with strings containing extra characters:

```javascript
const value = "25px";

console.log(parseInt(value));
```

Output:

```text
25
```

---

## 4. `parseFloat()`

Used when you need a decimal number.

```javascript
const value = "25.75";

const number = parseFloat(value);

console.log(number);
```

Output:

```text
25.75
```

---

## 5. Boolean Conversion

Use `Boolean()`:

```javascript
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
```

---

## 6. Automatic Type Conversion

JavaScript sometimes converts types automatically.

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

The number is converted to a string.

But:

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

JavaScript converts the string to a number.

This is one reason explicit conversion is often safer and clearer.

---

## 7. `NaN`

`NaN` means **Not a Number**.

```javascript
const result = Number("Hello");

console.log(result);
```

Output:

```text
NaN
```

You can check for it using:

```javascript
console.log(Number.isNaN(result));
```

---

## 8. Strict Equality

Remember:

```javascript
5 === "5";
```

is:

```text
false
```

because one value is a number and the other is a string.

Whereas:

```javascript
5 == "5";
```

is:

```text
true
```

because JavaScript performs type conversion.

Prefer `===` in most cases.

---

## ServiceNow Connection

Type conversion is important because ServiceNow field values don't always behave exactly like native JavaScript values.

You may need to convert values before performing calculations or comparisons.

Understanding the difference between strings, numbers and booleans will prevent many subtle bugs.
