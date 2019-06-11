import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  if (localStorage.getItem("token") !== null) return true;
  else return false;
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log("ProtectedRoute", isAuthenticated());
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
