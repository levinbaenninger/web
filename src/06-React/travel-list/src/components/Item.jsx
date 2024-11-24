import PropTypes from 'prop-types';

export const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => onToggleItem(e)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

export default Item;
