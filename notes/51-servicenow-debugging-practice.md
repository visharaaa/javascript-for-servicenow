# ServiceNow Debugging Practice

## 1. Start with the execution context

Before debugging, identify where the script runs.

| Script type | Where to investigate |
|---|---|
| Client Script | Browser console and form behaviour |
| Business Rule | System logs and record behaviour |
| Script Include | Logs or the calling script |
| GlideAjax | Client callback and server-side method |
| Scheduled Script | Execution logs and scheduled-job configuration |

## 2. Add meaningful logs

```javascript
gs.info('[IncidentUtils] Starting incident check');

var incidentNumber = current.getValue('number');

gs.info('[IncidentUtils] Incident: ' + incidentNumber);
```

Use a consistent prefix to make messages easier to find.

Avoid logging sensitive information.

## 3. Debug GlideRecord

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('number', 'INC0010001');
gr.query();

if (gr.next()) {
    gs.info('Found incident: ' + gr.getValue('number'));
} else {
    gs.info('No matching incident found');
}
```

Check the table name, field names, query values, and whether a matching record exists.

## 4. Debug GlideAjax

Check these items in order:

1. Is the Client Script running?
2. Does the Script Include name match?
3. Is it configured as Client callable?
4. Does `sysparm_name` match the method?
5. Are parameter names correct?
6. Does the server-side method return a value?
7. Does the callback handle the returned string?

## 5. Debug unexpected execution

For a Business Rule, check its timing, conditions, insert/update settings, and order. Also check whether another rule or flow is changing the record.

## 6. A repeatable process

1. Reproduce the problem.
2. Identify the script execution context.
3. Check configuration.
4. Inspect inputs.
5. Add targeted logging.
6. Fix one issue at a time.
7. Retest normal and edge cases.
8. Remove temporary diagnostic messages.

**Key idea:** Debug systematically instead of changing multiple things at once.