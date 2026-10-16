# Script Actions in ServiceNow

## What is a Script Action?

A Script Action is a server-side script associated with a ServiceNow event. It can execute when the matching event is processed.

This lets you separate event detection from event handling.

## How it works

```text
Business Rule
      ↓
gs.eventQueue()
      ↓
Registered event
      ↓
Script Action
      ↓
Server-side response
```

## Example

Suppose the event `incident.review_required` is queued with an incident record.

A Script Action configured for that event could contain:

```javascript
(function executeAction(current, event) {

    gs.info(
        'Review event processed for incident: ' +
        current.getValue('number')
    );

})(current, event);
```

The exact variables available depend on the Script Action context. In the standard event-driven Script Action context, `current` represents the associated record and `event` represents the event being processed.

## Configuration steps

1. Register the event in the Event Registry.
2. Create a Script Action for that event.
3. Add the server-side script.
4. Queue the event from a suitable server-side script.
5. Test that the action runs when the event is processed.

## Script Action vs Business Rule

| Component | Main responsibility |
|---|---|
| Business Rule | Reacts to record operations and conditions |
| Event | Represents a queued occurrence |
| Script Action | Handles a configured event |
| Notification | Communicates information to recipients |

## When should you use one?

Use a Script Action when you need event-driven server-side processing. If the work is simple and directly related to the record operation, a separate event and Script Action may add unnecessary complexity.

**Key idea:** Events allow the code that detects a condition to remain separate from the code that responds to it.