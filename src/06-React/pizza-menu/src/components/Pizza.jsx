import PropTypes from 'prop-types';

export const Pizza = ({ pizza }) => {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'Sold out' : `$${pizza.price}`}</span>
      </div>
    </li>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photoName: PropTypes.string.isRequired,
    soldOut: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Pizza;
