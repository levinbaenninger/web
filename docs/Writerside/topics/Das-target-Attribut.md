# Attribut - target

Standardmässig wird die verlinkte Seite im aktuellen Browserfenster geöffnet. Um das zu ändern, gibt es das `target`-Attribut.

| Wert      | Beschreibung                                              |
|-----------|-----------------------------------------------------------|
| `_self`   | Standard - Öffnet das Dokument im selben Fenster oder Tab |
| `_blank`  | Öffnet das Dokument in einem neuen Tab                    |
| `_parent` | Öffnet das Dokument im übergeordneten Frame               |
| `_top`    | Öffnet das Dokument im Vollbild und zuoberst              |

## Beispiel

```HTML
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
```