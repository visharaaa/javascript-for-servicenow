# Business Rules

A **Business Rule** is server-side logic that runs when records are processed in ServiceNow.

Business Rules can run when a record is:

* Inserted
* Updated
* Deleted
* Queried

They are commonly used to enforce logic or perform actions when records change.

---

## Basic Structure

A Business Rule contains JavaScript.

For example:

```javascript
(function executeRule(current, previous /* null when async */) {

    gs.info('Business Rule executed');

})(current, previous);
```

This is an **Immediately Invoked Function Expression (IIFE)**.

The function is created and immediately executed.

---

## `current`

`current` represents the record being processed.

For example:

```javascript
gs.info(current.getValue('number'));
```

If the Business Rule is running on an Incident, `current` represents that Incident record.

We can access fields such as:

```javascript
current.short_description
```

or:

```javascript
current.getValue('short_description')
```

---

## `previous`

`previous` represents the record's previous state.

For example:

```javascript
gs.info(previous.getValue('priority'));
```

This can be useful when checking whether a value changed.

For example:

```javascript
if (current.priority != previous.priority) {
    gs.info('Priority changed');
}
```

`previous` is not available in the same way for every execution context, such as certain asynchronous situations.

---

## When Business Rules Run

Business Rules can be configured to run:

### Before

Runs before the database operation is completed.

Useful when we want to modify the current record before it is saved.

Example:

```javascript
current.short_description = 'Updated description';
```

---

### After

Runs after the record has been saved.

Useful when we need to perform another action after the database operation.

---

### Async

Runs asynchronously after the database operation.

Useful for work that does not need to block the user or transaction.

---

### Display

Runs when a record is displayed.

It can be used to prepare server-side information for the client.

---

## Example: Setting a Field

A Business Rule could contain:

```javascript
(function executeRule(current, previous) {

    if (current.priority == 1) {
        current.urgency = 1;
    }

})(current, previous);
```

The exact behaviour depends on the Business Rule configuration and table.

---

## Business Rules and GlideRecord

A Business Rule can also use GlideRecord.

```javascript
(function executeRule(current, previous) {

    var gr = new GlideRecord('incident');

    gr.addQuery('caller_id', current.caller_id);
    gr.query();

    while (gr.next()) {
        gs.info(gr.getValue('number'));
    }

})(current, previous);
```

Here:

```text
Business Rule
      ↓
current
      ↓
GlideRecord
      ↓
Query other records
```

---

## Important Difference

A Business Rule is **where/when the script runs**.

GlideRecord is **an API used to interact with records**.

For example:

```javascript
var gr = new GlideRecord('incident');
```

is GlideRecord.

While:

```javascript
(function executeRule(current, previous) {
```

is the structure of a Business Rule.

---

## Common Uses

Business Rules can be used for:

* Enforcing business logic
* Updating fields
* Validating server-side conditions
* Creating related records
* Updating related records
* Triggering reusable logic

---

## Good Practice

Avoid putting large amounts of reusable logic directly inside Business Rules.

Instead:

```text
Business Rule
      ↓
Script Include
      ↓
Reusable logic
      ↓
GlideRecord / other APIs
```

This makes scripts easier to maintain.
