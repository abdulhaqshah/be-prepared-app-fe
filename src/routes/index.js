import React, { Component } from "react";
import Home from "../containers/Home/Home";
import SignUp from "../containers/SignUp/SignUp";
import Login from "../containers/Login/Login";
import Dashboard from "../containers/Dashboard/Dashboard";
import Profile from "../containers/UserProfile/UserProfile";
import Navbar from "../containers/Dashboard/Navbar";
import TutorialForm from "../containers/Dashboard/Forms/TutorialForm";
import CourseForm from "../containers/Dashboard/Forms/CourseForm";
import QuizContentForm from "../containers/Dashboard/Forms/QuizContentForm";
import QuizForm from "../containers/Dashboard/Forms/QuizForm";
import TutorialUpdationForm from '../containers/Dashboard/Forms/TutorialUpdationForm'
import { ProtectedRoute, GuestRoute } from "./CustomRoute";
import { BrowserRouter as Router } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  HOME,
  SINGUP,
  LOGIN,
  DASHBOARD,
  PROFILE,
  TUTORIAL_FORM,
  COURSE_FORM,
  QUIZ_FORM,
  QUIZ_CONTENT_FORM,
  TUTORIAL_UPDATION_FORM
} from "../constants";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.notificationDOMRef = React.createRef();
  }

  render() {
    return (
      <Router>
        <ReactNotification ref={this.notificationDOMRef} />
        <Navbar
          loginBtn="LOGIN"
          signupBtn="SIGNUP"
          signupRoute={SINGUP}
          loginRoute={LOGIN}
        />
        <GuestRoute
          exact
          path={HOME}
          component={Home}
          notificationRef={this.notificationDOMRef}
        />
        <GuestRoute
          path={SINGUP}
          component={SignUp}
          notificationRef={this.notificationDOMRef}
        />
        <GuestRoute
          path={LOGIN}
          component={Login}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute
          path={DASHBOARD}
          component={Dashboard}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute
          path={PROFILE}
          component={Profile}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute
          path={TUTORIAL_FORM}
          component={TutorialForm}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute
          path={COURSE_FORM}
          component={CourseForm}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute
          path={QUIZ_FORM}
          component={QuizForm}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute
          path={QUIZ_CONTENT_FORM}
          component={QuizContentForm}
          notificationRef={this.notificationDOMRef}
        />
        <ProtectedRoute 
          path={TUTORIAL_UPDATION_FORM} 
          component={TutorialUpdationForm}
          notificationRef={this.notificationDOMRef} 
        />
      </Router>
    );
  }
}
export default Routes;
