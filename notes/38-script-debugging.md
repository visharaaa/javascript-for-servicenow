# Debugging ServiceNow Scripts

Debugging means finding and fixing problems in code.

ServiceNow provides several ways to investigate what a script is doing.

---

## Server-Side Logging

Use `gs.info()`:

```javascript id="d0m7py"
gs.info('Script started');
```

You can log values:

```javascript id="6v6a0j"
gs.info('Priority: ' + current.getValue('priority'));
```

---

## Warnings

```javascript id="n8x4q1"
gs.warn('Unexpected priority value');
```

Warnings can help identify situations that are not necessarily errors.

---

## Errors

```javascript id="r7w2mk"
gs.error('Unable to process incident');
```

Errors are useful when something has gone wrong.

---

## Check Your Assumptions

Suppose:

```javascript id="2y3q7m"
var gr = new GlideRecord('incident');

if (gr.get('INC0010001')) {
    gs.info(gr.getValue('short_description'));
}
```

If nothing appears, check:

1. Does the record exist?
2. Is the table correct?
3. Is the field name correct?
4. Did the `get()` succeed?
5. Is the script running in the expected context?

---

## Debugging GlideRecord

You can log whether a record was found:

```javascript id="3d6j8s"
if (gr.get('INC0010001')) {

    gs.info('Record found');

} else {

    gs.warn('Record not found');

}
```

---

## Debugging Queries

For a query:

```javascript id="q1e6yc"
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.query();

var count = 0;

while (gr.next()) {
    count++;
}

gs.info('Records found: ' + count);
```

This helps verify that the query is returning records.

---

## Client-Side Logging

Client-side JavaScript can use:

```javascript id="z0u6fr"
console.log('Client Script executed');
```

For example:

```javascript id="q8c2mj"
console.log('New priority: ' + newValue);
```

Browser developer tools can then be used to inspect the output.

---

## Debugging `g_form`

When debugging a Client Script, check the value:

```javascript id="m7h4z2"
console.log(
    'Priority: ' +
    g_form.getValue('priority')
);
```

This can help determine whether the expected field value is being received.

---

## Debugging GlideAjax

When using GlideAjax, debug both sides.

### Client

```javascript id="x9r1ka"
console.log('Sending request');
```

### Server

```javascript id="n5k6pd"
gs.info('GlideAjax method called');
```

This helps determine whether:

```text
Client
   ↓
Request
   ↓
Server
```

is working correctly.

---

## Common Problems

### Wrong table

```javascript id="j7w5cs"
new GlideRecord('wrong_table');
```

### Wrong field name

```javascript id="v3q0px"
gr.getValue('wrong_field');
```

### Forgot `query()`

```javascript id="k4p8ns"
gr.addQuery(...);
// query() missing
```

### Forgot `next()`

```javascript id="a6t9de"
gr.query();

gs.info(gr.getValue('number'));
```

For multiple query results, you normally need to move through the result set using `next()`.

### Client/server confusion

Trying to use:

```javascript id="p8z2ye"
GlideRecord
```

inside a normal Client Script is a common mistake.

---

## Debugging Process

A useful process is:

```text
1. Reproduce the problem
        ↓
2. Check the execution context
        ↓
3. Log important values
        ↓
4. Check queries and conditions
        ↓
5. Test one part at a time
        ↓
6. Fix the smallest problem first
```

---

## Key Idea

Don't guess what the script is doing.

Use logs, browser tools, and small tests to **observe what is actually happening**.
