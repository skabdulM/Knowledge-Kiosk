import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "./UseContext";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuthenticated, isRole } = useAuth();
  const location = useLocation();
  const getRedirectPath = (role: any) => {
    switch (role) {
      case "ADMIN":
        return "/admin";
      case "TEACHER":
        return "/teacher";
      case "STUDENT":
        return "/student";
      default:
        return "/login"; // Fallback in case role is missing or invalid
    }
  };
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={getRedirectPath(isRole)} />
        )
      }
    />
  );
};

export default PrivateRoute;
