import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: ""
    };
  }

  getCourseId = courseId => {
    this.setState({
      courseId: courseId
    });
  };

  render() {
    console.log("CourseID", this.state.courseId);
    const courses = this.props.data;
    const courseList = courses.map((course, index) => {
      return (
        <div className="course-name" key={index}>
          <div onClick={this.getCourseId(course.courseId)}>{course.name}</div>
        </div>
      );
    });
    return (
      <div className="courses-card">
        <div className="card shadow-lg">
          <div className="card-body">
            <div className="header">
              <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-content">{courseList}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
