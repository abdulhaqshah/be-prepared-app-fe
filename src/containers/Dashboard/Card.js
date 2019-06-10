import React, { Component } from "react";
import {HOME} from '../../constants/index'
import "./Card.scss";

class Card extends Component {

  render() {
    return (
      <div className="courses-card">
        <div  className="card shadow-lg">
          <div className="card-body">
            <div className="header">
              <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-content">
           <div className="course-name">
                <a href={HOME}>OOP</a>
              </div>
              <div className="course-name">
                <a href={HOME}>Data Structures</a>
              </div>
              <div className="course-name">
                <a href={HOME}>Database</a>
              </div>
              <div className="course-name">
                <a href={HOME}>Algorithm</a>
              </div>
              <div className="course-name">
                <a href={HOME}>Web Development</a>
              </div>
              <div className="course-name">
                <a href={HOME}>Android</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
