# State ableiten

Derived State
: State, der aus einer bereits bestehenden State-Variable oder aus Props berechnet wird.

So kann zum Beispiel folgender Code, diese Probleme bergen:

- Drei State-Variablen, obwohl `numItems` und `totalPrice` abhängig von `cart` sind
- Müssen synchron bleiben
- 3 State-Updates hat 3 Re-Renders zur Folge

````Javascript
const [cart, setCart] = useState([
  { name: "JaveScript Course", price: 15.99 }
  { name: "Node.js Bootcamp", price: 14.99 }
]);
const [numItems, setNumItems] = useState(2);
const [totalPrice, setTotalPrice] = useState(30.98);
````

Wenn wir den State jedoch ableiten kann das wie folgt aussehen:

````Javascript
const [cart, setCart] = useState([
  { name: "JaveScript Course", price: 15.99 }
  { name: "Node.js Bootcamp", price: 14.99 }
]);
const numItems = cart.length;
const totalPrice =
    cart.reduce((acc, cur) => acc + cur.price, 0)
````

Hier ist die State-Variable `cart` die **Single Source of Truth** für die zusammenhängenden Daten. Das funktioniert, da das Re-Rendern der 
Komponente die abgeleiteten State-Variablen erneut berechnet.