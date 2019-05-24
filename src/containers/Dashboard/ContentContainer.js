import React, { Component } from "react";
import "./ContentContainer.scss";
import Footer from "../../components/Footer";
import Tutorial from "../Dashboard/Tutorial";
import Skills from "../Dashboard/Skills";
import Courses from "./Courses";

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-container">
        <header>
          <div>
            <div className="ml-5 text-muted">
              <span>practice</span>
            </div>
            <div className="ml-5 font-weight-bold">
              <h5 className="heading">Dashboard</h5>
            </div>
          </div>
        </header>
        <div className="main-container">
          <div>
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
