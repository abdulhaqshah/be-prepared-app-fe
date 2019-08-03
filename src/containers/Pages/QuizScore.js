import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./QuizScore.scss";

class QuizScore extends Component {
  message = precentage => {
    if (precentage > 50)
      return (
        <div className="pass">
          <h3>Congratulation You have Passed</h3>
        </div>
      );
    else {
      return (
        <div className="fail">
          <h3>Pitty You have Failed</h3>
        </div>
      );
    }
  };
  render() {
    let percentage;
    percentage = (this.props.score / this.props.attempted) * 100;

    console.log(percentage);
    return (
      <div align="center" className="score-card">
        <div className="col-lg-12 mt-5 course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <div align="center" className="quiz-result">
                  <h1>Quiz Result</h1>
                </div>

                <div className="your-score d-flex justify-content-between">
                  <h4>Your Score</h4>
                  {`${Math.ceil(percentage)}%`} {`(${this.props.score})`}
                </div>
                <div className="message">{this.message(percentage)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    score: state.userData.score,
    attempted: state.userData.attempted
  };
};

export default withRouter(connect(mapStateToProps)(QuizScore));
