# ServiceNow Mini Project — Incident Management Utility

This project combines the ServiceNow scripting concepts learned so far.

## Goal

Build a small utility around the **Incident** table that uses:

* Script Includes
* GlideRecord
* Business Rules
* Client Scripts
* `gs`
* `g_form`

The goal is not to build a complete application, but to understand how these components work together.

## Project Flow

```text
Incident Form
     │
     ├── Client Script
     │      └── Reacts to priority changes
     │
     ▼
Incident Record
     │
     ├── Business Rule
     │      └── Runs when the record changes
     │
     ▼
Script Include
     │
     └── Reusable server-side logic
              │
              ▼
          GlideRecord
```

## Important Idea

Different parts of ServiceNow scripting have different responsibilities.

### Client Script

Used for behaviour in the user's browser.

Example:

```javascript
g_form.setMandatory('description', true);
```

### Business Rule

Used for server-side logic when records are inserted, updated, deleted, etc.

Example:

```javascript
gs.info('Incident updated');
```

### Script Include

Used to store reusable server-side functions.

Example:

```javascript
var utils = new IncidentUtils();
```

### GlideRecord

Used to work with records in ServiceNow tables.

Example:

```javascript
var gr = new GlideRecord('incident');
gr.query();
```

## Project Safety

Test these scripts in a Personal Developer Instance or another non-production environment.

Do not experiment with record deletion or large database updates in a production instance.
