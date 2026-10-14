# ServiceNow Events

## What is an event?

A ServiceNow event is a named occurrence that can be queued for processing. Events can be used to decouple a record operation from follow-up processing, such as a notification.

## 1. Queue an event

Server-side scripts can use `gs.eventQueue()`.

```javascript
gs.eventQueue(
    'incident.review_required',
    current,
    current.getValue('number'),
    current.getValue('priority')
);
```

The arguments are:

1. Event name
2. Record associated with the event
3. Optional string parameter 1
4. Optional string parameter 2

The event must be registered appropriately for the application.

## 2. Register and use the event

A typical setup involves:

1. Registering the event name in the Event Registry.
2. Calling `gs.eventQueue()` from an appropriate server-side script.
3. Configuring an event-driven notification or other supported handler.
4. Testing that the event is queued and processed as expected.

## 3. Why use events?

Events help separate the action that detects something from the action that responds to it.

For example:

```text
Incident updated
      ↓
Business Rule queues event
      ↓
Event processor handles event
      ↓
Notification or other configured response
```

## Important considerations

- Use a consistent, registered event name.
- Avoid queuing duplicate events unnecessarily.
- Pass only the data the consumer needs.
- Test event registration and downstream configuration.
- Do not assume queuing an event means the notification was successfully delivered.

**Key idea:** Events allow server-side logic to signal that something happened without putting every follow-up action into the original script.