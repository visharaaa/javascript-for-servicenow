# JavaScript Strings

Strings are used to represent text in JavaScript.

```javascript
const name = "Vishara";
```

Strings can use single quotes, double quotes, or backticks.

```javascript
const first = "Hello";
const second = 'Hello';
const third = `Hello`;
```

For modern JavaScript, backticks are especially useful when working with variables.

## 1. String Length

Use `.length` to get the number of characters.

```javascript
const name = "Vishara";

console.log(name.length);
```

---

## 2. Accessing Characters

Strings are zero-indexed, just like arrays.

```javascript
const name = "Vishara";

console.log(name[0]); // V
console.log(name[1]); // i
```

---

## 3. Changing Case

```javascript
const message = "Hello World";

console.log(message.toUpperCase());
console.log(message.toLowerCase());
```

---

## 4. Removing Extra Whitespace

Use `trim()`:

```javascript
const name = "   Vishara   ";

console.log(name.trim());
```

This is useful when dealing with user input.

---

## 5. Finding Text

### `includes()`

Checks whether a string contains another string.

```javascript
const message = "Welcome to ServiceNow";

console.log(message.includes("ServiceNow"));
```

Returns:

```text
true
```

### `startsWith()`

```javascript
console.log(message.startsWith("Welcome"));
```

### `endsWith()`

```javascript
console.log(message.endsWith("ServiceNow"));
```

---

## 6. Finding a Position

Use `indexOf()`:

```javascript
const message = "Hello World";

console.log(message.indexOf("World"));
```

If the text doesn't exist, it returns `-1`.

---

## 7. Extracting Part of a String

### `slice()`

```javascript
const message = "Hello World";

console.log(message.slice(0, 5));
```

Output:

```text
Hello
```

---

## 8. Replacing Text

```javascript
const message = "Hello World";

const updated = message.replace("World", "Vishara");

console.log(updated);
```

Output:

```text
Hello Vishara
```

---

## 9. Splitting a String

`split()` converts a string into an array.

```javascript
const names = "Vishara,John,Sarah";

const nameList = names.split(",");

console.log(nameList);
```

Output:

```text
["Vishara", "John", "Sarah"]
```

This is particularly useful when processing comma-separated data.

---

## 10. Template Literals

Template literals allow variables to be inserted directly into strings.

```javascript
const name = "Vishara";
const role = "ServiceNow Intern";

console.log(`My name is ${name} and I am a ${role}.`);
```

Expressions can also be used:

```javascript
const age = 23;

console.log(`Next year I will be ${age + 1}.`);
```

---

## 11. Strings Are Immutable

String methods do not change the original string.

```javascript
const name = "vishara";

name.toUpperCase();

console.log(name);
```

The result is still:

```text
vishara
```

To keep the changed value:

```javascript
const upperName = name.toUpperCase();
```

---

## ServiceNow Connection

Strings are extremely common in ServiceNow.

Incident numbers, usernames, descriptions, field values and many other pieces of data are represented as text.

For example:

```javascript
if (current.short_description.includes("password")) {
    // Do something
}
```

The `includes()` method is standard JavaScript, while `current.short_description` is ServiceNow-specific.
