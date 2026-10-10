# Practical GlideAjax

## Goal

Use a Client Script to request incident information from the server without reloading the form.

## How the flow works

```text
Client Script
     ↓
GlideAjax
     ↓
Client-callable Script Include
     ↓
GlideRecord
     ↓
Response returned to client
```

## 1. Create a client-callable Script Include

Create a Script Include named `IncidentInfoAjax`.

Configure it to be **Client callable**. Use the following script:

```javascript
var IncidentInfoAjax = Class.create();

IncidentInfoAjax.prototype = Object.extendsObject(
    AbstractAjaxProcessor,
    {
        getIncidentPriority: function() {
            var number = this.getParameter(
                'sysparm_incident_number'
            );

            if (!number) {
                return '';
            }

            var gr = new GlideRecord('incident');

            if (gr.get('number', number)) {
                return gr.getValue('priority') || '';
            }

            return '';
        },

        type: 'IncidentInfoAjax'
    }
);
```

### Important parts

- `AbstractAjaxProcessor` allows the Script Include to receive GlideAjax requests.
- `getParameter()` retrieves a parameter sent by the client.
- `GlideRecord` retrieves the incident.
- The method returns a string to the client.

## 2. Call it from a Client Script

The following is an example of calling the Script Include from a form:

```javascript
function onLoad() {
    var number = g_form.getValue('number');

    if (!number) {
        return;
    }

    var ga = new GlideAjax('IncidentInfoAjax');

    ga.addParam('sysparm_name', 'getIncidentPriority');
    ga.addParam('sysparm_incident_number', number);

    ga.getXMLAnswer(function(answer) {
        if (answer === '1') {
            g_form.showFieldMsg(
                'priority',
                'This incident has critical priority.',
                'warning'
            );
        }
    });
}
```

## 3. Understand the request

`new GlideAjax('IncidentInfoAjax')` identifies the Script Include.

`sysparm_name` specifies which server-side method to execute.

`getXMLAnswer()` handles the returned answer through a callback. The response is asynchronous, so the code after the request may run before the response arrives.

## Configuration checklist

- The Script Include name matches the name used in GlideAjax.
- Client callable is enabled.
- The method name matches `sysparm_name`.
- The client sends the correct parameter.
- The Script Include returns a string.
- Access controls and authorization are considered before exposing data.

**Key idea:** GlideAjax connects client-side scripts to server-side functionality. Use it when the browser needs information or processing that belongs on the server.