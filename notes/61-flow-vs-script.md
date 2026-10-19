# Flow Designer vs Scripts

## Why does the choice matter?

ServiceNow offers both configuration-based automation and JavaScript scripting. The best option depends on the requirement.

## 1. Flow Designer

Use Flow Designer when a process involves multiple understandable steps, such as:

- Sending notifications
- Updating records
- Managing approvals
- Coordinating follow-up tasks
- Connecting different automation actions

## 2. Business Rules

Use Business Rules when logic must run at a particular point in a record operation, especially when it needs to execute immediately before or after a database write.

Example:

```javascript
(function executeRule(current, previous) {
    if (current.getValue('priority') == '1') {
        gs.info('Critical incident detected');
    }
})(current, previous);
```

## 3. Script Includes

Use Script Includes to store reusable server-side logic.

```javascript
var utils = new IncidentUtils();
var incident = utils.getIncidentByNumber('INC0010001');
```

A Script Include can be called by other server-side scripts and, when configured appropriately, by custom automation actions.

## 4. Comparison

| Requirement | Possible choice |
|---|---|
| Multi-step business workflow | Flow Designer |
| Immediate record validation | Before Business Rule |
| Reusable server-side function | Script Include |
| Browser form behaviour | Client Script |
| Client-to-server request | GlideAjax |
| Scheduled processing | Scheduled Script Execution or scheduled flow |

These are general guidelines, not absolute rules.

## 5. Questions to ask before coding

1. Can configuration or an existing action solve this?
2. Does the requirement depend on a specific record-operation timing?
3. Will the logic be reused?
4. Does the browser need to respond immediately?
5. Is custom JavaScript genuinely necessary?

**Key idea:** Use the simplest supported approach that meets the requirement. A workflow doesn't automatically need a custom script.