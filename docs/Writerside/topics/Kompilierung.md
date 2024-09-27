# Kompilierung

## Automatische Kompilierung

Um unseren SCSS-Code in CSS-Code zu kompilieren, nutzen wir die Konsole:

```Console
sass .\src\styles.scss .\public\styles.css -w
```

Nun wird ein neues File namens <path>styles.css</path> erstellt. Diese Datei können wir jetzt in unserem HTML verlinken.

> Der Schalter `-w` steht für `watch`, d.h. dass das SCSS-File bei jeder Änderung erneut kompiliert wird.

### Beispiel

Dieser SCSS-Code

```CSS
h1 {
  a {
    color: red;
  }
}

```

wird in folgenden CSS-Code kompiliert:

```CSS
h1 a {
  color: red;
}
```

## SCSS mit Vite

Heutzutage nutzt man oftmals Vite. Vite ist ein Frontend-Tool um Web-Applikationen zu bauen, es gibt einen integrierten Server, unterstützt TypeScript, SCSS und mehr ohne zusätzliche Installation etc.

Um ein Vite-Projekt mit TypeScript zu erstellen, geben wir folgendes in die Konsole ein:

```Bash
npm create vite@latest
```

Jetzt können wir unserem Projekt einen Namen geben, ein Framework auswählen und uns zwischen JavaScript und TypeScript entscheiden.

Vite erstellt uns direkt eine saubere Ordnerstruktur. Um nun SCSS hinzuzufügen, müssen wir noch folgendes in die Kommandozeile eingeben:

```Bash
npm add -D sass
```

Danach müssen wir im <path>main.ts</path>-File unser <path>styles.scss</path>-File importieren und das wars:

```Typescript
import './styles.scss'
```

Um den Server zu starten, nutzen wir folgenden Command:

```Bash
npm run dev
```
