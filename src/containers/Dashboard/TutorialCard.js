import React, { Component } from "react";
import "./Tutorial.scss";

class TutorialCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.title}
            INTERVIEW PREPARATION
          </h5>
          <h2 className="card-heading font-weight-bold">
            {this.props.heading}
            Interview Preparation Kit
          </h2>
          <p>
            {this.props.para}
            challenges based on learnings from 1000+ companies to help you
            prepare
          </p>
          <div className="tutorial-link">
            <a href={this.props.href} className=" font-weight-bold">
              View Tutorial
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorialCard;
