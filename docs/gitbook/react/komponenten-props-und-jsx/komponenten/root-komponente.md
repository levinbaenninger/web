---
icon: list-tree
---

# Root-Komponente

Die Root-Komponente rendert unsere komplette Seite. Diese sieht wie folgt aus:

```tsx
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Hier wird also das Element mit der ID `root` aus unserem DOM genommen und daraus eine React-Root erstellt. Auf dieser `root` können wir jetzt unsere Standardkomponente `<App />` rendern.

{% hint style="warning" %}
Diese Datei heisst je nach Bundler anders:

* **Vite**: `main.jsx` bzw. `main.tsx`
* **Webpack**: `index.jsx` bzw. `index.tsx`
{% endhint %}

## `<StrictMode>`

Wir können unsere `<App />`-Component noch in eine `<StrictMode />`-Component legen. Strict-Mode rendert unsere Komponenten zweimal, um Fehler zu finden. Ausserdem überprüft es, ob wir veraltete Teile der React-API nutzen.
