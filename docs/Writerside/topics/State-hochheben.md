# State heben

Was machen wir, wenn eine Sibling-Komponente ebenfalls Zugriff auf den State der anderen Komponente braucht? In React gibt es nämlich 
nur One-Way Data-Flow, weshalb wir die Daten nicht über das gemeinsame Parent weitergeben können. 

Die Lösung lautet **den State heben**. Wir heben den State, indem wir den State in das gemeinsame Parent "heben", d.h. den **State dort 
deklarieren** und dann über **Props** an unsere Child-Components weitergeben.

````Typescript
const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((items) => [item, ...items]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};
````

Die Komponente `<App />` ist jetzt also verantwortlich für den State des Formulars und der Liste. 

Nun, um den State zu verwalten, hier den Array an Items, müssen wir die Methoden ebenfalls in der Parent-Komponente definieren und dann an unser Formular weitergeben, welches dort diese Methode aufruft:

````Typescript
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  if (!description.trim()) return;

  onAddItem({ description, quantity, packed: false, id: Date.now() });

  setDescription('');
  setQuantity(1);
};
````

> Das nennt man **Child-to-parent Communication (inverse data flow)**, da das Child den State des Parents aktualisiert, das heisst Daten fliessen 
> hoch