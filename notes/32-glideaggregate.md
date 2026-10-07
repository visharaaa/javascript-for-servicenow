# GlideAggregate

`GlideAggregate` is a ServiceNow server-side API used to perform calculations on groups of records.

It can be used for things such as:

* Counting records
* Finding totals
* Finding minimum values
* Finding maximum values
* Calculating averages

---

## Basic Count

For example, we can count incidents:

```javascript
var ga = new GlideAggregate('incident');

ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info(ga.getAggregate('COUNT'));
}
```

The basic flow is:

```text
GlideAggregate
      ↓
addAggregate()
      ↓
query()
      ↓
next()
      ↓
getAggregate()
```

---

## Counting Specific Records

We can combine `GlideAggregate` with a query.

```javascript
var ga = new GlideAggregate('incident');

ga.addQuery('active', true);
ga.addAggregate('COUNT');

ga.query();

if (ga.next()) {
    gs.info(ga.getAggregate('COUNT'));
}
```

This counts active incidents.

---

## Average

We can calculate an average:

```javascript
var ga = new GlideAggregate('incident');

ga.addAggregate('AVG', 'priority');
ga.query();

if (ga.next()) {
    gs.info(ga.getAggregate('AVG', 'priority'));
}
```

The usefulness of a particular aggregate depends on the field type and data.

---

## Minimum

```javascript
ga.addAggregate('MIN', 'priority');
```

---

## Maximum

```javascript
ga.addAggregate('MAX', 'priority');
```

---

## Grouping

`groupBy()` can be used to group records.

For example:

```javascript
var ga = new GlideAggregate('incident');

ga.addAggregate('COUNT');
ga.groupBy('priority');
ga.query();

while (ga.next()) {

    gs.info(
        ga.getValue('priority') +
        ': ' +
        ga.getAggregate('COUNT')
    );

}
```

This can produce a count for each priority.

Conceptually:

```text
Priority 1 → 5 incidents
Priority 2 → 12 incidents
Priority 3 → 30 incidents
```

---

## GlideRecord vs GlideAggregate

### GlideRecord

Used when you want to work with individual records.

```javascript
var gr = new GlideRecord('incident');
```

### GlideAggregate

Used when you want calculations or grouped results.

```javascript
var ga = new GlideAggregate('incident');
```

Think:

```text
GlideRecord
    ↓
Individual records

GlideAggregate
    ↓
Counts / calculations / groups
```

---

## Why Use GlideAggregate?

If you only need a count, using an aggregate query can be more appropriate than retrieving every matching record and counting them manually.

Instead of:

```javascript
var count = 0;

while (gr.next()) {
    count++;
}
```

you can use:

```javascript
ga.addAggregate('COUNT');
```

---

## Key Idea

`GlideAggregate` is useful when the question is:

> "How many?"

> "What is the average?"

> "What is the minimum/maximum?"

> "How many are there in each group?"
