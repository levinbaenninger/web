# Umleitungen/Weiterleitungen

Wir können Umleitungen bzw. Weiterleitungen in unseren `route`-Files erstellen:

```Typescript
{ path: '', redirectTo: 'detail' },
```

Mit `redirectTo` geben wir an, zu welchem anderen `path` wir weitergeleitet werden sollen, wenn diese Route aufgerufen wird.

## Wildcards

Umleitungen sind besonders dann nützlich, wenn der User bspw. eine Seite aufruft, di es überhaupt nicht gibt. Das können wir mit Wildcards erreichen:

```Typescript
...
{ path: '**', redirectTo: '/', pathMatch: 'full' },
```

Hiermit fangen wir alle Pfade ab, die es nicht gibt.

> **Wichtig:** Dieser `path` muss am Ende sein!

{ style="warning" }
