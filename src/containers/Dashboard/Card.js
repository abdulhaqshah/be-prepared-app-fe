import React, { Component } from "react";
import "./Card.scss";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="courses-card">
        <div className="card-div shadow-lg" className="card">
          <div className="card-body">
            <div className="header">
            <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-content">
              <div className="course-name">
                <a href="#">OOP</a>
              </div>
              <div className="course-name">
                <a href="#">Data Structures</a>
              </div>
              <div className="course-name">
              <a href="#">Database</a>
              </div>
              <div className="course-name">
              <a href="#">Algorithm</a>
              </div>
              <div className="course-name">
              <a href="#">Web Development</a>
              </div>
              <div className="course-name">
              <a href="#">Android</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
