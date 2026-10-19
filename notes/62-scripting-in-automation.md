# Scripting in ServiceNow Automation

## When is scripting needed?

Flow Designer provides many built-in actions. Sometimes, however, an automation needs custom calculations, validation, or reusable logic.

In those cases, JavaScript can extend an action.

## 1. Script steps

Workflow Studio supports Script steps within custom actions. These steps can receive inputs and produce outputs for later workflow steps.

The exact configuration depends on the action and execution environment.

## 2. Example: Calculate an incident flag

Imagine a custom action receives an incident priority as an input.

In the Script step, define an input named `priority` and an output named `isCritical`.

```javascript
var priority = inputs.priority;

outputs.isCritical = (priority == '1');
```

The output can then be used in later flow logic.

This is a small example of using JavaScript to prepare data for an automation decision.

## 3. Calling a Script Include

Suppose your application has an appropriate server-side Script Include named `IncidentUtils` with a method called `isCritical`.

A Script step could call it like this, assuming the Script Include is accessible from that application scope:

```javascript
var utils = new IncidentUtils();

outputs.isCritical = utils.isCritical(inputs.incident);
```

This example assumes `inputs.incident` is a compatible incident record object. Configure and map the action's inputs and outputs correctly in your instance.

## 4. Good practices

- Use built-in actions when they already solve the problem.
- Keep inline scripts small.
- Use reusable actions or Script Includes for repeated logic.
- Validate inputs before processing them.
- Return outputs in the expected data type.
- Avoid exposing sensitive information.
- Test missing inputs and unexpected values.

## 5. Important distinction

The Script step in Workflow Studio is not the same as a Client Script. Its available APIs depend on its configured execution environment.

**Key idea:** Use JavaScript to fill gaps in automation, not to recreate functionality that ServiceNow already provides.