# Hyperlinks

<show-structure depth="2" />

Hyperlinks sind sehr wichtig, denn sie sind, was das Web ausmacht. Sie erlauben uns Dokumente mit anderen Dokumenten zu verlinken.

Hyperlinks können mit dem `<a>`-Element und dem `href`-Attribut erstellt werden.

```HTML
<a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>
```

## Block-Level links

Fast jedes Element kann in ein Link umgewandelt werden, so auch eine Überschrift:

```HTML
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
```

## Image links

Auch Bilder können in Links umgewandelt werden:

```HTML
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>
```

## Verschiedene Formate

| Format                       | Link                     |
| ---------------------------- | ------------------------ |
| Webseiten                    | http(s)://www.domain.com |
| Mail                         | mailto:name@gmail.com    |
| Phone                        | tel:+41787001640         |
| File                         | filename.html            |
| File (anderes Verzeichnis)   | /folder/folder/file.html |
| Aktuelle Seite               | #                        |
| Ort auf aktueller Seite (id) | #id                      |
