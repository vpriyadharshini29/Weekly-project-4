// components/GroceryList.jsx
import  { useState } from 'react';
import './GroceryList.css';

const GroceryList = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [highlighted, setHighlighted] = useState(null);

  const handleAdd = () => {
    if (!item.trim()) {
      alert('Item cannot be empty');
      return;
    }
    const newItem = {
      name: item,
      addedAt: new Date().toLocaleString(),
    };
    setItems([...items, newItem]);
    setItem('');
    setHighlighted(items.length);
    setTimeout(() => setHighlighted(null), 1500);
  };

  const handleRemove = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="grocery-container">
      <h2>🛒 Grocery List</h2>
      <div className="input-group">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear} className="clear-btn">Clear All</button>
      </div>
      <ul className="grocery-list">
        {items.map((itm, idx) => (
          <li key={idx} className={highlighted === idx ? 'highlight' : ''}>
            <span>{itm.name}</span>
            <small>{itm.addedAt}</small>
            <button onClick={() => handleRemove(idx)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
