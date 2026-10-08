# ServiceNow Scripting Best Practices

Writing code that works is only part of development.

Good ServiceNow scripts should also be readable, maintainable, and efficient.

---

## 1. Use the Right Tool

Before writing JavaScript, ask whether configuration can solve the problem.

For example:

```text
Simple field behaviour
        ↓
UI Policy
```

instead of immediately writing a Client Script.

---

## 2. Keep Client and Server Logic Separate

Avoid trying to perform server-side operations directly in Client Scripts.

For example, database operations should generally be handled server-side:

```javascript id="kr6c1g"
var gr = new GlideRecord('incident');
```

Client-side code can request the required information using GlideAjax when appropriate.

---

## 3. Reuse Logic

If the same logic is needed in multiple places, consider a Script Include.

Instead of repeating:

```javascript id="19f2qp"
var gr = new GlideRecord('incident');
// repeated logic
```

create reusable functionality.

```javascript id="z8tq3n"
var utils = new IncidentUtils();
utils.someMethod();
```

---

## 4. Avoid Unnecessary Database Queries

A GlideRecord query can be expensive if used unnecessarily.

Avoid:

```javascript id="g1m7zq"
while (gr.next()) {
    // Retrieve records
}
```

when you only need to know whether a record exists.

Consider whether:

```javascript id="f8px0n"
gr.hasNext()
```

or:

```javascript id="5wzv0n"
gr.get(...)
```

is more appropriate.

---

## 5. Query Only What You Need

Use conditions to narrow your results.

Instead of querying every incident:

```javascript id="n4u7pd"
var gr = new GlideRecord('incident');
gr.query();
```

use a condition when possible:

```javascript id="2f3v6w"
gr.addQuery('active', true);
gr.query();
```

---

## 6. Avoid Unnecessary Client-Server Calls

GlideAjax is useful, but every request adds work.

Before using GlideAjax, ask:

> Is the information already available on the client?

If `g_form` can provide the information, a server call may not be necessary.

---

## 7. Use Meaningful Names

Prefer:

```javascript id="x8k3jw"
var incidentUtils;
var incidentNumber;
var activeIncidents;
```

over:

```javascript id="1x4tq9"
var x;
var a;
var data;
```

Good names make scripts easier to understand.

---

## 8. Keep Functions Focused

A function should ideally have one clear responsibility.

For example:

```javascript id="z2p5js"
getIncidentDescription()
```

should focus on getting an incident description rather than also updating unrelated records.

---

## 9. Use Logging During Development

Server-side scripts can use:

```javascript id="tq0h5m"
gs.info('Script started');
```

Warnings:

```javascript id="y7z3ec"
gs.warn('Unexpected value');
```

Errors:

```javascript id="4m0f1a"
gs.error('Something went wrong');
```

Logging can help understand what a script is doing.

---

## 10. Don't Use Client-Side Logic for Security

For example, hiding a button or field does not automatically make something secure.

Security should be handled using appropriate server-side mechanisms such as:

```text
ACLs
Roles
Server-side validation
```

---

## 11. Handle Empty Results

Don't assume a record always exists.

Instead of blindly using a record:

```javascript id="7k5t1m"
gr.get('INC0010001');

gs.info(gr.getValue('short_description'));
```

check whether the record was found:

```javascript id="1g4q8v"
if (gr.get('INC0010001')) {
    gs.info(gr.getValue('short_description'));
}
```

---

## 12. Comment Why, Not What

Avoid comments such as:

```javascript id="f0k1s8"
// Get incident
var gr = new GlideRecord('incident');
```

The code already explains that.

A more useful comment explains the reason:

```javascript id="b8m3jw"
// Only process active incidents because closed incidents
// should not be included in this calculation.
gr.addQuery('active', true);
```

---

## Main Principle

Good ServiceNow development is not about putting JavaScript everywhere.

It is about choosing the right tool:

```text
Configuration
     ↓
UI Policy / Data Policy

Client logic
     ↓
Client Script / g_form

Server logic
     ↓
Business Rule / Script Include

Database
     ↓
GlideRecord / GlideAggregate

Client → Server
     ↓
GlideAjax
```
