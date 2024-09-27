# Attribute

<show-structure depth="2" />

Elemente können auch Attribute haben. Attribute sehen so aus:

```HTML
<p class="editor-note">My cat is very grumpy</p>
```

Attribute enthalten zusätzliche Informationen über das Element, welches nicht im Inhalt erscheinen wird. In diesem Beispiel wird das `class`
Attribut benutzt.

Ein Attribut sollte:

- Ein Leerzeichen zwischen ihm und dem Elementnamen haben.
- Den **Attributnamen**, gefolgt von einem `=`-Zeichen.
- Ein **Attributwert** zwischen `"..."`.

## Boolean Attribute

Manchmal sieht man Attribute ohne jeglichen Wert, das ist ein sogenanntes **Boolean Attribut**.

```HTML
<input type="text" disabled/>
```

## Globale Attribute

Es gibt sogenannte **globale Attribute**, diese sind auf fast jedes Element anwendbar.

### style

Das `style`-Attribut wird verwendet, um Styles, wie Farbe, Schrift, Grösse, etc. auf Elemente anzuwenden.

```HTML
<p style="color:red;">This is a red paragraph.</p>
```

### title

Das `title`-Attribut definiert Zusatzinformationen zu einem Element. Der Wert wird als Tooltip angezeigt, wenn man mit der Maus über das Element geht.

```HTML
<p title="I'm a tooltip">This is a paragraph.</p>
```
