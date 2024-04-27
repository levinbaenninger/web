# Zitate

<show-structure depth="2" />

## Blockquote

Wenn man etwas von woanders Zitiert, sollte man dies irgendwie kennzeichnen. In HTML kann man das mit `<blockquote>` machen. Darüber hinaus kann
man mit dem Attribut `cite` noch die Quelle angeben. Der Browser wird das Zitat einrücken.

```HTML

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
</blockquote>
```

## Inline Zitate

Man kann auch Zitate machen, die nicht auf eine neue Zeile gehen, also **inline** sind. Das geht mit `<q>`. Normalerweise fügt der Browser
Anführungszeichen um das Zitat ein.

```HTML
  The quote element — <code>&lt;q&gt;</code> — is
<q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
</q>
```