# Client Scripts

A **Client Script** is JavaScript that runs in the user's browser when they interact with a ServiceNow form.

Unlike Business Rules, which run on the server, Client Scripts run on the **client side**.

---

## Client vs Server

A simple way to remember the difference:

```text
Client
  ↓
User's browser
  ↓
Client Scripts
  ↓
g_form / g_user
```

```text
Server
  ↓
ServiceNow platform
  ↓
Business Rules / Script Includes
  ↓
GlideRecord / gs
```

---

## Types of Client Scripts

There are four main types:

* onLoad
* onChange
* onSubmit
* onCellEdit

---

## onLoad

An `onLoad` Client Script runs when a form loads.

Example:

```javascript
function onLoad() {

    g_form.setValue('urgency', 2);

}
```

This sets the urgency when the form is loaded.

---

## onChange

An `onChange` Client Script runs when a field value changes.

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (isLoading) {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('urgency', true);
    }

}
```

The parameters provide information about the change.

### `newValue`

The new value of the field.

### `oldValue`

The previous value.

### `isLoading`

Indicates whether the form is currently loading.

A common pattern is:

```javascript
if (isLoading) {
    return;
}
```

This prevents the script from running unnecessarily during form loading.

---

## onSubmit

An `onSubmit` Client Script runs when the user submits a form.

It can be used to validate information before submission.

```javascript
function onSubmit() {

    if (g_form.getValue('short_description') == '') {
        alert('Please enter a short description.');
        return false;
    }

    return true;
}
```

Returning:

```javascript
return false;
```

prevents the form from being submitted.

Returning:

```javascript
return true;
```

allows the submission.

---

## onCellEdit

`onCellEdit` is used when editing records directly in a list.

It is less common when starting out, so the most important types to learn first are:

```text
onLoad
onChange
onSubmit
```

---

## Important Client-Side APIs

Client Scripts commonly use:

```text
g_form
g_user
```

`g_form` is used to interact with the current form.

`g_user` provides information about the current user.

---

## Important Idea

Client Scripts are mainly about **user interaction and form behaviour**.

For example:

```text
User changes Priority
        ↓
Client Script runs
        ↓
Check new value
        ↓
Make another field mandatory
```

---

## Client Script vs Business Rule

A Client Script:

```text
Runs in browser
Controls form behaviour
Improves user interaction
```

A Business Rule:

```text
Runs on server
Enforces server-side logic
Works with database records
```

Client-side validation should not be treated as a replacement for server-side validation.

---

## Example

Client Script:

```javascript
function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('description', true);
    }

}
```

This changes the form behaviour when a field changes.
