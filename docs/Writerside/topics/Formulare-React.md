# Formulare

Formulare handhaben wir etwas anders, als in normalem HTML und JavaScript. Nämlich setzen wir den Wert gleich dem State; das sieht so aus:

````Typescript
const Form = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!description.trim()) return;

    const item = { description, quantity, packed: false, id: Date.now() };

    setDescription('');
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
````

Wir haben also zwei State-Variablen, die bei jeder Änderung die State-Variable aktualisieren. Wenn wir das Formular einreichen, werden 
Validierungen durchgeführt (kann auch in einer externen Funktion geschehen), ein neues Item mit den Daten erstellt und der State wird zurückgesetzt. 

> Diese Technik nennt man **Controlled Inputs**