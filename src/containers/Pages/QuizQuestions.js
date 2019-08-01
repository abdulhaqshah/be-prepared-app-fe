import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuizById } from "../../store/actions/Actions";
import "./QuizPage.scss";

class QuizQuestions extends Component {
  componentDidMount() {
    const pathname = this.props.history.location.state;
    var id = pathname.split("/");
    this.props.getQuizes(id[3]);
  }
  render() {
    return (
      <div className="course-content-container">
        <div className="courses-detail-card">
          <div className="card shadow-lg">
            <div className="card-body" />
            <h1>Quiz Questions</h1>
            <p>
              {this.props.quizById ? this.props.quizById[0].description : null}
            </p>
          </div>
          <div className="options">{/* <ul>{options}</ul> */}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizById: state.getQuizDataById.quizById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getQuizes: id => {
      dispatch(getQuizById(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizQuestions)
);
