---
icon: paper-plane
---

# POST Requests

Mit POST Requests können wir Daten an den Server senden. In Express definieren wir mit der `post()`-Methode auf der Express-Instanz eine POST Request.

```javascript
app.post('/api/users', (req, res) => {
  const { firstName, lastName } = req.body;

  const user = {
    id: mockUsers.at(-1).id + 1,
    firstName,
    lastName
  };
  mockUsers.push(user);

  return res.status(201).json(user);
});
```

Hier holen wir die Daten also aus dem Request-Body heraus, speichern den neuen User in einem Objekt, fügen ihn ein und senden den neu erstellten User mit dem Statuscode 201 zurück.
