# GlideDateTime

`GlideDateTime` is a ServiceNow server-side API used to work with dates and times.

It is useful when scripts need to:

* Get the current date/time
* Compare dates
* Add or subtract time
* Work with date fields
* Calculate time differences

---

## Creating a GlideDateTime

```javascript
var gdt = new GlideDateTime();
```

This creates a `GlideDateTime` object representing the current date and time.

---

## Getting the Current Date and Time

```javascript
var gdt = new GlideDateTime();

gs.info(gdt);
```

You can also use:

```javascript
gs.info(gdt.getValue());
```

---

## Getting the Date

```javascript
var gdt = new GlideDateTime();

gs.info(gdt.getDate());
```

---

## Adding Time

We can add time to a `GlideDateTime`.

For example:

```javascript
var gdt = new GlideDateTime();

gdt.addDays(5);

gs.info(gdt);
```

This adds five days.

Other useful methods include:

```text
addDays()
addMonths()
addYears()
addHours()
addMinutes()
addSeconds()
```

---

## Subtracting Time

Negative values can be used to move backwards.

```javascript
var gdt = new GlideDateTime();

gdt.addDays(-7);

gs.info(gdt);
```

This represents one week earlier.

---

## Comparing Dates

`GlideDateTime` objects can be compared.

For example:

```javascript
var date1 = new GlideDateTime();
var date2 = new GlideDateTime();

date2.addDays(2);

if (date1.before(date2)) {
    gs.info('date1 is earlier');
}
```

Useful methods include:

```text
before()
after()
equals()
```

---

## Difference Between Dates

`GlideDateTime` can be used when calculating the difference between dates.

For example, ServiceNow provides methods for getting the difference between date/time values.

A common approach is:

```javascript
var start = new GlideDateTime();
var end = new GlideDateTime();

end.addHours(5);

var difference = GlideDateTime.subtract(end, start);

gs.info(difference);
```

The exact return type and method behaviour should be checked when using more advanced date calculations.

---

## Working With Record Fields

Suppose an Incident has a date/time field.

We can retrieve its value:

```javascript
var gr = new GlideRecord('incident');

if (gr.get('INC0010001')) {

    var opened = new GlideDateTime(
        gr.getValue('opened_at')
    );

    gs.info(opened);
}
```

This combines:

```text
GlideRecord
     ↓
Date field
     ↓
GlideDateTime
```

---

## Why GlideDateTime Matters

Dates are common in ServiceNow applications.

Examples:

```text
Incident opened
Incident resolved
Task due date
Change start time
Change end time
SLA deadlines
```

Whenever your script needs to work with these values, `GlideDateTime` is useful.

---

## Key Idea

Think of:

```javascript
var gdt = new GlideDateTime();
```

as creating a ServiceNow object specifically designed to work with dates and times.
