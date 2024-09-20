import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./UseContext";

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const { isAuthenticated, isRole } = useAuth();
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
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to={getRedirectPath(isRole)} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
