import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Link, withRouter } from "react-router-dom";
import "./Quiz.scss";

class QuizCard extends Component {
  getQuizById = () => {
    this.props.history.push(
      `quiz-page/${this.props.heading}/${this.props.value}`
    );
  };

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
          </h2>
          <div className="truncate-lines">
            <LinesEllipsis
              text={this.props.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </div>
          <div className="quiz-link">
            <Link className="font-weight-bold" onClick={this.getQuizById}>
              {this.props.linkName}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuizCard);
