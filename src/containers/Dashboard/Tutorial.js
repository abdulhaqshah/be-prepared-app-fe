
import React, { Component } from "react";
import "./Tutorial.scss";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="tutorial-card shadow-lg">
        <div className="card" style={{ width: "22rem", height: "13rem" }}>
          <div className="card-body">
            <p className="text-muted">{this.props.title}</p>
            <h2 className="card-title font-weight-bold">{this.props.heading}</h2>
            <p className="card-text text-muted">
              {this.props.para}
            </p>
            <a href="#" className="font-weight-bold">
              {this.props.link}
            </a>
          </div>
        </div>
        </div>
    );
  }
}

export default Card;
