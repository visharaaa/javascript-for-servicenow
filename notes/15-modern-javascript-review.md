# Modern JavaScript Review

Before moving into ServiceNow scripting, it is useful to review the modern JavaScript features that will appear frequently.

## 1. Prefer `const` and `let`

Use `const` when a variable will not be reassigned.

```javascript
const name = "Vishara";
```

Use `let` when the value needs to change.

```javascript
let count = 0;

count++;
```

Avoid using `var` unless working with older code where it is already used.

---

## 2. Arrow Functions

Traditional function:

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short version:

```javascript
const add = (a, b) => a + b;
```

---

## 3. Template Literals

Instead of:

```javascript
const message = "Hello " + name;
```

Use:

```javascript
const message = `Hello ${name}`;
```

---

## 4. Destructuring

Instead of:

```javascript
const name = user.name;
const age = user.age;
```

You can use:

```javascript
const { name, age } = user;
```

---

## 5. Spread

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];
```

For objects:

```javascript
const updatedUser = {
    ...user,
    active: true
};
```

---

## 6. Array Methods

Remember the common methods:

```javascript
forEach()
map()
filter()
find()
some()
every()
```

For example:

```javascript
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(number => number % 2 === 0);
```

---

## 7. Objects and Arrays

A very common data structure is an array of objects:

```javascript
const users = [
    {
        name: "Vishara",
        active: true
    },
    {
        name: "John",
        active: false
    }
];
```

You should be comfortable accessing:

```javascript
users[0].name
```

and:

```javascript
users.filter(user => user.active)
```

---

## 8. Functions

You should understand:

```javascript
function greet(name) {
    return `Hello ${name}`;
}
```

and:

```javascript
const greet = name => `Hello ${name}`;
```

---

## 9. Conditional Logic

You should be comfortable with:

```javascript
if (condition) {
    
} else if (anotherCondition) {
    
} else {
    
}
```

and logical operators:

```javascript
&&
||
!
```

---

## 10. The Important Transition

At this point, most of the syntax below should look familiar:

```javascript
const users = [
    {
        name: "Vishara",
        active: true
    },
    {
        name: "John",
        active: false
    }
];

const activeUsers = users.filter(user => user.active);

for (const user of activeUsers) {
    console.log(`Active user: ${user.name}`);
}
```

The next step is learning how ServiceNow provides its own objects and APIs that JavaScript interacts with.

---

## JavaScript vs ServiceNow

It is important to separate the two.

### JavaScript

```javascript
if
for
function
const
let
Array
Object
map()
filter()
```

These are JavaScript concepts.

### ServiceNow

```javascript
GlideRecord
gs
current
g_form
g_user
```

These are provided by the ServiceNow platform.

The goal now is to learn how these two layers work together.
