# ServiceNow Testing Checklist

Use this checklist when testing scripts in a development instance.

## Before testing

- [ ] Confirm the correct table.
- [ ] Confirm the script type and execution timing.
- [ ] Check the Script Include name and accessibility settings.
- [ ] Check field names and expected field values.
- [ ] Confirm you are working in a development or test instance.

## GlideRecord

- [ ] Test with a record that exists.
- [ ] Test with a record that does not exist.
- [ ] Check empty input.
- [ ] Confirm queries have appropriate conditions.
- [ ] Confirm the script handles no results.

## Client Scripts

- [ ] Confirm the correct trigger: onLoad, onChange, onSubmit, or onCellEdit.
- [ ] Test the initial form load.
- [ ] Test changing the relevant field.
- [ ] Check empty and unexpected values.
- [ ] Confirm messages and field behaviour are correct.

## GlideAjax

- [ ] Confirm the Script Include is client callable.
- [ ] Confirm `sysparm_name` matches the server-side method.
- [ ] Confirm parameter names match.
- [ ] Check the response for valid input.
- [ ] Check the response for missing or invalid input.
- [ ] Confirm the callback handles empty responses.

## Business Rules

- [ ] Confirm the correct table and timing.
- [ ] Confirm insert/update conditions.
- [ ] Check whether the rule could run more often than intended.
- [ ] Avoid unintended recursive updates.
- [ ] Verify results using logs and record values.

## After testing

- [ ] Remove temporary debug logs.
- [ ] Review access and data exposure.
- [ ] Check for unnecessary database queries.
- [ ] Document any assumptions.
- [ ] Retest after making changes.

**Tip:** Change one thing at a time. It is easier to identify a problem when you know which change introduced it.