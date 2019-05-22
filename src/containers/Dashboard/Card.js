import React, { Component } from "react";
import "./Card.scss";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="courses-card">
        <div
          className="card-div shadow-lg"
          className="card"
          style={{ width: "23rem", height: "30rem" }}
        >
          <div className="card-body">
            <p className="text-muted">{this.props.title}</p>
            <hr />
            <a href="#">OOP</a>
            <hr />
            <a href="#">Data Structures</a>
            <hr />
            <a href="#">Database</a>
            <hr />
            <a href="#">Algorithm</a>
            <hr />
            <a href="#">Web Development</a>
            <hr />
            <a href="#">Android</a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
