# Automated Testing Basics in ServiceNow

## What is automated testing?

Automated testing runs checks against expected behaviour so that problems can be detected consistently after changes.

ServiceNow provides tools such as the Automated Test Framework (ATF) for testing supported application workflows.

## Manual testing vs automated testing

| Manual testing | Automated testing |
|---|---|
| A person performs the steps | A configured test executes the steps |
| Useful during exploration | Useful for repeatable checks |
| Results depend on the tester following the process | Results can be compared consistently |
| Often easy to start | Requires setup and maintenance |

## Example test plan

Suppose a Business Rule requires a description for critical incidents.

| Test case | Expected result |
|---|---|
| Priority is critical, description is empty | Save is prevented |
| Priority is critical, description is present | Save is allowed |
| Priority is not critical, description is empty | This validation does not block saving |
| An unrelated field changes | No unintended side effect |

## What makes a good test?

- It has a clear starting condition.
- It performs a defined action.
- It checks an expected result.
- It covers important edge cases.
- It can be repeated reliably.

## Where ATF fits

ATF can automate supported ServiceNow user-interface and server-side test steps. Exact capabilities depend on the step type, release, configuration, and permissions available in your instance.

Start by learning to create and run a simple test in a non-production instance.

## Before automating

1. Confirm the manual workflow works.
2. Write down the expected results.
3. Identify required test data.
4. Make the test repeatable.
5. Run it after relevant changes.

**Key idea:** Testing is not just checking whether a script runs; it is checking whether the script produces the correct behaviour.