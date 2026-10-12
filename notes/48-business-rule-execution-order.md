# Business Rule Execution Order

## What is execution order?

Business Rules can run at different points in a record operation. Choosing the right timing helps prevent unexpected behaviour.

## Common timings

| Timing | Purpose |
|---|---|
| Before | Change or validate values before the database operation |
| After | Perform follow-up logic after the database operation |
| Async | Perform eligible work asynchronously after the operation |
| Display | Prepare server-side information for a form, commonly through `g_scratchpad` |

## Before Business Rule

Use a Before rule when you need to validate or modify the record being saved.

```javascript
(function executeRule(current, previous) {

    if (current.getValue('priority') == '1' &&
        !current.getValue('description')) {

        gs.addErrorMessage(
            'A description is required for critical incidents.'
        );

        current.setAbortAction(true);
    }

})(current, previous);
```

This example prevents the database action when a critical incident has no description.

## After Business Rule

Use an After rule for follow-up work that should happen after the record operation, such as certain notifications or related-record processing.

## Async Business Rule

Use Async rules for work that can happen after the main transaction without requiring the user to wait for the result.

Do not use Async when the record must be validated before saving.

## Display Business Rule

Display rules can prepare server-side information for client-side use through `g_scratchpad`.

## Important considerations

- Use the timing that matches the requirement.
- Avoid updating the same record unnecessarily from its own Business Rule.
- Avoid duplicating logic across multiple rules.
- Test insert and update scenarios separately.
- Business Rule order and interactions can affect behaviour.

**Key idea:** Before rules are useful for validation; After and Async rules serve different follow-up needs.