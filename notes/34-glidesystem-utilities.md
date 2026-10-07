# GlideSystem Utilities

`gs` gives server-side scripts access to the **GlideSystem** API.

We already introduced:

```javascript
gs.info()
gs.warn()
gs.error()
```

There are many other useful methods.

---

## Logging

### Info

```javascript
gs.info('Script started');
```

### Warning

```javascript
gs.warn('Something may need attention');
```

### Error

```javascript
gs.error('Something went wrong');
```

---

## Current User

```javascript
gs.getUserID();
```

```javascript
gs.getUserName();
```

```javascript
gs.getUser();
```

---

## Roles

```javascript
if (gs.hasRole('admin')) {
    gs.info('Admin user');
}
```

---

## Current Date and Time

```javascript
gs.nowDateTime();
```

This returns the current date/time as a string.

For more advanced date manipulation, use:

```javascript
new GlideDateTime();
```

---

## Messages

Some server-side contexts can display messages to users.

For example:

```javascript
gs.addInfoMessage('Record updated successfully');
```

There are also warning and error message methods.

---

## Properties

ServiceNow system properties can be accessed with:

```javascript
gs.getProperty('property.name');
```

For example:

```javascript
var value = gs.getProperty('my.application.setting');

gs.info(value);
```

This is useful for configuration values that should not be hard-coded into scripts.

---

## Abort an Action

In appropriate server-side contexts, a script can prevent a database action using:

```javascript
current.setAbortAction(true);
```

For example, this can be used in a Business Rule when a record should not be saved under certain conditions.

---

## Example

```javascript
if (!gs.hasRole('itil')) {

    gs.addErrorMessage(
        'You do not have permission to perform this action.'
    );

    current.setAbortAction(true);
}
```

The exact implementation should depend on the business requirement and security model.

---

## `gs` vs `GlideRecord`

They serve different purposes.

### `gs`

Platform utilities:

```text
User information
Logging
Messages
Properties
Date/time utilities
```

### `GlideRecord`

Database records:

```text
Query
Read
Insert
Update
Delete
```

---

## Key Idea

Think of:

```text
gs
 ↓
ServiceNow platform utilities
```

and:

```text
GlideRecord
 ↓
ServiceNow records
```
