# ServiceNow Scripting Security

## 1. Never trust client input

Values sent from a form or GlideAjax request can be manipulated.

For example:

```javascript
var number = this.getParameter(
    'sysparm_incident_number'
);
```

Validate that the value is present and in the expected format before using it.

## 2. Do not expose unnecessary data

A client-callable Script Include should return only the information the client needs.

Avoid returning complete records when one field is sufficient.

## 3. Understand GlideRecord access

A query finding a record does not automatically mean the current user should be allowed to see or modify every field.

Consider the appropriate access controls and, where suitable, APIs such as `GlideRecordSecure`. Follow the application's authorization requirements.

## 4. Avoid unsafe queries

Use `addQuery()` with explicit field names and values:

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.query();
```

Avoid building encoded queries directly from untrusted user input without validation.

## 5. Protect sensitive information

Do not put passwords, tokens, or sensitive personal information in scripts or logs.

## 6. Minimize database work

- Retrieve only the records you need.
- Use specific query conditions.
- Avoid querying inside loops unnecessarily.
- Use aggregate queries when you only need counts or summary statistics.

## 7. Test before deploying

Use a development or test instance first. Confirm expected behaviour, permissions, and edge cases before promoting a change.

**Key idea:** A script that works correctly must also respect authorization, data privacy, and performance.