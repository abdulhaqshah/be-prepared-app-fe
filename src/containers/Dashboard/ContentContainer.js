import React, { Component, Fragment } from "react";
import "./ContentContainer.scss";
import Footer from "../../components/Footer";
import Tutorial from "../Dashboard/Tutorial";
import Skills from "../Dashboard/Skills";
import Courses from "./Courses";

class ContentContainer extends Component {
  render() {
    return (
      <div className="content-container">
        <header className="container">
            <div className="prac ml-5">
              <span>Practice</span>
            </div>
          <div className="ml-5">
            <h1 className="heading">Dashboard</h1>
          </div>
          <div className=" d-flex flex-row-reverse">
            <a className="bookmark" href="#">Bookmarked Challenges</a>
          </div>
        </header>
        <div className="main-container">
          <div className="container">
            <Fragment>
              <Skills />
            </Fragment>
            <Fragment>
              <Courses />
            </Fragment>
            <Fragment>
              <Tutorial />
            </Fragment>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContentContainer;
