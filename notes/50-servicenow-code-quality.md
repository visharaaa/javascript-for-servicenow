# ServiceNow Code Quality

## 1. Use clear names

Prefer:

```javascript
var incidentNumber = current.getValue('number');
```

Instead of:

```javascript
var x = current.getValue('number');
```

## 2. Keep functions focused

A function should have a clear purpose. Avoid combining record retrieval, validation, logging, and unrelated updates in one large function.

## 3. Prefer configuration when appropriate

Before creating a script, consider whether a UI Policy, Data Policy, Flow Designer flow, or another supported configuration feature already meets the requirement.

## 4. Handle missing data

```javascript
var gr = new GlideRecord('incident');

if (gr.get('number', incidentNumber)) {
    gs.info('Incident found');
} else {
    gs.info('Incident not found');
}
```

Never assume the record exists.

## 5. Avoid hard-coded assumptions

Choice values, field names, and business rules may differ across applications or instances. Confirm the values in your own environment.

## 6. Keep client and server responsibilities separate

- `g_form` is used for client-side form interaction.
- `gs` provides server-side system utilities.
- GlideRecord is commonly used in server-side scripts.
- GlideAjax supports asynchronous client-to-server requests.

## 7. Review security and performance

Before committing a script, ask:

- Does it expose only necessary data?
- Is access checked where needed?
- Could it run repeatedly or trigger recursion?
- Does it query more records than necessary?
- Have normal and edge cases been tested?

## 8. Document assumptions

A short comment explaining why a non-obvious decision exists is more useful than comments that simply repeat the code.

**Key idea:** Good ServiceNow scripting balances readability, maintainability, performance, and security.