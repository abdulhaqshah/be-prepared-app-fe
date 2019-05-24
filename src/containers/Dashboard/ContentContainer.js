import React, { Component } from "react";
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
          <div>
            <div className="prac ml-5">
              <span>Practice</span>
            </div>
            <div className=" ml-5 font-weight-bold">
              <h1 className="heading">Dashboard</h1>
            </div>
          </div>
        </header>
        <div className="main-container">
          <div className="container">
            <div>
              <Skills />
            </div>
            <div>
              <Courses />
            </div>
            <div>
              <Tutorial />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContentContainer;
