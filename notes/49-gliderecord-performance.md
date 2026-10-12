# GlideRecord Performance

GlideRecord lets server-side scripts query and manipulate table records. Query design matters because inefficient queries can affect instance performance.

## 1. Use specific conditions

Avoid retrieving an entire table when you only need a subset.

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.addQuery('priority', '1');
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

This targets active incidents with priority 1.

## 2. Retrieve only what you need

If you need a count rather than every record, consider `GlideAggregate`.

```javascript
var ga = new GlideAggregate('incident');
ga.addQuery('active', true);
ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info('Active incidents: ' +
        ga.getAggregate('COUNT'));
}
```

## 3. Avoid queries inside loops

Less efficient pattern:

```javascript
while (incidents.next()) {
    var caller = new GlideRecord('sys_user');
    caller.get(incidents.getValue('caller_id'));
}
```

This can create a separate database lookup for each incident.

Before using this pattern, consider whether the caller information is already available, whether a reference display value is sufficient, or whether another query strategy is more appropriate.

## 4. Be careful with large result sets

- Use selective query conditions.
- Avoid unnecessary record updates.
- Consider whether every matching record must be processed.
- Use limits only when they match the actual requirement.
- Never assume a query is safe simply because it works on a small development dataset.

## 5. Understand query results

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('number', 'INC0010001');
gr.query();

if (gr.next()) {
    gs.info(gr.getValue('short_description'));
}
```

`query()` executes the query, while `next()` moves to a matching record.

**Key idea:** Query for the smallest useful dataset and avoid repeated work.