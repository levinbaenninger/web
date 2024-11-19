---
icon: computer-mouse
---

# Event Handling

Mit React können wir unserem JSX **Event-Handler** hinzufügen. Event-Handler sind unsere eigenen Funktionen, die als Antwort auf Interaktionen wie Klicken, Hovering, Fokussieren von Formulareingaben usw. ausgelöst werden.

## Event-Handler hinzufügen

Um einen Event-Handler hinzuzufügen, definieren wir zunächst eine Funktion und übergeben diese dann als Prop an das entsprechende JSX-Tag.

<pre class="language-tsx"><code class="lang-tsx">const Button = () => {
  const handleClick = () => alert('You clicked me!');

  return (
    &#x3C;button <a data-footnote-ref href="#user-content-fn-1">onClick={handleClick}</a>>
      Click me
    &#x3C;/button>
  );
}

export default Button;
</code></pre>

Es ist natürlich auch möglich einen Event-Handler inline zu definieren.

```tsx
<button onClick={() => alert('You clicked me!')}>
```

{% hint style="info" %}
Es gibt noch viele weitere Events:&#x20;

* `onMouseEnter`
* `onChange`
* `onCopy`
* ...
{% endhint %}

## Event-Handlers als Props

Oft möchte man, dass die übergeordnete Komponente den Event-Handler einer untergeordneten Komponente festlegt. Zum Beispiel Buttons: Je nachdem, wo man eine `Button`-Komponente verwendet, möchte man vielleicht eine andere Funktion ausführen - vielleicht spielt eine einen Film ab und eine andere lädt ein Bild hoch.\


Wir übergeben dazu ein Prop, die die Komponente von der übergeordneten Komponente erhält, als Event-Handler, etwa so:

{% tabs %}
{% tab title="Button" %}
{% code title="Button.tsx" %}
```tsx
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```
{% endcode %}
{% endtab %}

{% tab title="Upload Button" %}
{% code title="UploadButton.tsx" %}
```tsx
const UploadButton = () => {
  return (
    <Button onClick={() => alert('Uploading')}>
      Play "{movieName}"
    </Button>
  );
}

export default UploadButton;
```
{% endcode %}
{% endtab %}

{% tab title="Play Button" %}
{% code title="PlayButton.tsx" %}
```tsx
const PlayButton = ({ movieName }) => {
  const handlePlayClick = () => alert(`Playing ${moviename}!`);

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

export default PlayButton;
```
{% endcode %}
{% endtab %}

{% tab title="Toolbar" %}
{% code title="Toolbar.tsx" %}
```tsx
const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

export default Toolbar;
```
{% endcode %}
{% endtab %}
{% endtabs %}

Hier stellt die `Toolbar`-Komponente einen `PlayButton` und einen `UploadButton` dar:

* `PlayButton` übergibt `handlePlayClick` als `onClick`-Prop an den `Button` darin.
* `UploadButton` übergibt `() => alert('Uploading!')` als `onClick`-Prop an den `Button` im Inneren.

Schliesslich akzeptiert die`Button`-Komponente eine Eigenschaft namens `onClick`. Sie übergibt dieses Prop direkt an den eingebauten Browser `<button>` mit `onClick={onClick}`. Dadurch wird React angewiesen, die übergebene Funktion bei einem Klick aufzurufen.

Wenn man ein [Designsystem](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969) verwendet, ist es üblich, dass Komponenten wie Schaltflächen zwar Styling enthalten, aber kein Verhalten festlegen. Stattdessen werden Komponenten wie `PlayButton` und `UploadButton` Event-Handler weitergeben.

[^1]: Hier wird die Methode `handleClick` ausgeführt, wenn ein Klick stattfindet
