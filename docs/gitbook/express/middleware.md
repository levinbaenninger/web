---
icon: arrows-to-circle
---

# Middleware

In Express ist eine Middleware einfach eine Funktion, die Logik hat und Requests verarbeiten kann.

<pre class="language-javascript"><code class="lang-javascript">const loggingMiddleware = (req, _, next) => {
  console.log(`${req.method} - ${req.url}`);
  <a data-footnote-ref href="#user-content-fn-1">next();</a>
};

<strong><a data-footnote-ref href="#user-content-fn-2">app.use(loggingMiddleware);</a>
</strong></code></pre>

Diese Middleware loggt nun alle Requests, die gemacht werden. Wir können die Middleware aber auch nur auf einzelne Request-Handler anwenden.

```javascript
app.get('/api/users', loggingMiddleware, (req, res) => {...});
```

Wir geben also unsere Middleware einfach als Argument in den Request-Handler mit.

***

Middlewares werden vor allem dann gebraucht, wenn wir Logik wiederverwenden wollen für verschiedene Endpoints. So können wir z.B. die Logik wiederverwenden, für das Parsen und Suchen eines Users.

<pre class="language-javascript"><code class="lang-javascript">const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id }
  } = req;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  <a data-footnote-ref href="#user-content-fn-3">req.userIndex = userIndex;</a>
  next();
};

app.put('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { body, userIndex } = req;

  const updatedUser = (mockUsers[userIndex] = {
    id: mockUsers[userIndex].id,
    ...body
  });
  return res.json(updatedUser);
});

...
</code></pre>

[^1]: Die `next()`-Funktion ruft die nächste Middleware auf.

[^2]: Mit `app.use()` können wir Middleware global registrieren, das heisst sie werden bei jedem Request aufgerufen.

[^3]: So können wir Daten an unsere nächste Middleware oder Request-Handler weitergeben.
