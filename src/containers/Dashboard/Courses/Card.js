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

  getCourseId = e => {
    console.log("courseId", e.target.value);
    // this.setState({
    //   courseId: courseId
    // });
  };

  render() {
    return (
      <div className="courses-card">
        <div className="card shadow-lg">
          <div className="card-body">
            <div className="header">
              <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-content">
              <a >
                {this.props.data.map((course, index) => (
                  <div
                    className="course-name"
                    key={index}
                    value={course.courseId}
                    onClick={this.getCourseId}
                  >
                    {course.name}
                  </div>
                ))}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
