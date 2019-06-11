import React, { Component, Fragment } from "react";
import Card from "./Card";
import "./Courses.scss";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: ["OOP", "Algo", "DB"]
    };
  }
  render() {
    // debugger;
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Explore BePrepared Skills</h5>
        </div>
        <div className="row">
          <div className="card-container ">
            <div className="courses shadow-lg ml-5 mr-4 mb-5">
              <Card data={this.state.courses} title="POBLEM SOLVING" />
            </div>
            <div className="languages shadow-lg ml-5 mr-2 mb-5">
              <Card title="LANGUAGES" />
            </div>
            <div className="specialized-skills shadow-lg ml-5 mr-5 mb-5">
              <Card title="SPECIALIZED SKILLS " />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Courses;
