# Data Policies

A **Data Policy** is used to enforce data requirements on ServiceNow records.

Data Policies can make fields:

* Mandatory
* Read-only in certain contexts

They are primarily concerned with **data integrity**, rather than just how a form looks.

---

## Data Policy vs UI Policy

This distinction is important.

### UI Policy

Mainly controls behaviour on forms.

```text
Make field visible
Make field mandatory
Make field read-only
```

### Data Policy

Helps enforce requirements on data.

```text
This field must have a value
```

---

## Example

Suppose the business requires:

> Every incident must have a short description.

A Data Policy can be used to enforce that requirement.

Conceptually:

```text
Incident
   ↓
Short description required
```

---

## Why Data Policies Matter

Users can interact with ServiceNow in different ways.

Data may come from:

* Forms
* Imports
* Integrations
* APIs
* Other automated processes

A rule that only changes the form may not be enough to enforce a data requirement.

Data Policies are useful when the requirement is about the **data itself**.

---

## UI Policy vs Data Policy

A useful way to remember:

```text
UI Policy
    ↓
How the form behaves

Data Policy
    ↓
What data is required
```

---

## Example Scenario

Requirement:

> Make `justification` mandatory when the request is high priority.

If this is purely a form interaction, a UI Policy may be suitable.

If the requirement must be enforced for data coming from multiple sources, a Data Policy may be more appropriate.

---

## Important

Data Policies are configuration-based rather than JavaScript APIs like:

```javascript
GlideRecord
g_form
gs
```

They are another example of ServiceNow functionality that works alongside scripting.

---

## Key Idea

Not every ServiceNow requirement needs JavaScript.

Before writing a script, ask:

> Is there already a ServiceNow configuration feature that can handle this?

This can lead to simpler and more maintainable applications.
