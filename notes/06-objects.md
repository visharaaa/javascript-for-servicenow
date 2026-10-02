# JavaScript Objects

Objects allow us to store related information using **key-value pairs**.

Objects are one of the most important concepts in JavaScript.

## 1. Creating an Object

```javascript
const user = {
    name: "Vishara",
    age: 23,
    active: true
};
```

Here:

* `name`, `age`, and `active` are properties
* `"Vishara"`, `23`, and `true` are their values

---

## 2. Accessing Properties

### Dot notation

```javascript
console.log(user.name);
console.log(user.age);
```

### Bracket notation

```javascript
console.log(user["name"]);
console.log(user["age"]);
```

Bracket notation becomes especially useful when the property name is stored in a variable.

---

## 3. Changing Properties

Objects declared with `const` can still have their properties changed.

```javascript
const user = {
    name: "Vishara",
    age: 23
};

user.age = 24;

console.log(user);
```

---

## 4. Adding Properties

You can add a new property:

```javascript
user.country = "Sri Lanka";
```

Now the object contains:

```javascript
{
    name: "Vishara",
    age: 24,
    country: "Sri Lanka"
}
```

---

## 5. Removing Properties

Use `delete`:

```javascript
delete user.country;
```

---

## 6. Objects Can Contain Different Data Types

```javascript
const user = {
    name: "Vishara",
    age: 23,
    active: true,
    skills: ["Python", "JavaScript", "SQL"]
};
```

An object can contain arrays, other objects, functions, and other values.

---

## 7. Nested Objects

Objects can contain other objects.

```javascript
const user = {
    name: "Vishara",
    contact: {
        email: "example@email.com",
        country: "Sri Lanka"
    }
};

console.log(user.contact.email);
```

---

## 8. Object Methods

A function stored inside an object is called a method.

```javascript
const user = {
    name: "Vishara",

    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

user.greet();
```

`this` refers to the object that the method belongs to.

---

## 9. Objects and Arrays Together

This is very common in JavaScript.

```javascript
const users = [
    {
        name: "Vishara",
        age: 23
    },
    {
        name: "John",
        age: 25
    }
];

console.log(users[0].name);
console.log(users[1].age);
```

Here we have an **array of objects**.

This pattern is extremely useful when working with collections of data.

---

## 10. ServiceNow Connection

ServiceNow scripting frequently involves objects.

For example, you will encounter objects such as:

```javascript
current
```

and APIs such as:

```javascript
gs
```

and:

```javascript
GlideRecord
```

These are provided by ServiceNow.

Understanding JavaScript objects makes ServiceNow's APIs much easier to understand because you will constantly access properties and methods.

---

## Things I Need to Practise

* Creating objects
* Properties and values
* Dot notation
* Bracket notation
* Modifying properties
* Adding and deleting properties
* Nested objects
* Methods
* Arrays of objects
* Understanding `this`
