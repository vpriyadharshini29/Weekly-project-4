import  { useState } from 'react';
import './LoginToggle.css';

const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastActionTime, setLastActionTime] = useState('');
  const [disabled, setDisabled] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setLastActionTime(new Date().toLocaleTimeString());
    setDisabled(true);
    setTimeout(() => setDisabled(false), 500); // disable briefly
  };

  const clearStatus = () => {
    setIsLoggedIn(false);
    setLastActionTime('');
  };

  return (
    <div className="login-toggle-container">
      <h2>🔐 Login Status Toggle</h2>
      <p className="status-message">{isLoggedIn ? 'Welcome back!' : 'Please login'}</p>
      {lastActionTime && <p className="timestamp">Last action: {lastActionTime}</p>}
      <div className="btn-group">
        <button onClick={toggleLogin} disabled={disabled}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <button onClick={clearStatus} className="clear-btn">Clear</button>
      </div>
    </div>
  );
};

export default LoginToggle;
