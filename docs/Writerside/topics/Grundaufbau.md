# Grundaufbau

Jedes Angular-Projekt hat denselben Grundaufbau. Diesen schauen wir uns hier genauer an.

## Konfigurationen

### Angular

Im File <path>angular.json</path> finden wir jegliche Konfigurationen zu unserer Angular-Applikation selben, darunter die verschiedenen Environments, Standardstyles, etc.

Wichtige Konfigurationen:

- `prefix` - Definiert das Präfix, welche über das ganze Projekt hinweg den automatisch erstellten Komponenten vorgesetzt wird. Sollte zu Beginn geändert werden
- `styles` - Hier können globale Stylesheets hinzugefügt werden. Beispielsweise können wir hier auch Bootstrap oder Tailwind CSS hinzufügen
- `configuration` - Hier können wir unsere verschiedenen Umgebungen konfigurieren, z.B. Development und Production.
- ...

### NPM

Im File <path>package.json</path> finden wir alle Informationen zu Dependencies, also installierten Paketen.

### TypeScript

In den Files <path>tsconfig.json</path>, <path>tsconfig.app.json</path> und <path>tsconfig.spec.json</path> finden wir die Konfigurationen für TypeScript.

### Editor

Im File <path>.editorconfig</path> können wir verschiedene Konfigurationen zu unserem Texteditor vornehmen, bspw. die Tabgrösse, das Characterset, die Art der Hochkommas, usw.

### Git

Im File <path>.gitignore</path> finden wir alle Verzeichnisse und Dateien, die von Git ignoriert werden sollen. Das sind vor allem Verzeichnisse, die von unserer IDE oder Node erstellt werden.

## Source

Im Ordner <path>src</path> finden wir unsere eigentliche App wieder.

### index.html

Im <path>index.html</path> finden wir die Startseite von unserer Applikation. Wie wir sehen, ist hier nicht viel, denn der `<body>` hat nur ein Tag, das `<app-root>`-Tag.

### styles.scss

Im File <path>styles.scss</path> finden wir die globalen Styles unserer Webseite.

### main.ts

Im <path>main.ts</path> File ist der Einstiegspunkt unserer Applikation definiert.

### app

Das <path>app</path> Verzeichnis ist unsere erste Komponente. Darin finden wir weitere Dateien:

- <path>app.component.ts</path> - Die Logik unseres Components, in welchem wir bestimmen, welcher `selector`, bei uns `app-root`, welche HTML-Datei und welche Styles zu diesem Component gehören
- <path>app.component.html</path> - Der Aufbau unseres Components
- <path>app.component.scss</path> - Die Styles unseres Components
- <path>app.component.spec.ts</path> - Wird für Unit-Tests verwendet
- Weitere Dateien, wie <path>app.module.ts</path>, <path>app-routing.module.ts</path>, etc.
