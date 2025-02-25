---
icon: check
---

# Validation

Die Validierung von Eingabedaten ist ein essentieller Bestandteil jeder Webanwendung und besonders wichtig für die Sicherheit und Zuverlässigkeit von Express.js APIs. Durch systematische Validierung stellen wir sicher, dass nur gültige und bereinigte Daten unsere Geschäftslogik erreichen. Express.js bietet hierfür verschiedene Möglichkeiten - von eigenen Middleware-Funktionen bis hin zu bewährten Bibliotheken wie `express-validator`. Eine gründliche Validierung schützt nicht nur vor fehlerhaften Daten, sondern auch vor böswilligen Angriffen wie SQL-Injection oder Cross-Site-Scripting (XSS). Die Implementierung von Validierungslogik sollte daher von Anfang an in der Entwicklung berücksichtigt und als fester Bestandteil der API-Architektur etabliert werden.

## Installation

Zuerst müssen wir das Paket `express-validator` installieren.

```bash
npm install express-validator
```

Nun können wir die verschiedenen Methoden wie `query()`, `body()`, etc. importieren und in unserem Code nutzen.

## Validation-Chain

Der `express-validator` bietet uns die Möglichkeit an mit Validation-Chains die Eingaben zu validieren. Mit Validation-Chains können wir Bodies, Queries, Parameter, Cookies und Header validieren.

<pre class="language-javascript"><code class="lang-javascript">app.post(
  '/api/users',
  body('firstName')
    .notEmpty()
    .withMessage("First name mustn't be empty")
    .isLength({ max: 256 })
    .withMessage('First name must be less than 256 characters')
    .isString()
    .withMessage('First name must be a string')
    .trim()
    .escape(),
  body('lastName')
    .notEmpty()
    .withMessage("Last name mustn't be empty")
    .isLength({ max: 256 })
    .withMessage('Last name must be less than 256 characters')
    .isString()
    .withMessage('Last name must be a string')
    .trim()
    .escape(),
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty())
      return res.status(400).json({ errors: result.array() });

    const { firstName, lastName } = <a data-footnote-ref href="#user-content-fn-1">matchedData(req)</a>;
    const user = {
      id: mockUsers.at(-1).id + 1,
      firstName,
      lastName
    };

    mockUsers.push(user);
    return res.status(201).json(user);
  }
);
</code></pre>

Wie wir sehen können ist das jedoch ziemlich umständlich, vor allem, wenn wir grosse Bodies mit vielen Properties haben.

## Schemas

Wir können anstatt Validation-Chains auch Schemas verwenden für unsere Validierung.

```javascript
export const userCreateSchema = {
  firstName: {
    notEmpty: {
      errorMessage: "First name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'First name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'First name must be a string'
    },
    trim: true,
    escape: true
  },
  lastName: {
    notEmpty: {
      errorMessage: "Last name mustn't be empty"
    },
    isLength: {
      options: { max: 256 },
      errorMessage: 'Last name must be less than 256 characters'
    },
    isString: {
      errorMessage: 'Last name must be a string'
    },
    trim: true,
    escape: true
  }
};
```

Nun können wir in unserem Request Handler einfach die Funktion `checkSchema()` ausführen.

```javascript
app.post('/api/users', checkSchema(userCreateSchema), (req, res) => {...});
```



[^1]: Diese Funktion gibt uns die validierten und gesäuberten Daten zurück.
