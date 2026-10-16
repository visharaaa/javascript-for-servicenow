# Scheduled Jobs in ServiceNow

## What is a Scheduled Job?

A Scheduled Script Execution runs server-side code according to a configured schedule.

It is useful when work needs to happen periodically rather than only when a user updates a record.

Examples include:
- Finding incidents that have remained open for too long
- Generating periodic summaries
- Checking records that need follow-up
- Performing routine maintenance

## Example: Find old active incidents

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.addQuery('sys_updated_on', '<=', gs.daysAgoStart(7));
gr.query();

while (gr.next()) {
    gs.info(
        'Review old incident: ' +
        gr.getValue('number')
    );
}
```

This example finds active incidents whose last update was at or before the start of the day seven days ago, then logs their numbers.

It does not modify the records.

## How to configure it

1. Open Scheduled Script Executions in your development instance.
2. Create a scheduled script execution.
3. Choose an appropriate name and run frequency.
4. Add the script to the script field.
5. Test it with a suitable dataset before enabling a recurring schedule.

Exact menu names may vary by ServiceNow release and permissions.

## Important considerations

- Use selective queries to avoid processing unnecessary records.
- Consider time zones and date boundaries.
- Avoid repeatedly processing the same records without a reason.
- Do not automatically close incidents just because they are old.
- Test the query before scheduling it.

**Key idea:** Scheduled Jobs are suitable for recurring server-side work that does not depend on a user submitting a form.