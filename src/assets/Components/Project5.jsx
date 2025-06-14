import  { useState } from 'react';
import './FruitSelector.css';

const fruitData = {
  Apple: { emoji: '🍎', fact: 'Apples float because they’re 25% air!' },
  Banana: { emoji: '🍌', fact: 'Bananas are berries, but strawberries aren’t!' },
  Orange: { emoji: '🍊', fact: 'Oranges are a hybrid of pomelo and mandarin.' },
  Mango: { emoji: '🥭', fact: 'Mangoes are related to cashews and pistachios.' },
  Grape: { emoji: '🍇', fact: 'Grapes can explode in the microwave!' },
};

const FruitSelector = () => {
  const [fruit, setFruit] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setFruit(e.target.value);
    setShow(false);
  };

  const handleSubmit = () => {
    if (!fruit) {
      alert('Please select a fruit!');
    } else {
      setShow(true);
    }
  };

  const handleClear = () => {
    setFruit('');
    setShow(false);
  };

  return (
    <div className="fruit-container">
      <h2>🍓 Favorite Fruit Selector</h2>
      <select value={fruit} onChange={handleChange}>
        <option value="">-- Select your favorite fruit --</option>
        {Object.keys(fruitData).map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>
      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>
      {show && fruit && (
        <div className="fruit-info">
          <h3>{fruitData[fruit].emoji} {fruit}</h3>
          <p>{fruitData[fruit].fact}</p>
        </div>
      )}
    </div>
  );
};

export default FruitSelector;
