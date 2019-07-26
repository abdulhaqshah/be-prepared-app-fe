import React from "react";
import * as auth from "../services/Session";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  notificationRef,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isLoggedIn() === true ? (
          <Component {...props} notificationRef={notificationRef} />
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
export const GuestRoute = ({
  component: Component,
  notificationRef,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isLoggedIn() !== true ? (
          <Component {...props} notificationRef={notificationRef} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
