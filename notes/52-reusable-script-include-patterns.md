# Reusable Script Include Patterns

## Why reuse logic?

If multiple Business Rules need the same incident lookup or validation, put the shared logic in a Script Include rather than copying it into each rule.

## Example: IncidentUtils

```javascript
var IncidentUtils = Class.create();

IncidentUtils.prototype = {
    initialize: function() {},

    getIncidentByNumber: function(number) {
        if (!number) {
            return null;
        }

        var gr = new GlideRecord('incident');

        if (gr.get('number', number)) {
            return gr;
        }

        return null;
    },

    isCritical: function(incident) {
        return incident.getValue('priority') == '1';
    },

    getPriority: function(incident) {
        return incident.getValue('priority');
    },

    type: 'IncidentUtils'
};
```

## Using the utility

```javascript
var utils = new IncidentUtils();
var incident = utils.getIncidentByNumber('INC0010001');

if (incident) {
    gs.info('Priority: ' + utils.getPriority(incident));
}
```

## Benefits

- Less duplicated code
- Easier maintenance
- Clearer responsibilities
- Simpler testing of individual methods

## Design tips

- Give each method one clear responsibility.
- Validate inputs.
- Decide how missing records should be represented.
- Avoid unnecessary database queries.
- Keep authorization requirements in mind.
- Do not make a Script Include client-callable unless the client needs to invoke it.

## Important detail

Returning a GlideRecord is useful for server-side callers, but it is not appropriate as a direct GlideAjax response. For GlideAjax, return a simple value or a serialized response containing only the information the client needs.

**Key idea:** Reuse business logic, but keep each interface appropriate for its execution context.