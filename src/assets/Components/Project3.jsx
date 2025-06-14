import { useState } from 'react';
import './AgeCard.css';

const AgeCard = ({ name  }) => {
  const [age, setAge] = useState(25);
  const maxAge = 120;
  const currentYear = new Date().getFullYear();

  const incrementAge = () => {
    if (age < maxAge) {
      setAge(age + 1);
    }
  };

  const resetAge = () => {
    setAge(25);
  };

  return (
    <div className="age-card">
      <h2>🎂 Age Increaser Card</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Birth Year:</strong> {currentYear - age}</p>
      <div className="button-group">
        <button onClick={incrementAge} disabled={age >= maxAge}>Increase Age</button>
        <button onClick={resetAge} className="reset-btn">Reset Age</button>
      </div>
      {age >= maxAge && <p className="max-age-warning">🎉 You've reached the maximum age!</p>}
    </div>
  );
};

export default AgeCard;
