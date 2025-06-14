export default function withAuthJ(Component) {
  return function AuthenticatedComponent(props) {
    const user = JSON.parse(localStorage.getItem("jobUser"));

    if (!user || !user.loggedIn) {
      return (
        <div className="access-denied">
          Please log in to access this feature.
        </div>
      );
    }

    return <Component {...props} />;
  };
}
