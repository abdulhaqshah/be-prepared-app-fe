
import React, { Component } from "react";
import Home from "../containers/Home/Home";
import SignUp from "../containers/Login/Login";
import { HOME, SINGUP, LOGIN } from "../constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../containers/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
          <Route path={SINGUP} component={SignUp} />

        </Switch>
      </Router>
    );
  }
}
export default Routes;
