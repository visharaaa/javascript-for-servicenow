# JSON

JSON stands for **JavaScript Object Notation**.

It is a lightweight format commonly used for storing and transferring data.

JSON looks similar to JavaScript objects, but they are not exactly the same thing.

## 1. A JavaScript Object

```javascript
const user = {
    name: "Vishara",
    age: 23,
    active: true
};
```

This is a JavaScript object.

## 2. JSON

The equivalent JSON is:

```json
{
    "name": "Vishara",
    "age": 23,
    "active": true
}
```

JSON property names are written using double quotes.

---

## 3. JSON Data Types

JSON supports:

* Strings
* Numbers
* Booleans
* Objects
* Arrays
* `null`

Example:

```json
{
    "name": "Vishara",
    "age": 23,
    "active": true,
    "skills": ["Python", "JavaScript", "SQL"],
    "address": null
}
```

---

## 4. `JSON.stringify()`

`JSON.stringify()` converts a JavaScript value into a JSON string.

```javascript
const user = {
    name: "Vishara",
    age: 23
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
```

Output:

```text
{"name":"Vishara","age":23}
```

Notice that the result is now a **string**.

```javascript
console.log(typeof jsonData);
```

Output:

```text
string
```

---

## 5. `JSON.parse()`

`JSON.parse()` converts a JSON string into a JavaScript value.

```javascript
const jsonData = '{"name":"Vishara","age":23}';

const user = JSON.parse(jsonData);

console.log(user.name);
```

Now `user` is a JavaScript object.

---

## 6. Why JSON Is Important

JSON is commonly used when data needs to move between systems.

For example:

```text
Application
    ↓
JSON
    ↓
API
    ↓
ServiceNow
```

ServiceNow integrations frequently involve JSON data.

---

## 7. Arrays in JSON

JSON can contain arrays:

```json
{
    "users": [
        {
            "name": "Vishara",
            "active": true
        },
        {
            "name": "John",
            "active": false
        }
    ]
}
```

After parsing it in JavaScript:

```javascript
const data = JSON.parse(jsonData);

console.log(data.users[0].name);
```

---

## ServiceNow Connection

JSON is particularly important when working with:

* REST APIs
* REST messages
* Scripted REST APIs
* Integrations
* External systems
* Importing/exporting structured data

For example, ServiceNow may receive a JSON request containing information about an incident or user.

Understanding JSON means you can understand what the script is actually doing with that data.
