# Reviewing ServiceNow Scripts

Before considering a script complete, review it for correctness, readability, performance, and security.

## 1. Naming

Prefer descriptive names:

```javascript
var incidentNumber = current.getValue('number');
```

Instead of:

```javascript
var x = current.getValue('number');
```

## 2. Handle empty results

```javascript
var gr = new GlideRecord('incident');

if (gr.get('number', incidentNumber)) {
    gs.info('Incident found');
} else {
    gs.info('Incident not found');
}
```

Do not assume a database query always finds a record.

## 3. Keep responsibilities separate

- Client Scripts handle browser-side behaviour.
- Business Rules handle server-side record logic.
- Script Includes hold reusable functions.
- GlideRecord retrieves and manipulates records.
- GlideAjax allows asynchronous client-to-server requests.

## 4. Avoid unnecessary queries

If the required information is already available on `current`, use it rather than querying the same record again.

## 5. Consider security

Ask yourself:

- Is the input validated?
- Is the user authorized to access the requested information?
- Does the client receive only the necessary data?
- Could the script modify unintended records?

## 6. Make debugging easier

Use logs that explain what is happening:

```javascript
gs.info(
    '[IncidentUtility] Processing ' +
    current.getValue('number')
);
```

Remove excessive diagnostic logging before finalizing the script.

## 7. Final review

A good script should be:

- Understandable
- Focused on one responsibility
- Safe for its intended execution context
- Efficient enough for its workload
- Tested with normal and edge-case inputs

**Key idea:** Working code is only the first step. Maintainable and secure code is the goal.