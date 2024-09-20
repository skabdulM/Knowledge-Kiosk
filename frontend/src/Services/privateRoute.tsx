import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "./UseContext";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/account/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
