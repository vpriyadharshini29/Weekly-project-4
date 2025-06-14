import  { useState } from 'react';
import './CharacterCounter.css';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const maxChars = 100;

  return (
    <div className="char-counter-container">
      <h2>🔤 Live Character Counter</h2>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        maxLength={200}
      />
      <div className="counts">
        <p><strong>Characters:</strong> {charCount}</p>
        <p><strong>Words:</strong> {wordCount}</p>
      </div>
      {charCount > maxChars && (
        <p className="warning-text">⚠️ You’ve exceeded the recommended 100 character limit.</p>
      )}
      <button className="clear-btn" onClick={handleClear}>Clear</button>
    </div>
  );
};

export default CharacterCounter;
