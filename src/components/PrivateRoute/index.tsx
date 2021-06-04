import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import routes from "../../constants/routes";
import { useAuth } from "../AuthContext";

const PrivateRoute = ({
  children,
  redirectsTo,
  ...rest
}: { children: JSX.Element; redirectsTo?: string } & RouteProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={redirectsTo ? redirectsTo : routes.home} />
        )
      }
    />
  );
};

export default PrivateRoute;
