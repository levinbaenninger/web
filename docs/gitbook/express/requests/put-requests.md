---
icon: pen-to-square
---

# PUT Requests

Mit PUT Requests können wir ebenfalls Daten an den Server senden, jedoch werden bei einem PUT Request Daten überschrieben, heisst aktualisiert. In Express definieren wir mit der `put()`-Methode auf der Express-Instanz eine PUT Request.

```javascript
app.put('/api/users/:id', (req, res) => {
  const {
    body: { firstName, lastName },
    params: { id }
  } = req;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const user = mockUsers.find((user) => user.id === parsedId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.firstName = firstName;
  user.lastName = lastName;

  return res.json(user);
});
```

{% hint style="danger" %}
Bei einem PUT-Request müssen wir immer das gesamte Objekt mitgeben! Ansonsten sind die nicht angegebenen Felder `undefined` bzw. `NULL`.
{% endhint %}

