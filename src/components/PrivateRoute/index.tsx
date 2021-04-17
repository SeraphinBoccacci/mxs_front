import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import routes from "../../constants/routes";
import { useAuth } from "../AuthContext";

function PrivateRoute({
  children,
  ...rest
}: { children: JSX.Element } & RouteProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? children : <Redirect to={routes.home} />
      }
    />
  );
}

export default PrivateRoute;
