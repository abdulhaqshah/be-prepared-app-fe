import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./QuizScore.scss";

class QuizScore extends Component {
  message = precentage => {
    if (precentage > 50)
      return (
        <div className="pass">
          <i className="fa fa-check fa-5x" />
          <h3>Congratulation, You Passed ! </h3>
        </div>
      );
    else {
      return (
        <div className="fail">
          <i className="fa fa-times fa-5x" />
          <h3>Pity, You Failed :(</h3>
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
        <div className="message">{this.message(percentage)}</div>

        <div className="col-lg-12 mt-5 course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <div align="center" className="quiz-result">
                  <h1>Quiz Result</h1>
                </div>

                <div className="your-score d-flex justify-content-between">
                  <h5>Your Score</h5>
                  <h5>
                    {`${Math.ceil(percentage)}%  `}
                    {`(${this.props.score})Points`}
                  </h5>
                </div>
                <div className="passing-score d-flex justify-content-between">
                  <h5>passing Score</h5>
                  <h5>
                    50% 
                  </h5>
                </div>
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
