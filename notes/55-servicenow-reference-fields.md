# ServiceNow Reference Fields

## What is a reference field?

A reference field links a record to a record in another table.

For example, an Incident's `caller_id` field references a user in the `sys_user` table.

## 1. Read the reference value

```javascript
var callerId = current.getValue('caller_id');

gs.info('Caller sys_id: ' + callerId);
```

The returned value is generally the referenced record's unique `sys_id`.

## 2. Read the display value

```javascript
var callerName = current.getDisplayValue('caller_id');

gs.info('Caller: ' + callerName);
```

`getDisplayValue()` returns the field's display representation rather than the underlying reference value.

## 3. Retrieve the referenced record

```javascript
var callerId = current.getValue('caller_id');

if (callerId) {
    var user = new GlideRecord('sys_user');

    if (user.get(callerId)) {
        gs.info('User name: ' + user.getValue('name'));
    }
}
```

This explicitly retrieves the referenced user record.

## 4. Client-side reference fields

A Client Script can read a reference field using `g_form`:

```javascript
var callerId = g_form.getValue('caller_id');
var callerDisplayValue = g_form.getDisplayValue('caller_id');
```

The first value is the reference identifier; the second is the display value shown to the user.

## Common mistake

Do not assume the reference field contains a person's name. Its stored value is typically a `sys_id`.

## When this is useful

Reference fields appear in relationships such as:

- Incident → Caller
- Incident → Assigned to
- Incident → Assignment group
- Change Request → Requested by

**Key idea:** Use the underlying reference value when you need to identify a linked record, and the display value when you need its human-readable representation.