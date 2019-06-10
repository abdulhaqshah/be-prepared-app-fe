import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AuthState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};
export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthState.isAuthenticated === true 
      ? (
        <Component {...props} />
      )
       : (
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
