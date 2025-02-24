---
icon: node-js
---

# Was ist Express?

Mit Express.js können wir Web APIs bauen. Dabei ist Express das beliebteste Server-Side JavaScript Framework im Node.js Ökosystem. Express.js ist unteranderem aus den folgenden Gründen so beliebt:

* Einfach zu erlernen
* Schnell aufgesetzt und einsatzbereit
* Unopinionated
* Keine bis nur wenig Konfiguration notwendig

## Installation

```bash
npm install express
```

Das ist alles! Mehr brauchen wir nicht. In unserem JavaScript-File können wir nun anfangen Express zu nutzen.

### Nodemon

Für die Entwicklung ist nodemon sehr praktisch, da wir so den Server nicht jedes mal neustarten müssen.

```bash
npm install -D nodemon
```

In unserem `package.json` können wir nun das `start`-Script durch nodemon ersetzen.

```json
"scripts": {
  ...,
  "start:dev": "nodemon ./src/index.js",
  "start": "node ./src/index.js",
  ...,
},
```

### Modules

Node.js nutzt standardmässig CommonJS für Imports und Exports. Das können wir ändern indem wir in unserem `package.json` den `type` auf `module` wechseln.

```json
{
  ...,
  "type": "module",
  ...
}
```

## Express-Server starten

```javascript
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
