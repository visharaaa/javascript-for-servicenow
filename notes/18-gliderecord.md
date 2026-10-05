# GlideRecord

`GlideRecord` is a ServiceNow API used to interact with records stored in ServiceNow tables.

It allows us to:

* Read records
* Search for records
* Create records
* Update records
* Delete records

Unlike things such as `let`, `const`, `if`, and `for`, `GlideRecord` is **ServiceNow-specific**.

---

## Creating a GlideRecord

```javascript
var gr = new GlideRecord('incident');
```

Here:

* `GlideRecord` is a ServiceNow API
* `'incident'` is the table we want to work with
* `gr` is the variable containing the GlideRecord object

We can then use `gr` to interact with the Incident table.

---

## Querying Records

The basic pattern is:

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('priority', 1);
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

### What happens?

### 1. Create the GlideRecord

```javascript
var gr = new GlideRecord('incident');
```

We specify the table.

### 2. Add a condition

```javascript
gr.addQuery('priority', 1);
```

This means:

> Find incidents where priority is 1.

### 3. Run the query

```javascript
gr.query();
```

The query is sent to the ServiceNow database.

### 4. Move through the results

```javascript
while (gr.next()) {
```

`next()` moves to the next matching record.

### 5. Read a field

```javascript
gr.getValue('number');
```

This gets the value of the `number` field.

---

## `get()`

If we already know the `sys_id` of a record, we can retrieve it directly.

```javascript
var gr = new GlideRecord('incident');

if (gr.get('sys_id_here')) {
    gs.info(gr.getValue('number'));
}
```

We can also use another unique field in some situations:

```javascript
var gr = new GlideRecord('incident');

if (gr.get('number', 'INC0010001')) {
    gs.info(gr.getValue('short_description'));
}
```

---

## `getValue()`

`getValue()` returns the stored value of a field.

```javascript
var number = gr.getValue('number');
var priority = gr.getValue('priority');

gs.info(number);
gs.info(priority);
```

For example, a priority field might return:

```text
1
```

rather than the display text:

```text
Critical
```

---

## `getDisplayValue()`

Sometimes we want the value that a user sees in the ServiceNow interface.

```javascript
gs.info(gr.getDisplayValue('priority'));
```

For a reference field:

```javascript
gs.info(gr.getDisplayValue('caller_id'));
```

This is useful when a field stores a value such as a `sys_id` but displays a person's name in the interface.

---

## Updating a Record

We can change a record using `setValue()`.

```javascript
var gr = new GlideRecord('incident');

if (gr.get('INC0010001')) {
    gr.setValue('priority', 2);
    gr.update();
}
```

### Important

`setValue()` changes the value in memory.

```javascript
gr.setValue('priority', 2);
```

`update()` saves the change to ServiceNow.

```javascript
gr.update();
```

---

## Creating a Record

We can create a new record using `initialize()` and `insert()`.

```javascript
var gr = new GlideRecord('incident');

gr.initialize();

gr.setValue('short_description', 'Test incident');
gr.setValue('priority', 3);

var sysId = gr.insert();

gs.info(sysId);
```

The basic flow is:

```text
new GlideRecord()
       ↓
initialize()
       ↓
setValue()
       ↓
insert()
```

---

## Deleting a Record

A record can be deleted using:

```javascript
gr.deleteRecord();
```

Example:

```javascript
var gr = new GlideRecord('incident');

if (gr.get('INC0010001')) {
    gr.deleteRecord();
}
```

Be careful with `deleteRecord()` because it permanently removes the record.

---

## Basic GlideRecord Flow

The most important pattern to remember is:

```text
Create GlideRecord
       ↓
Choose table
       ↓
Add query
       ↓
Run query
       ↓
Loop through results
       ↓
Read / modify records
```

Example:

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

---

## JavaScript vs ServiceNow

These are standard JavaScript:

```javascript
var gr;
while (...) {
}
```

These are ServiceNow-specific:

```javascript
GlideRecord
addQuery()
query()
next()
getValue()
setValue()
update()
insert()
deleteRecord()
```

Understanding this distinction is important when learning ServiceNow scripting.

---

## Where GlideRecord Is Used

GlideRecord is commonly used in:

* Business Rules
* Script Includes
* Scheduled Scripts
* Background Scripts
* Fix Scripts
* Other server-side scripts

It is mainly a **server-side API**.

---

## Key Things to Remember

```javascript
new GlideRecord('incident')
```

Create a GlideRecord for a table.

```javascript
addQuery()
```

Add search conditions.

```javascript
query()
```

Run the query.

```javascript
next()
```

Move through returned records.

```javascript
getValue()
```

Get a stored field value.

```javascript
getDisplayValue()
```

Get the user-facing value.

```javascript
setValue()
```

Change a field value.

```javascript
update()
```

Save changes.

```javascript
insert()
```

Create a new record.

```javascript
deleteRecord()
```

Delete a record.
