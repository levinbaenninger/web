---
icon: delete-left
---

# DELETE Requests

Mit DELETE Requests können wir Daten vom Server löschen. In Express definieren wir mit der `delete()`-Methode auf der Express-Instanz eine DELETE Request.

```javascript
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  mockUsers.splice(userIndex, 1);
  return res.sendStatus(204);
});
```

