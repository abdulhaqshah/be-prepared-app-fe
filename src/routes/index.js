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
import Profile from "../containers/UserProfile/UserProfile";
import Navbar from "../containers/Dashboard/Navbar";
import TutorialForm from "../containers/Dashboard/Forms/TutorialForm";
import CourseForm from "../containers/Dashboard/Forms/CourseForm";
import QuizForm from "../containers/Dashboard/Forms/QuizForm";
import { ProtectedRoute, GuestRoute } from "./CustomRoute";
import { BrowserRouter as Router } from "react-router-dom";
import * as auth from "../services/Session";
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
  JAVASCRIPT,
  PROFILE,
  TUTORIAL_FORM,
  COURSE_FORM
  QUIZ_FORM
} from "../constants";

class Routes extends Component {
  render() {
    const name = auth.getItem("name");
    return (
      <Router>
        <Navbar
          loginBtn="LOGIN"
          signupBtn="SIGNUP"
          signupRoute={SINGUP}
          loginRoute={LOGIN}
          name={name}
        />
        <GuestRoute exact path={HOME} component={Home} />
        <GuestRoute path={SINGUP} component={SignUp} />
        <GuestRoute path={LOGIN} component={Login} />
        <ProtectedRoute path={DASHBOARD} component={Dashboard} />
        <ProtectedRoute path={BOOKMARK} component={Bookmark} />
        <ProtectedRoute path={INTERVIEW_PREP_KIT} component={InterviewPrep} />
        <ProtectedRoute path={PROBLEM_SOLVING} component={ProblemSolving} />
        <ProtectedRoute path={STATISTICS} component={Statistics} />
        <ProtectedRoute path={JAVASCRIPT} component={Javascript} />
        <ProtectedRoute path={CODE} component={Code} />
        <ProtectedRoute path={PROFILE} component={Profile} />
        <ProtectedRoute path={TUTORIAL_FORM} component={TutorialForm} />
        <ProtectedRoute path={COURSE_FORM} component={CourseForm} />
        <ProtectedRoute path={QUIZ_FORM} component={QuizForm} />
      </Router>
    );
  }
}
export default Routes;
