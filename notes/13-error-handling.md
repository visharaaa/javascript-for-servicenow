# JavaScript Error Handling

Errors can happen while a program is running.

JavaScript provides `try...catch` to handle certain errors without immediately stopping the entire program.

## 1. `try...catch`

```javascript
try {
    let result = someUndefinedFunction();

    console.log(result);
} catch (error) {
    console.log("Something went wrong.");
}
```

The code inside `try` is attempted.

If an error occurs, JavaScript moves to `catch`.

---

## 2. Accessing the Error

The `catch` block provides an error object.

```javascript
try {
    someUndefinedFunction();
} catch (error) {
    console.log(error);
}
```

You can also access:

```javascript
console.log(error.message);
```

---

## 3. `finally`

`finally` runs whether an error occurs or not.

```javascript
try {
    console.log("Running code");
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Finished");
}
```

---

## 4. Throwing Your Own Error

You can create an error using `throw`.

```javascript
function checkAge(age) {

    if (age < 18) {
        throw new Error("User must be 18 or older");
    }

    return "Access granted";
}
```

Then:

```javascript
try {
    console.log(checkAge(16));
} catch (error) {
    console.log(error.message);
}
```

---

## 5. Why Error Handling Matters

Without error handling, an unexpected error can stop the execution of a script.

Error handling allows you to:

* Detect problems
* Provide useful error messages
* Prevent unexpected failures
* Handle situations where external data is invalid

---

## ServiceNow Connection

Error handling becomes important when ServiceNow scripts interact with records, APIs or other systems.

For example, if a script expects a value to exist but the value is missing, the script needs to handle that situation safely.

You may encounter patterns such as:

```javascript
try {
    // Script logic
} catch (error) {
    gs.error(error.message);
}
```

Here:

* `try` and `catch` are JavaScript
* `error.message` is JavaScript
* `gs.error()` is a ServiceNow API

This distinction is important when learning ServiceNow scripting.
