import ReactDOM from "react-dom";
import { useState } from "react";
import "./JobPortal.css";

export default function LoginPortal({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("jobUser", JSON.stringify({ loggedIn: true, name: username }));
    alert(`${isRegister ? "Registered" : "Logged in"} successfully!`);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="portal-overlay">
      <div className="portal-content">
        <h3>{isRegister ? "Register" : "Login"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            {isRegister ? "Register" : "Login"}
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </form>
        <p>
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="link-btn" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
