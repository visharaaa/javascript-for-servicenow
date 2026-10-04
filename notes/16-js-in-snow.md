# JavaScript in ServiceNow

ServiceNow uses JavaScript extensively to add logic, automate processes and control application behaviour.

The important thing to understand is that ServiceNow provides its own APIs and objects on top of JavaScript.

## 1. JavaScript Is the Foundation

A normal JavaScript statement:

```javascript
var name = "Vishara";

if (name === "Vishara") {
    console.log("Correct user");
}
```

The syntax is standard JavaScript.

ServiceNow allows us to combine this JavaScript knowledge with platform-specific APIs.

---

## 2. Server-Side vs Client-Side

One of the first concepts to understand is that ServiceNow scripts can run in different environments.

### Server-side

Server-side scripts execute on the ServiceNow server.

Examples include:

* Business Rules
* Script Includes
* Scheduled Script Executions
* Background Scripts

Common server-side APIs include:

```javascript
gs
GlideRecord
GlideDateTime
```

---

### Client-side

Client-side scripts execute in the user's browser.

Examples include:

* Client Scripts
* UI Policies
* Catalog Client Scripts

Common client-side APIs include:

```javascript
g_form
g_user
```

---

## 3. Why the Difference Matters

A server-side script can interact directly with database records through APIs such as `GlideRecord`.

A client-side script is primarily concerned with the user's form and browser experience.

For example:

```javascript
g_form.setValue("priority", "1");
```

This is client-side ServiceNow code.

`g_form` is a ServiceNow object that provides methods for interacting with a form.

---

## 4. JavaScript + ServiceNow API

A ServiceNow script can look like:

```javascript
if (current.active == true) {
    gs.info("The record is active");
}
```

The JavaScript concepts are:

```javascript
if
true
==
```

The ServiceNow-specific parts are:

```javascript
current
gs.info()
```

This distinction is important when learning.

---

## 5. Common ServiceNow Objects

Some important objects you will encounter:

### `gs`

GlideSystem.

Used for interacting with the ServiceNow system from server-side scripts.

```javascript
gs.info("Hello ServiceNow");
```

### `current`

Represents the current record in contexts such as Business Rules.

```javascript
current.short_description
```

### `g_form`

Used on the client side to interact with the current form.

```javascript
g_form.setValue("priority", "1");
```

### `g_user`

Provides information about the current logged-in user on the client side.

---

## 6. ServiceNow Scripting Mindset

When reading a ServiceNow script, ask:

**What is JavaScript here?**

For example:

```javascript
if (current.priority == 1) {
    gs.info("High priority incident");
}
```

JavaScript:

```javascript
if
==
```

ServiceNow:

```javascript
current.priority
gs.info()
```

This way of separating the concepts makes ServiceNow much easier to learn.

---

## Next Step

The next major ServiceNow API to learn is:

```javascript
GlideRecord
```

GlideRecord is used extensively for querying and working with records in ServiceNow.
