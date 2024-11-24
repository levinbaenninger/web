import PropTypes from 'prop-types';
import { useState } from 'react';
import Item from './Item.jsx';

export const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  switch (sortBy) {
    case 'input':
      sortedItems = items;
      break;
    case 'description':
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'packed':
      sortedItems = items.sort((a, b) => a.packed - b.packed);
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
};

PackingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onClearItems: PropTypes.func.isRequired,
};
