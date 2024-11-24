import Logo from './Logo.jsx';
import Form from './Form.jsx';
import { useState } from 'react';
import { PackingList } from './PackingList.jsx';
import { Stats } from './Stats.jsx';

export const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [item, ...prevItems]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    if (!items.length) return;

    if (confirm('Are you sure you want to clear the list?')) {
      setItems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onClearItems={handleClearItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
