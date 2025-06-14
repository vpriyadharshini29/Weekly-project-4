import { useNavigate } from "react-router-dom";

export default function CRMLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login and set permission
    localStorage.setItem("userPermissions", JSON.stringify(["canEditLead"])); // Set role/permission
    navigate("/crm/leads"); // Redirect to CRM
  };

  return (
    <div>
      <h2>CRM Login</h2>
      <button onClick={handleLogin}>Login as Lead Manager</button>
    </div>
  );
}
