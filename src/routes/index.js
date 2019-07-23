import React, { Component } from "react";
import Home from "../containers/Home/Home";
import SignUp from "../containers/SignUp/SignUp";
import Login from "../containers/Login/Login";
import Dashboard from "../containers/Dashboard/Dashboard";
import Profile from "../containers/UserProfile/UserProfile";
import Navbar from "../containers/Dashboard/Navbar";
import TutorialForm from "../containers/Dashboard/Forms/TutorialForm";
import CourseForm from "../containers/Dashboard/Forms/CourseForm";
import QuizForm from "../containers/Dashboard/Forms/QuizForm";
import { ProtectedRoute, GuestRoute } from "./CustomRoute";
import { BrowserRouter as Router } from "react-router-dom";
import {
  HOME,
  SINGUP,
  LOGIN,
  DASHBOARD,
  PROFILE,
  TUTORIAL_FORM,
  COURSE_FORM,
  QUIZ_FORM
} from "../constants";

class Routes extends Component {
  render() {
    return (
      <Router>
        <GuestRoute exact path={HOME} component={Home} />
        <GuestRoute path={SINGUP} component={SignUp} />
        <GuestRoute path={LOGIN} component={Login} />
        <Navbar
          loginBtn="LOGIN"
          signupBtn="SIGNUP"
          signupRoute={SINGUP}
          loginRoute={LOGIN}
        />
        <ProtectedRoute path={DASHBOARD} component={Dashboard} />
        <ProtectedRoute path={PROFILE} component={Profile} />
        <ProtectedRoute path={TUTORIAL_FORM} component={TutorialForm} />
        <ProtectedRoute path={COURSE_FORM} component={CourseForm} />
        <ProtectedRoute path={QUIZ_FORM} component={QuizForm} />
      </Router>
    );
  }
}
export default Routes;
