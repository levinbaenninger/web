# Workflow

Da man meistens nicht alle Projektdateien in einem einzigen Ordner haben möchte, entscheidet man sich oft für eine erweiterte Ordnerstruktur:

- **`public`** - Dateien, welche schlussendlich auf den Webserver geladen werden
- **`src`** - Dateien, welche wir für die Entwicklung der Applikation brauchen

Jetzt gibt es jedoch ein Problem, da das kompilierte JavaScript-File im selben Verzeichnis sein muss, wie das TypeScript-File. Um das zu umgehen, erstellt man ein <path>tsconfig.json</path>-File:

````Typescript
tsc --init
````

## tsconfig.json

Der obige Befehl erstellt uns ein <path>.json</path>-Konfigurationsfile, in welchem wir verschiedene lokale Konfigurationen zu TypeScript vornehmen können.

Um nun unser anfängliches Problem zu lösen, kommentieren wir `"rootDir"` aus und setzen dort den Pfad unseres TypeScript-Files. Anschliessend kommentieren wir noch `"outDir"` aus und setzen dort den Pfad unseres <path>public</path> Verzeichnisses.

Am Schluss müssen wir noch etwas ergänzen, sodass nur TypeScript-Dateien aus dem `src`-Ordner kompiliert werden:



<code-block lang="JSON" validate="false">
{
  &quot;compilerOptions&quot;: {
    ...,
    &quot;rootDir&quot;: &quot;./src&quot;,
    &quot;outDir&quot;: &quot;./public&quot;,
    ...
  },
  &quot;include&quot;: [&quot;src&quot;]
}
</code-block>

Jetzt können wir ganz einfach mit `tsc -w` wieder unseren Kompiliervorgang starten. 

<seealso>
    <category ref="weitere">
        <a href="https://www.typescriptlang.org/tsconfig">Referenz zu <path>tsconfig.json</path></a>
    </category>
</seealso>