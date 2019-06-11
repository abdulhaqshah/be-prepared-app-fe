import React, { Component } from "react";
import * as auth from '../../../services/Session'
import "./Card.scss";

class Card extends Component {

  render() {
    const courses = this.props.data;
    const courseList = courses.map((course) => {
      return (
        <div className="course-name">
          <a className="course-a" key={auth.getItem("id")}>{course}</a>
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
