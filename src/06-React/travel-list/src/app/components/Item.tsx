type ItemProps = {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

const Item = ({ item, onDeleteItem, onToggleItem }: ItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
