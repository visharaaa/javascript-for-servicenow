# Business Rule Practice

A Business Rule runs on the **server** when a database record meets its configured conditions.

## Example Goal

We want to detect when an incident is critical.

The Business Rule will use our `IncidentUtils` Script Include.

## Business Rule Script

```javascript
(function executeRule(current, previous) {

    var utils = new IncidentUtils();

    if (utils.isCritical(current)) {
        gs.info(
            'Critical incident detected: ' +
            current.getValue('number')
        );
    }

})(current, previous);
```

## How It Works

### Create the utility

```javascript
var utils = new IncidentUtils();
```

This gives the Business Rule access to the functions in our Script Include.

### Check the incident

```javascript
utils.isCritical(current)
```

`current` represents the incident record being processed by the Business Rule.

### Log the result

```javascript
gs.info(...)
```

The message is written to the ServiceNow system log.

## Suggested Business Rule Configuration

For practice:

**Table**

```text
Incident [incident]
```

**When**

```text
after
```

**Update**

```text
true
```

You can also experiment with different combinations such as Insert or Before.

## Important Concept

The Business Rule itself does not need to contain all of the logic.

Instead:

```text
Business Rule
      │
      ▼
IncidentUtils
      │
      ▼
GlideRecord / Incident data
```

This keeps the Business Rule smaller and makes the logic reusable.

## Business Rule vs Script Include

| Component          | Purpose                             |
| ------------------ | ----------------------------------- |
| Business Rule      | Decides when server-side logic runs |
| Script Include     | Stores reusable server-side logic   |
| GlideRecord        | Works with database records         |
| GlideSystem (`gs`) | Provides system utilities           |

## Key Idea

**Business Rules control when something happens. Script Includes help define what the reusable logic does.**
