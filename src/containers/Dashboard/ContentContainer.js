import React, { Component } from "react";
import "./ContentContainer.scss";
import Footer from "../../components/Footer";
import Tutorial from "../Dashboard/Tutorials/Tutorial";
import Quiz from "../Dashboard/Quizzes/Quiz";
import Skills from "../Dashboard/Skills/Skills";
import Courses from "./Courses/Courses";

class ContentContainer extends Component {
  render() {
    return (
      <div className="content-container">
        <header className="container">
          <div className="ml-5">
            <h1 className="heading">Dashboard</h1>
          </div>
        </header>
        <div className="main-container">
          <div className="container">
            <Skills />
            <Courses />
            <Tutorial />
            <Quiz />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContentContainer;
