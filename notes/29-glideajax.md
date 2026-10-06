# GlideAjax

`GlideAjax` is used for communication between **client-side JavaScript and server-side code**.

It is especially useful when a Client Script needs information that can only be safely or efficiently obtained on the server.

---

## The Problem

Client-side code can use:

```javascript
g_form
g_user
```

But it does not have direct access to server-side APIs such as:

```javascript
GlideRecord
```

For example, you should not simply try to run:

```javascript
var gr = new GlideRecord('incident');
```

inside a normal Client Script.

Instead, we can use:

```text
Client Script
      ↓
GlideAjax
      ↓
Script Include
      ↓
GlideRecord
      ↓
Database
```

---

## Script Include

First, create a Script Include that can be called from the client.

Example:

```javascript
var IncidentUtils = Class.create();

IncidentUtils.prototype = Object.extendsObject(
    AbstractAjaxProcessor, {

    getIncidentCount: function() {

        var gr = new GlideRecord('incident');
        gr.addQuery('active', true);
        gr.query();

        return gr.getRowCount().toString();
    },

    type: 'IncidentUtils'
});
```

The important part is:

```javascript
Object.extendsObject(
    AbstractAjaxProcessor, {
```

This allows the Script Include to work with GlideAjax.

---

## Client Script

The Client Script can then call the Script Include.

```javascript
var ga = new GlideAjax('IncidentUtils');

ga.addParam('sysparm_name', 'getIncidentCount');

ga.getXMLAnswer(function(answer) {

    console.log('Active incidents: ' + answer);

});
```

---

## `GlideAjax` Flow

The flow is:

```text
Client Script
      ↓
new GlideAjax()
      ↓
Script Include
      ↓
Server-side method
      ↓
GlideRecord
      ↓
Return result
      ↓
Client Script receives result
```

---

## `addParam()`

Parameters can be sent from the client.

```javascript
ga.addParam('sysparm_name', 'getIncidentCount');
```

`sysparm_name` tells ServiceNow which Script Include method should be executed.

We can also send our own parameters.

For example:

```javascript
ga.addParam('sysparm_incident_number', 'INC0010001');
```

---

## Reading Parameters

The Script Include can retrieve the parameter:

```javascript
var number = this.getParameter('sysparm_incident_number');
```

Example:

```javascript
getIncidentDescription: function() {

    var number = this.getParameter('sysparm_incident_number');

    var gr = new GlideRecord('incident');

    if (gr.get('number', number)) {
        return gr.getValue('short_description');
    }

    return '';
}
```

---

## Calling the Method

Client-side:

```javascript
var ga = new GlideAjax('IncidentUtils');

ga.addParam('sysparm_name', 'getIncidentDescription');
ga.addParam('sysparm_incident_number', 'INC0010001');

ga.getXMLAnswer(function(answer) {

    console.log(answer);

});
```

---

## Why Use GlideAjax?

Use GlideAjax when:

* Client-side code needs server-side information
* You need to query ServiceNow records
* You want to avoid exposing unnecessary server logic to the client
* You need reusable server-side logic

---

## Important Performance Idea

Avoid making unnecessary server calls.

For example, don't use GlideAjax repeatedly when the information is already available on the form.

First ask:

> Can `g_form` or another client-side API already provide what I need?

If yes, a server call may not be necessary.

---

## Security

GlideAjax does not mean that the client can freely access everything on the server.

Server-side logic should still consider:

* User permissions
* Roles
* Access Controls
* Data exposure

Never assume that hiding something in the client makes it secure.

---

## Key Idea

GlideAjax is the bridge between:

```text
Client
   ↕
Server
```

It allows client-side JavaScript to request information from server-side ServiceNow code.
