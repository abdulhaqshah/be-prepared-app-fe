import React, { Component } from "react";
import Home from "../containers/Home/Home";
import SignUp from "../containers/SignUp/SignUp";
import Login from "../containers/Login/Login";
import Dashboard from "../containers/Dashboard/Dashboard";
import Bookmark from "../containers/Bookmark/Bookmark";
import InterviewPrep from "../containers/InterviewPrep/InterviewPrep";
import ProblemSolving from "../containers/ProblemSolving/ProblemSolving";
import Statistics from "../containers/Statistics/Statistics";
import Javascript from "../containers/Javascript/Javascript";
import Code from "../containers/Code/Code";
import { ProtectedRoute } from "./ProtectedRoute";
import {
  HOME,
  SINGUP,
  LOGIN,
  DASHBOARD,
  BOOKMARK,
  INTERVIEW_PREP_KIT,
  PROBLEM_SOLVING,
  CODE,
  STATISTICS,
  JAVASCRIPT
} from "../constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route path={SINGUP} component={SignUp} />
          <Route path={LOGIN} component={Login} />
          <ProtectedRoute path={DASHBOARD} component={Dashboard} />
          <ProtectedRoute path={BOOKMARK} component={Bookmark} />
          <ProtectedRoute path={INTERVIEW_PREP_KIT} component={InterviewPrep} />
          <ProtectedRoute path={PROBLEM_SOLVING} component={ProblemSolving} />
          <ProtectedRoute path={STATISTICS} component={Statistics} />
          <ProtectedRoute path={JAVASCRIPT} component={Javascript} />
          <ProtectedRoute path={CODE} component={Code} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
