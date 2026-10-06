# g_user

`g_user` is a ServiceNow client-side API that provides information about the currently logged-in user.

It can be useful when client-side behaviour depends on the user.

---

## Getting the User ID

```javascript
var userId = g_user.userID;
```

This gives the current user's `sys_id`.

---

## Getting the User Name

```javascript
var userName = g_user.userName;
```

This gives the current user's username.

---

## Checking Roles

One of the useful methods is:

```javascript
if (g_user.hasRole('admin')) {
    // Do something
}
```

This checks whether the current user has the specified role.

---

## Checking for a Role

Example:

```javascript
if (g_user.hasRole('itil')) {
    g_form.setVisible('priority', true);
}
```

This could be used to control client-side behaviour based on the user's role.

---

## Important Security Note

Client-side code should **not** be treated as a security boundary.

For example, hiding a field with:

```javascript
g_form.setVisible('some_field', false);
```

does not necessarily prevent a user from accessing or modifying the underlying data.

Security and authorization should be enforced server-side.

---

## `g_user` vs `gs`

These look similar but are used in different contexts.

### Client-side

```javascript
g_user
g_form
```

### Server-side

```javascript
gs
GlideRecord
```

Think:

```text
Browser
  ↓
g_form / g_user

Server
  ↓
gs / GlideRecord
```

---

## Example

A Client Script could check the user's role:

```javascript
function onLoad() {

    if (g_user.hasRole('admin')) {
        g_form.setVisible('priority', true);
    }

}
```

The JavaScript controls the form based on the current user's information.

---

## Key Idea

`g_user` gives client-side scripts information about the **current user**.

`g_form` gives client-side scripts control over the **current form**.
