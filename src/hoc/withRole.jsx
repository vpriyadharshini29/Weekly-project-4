import { Navigate } from "react-router-dom";

const withRole = (role) => (WrappedComponent) => {
  return (props) => {
    const userRole = localStorage.getItem("userRole");
    return userRole === role ? <WrappedComponent {...props} /> : <Navigate to="/courses" />;
  };
};

export default withRole
