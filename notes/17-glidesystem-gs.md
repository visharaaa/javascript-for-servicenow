# GlideSystem (`gs`)

`gs` is the ServiceNow **GlideSystem** object.

It provides methods for interacting with the ServiceNow system from server-side scripts.

## 1. Logging Messages

One of the simplest uses is logging information.

```javascript
gs.info("Hello from ServiceNow");
```

You may also see:

```javascript
gs.warn("This is a warning");
```

and:

```javascript
gs.error("Something went wrong");
```

---

## 2. Why Logging Is Useful

Logging is useful when debugging scripts.

For example:

```javascript
var priority = current.priority;

gs.info("Current priority: " + priority);
```

You can then inspect the system logs to understand what your script is doing.

---

## 3. Getting the Current User

`gs` provides information about the current user.

For example:

```javascript
gs.getUserName();
```

This returns the username of the current user.

You may also encounter:

```javascript
gs.getUserID();
```

which returns the user's system ID.

---

## 4. Checking Roles

You can check whether the current user has a role:

```javascript
gs.hasRole("admin");
```

This returns a boolean.

```javascript
if (gs.hasRole("admin")) {
    gs.info("User is an admin");
}
```

---

## 5. Messages

ServiceNow can display messages to users in appropriate contexts.

For example:

```javascript
gs.addInfoMessage("Record updated successfully");
```

The exact behaviour depends on where the script is running.

---

## 6. Date and Time

`gs` also provides methods related to system information and dates.

You may encounter:

```javascript
gs.nowDateTime();
```

which returns the current system date and time.

---

## 7. JavaScript vs `gs`

Remember:

```javascript
if (condition) {
    console.log("Hello");
}
```

`if` and `console.log()` are JavaScript concepts.

But:

```javascript
gs.info("Hello");
```

uses a ServiceNow-specific API.

In server-side ServiceNow scripting, you'll usually use `gs` rather than `console.log()` for logging.

---

## 8. Example

A simple server-side script:

```javascript
var username = gs.getUserName();

gs.info("Current user: " + username);

if (gs.hasRole("admin")) {
    gs.info("User has admin role");
} else {
    gs.info("User is not an admin");
}
```

This combines standard JavaScript with the ServiceNow `gs` API.

---

## Important

`gs` is primarily a **server-side API**.

Do not assume that every `gs` method can be used inside a client-side script.

Understanding whether your script runs on the server or client is essential in ServiceNow development.
