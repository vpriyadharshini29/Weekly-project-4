import { Navigate } from "react-router-dom";

export default function withAuth(WrappedComponent) {
  return (props) => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/" replace />;
  };
}
