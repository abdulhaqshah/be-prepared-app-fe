import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const courses = ["OOP", "Algo", "Database"];
    // const courses = this.props.data;
    const courseList = courses.map((course, index) => {
      return (
        <div className="course-name">
          <a key={index}>{course}</a>
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
