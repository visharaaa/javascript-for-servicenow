# Script Includes + GlideRecord

Script Includes and GlideRecord can be combined to create reusable database logic.

---

## Example

Suppose we want a reusable function that finds an incident.

```javascript
var IncidentUtils = Class.create();

IncidentUtils.prototype = {

    initialize: function() {
    },

    findIncident: function(number) {

        var gr = new GlideRecord('incident');

        if (gr.get('number', number)) {
            return gr;
        }

        return null;
    },

    type: 'IncidentUtils'
};
```

We can then use it from another server-side script:

```javascript
var utils = new IncidentUtils();

var incident = utils.findIncident('INC0010001');

if (incident) {
    gs.info(incident.getValue('short_description'));
}
```

---

## Why This Is Useful

Instead of repeatedly writing:

```javascript
var gr = new GlideRecord('incident');

if (gr.get('number', number)) {
    // ...
}
```

we can simply call:

```javascript
utils.findIncident(number);
```

This keeps our scripts cleaner.

---

## Another Example

A Script Include can return a value rather than the entire GlideRecord.

```javascript
var IncidentUtils = Class.create();

IncidentUtils.prototype = {

    initialize: function() {
    },

    getShortDescription: function(number) {

        var gr = new GlideRecord('incident');

        if (gr.get('number', number)) {
            return gr.getValue('short_description');
        }

        return null;
    },

    type: 'IncidentUtils'
};
```

Then:

```javascript
var utils = new IncidentUtils();

var description = utils.getShortDescription('INC0010001');

gs.info(description);
```

---

## The Architecture

A simple ServiceNow application can look like:

```text
Business Rule
      ↓
Script Include
      ↓
GlideRecord
      ↓
ServiceNow Database
```

This separation is useful because each part has a different responsibility.

### Business Rule

Controls **when** something happens.

### Script Include

Contains **reusable logic**.

### GlideRecord

Handles **record/database interaction**.

### `gs`

Provides **server-side utilities and logging**.

---

## What We Have Learned So Far

We started with standard JavaScript:

```text
Variables
Conditionals
Functions
Scope
Arrays
Objects
Loops
Array methods
Strings
Type conversion
Destructuring
Spread/rest
Error handling
JSON
```

Then moved into ServiceNow:

```text
gs
 ↓
GlideRecord
 ↓
Script Includes
 ↓
Business Rules
```

This is the point where the JavaScript fundamentals start becoming useful for actual ServiceNow development.
