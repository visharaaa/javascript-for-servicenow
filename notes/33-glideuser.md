# GlideUser

`GlideUser` provides information about the current user in server-side scripts.

It is different from the client-side:

```javascript
g_user
```

On the server, ServiceNow provides user information through APIs associated with the current user.

---

## Current User ID

A common way to get the current user's ID is:

```javascript
var userId = gs.getUserID();

gs.info(userId);
```

---

## Current User Name

```javascript
var userName = gs.getUserName();

gs.info(userName);
```

---

## Checking Roles

On the server side:

```javascript
if (gs.hasRole('admin')) {
    gs.info('User has admin role');
}
```

---

## Getting the Current User Object

ServiceNow can provide the current user object:

```javascript
var user = gs.getUser();
```

This gives access to information and methods related to the current user.

---

## Client vs Server

This distinction is important.

### Client

```javascript
g_user
```

### Server

```javascript
gs.getUser()
gs.getUserID()
gs.getUserName()
gs.hasRole()
```

---

## Example

A Business Rule could log information about the user performing an operation:

```javascript
gs.info(
    'User: ' +
    gs.getUserName() +
    ' (' +
    gs.getUserID() +
    ')'
);
```

---

## Security

User and role information can be useful when implementing business logic.

However, authorization should not rely only on client-side checks.

For important security decisions, server-side controls such as:

```text
ACLs
Roles
Server-side validation
```

should be considered.

---

## Key Idea

Remember:

```text
Client
   ↓
g_user

Server
   ↓
gs.getUser()
gs.getUserID()
gs.getUserName()
```
