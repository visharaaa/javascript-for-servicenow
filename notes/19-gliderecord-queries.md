# GlideRecord Queries

`addQuery()` is used to filter records before running a GlideRecord query.

---

## Basic Query

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('priority', 1);
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

This finds incidents where priority is `1`.

---

## Multiple Conditions

We can add multiple conditions.

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.addQuery('priority', 1);

gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

This finds records where:

```text
active = true
AND
priority = 1
```

---

## Comparison Operators

`addQuery()` can use operators.

```javascript
gr.addQuery('priority', '>', 2);
```

Some useful operators include:

```text
=
!=
>
<
>=
<=
IN
NOT IN
STARTSWITH
CONTAINS
```

Example:

```javascript
gr.addQuery('short_description', 'CONTAINS', 'email');
```

This searches for incidents whose short description contains `"email"`.

---

## OR Conditions

`addOrCondition()` can be used when either condition should match.

```javascript
var gr = new GlideRecord('incident');

var query = gr.addQuery('priority', 1);
query.addOrCondition('priority', 2);

gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

This finds incidents where:

```text
priority = 1
OR
priority = 2
```

---

## Querying by State

For example:

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('state', 2);
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

The exact meaning of numeric field values depends on the ServiceNow table and field configuration.

---

## Checking Whether Records Exist

We can use `hasNext()` to check whether the query has any results.

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('priority', 1);
gr.query();

if (gr.hasNext()) {
    gs.info('Critical incidents found');
}
```

This is useful when we only need to know whether matching records exist.

---

## Counting Records

`getRowCount()` can be used to get the number of returned records.

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.query();

gs.info(gr.getRowCount());
```

---

## Querying With Encoded Queries

ServiceNow also supports encoded queries.

```javascript
var gr = new GlideRecord('incident');

gr.addEncodedQuery('active=true^priority=1');
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

The `^` separates conditions.

This is useful when working with queries copied from ServiceNow filters.

---

## Query Structure

A typical query follows this pattern:

```javascript
var gr = new GlideRecord('table_name');

gr.addQuery('field', 'value');

gr.query();

while (gr.next()) {
    // Work with the record
}
```

Remember:

```text
GlideRecord
    ↓
addQuery()
    ↓
query()
    ↓
next()
```

---

## Important

Do not forget `query()`.

This:

```javascript
gr.addQuery('priority', 1);
```

only defines the query.

You still need:

```javascript
gr.query();
```

to execute it.

---

## Practice

Try writing a script that:

1. Queries the `incident` table
2. Finds active incidents
3. Loops through the results
4. Prints the incident number
5. Prints the short description

Expected structure:

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
    gs.info(gr.getValue('short_description'));
}
```
