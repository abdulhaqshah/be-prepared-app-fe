import React, { Component} from "react";
import "./ContentContainer.scss";
import Footer from "../../components/Footer";
import Tutorial from "../Dashboard/Tutorial";
import Skills from "../Dashboard/Skills";
import Courses from "./Courses";
import { BOOKMARK} from "../../constants";

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
            <a href={BOOKMARK} className="bookmark">
              Bookmarked Challenges
            </a>
          </div>
        </header>
        <div className="main-container">
          <div className="container">
            <Skills />
            <Courses />
            <Tutorial />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContentContainer;
