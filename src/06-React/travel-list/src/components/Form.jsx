import { useState } from 'react';
import PropTypes from 'prop-types';

export const Form = ({ onAddItem }) => {
  const [item, setItem] = useState({
    description: '',
    quantity: 1,
    packed: false,
    id: Date.now(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.description.trim()) return;

    onAddItem(item);
    setItem({
      description: '',
      quantity: 1,
      packed: false,
      id: Date.now(),
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        name="quantity"
        value={item.quantity}
        onChange={(e) => handleChange(e)}
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
        name="description"
        value={item.description}
        onChange={(e) => handleChange(e)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

Form.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default Form;
