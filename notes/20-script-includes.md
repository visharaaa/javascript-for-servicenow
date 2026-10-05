# Script Includes

A **Script Include** is a reusable piece of server-side JavaScript in ServiceNow.

Instead of writing the same logic in multiple places, we can put it inside a Script Include and call it when needed.

---

## Basic Script Include

A simple Script Include looks like this:

```javascript
var MyScriptInclude = Class.create();

MyScriptInclude.prototype = {
    initialize: function() {
    },

    sayHello: function() {
        return 'Hello from ServiceNow';
    },

    type: 'MyScriptInclude'
};
```

There are a few important parts:

```javascript
var MyScriptInclude = Class.create();
```

Creates the Script Include.

```javascript
MyScriptInclude.prototype = {
```

Defines the methods that can be used.

```javascript
sayHello: function() {
    return 'Hello from ServiceNow';
}
```

Defines a reusable function.

```javascript
type: 'MyScriptInclude'
```

Identifies the class.

---

## Calling a Script Include

If the Script Include is available to the current script, we can create an instance:

```javascript
var helper = new MyScriptInclude();

var message = helper.sayHello();

gs.info(message);
```

The output would be:

```text
Hello from ServiceNow
```

---

## Script Includes and Functions

A Script Include is useful because we can group related functions together.

For example:

```javascript
var IncidentHelper = Class.create();

IncidentHelper.prototype = {
    initialize: function() {
    },

    getMessage: function() {
        return 'Incident helper';
    },

    type: 'IncidentHelper'
};
```

We can then call:

```javascript
var helper = new IncidentHelper();

gs.info(helper.getMessage());
```

---

## Script Include With Parameters

Methods can accept parameters just like normal JavaScript functions.

```javascript
var GreetingHelper = Class.create();

GreetingHelper.prototype = {
    initialize: function() {
    },

    greet: function(name) {
        return 'Hello ' + name;
    },

    type: 'GreetingHelper'
};
```

Calling it:

```javascript
var helper = new GreetingHelper();

gs.info(helper.greet('Vishara'));
```

---

## Script Include With GlideRecord

This is where Script Includes become particularly useful.

```javascript
var IncidentHelper = Class.create();

IncidentHelper.prototype = {
    initialize: function() {
    },

    getIncident: function(number) {

        var gr = new GlideRecord('incident');

        if (gr.get('number', number)) {
            return gr.getValue('short_description');
        }

        return null;
    },

    type: 'IncidentHelper'
};
```

The Script Include contains reusable logic for finding an incident.

We can then call:

```javascript
var helper = new IncidentHelper();

var description = helper.getIncident('INC0010001');

gs.info(description);
```

---

## Why Use Script Includes?

Without a Script Include, we might repeat the same code:

```javascript
var gr = new GlideRecord('incident');

if (gr.get('number', 'INC0010001')) {
    // do something
}
`
```
