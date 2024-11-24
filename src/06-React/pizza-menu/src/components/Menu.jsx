import pizzas from '../data/pizzas.js';
import Pizza from './Pizza.jsx';

export const Menu = () => {
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
            {pizzas.map((pizza, index) => (
              <Pizza pizza={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we&apos;re still working on our menu</p>
      )}
    </main>
  );
};

export default Menu;
