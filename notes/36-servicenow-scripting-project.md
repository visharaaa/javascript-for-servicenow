# ServiceNow Scripting Project

Now that the basic ServiceNow APIs are familiar, it is useful to combine them into a small practice application.

The goal is to practice how different ServiceNow scripting components work together.

---

## Project Idea

Create an **Incident Management Utility**.

The project will contain functionality such as:

* Finding incidents
* Counting active incidents
* Checking incident priority
* Displaying useful information
* Performing actions on incidents

---

## Components

We will use:

```text
Client Script
Business Rule
Script Include
GlideRecord
GlideAjax
UI Action
gs
```

Each component has a different responsibility.

---

## Architecture

```text
                 ServiceNow Incident
                         │
              ┌──────────┴──────────┐
              │                     │
           Client                  Server
              │                     │
        Client Script          Business Rule
              │                     │
           g_form              Script Include
              │                     │
          GlideAjax ─────────→ GlideRecord
                                    │
                                   gs
```

---

## Step 1 - Script Include

Create a reusable Script Include for incident-related logic.

Example:

```javascript id="h5q8de"
var IncidentUtils = Class.create();

IncidentUtils.prototype = {

    initialize: function() {
    },

    getIncidentDescription: function(number) {

        var gr = new GlideRecord('incident');

        if (gr.get('number', number)) {
            return gr.getValue('short_description');
        }

        return null;
    },

    type: 'IncidentUtils'
};
```

The Script Include handles the server-side logic.

---

## Step 2 - Business Rule

A Business Rule can perform logic when an incident changes.

Example:

```javascript id="82xw5q"
(function executeRule(current, previous) {

    if (current.priority == 1) {
        gs.info(
            'Critical incident: ' +
            current.getValue('number')
        );
    }

})(current, previous);
```

The Business Rule responds to the record operation.

---

## Step 3 - Client Script

A Client Script can respond to changes on the form.

Example:

```javascript id="bykz01"
function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('description', true);
    } else {
        g_form.setMandatory('description', false);
    }

}
```

The Client Script controls the form.

---

## Step 4 - GlideAjax

Suppose the client needs information that is stored on the server.

We can use GlideAjax:

```text id="1y8g4s"
Client Script
      ↓
GlideAjax
      ↓
Script Include
      ↓
GlideRecord
```

This allows us to keep database access on the server.

---

## Step 5 - UI Action

We can add a button that performs an action.

For example:

```javascript id="i7c9vr"
gs.info(
    'Processing incident ' +
    current.getValue('number')
);
```

The UI Action provides a user-triggered entry point.

---

## What Each Component Does

| Component      | Responsibility                |
| -------------- | ----------------------------- |
| Client Script  | Form behaviour                |
| UI Policy      | Simple field behaviour        |
| UI Action      | User-triggered action         |
| Business Rule  | Record-triggered server logic |
| Script Include | Reusable server logic         |
| GlideRecord    | Record/database operations    |
| GlideAjax      | Client → server communication |
| `gs`           | Server utilities              |

---

## Development Principle

Try to keep responsibilities separate.

Instead of putting everything into one large script:

```text
Large Script
    ↓
Everything
```

prefer:

```text
Client Script
    ↓
Form behaviour

Script Include
    ↓
Reusable logic

Business Rule
    ↓
Record-triggered logic
```

This makes applications easier to maintain.
