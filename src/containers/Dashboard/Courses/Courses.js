import React, { Component, Fragment } from "react";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities/index";
import API from "../../../api/index";
import Card from "./Card";
import "./Courses.scss";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      cards: ["Top Courses", "Most Viewed", "Top Rated"]
    };
    this.getCourses();
  }
  getCourses() {
    API.getCourses(result => {
      if (result.status === "200") {
        let course = result.data.map(obj => {
          return obj;
        });
        course = course.slice(0, 6);
        this.setState({
          courses: course
        });
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }
  render() {
    let cards;
    if (this.state.courses.length > 0) {
      cards = this.state.cards.map((card, index) => (
        <div className="courses shadow-lg ml-3 mr-5 mb-4" key={index}>
          <Card data={this.state.courses} key={index} title={card} />
        </div>
      ));
    } else {
      cards = (
        <div className="courseShow">
          <p>There is no course available</p>
        </div>
      );
    }

    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">
            Explore Be Prepared Courses
          </h5>
        </div>
        <div className="d-flex justify-content-center row">
          <div className="card-container">{cards}</div>
        </div>
      </Fragment>
    );
  }
}
export default Courses;
