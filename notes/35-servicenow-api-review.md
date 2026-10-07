# ServiceNow API Review

We have now learned several important ServiceNow APIs.

---

## `gs`

Server-side platform utilities.

```javascript
gs.info('Hello');
gs.getUserID();
gs.getUserName();
gs.hasRole('admin');
```

---

## `GlideRecord`

Works with individual database records.

```javascript
var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

---

## `GlideAggregate`

Performs calculations and grouping.

```javascript
var ga = new GlideAggregate('incident');

ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info(ga.getAggregate('COUNT'));
}
```

---

## `GlideDateTime`

Works with dates and times.

```javascript
var gdt = new GlideDateTime();

gdt.addDays(7);
```

---

## `g_form`

Client-side form interaction.

```javascript
g_form.getValue('priority');
g_form.setValue('priority', '2');
g_form.setMandatory('description', true);
```

---

## `g_user`

Client-side current-user information.

```javascript
g_user.userID;
g_user.userName;
g_user.hasRole('admin');
```

---

## `GlideAjax`

Allows client-side code to communicate with server-side code.

```text
Client Script
      ↓
GlideAjax
      ↓
Script Include
      ↓
GlideRecord
```

---

## Quick Comparison

| API              | Side            | Main Purpose         |
| ---------------- | --------------- | -------------------- |
| `gs`             | Server          | Platform utilities   |
| `GlideRecord`    | Server          | Database records     |
| `GlideAggregate` | Server          | Counts/calculations  |
| `GlideDateTime`  | Server          | Date/time            |
| `g_form`         | Client          | Form interaction     |
| `g_user`         | Client          | Current user         |
| `GlideAjax`      | Client → Server | Server communication |

---

## Choosing the Right API

Ask what you are trying to do.

**Need a record?**

```text
GlideRecord
```

**Need a count or calculation?**

```text
GlideAggregate
```

**Need to work with dates?**

```text
GlideDateTime
```

**Need current-user/server utilities?**

```text
gs
```

**Need to change a form?**

```text
g_form
```

**Need information about the client-side user?**

```text
g_user
```

**Need server data from a Client Script?**

```text
GlideAjax
```

---

## Bigger Picture

The ServiceNow scripting ecosystem can now be viewed as:

```text
                    ServiceNow
                        │
          ┌─────────────┴─────────────┐
          │                           │
       Client                       Server
          │                           │
    ┌─────┴─────┐             ┌───────┴────────┐
    │           │             │                │
 g_form      g_user          gs          GlideRecord
                                │                │
                         GlideDateTime    GlideAggregate
                                │
                          Script Includes
                                │
                           Business Rules
```

The goal is not to memorize every API.

The goal is to understand **which tool to use for which problem**.
