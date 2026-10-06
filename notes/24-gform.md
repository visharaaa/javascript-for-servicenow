# g_form

`g_form` is a ServiceNow client-side API used to interact with fields on the current form.

It is one of the most important APIs when learning Client Scripts.

---

## Getting a Field Value

```javascript
var priority = g_form.getValue('priority');
```

This gets the value of the `priority` field.

---

## Setting a Field Value

```javascript
g_form.setValue('priority', '2');
```

This changes the value of the field.

---

## Making a Field Mandatory

```javascript
g_form.setMandatory('short_description', true);
```

To make it optional:

```javascript
g_form.setMandatory('short_description', false);
```

---

## Making a Field Visible

```javascript
g_form.setVisible('description', true);
```

Hide it:

```javascript
g_form.setVisible('description', false);
```

---

## Making a Field Read-Only

```javascript
g_form.setReadOnly('priority', true);
```

Make it editable again:

```javascript
g_form.setReadOnly('priority', false);
```

---

## Showing a Field Message

```javascript
g_form.showFieldMsg(
    'priority',
    'Please check the priority.',
    'warning'
);
```

The message is associated with the field.

---

## Clearing a Field Message

```javascript
g_form.hideFieldMsg('priority');
```

---

## Checking Whether a Field Is Empty

```javascript
if (g_form.getValue('short_description') == '') {
    // Field is empty
}
```

---

## Getting a Display Value

For some fields, we may want the value displayed to the user.

```javascript
var caller = g_form.getDisplayBox('caller_id');
```

The exact API to use depends on the type of field and what information is needed.

---

## Clearing a Field

```javascript
g_form.clearValue('description');
```

This removes the current value from the field.

---

## Example

Suppose we want to make the `description` field mandatory when priority is critical.

```javascript
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

The flow is:

```text
User changes priority
        ↓
onChange runs
        ↓
Get new value
        ↓
Check priority
        ↓
Change description field
```

---

## `g_form` Is Client-Side

This is important:

```javascript
g_form
```

is primarily used in client-side scripts.

You generally won't use it inside a normal server-side Business Rule.

Compare:

```text
Client side
    ↓
g_form
g_user
```

with:

```text
Server side
    ↓
gs
GlideRecord
```

---

## JavaScript + ServiceNow

The JavaScript part:

```javascript
if
function
var
return
```

The ServiceNow-specific part:

```javascript
g_form.getValue()
g_form.setValue()
g_form.setMandatory()
g_form.setVisible()
g_form.setReadOnly()
```

This distinction is worth remembering.
