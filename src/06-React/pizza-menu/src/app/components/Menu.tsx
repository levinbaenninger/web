import { pizzas } from '../data/pizzas';
import Pizza from './Pizza';

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're still working on our menu</p>
      )}
    </main>
  );
};

export default Menu;
