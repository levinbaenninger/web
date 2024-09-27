# Elemente

<show-structure depth="2" />

```HTML

<tagname>Content...</tagname>
```

Die Anatomie von unserem Element ist:

- **Opening Tag**: Das Opening Tag besteht aus dem Namen des Elements eingehüllt in öffnenden und schliessenden spitzen Klammern.
- **Content**: Hier finden wir den Inhalt unseres Elementes wieder.
- **Closing Tag**: Das Closing Tag ist dasselbe, wie das Opening Tag, jedoch wird ein `/` vor den Elementnamen eingefügt.

### Nesting Elemente

Elemente können in andere Elemente platziert werden. Das wird als _Nesting_ bezeichnet.

```HTML
<p>My cat is <strong>very</strong> grumpy.</p>
```

Wichtig ist, dass wir das Element _in_ dem anderen Element **als erstes schliessen**.

> Das wäre **falsch**:
>
> ```HTML
> <p>My cat is <strong>very grumpy.</p></strong>
> ```

{ style="warning" }

### Leere Elemente

Nicht alle Elemente folgen dem Schema oben. Es gibt auch sogenannte **self-closing Tags**. Diese haben weder einen Inhalt noch
ein Closing Tag.

```HTML
<img
        src="https://shorturl.at/ehrvO"
        alt="Firefox icon"/>
```

> Man muss das `/` am Ende des self-closing Tags nicht unbedingt schreiben.

{ style="note" }
