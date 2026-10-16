# ServiceNow Notifications

## What is a notification?

A ServiceNow notification communicates an event or record change to relevant users, commonly through email.

Notifications can be configured around record conditions or registered events.

## Two common approaches

### Record-based notification

A notification can be configured to respond to conditions on a table, such as an incident being assigned or updated.

### Event-based notification

A server-side script queues a registered event, and a notification is configured to respond to that event.

## Queue an event

```javascript
gs.eventQueue(
    'incident.review_required',
    current,
    current.getValue('number'),
    current.getValue('priority')
);
```

The event name must be registered in the Event Registry.

The optional parameters can carry additional context to the event consumer.

## Typical event-driven flow

```text
Incident meets a condition
          ↓
Business Rule queues an event
          ↓
ServiceNow processes the event
          ↓
Configured notification responds
          ↓
Recipient receives the message
```

## Configuration checklist

- Register the event.
- Configure the notification to respond to the intended event.
- Set appropriate recipients.
- Write a clear subject and message.
- Test using a development instance and suitable test recipients.
- Confirm the event and notification logs when troubleshooting.

## Important considerations

- Queue an event only when the intended condition is met.
- Avoid duplicate notifications.
- Verify recipient selection and access to the information being sent.
- Do not assume that queuing an event guarantees successful email delivery.

**Key idea:** Use configuration for notification delivery and scripts to determine when an event should be raised, when appropriate.