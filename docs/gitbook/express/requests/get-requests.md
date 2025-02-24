---
icon: inbox-in
---

# GET Requests

Mit GET Requests bekommen wir Daten vom Server. In Express definieren wir mit der `get()`-Methode auf der Express-Instanz eine GET Request.

```javascript
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' }
  ];

  res.json(users);
});
```

Die `get()`-Methode nimmt zwei Argumente an:

* **Pfad**: Der Pfad auf welchem die Callback-Funktion aufgerufen wird.
* **Callback-Funktion**: Die Funktion, die ausgeführt wird, wenn diese URL aufgerufen wird.

Innerhalb der Callback-Funktion haben wir Zugriff auf zwei Parameter:

* **`req`**: Dieses Objekt beinhaltet alle Informationen über die eingegangene Request, bspw. Headers, Route Parameter, Query Parameter, etc.
* **`res`**: Dieses Objekt lässt uns die Response der Request manipulieren, bspw. wie hier, indem wir JSON mit der `json`-Methode zurücksenden. Jedoch kann auch HTML, Text, oder ähnliches zurückgesendet werden.

## Status setzen

Im `res`-Objekt haben wir auch Zugriff auf die `status()`-Methode mit welcher wir den Status setzen können.&#x20;

```javascript
app.get('/', (req, res) => {
  res.status(201).json({
    message: 'Hello World!'
  });
});
```

{% hint style="info" %}
Standardmässig ist der Statuscode `200`.
{% endhint %}

## Route Parameters

Mit Route Parameters können wir dynamische Parameter in der Route abfangen und so bspw. nur einen bestimmten User anzeigen.

```javascript
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const user = mockUsers.find((user) => user.id === parsedId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
});
```

In unserer Route geben wir mit einem `:` den Namen des Route Parameters an. Diesen können wir in aus unserem `req` Objekt herausnehmen.&#x20;

{% hint style="danger" %}
Route Parameter sind standardmässig Strings, wir müssen sie also vorher zuerst umwandeln.
{% endhint %}

Danach gibt es drei Möglichkeiten:

* **`400`**: Die ID war invalide, bspw. ein String, der nicht in eine Zahl umgewandelt werden konnte.
* **`404`**: Der User konnte nicht in der Datenbank gefunden werden.
* **`200`**: Der User mit der angegebenen ID konnte in der Datenbank gefunden werden.

## Query Parameters

Mit Query Parameters können Konsumenten unserer API unsere Requests bspw. filtern oder sortieren.

<pre class="language-javascript"><code class="lang-javascript">app.get('/api/users', (req, res) => {
  const { filter, value } = req.query;

  if (!filter &#x26;&#x26; !value) return res.json(mockUsers);
  if (!filter || !value)
    return res.status(400).json({ error: 'Invalid query' });

  if (<a data-footnote-ref href="#user-content-fn-1">mockUsers.some((user) => filter in user)</a>) {
    const filteredUsers = mockUsers.filter((user) =>
      user[filter].toLowerCase().includes(value.toLowerCase())
    );
    return res.json(filteredUsers);
  } else {
    return res.status(400).json({ error: 'Invalid filter' });
  }
});
</code></pre>

In diesem Beispiel filtern wir die User nach einem Key (`filter`) und nach Wert (`value`).&#x20;

[^1]: Überprüfen ob das Property in mindestens einem Objekt innerhalb des Arrays ist
