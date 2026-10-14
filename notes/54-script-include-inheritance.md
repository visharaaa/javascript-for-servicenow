# Script Include Inheritance

## What is inheritance?

Inheritance allows one object or class-like structure to reuse behaviour from another. ServiceNow Script Includes commonly use JavaScript prototype inheritance patterns.

## 1. A base Script Include

```javascript
var IncidentBaseUtils = Class.create();

IncidentBaseUtils.prototype = {
    initialize: function() {},

    logIncident: function(number) {
        gs.info('Processing incident: ' + number);
    },

    type: 'IncidentBaseUtils'
};
```

## 2. Extend the base Script Include

```javascript
var IncidentExtendedUtils = Class.create();

IncidentExtendedUtils.prototype = Object.extendsObject(
    IncidentBaseUtils,
    {
        logCriticalIncident: function(number) {
            gs.info('Critical incident: ' + number);
        },

        type: 'IncidentExtendedUtils'
    }
);
```

The child Script Include inherits methods from the parent and can define additional methods.

## 3. Use the child Script Include

```javascript
var utils = new IncidentExtendedUtils();

utils.logIncident('INC0010001');
utils.logCriticalIncident('INC0010001');
```

Both methods can be called on the child instance.

## When is inheritance useful?

- When related utilities share common behaviour
- When a specialized utility needs extra methods
- When shared behaviour should be maintained in one place

## When should you avoid it?

Don't introduce inheritance just to avoid a few lines of code. A simple Script Include with a few focused methods may be easier to maintain.

**Key idea:** Inheritance supports reuse, but simple composition is often enough for small utilities.