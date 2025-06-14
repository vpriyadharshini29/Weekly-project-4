// Login.jsx
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("userRole", "student"); // or 'instructor'
    navigate("/courses"); // redirect after login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Student</button>
    </div>
  );
}
