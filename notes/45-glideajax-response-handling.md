# GlideAjax Response Handling

## Why response handling matters

A GlideAjax request may return useful data, an empty result, or an unexpected response. The client script should handle these cases rather than assuming every request succeeds.

## 1. Return a predictable response

A Script Include can return a JSON string containing selected incident information.

```javascript
var IncidentSummaryAjax = Class.create();

IncidentSummaryAjax.prototype = Object.extendsObject(
    AbstractAjaxProcessor,
    {
        getSummary: function() {
            var number = this.getParameter(
                'sysparm_incident_number'
            );

            if (!number) {
                return JSON.stringify({
                    success: false,
                    message: 'Incident number is required'
                });
            }

            var gr = new GlideRecord('incident');

            if (!gr.get('number', number)) {
                return JSON.stringify({
                    success: false,
                    message: 'Incident not found'
                });
            }

            return JSON.stringify({
                success: true,
                number: gr.getValue('number'),
                priority: gr.getValue('priority'),
                state: gr.getValue('state')
            });
        },

        type: 'IncidentSummaryAjax'
    }
);
```

## 2. Parse the response

The client receives a string, so parse it with `JSON.parse()`.

```javascript
ga.getXMLAnswer(function(answer) {
    if (!answer) {
        g_form.addInfoMessage(
            'No response was received.'
        );
        return;
    }

    try {
        var result = JSON.parse(answer);

        if (!result.success) {
            g_form.addInfoMessage(result.message);
            return;
        }

        g_form.addInfoMessage(
            'Incident: ' + result.number +
            ', Priority: ' + result.priority
        );
    } catch (error) {
        g_form.addErrorMessage(
            'The incident response could not be processed.'
        );
    }
});
```

## 3. Important considerations

- Return only the fields the client needs.
- Validate parameters on the server.
- Do not assume a client-provided incident number grants access to that incident.
- Use appropriate authorization and access controls.
- Keep returned messages useful but avoid exposing sensitive details.

**Key idea:** A predictable response makes client-side code easier to maintain and debug.