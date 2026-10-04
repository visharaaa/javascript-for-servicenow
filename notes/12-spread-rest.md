# JavaScript Destructuring

Destructuring provides a convenient way to extract values from arrays and objects.

## 1. Array Destructuring

Normally:

```javascript
const colors = ["red", "green", "blue"];

const first = colors[0];
const second = colors[1];
```

With destructuring:

```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);
console.log(second);
```

---

## 2. Skipping Values

You can skip values using commas:

```javascript
const colors = ["red", "green", "blue"];

const [, , third] = colors;

console.log(third);
```

Output:

```text
blue
```

---

## 3. Object Destructuring

Given:

```javascript
const user = {
    name: "Vishara",
    age: 23,
    country: "Sri Lanka"
};
```

You can extract properties:

```javascript
const { name, age } = user;

console.log(name);
console.log(age);
```

---

## 4. Renaming Variables

You can give the extracted value a different variable name.

```javascript
const user = {
    name: "Vishara",
    age: 23
};

const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
```

---

## 5. Default Values

You can provide a default value.

```javascript
const user = {
    name: "Vishara"
};

const { name, country = "Sri Lanka" } = user;

console.log(country);
```

---

## 6. Function Parameters

Destructuring is often used in function parameters.

```javascript
const user = {
    name: "Vishara",
    age: 23
};

function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}

displayUser(user);
```

---

## Why Destructuring Matters

You'll often work with objects containing many properties.

Instead of repeatedly writing:

```javascript
user.name
user.age
user.country
```

you can extract what you need:

```javascript
const { name, age, country } = user;
```

This can make code shorter and easier to read.
