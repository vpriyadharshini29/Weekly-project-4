export default function withPermissions(Component, requiredPermission) {
  return function WrappedComponent(props) {
    const user = JSON.parse(localStorage.getItem("user")) || {};

    if (!user.permissions || !user.permissions.includes(requiredPermission)) {
      return <div className="access-denied">Access Denied</div>;
    }

    return <Component {...props} />;
  };
}
