---
icon: spell-check
---

# PATCH Requests

Mit PATCH Requests können wir ebenfalls Daten an den Server senden, jedoch werden bei einem PATCH Request Daten überschrieben, heisst aktualisiert. In Express definieren wir mit der `patch()`-Methode auf der Express-Instanz eine PATCH Request.

```javascript
app.patch('/api/users/:id', (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  const updatedUser = (mockUsers[userIndex] = {
    ...mockUsers[userIndex],
    ...body
  });

  return res.json(updatedUser);
});
```

{% hint style="info" %}
Beim PATCH kann partiell aktualisiert werden.
{% endhint %}
