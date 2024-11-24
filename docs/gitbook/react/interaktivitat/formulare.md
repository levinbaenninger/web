---
icon: pen-field
---

# Formulare

In React gibt es mehrere Möglichkeiten Formulare zu erstellen, Controlled, Uncontrolled, `useForm`-Hook, etc.

## Controlled Forms

Mit **Controlled Forms** speichern wir jedes Input-Field in einer State-Variable und setzen der Wert jedes Inputs nach jedem Re-Render der Komponente. Das gibt uns mehr Möglichkeiten, um Validierungen oder Manipulationen vorzunehmen (bspw. um Telefonnummern korrekt zu formatieren).

<pre class="language-jsx"><code class="lang-jsx">const Form = ({ onAddItem }) => {
  <a data-footnote-ref href="#user-content-fn-1">const [description, setDescription] = useState('');</a>
  <a data-footnote-ref href="#user-content-fn-2">const [quantity, setQuantity] = useState(1);</a>

  const handleSubmit = (e) => {
    e.preventDefault();

    <a data-footnote-ref href="#user-content-fn-3">if (!description.trim()) return;</a>

    onAddItem({ description, quantity, packed: false, id: Date.now() });

    <a data-footnote-ref href="#user-content-fn-4">setDescription('');</a>
    <a data-footnote-ref href="#user-content-fn-5">setQuantity(1);</a>
  };

  return (
    &#x3C;form className="add-form" onSubmit={<a data-footnote-ref href="#user-content-fn-6">handleSubmit</a>}>
      &#x3C;h3>What do you need for your 😍 trip?&#x3C;/h3>

      &#x3C;select
        value={<a data-footnote-ref href="#user-content-fn-7">quantity</a>}
        <a data-footnote-ref href="#user-content-fn-8">onChange={(e) => setQuantity(Number(e.target.value))}</a>
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          &#x3C;option value={num} key={num}>
            {num}
          &#x3C;/option>
        ))}
      &#x3C;/select>

      &#x3C;input
        type="text"
        placeholder="Item..."
        value={<a data-footnote-ref href="#user-content-fn-9">description</a>}
        <a data-footnote-ref href="#user-content-fn-10">onChange={(e) => setDescription(e.target.value)}</a>
      />

      &#x3C;button type="submit">Add&#x3C;/button>
    &#x3C;/form>
  );
};

export default Form;
</code></pre>

### Objekte

Anstatt für jedes Input-Field eine eigene State-Variable zu erstellen, können wir ein einzelnes Objekt nutzen.

<pre class="language-tsx"><code class="lang-tsx">const Form = ({ onAddItem }) => {
  <a data-footnote-ref href="#user-content-fn-11">const [item, setItem] = useState</a>({
    description: '',
    quantity: 1,
    packed: false,
    id: Date.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.description.trim()) return;

    onAddItem(item);

    setItem({ description: '', quantity: 1, packed: false, id: Date.now() });
  };

  <a data-footnote-ref href="#user-content-fn-12">const handleChange = (e)</a> => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  return (
    &#x3C;form className="add-form" onSubmit={handleSubmit}>
      &#x3C;h3>What do you need for your 😍 trip?&#x3C;/h3>

      &#x3C;select
        <a data-footnote-ref href="#user-content-fn-13">name="quantity</a>"
        value={item.quantity}
        <a data-footnote-ref href="#user-content-fn-14">onChange={(e) => handleChange(e)}</a>
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          &#x3C;option value={num} key={num}>
            {num}
          &#x3C;/option>
        ))}
      &#x3C;/select>

      &#x3C;input
        type="text"
        placeholder="Item..."
        <a data-footnote-ref href="#user-content-fn-15">name="description"</a>
        value={item.description}
        <a data-footnote-ref href="#user-content-fn-16">onChange={(e) => handleChange(e)}</a>
      />

      &#x3C;button type="submit">Add&#x3C;/button>
    &#x3C;/form>
  );
};

export default Form;
</code></pre>

### Validierung

{% hint style="danger" %}
TODO
{% endhint %}

## Uncontrolled Forms

{% hint style="danger" %}
TODO
{% endhint %}

## useForm-Hook

{% hint style="danger" %}
TODO
{% endhint %}

[^1]: State-Variable für das erste Input-Field

[^2]: State-Variable für das zweite Input-Field

[^3]: Validierungen (Können auch in eine externe Funktion extrahiert werden)

[^4]: State zurücksetzen, nachdem Formular übermittelt wurde

[^5]: State zurücksetzen, nachdem Formular übermittelt wurde

[^6]: Funktion, die beim Absenden des Formulars aufgerufen werden soll

[^7]: Der Wert kommt von der State-Variable

[^8]: State bei jeder Änderung aktualisieren

[^9]: Der Wert kommt von der State-Variable

[^10]: State bei jeder Änderung aktualisieren

[^11]: Objekt als State-Variable

[^12]: Generische `handleChange`-Funktion

[^13]: `name`-Attibut zwingend, um Field zu identifizieren (<mark style="background-color:red;">muss gleich heissen, wie Property im Objekt</mark>)

[^14]: `onChange`-Funktion aufrufen

[^15]: `name`-Attibut zwingend, um Field zu identifizieren (<mark style="background-color:red;">muss gleich heissen, wie Property im Objekt</mark>)

[^16]: `onChange`-Funktion aufrufen
