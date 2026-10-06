# UI Actions

A **UI Action** adds a button, link, or menu item to a ServiceNow interface.

UI Actions can execute JavaScript when the user interacts with them.

Examples include:

* Buttons on forms
* Related links
* List buttons
* Context menu actions

---

## Basic UI Action

A UI Action can contain JavaScript such as:

```javascript
gs.info('UI Action executed');
```

The exact script depends on where the UI Action is configured.

---

## Using `current`

On a form UI Action, `current` represents the current record.

For example:

```javascript
gs.info(current.getValue('number'));
```

This gets the number of the current record.

---

## Updating a Record

A UI Action can modify the current record.

```javascript
current.setValue('priority', 2);
current.update();
```

The flow is:

```text
User clicks button
        ↓
UI Action runs
        ↓
current = current record
        ↓
Modify record
        ↓
update()
```

---

## Example: Close Incident

A UI Action could contain logic such as:

```javascript
if (current.active == true) {

    current.state = 7;
    current.active = false;
    current.update();

}
```

The exact state values depend on the table and configuration.

---

## Conditions

UI Actions can have a condition determining when they should appear.

For example, conceptually:

```javascript
current.active == true
```

This means the button should only be available when the record is active.

---

## Client-Side UI Actions

Some UI Actions can also execute client-side JavaScript.

For example:

```javascript
function closeIncident() {
    g_form.setValue('state', '7');
    g_form.save();
}
```

Here we are using:

```text
g_form
```

because the code is running on the client.

---

## Server vs Client

A UI Action can involve both sides.

### Server-side

```javascript
current
gs
GlideRecord
```

### Client-side

```javascript
g_form
g_user
```

Understanding which context the script is running in is important.

---

## When to Use UI Actions

UI Actions are useful when you want a user to explicitly trigger an action.

Examples:

```text
Approve
Reject
Close
Reopen
Assign
Create related record
Run custom process
```

---

## UI Action vs Client Script

A Client Script reacts automatically to form events.

```text
Field changes
    ↓
Client Script
```

A UI Action waits for the user to click something.

```text
User clicks button
    ↓
UI Action
```

---

## Key Idea

Think of a UI Action as:

```text
User-triggered action
        ↓
JavaScript
        ↓
ServiceNow operation
```
