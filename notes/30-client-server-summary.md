# Client and Server Scripting Review

At this point, we have learned both sides of ServiceNow scripting.

---

## Client Side

Client-side code runs in the user's browser.

Important tools:

```text
Client Scripts
g_form
g_user
UI Policies
UI Actions
GlideAjax
```

Typical purpose:

```text
Form behaviour
User interaction
Field changes
Client-side validation
```

---

## Server Side

Server-side code runs on the ServiceNow platform.

Important tools:

```text
Business Rules
Script Includes
GlideRecord
gs
```

Typical purpose:

```text
Database operations
Business logic
Server-side validation
Reusable logic
Automation
```

---

## Example Architecture

A realistic application might look like:

```text
User
 ↓
ServiceNow Form
 ↓
Client Script
 ↓
GlideAjax
 ↓
Script Include
 ↓
GlideRecord
 ↓
ServiceNow Database
```

---

## Where `g_form` Fits

```javascript
g_form.getValue('priority');
```

Client-side.

It interacts with the current form.

---

## Where `GlideRecord` Fits

```javascript
var gr = new GlideRecord('incident');
```

Server-side.

It interacts with ServiceNow records.

---

## Where `gs` Fits

```javascript
gs.info('Hello');
```

Server-side.

It provides server-side utilities and logging.

---

## Where `g_user` Fits

```javascript
g_user.hasRole('admin');
```

Client-side.

It provides information about the current user.

---

## Where GlideAjax Fits

```text
Client
  ↓
GlideAjax
  ↓
Server
```

It allows client-side code to communicate with server-side code.

---

## Quick Reference

| Tool           | Side            | Main Purpose                         |
| -------------- | --------------- | ------------------------------------ |
| `g_form`       | Client          | Interact with form                   |
| `g_user`       | Client          | Current user information             |
| Client Script  | Client          | Form behaviour                       |
| UI Policy      | Client/Form     | Field behaviour                      |
| UI Action      | Client/Server   | User-triggered action                |
| GlideAjax      | Client → Server | Request server-side information      |
| `gs`           | Server          | Server utilities                     |
| GlideRecord    | Server          | Database records                     |
| Script Include | Server          | Reusable logic                       |
| Business Rule  | Server          | Logic triggered by record operations |
| Data Policy    | Server/Data     | Data requirements                    |

---

## The Most Important Question

When writing ServiceNow code, first ask:

> **Where is this code supposed to run?**

If it needs the browser/form:

```text
Client
```

If it needs database/server access:

```text
Server
```

If the client needs server information:

```text
GlideAjax
```

This distinction will prevent many common ServiceNow scripting mistakes.
