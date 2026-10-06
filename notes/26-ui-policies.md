# UI Policies

A **UI Policy** is a ServiceNow configuration used to dynamically change the behaviour of fields on a form.

UI Policies can control things such as:

* Mandatory
* Visible
* Read-only

---

## Example

Suppose we want `description` to become mandatory when an Incident has a certain priority.

Instead of writing a Client Script manually, we can often use a UI Policy.

Conceptually:

```text
Condition:
Priority is Critical

        ↓

UI Policy Action:

Description → Mandatory
```

---

## UI Policy Actions

A UI Policy can define actions for fields.

For example:

```text
Field: Description
Mandatory: True
Visible: True
Read-only: False
```

The platform handles applying the configuration when the condition is met.

---

## UI Policy vs Client Script

Both can change form behaviour, but they are useful for different situations.

### UI Policy

Good for straightforward field behaviour.

Examples:

```text
Make field mandatory
Make field visible
Make field read-only
```

### Client Script

Better when we need custom JavaScript logic.

For example:

```javascript
if (priority == '1' && impact == '1') {
    // Custom logic
}
```

---

## A Simple Rule

When the requirement is:

> "When X happens, make field Y mandatory/read-only/visible."

Consider a **UI Policy** first.

When the requirement needs:

> Custom JavaScript logic.

Consider a **Client Script**.

---

## UI Policy vs Client Script Example

### Requirement

When priority is critical:

```text
Description → Mandatory
```

A UI Policy can handle this.

### More complicated requirement

When priority is critical AND the user has a particular role AND another field contains a specific value:

A Client Script may be more appropriate.

---

## Important

UI Policies are primarily for **form behaviour**.

They should not be used as a replacement for server-side security or data validation.

---

## What We Have Learned

We now have two major sides of ServiceNow scripting:

### Server-side

```text
Business Rules
Script Includes
GlideRecord
gs
```

### Client-side

```text
Client Scripts
g_form
g_user
UI Policies
```

Understanding which side a script runs on is one of the most important concepts in ServiceNow development.
