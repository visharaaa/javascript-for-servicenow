# Testing ServiceNow Scripts

## Why testing matters

A script can look correct but fail because of incorrect configuration, missing records, unexpected field values, or permissions.

## 1. Test small pieces first

Before combining a Script Include with a Business Rule, verify the individual behaviour.

For example:

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('number', 'INC0010001');
gr.query();

if (gr.next()) {
    gs.info('Found: ' + gr.getValue('number'));
} else {
    gs.info('Incident not found');
}
```

Replace the example incident number with a valid record in your development instance.

## 2. Test different scenarios

For a function that retrieves an incident, consider:

| Scenario | Expected behaviour |
|---|---|
| Existing incident number | Returns the incident |
| Invalid incident number | Returns no record |
| Empty input | Handles the missing value |
| User lacks access | Access is handled appropriately |

## 3. Use logs

```javascript
gs.info('Starting incident check');
gs.info('Incident number: ' + current.getValue('number'));
gs.error('Incident check failed');
```

Use meaningful log messages. Avoid logging sensitive information.

## 4. Test client-side behaviour

For a Client Script, check:

- Does it run for the intended field or event?
- Does it behave correctly when the form loads?
- Does it handle empty values?
- Does the user see the expected message?
- Does it avoid unnecessary server requests?

## 5. Test GlideAjax

Verify that the request reaches the correct Script Include, the method receives the expected parameters, and the callback handles both valid and empty responses.

## 6. A simple testing workflow

1. Test the smallest unit of logic.
2. Check logs and error messages.
3. Test normal input.
4. Test empty and invalid input.
5. Test the full workflow.
6. Repeat after making changes.

**Key idea:** Test edge cases, not just the scenario where everything works.