# Flow Designer Basics

## What is Flow Designer?

Flow Designer is a ServiceNow tool for building automated workflows using triggers, actions, and logic steps. It helps automate business processes with less custom code.

## 1. Main components

| Component | Purpose |
|---|---|
| Trigger | Determines when the flow starts |
| Action | Performs a task |
| Flow logic | Controls the path the flow follows |
| Data pills | Pass data between steps |
| Subflow | Reusable workflow that can be called by other flows |

## 2. Example: Incident follow-up

Imagine we want to respond when a critical incident is created.

```text
Incident created
       ↓
Check priority
       ↓
Is priority critical?
       ├── Yes → Perform follow-up action
       └── No  → End flow
```

Possible follow-up actions include notifying a team or creating a related task.

## 3. Triggers

A flow might start when:
- A record is created or updated.
- A scheduled time is reached.
- Another supported trigger occurs.

Choose a trigger based on the business requirement and configure its conditions carefully.

## 4. Actions

Actions perform tasks such as updating records, sending notifications, or invoking reusable automation.

Prefer existing ServiceNow actions when they meet the requirement. Custom actions are useful when you need reusable functionality that isn't covered by existing actions.

## 5. Data pills

Data pills let you use information produced by earlier steps.

For example, after a flow starts from an Incident record, later steps can use its number, priority, caller, or assignment group.

## Best practices

- Give each flow one clear purpose.
- Use meaningful names.
- Avoid unnecessary steps.
- Test trigger conditions and alternate paths.
- Reuse subflows where appropriate.

**Key idea:** Flow Designer organizes automation into understandable steps rather than requiring every workflow to be written in JavaScript.