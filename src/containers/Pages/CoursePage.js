import React, { Component } from "react";
import { connect } from "react-redux";
import image from "../../online-courses.jpeg";
import { getTutorialById, getQuizById } from "../../store/actions/Actions";
import Footer from "../../components/Footer";
import "./CoursePage.scss";

class CoursePage extends Component {
  getTutorialId = tutorialId => {
    this.props.getTutorials(tutorialId);
    this.props.history.push("/tutorial-page");
  };

  getQuizId = quizId => {
    this.props.getQuizes(quizId);
  };

  render() {
    let tutorials, quizes;
    if (this.props.tutorials === undefined) {
      tutorials = (
        <div className="TutorialShow">
          <p>There is no tutorial available</p>
        </div>
      );
    } else {
      tutorials =
        this.props.tutorials &&
        this.props.tutorials.map((tutorial, index) => (
          <div
            className="tutorial-name"
            key={index}
            onClick={() => this.getTutorialId(tutorial.tutorialId)}
          >
            <ul>
              <li> {tutorial.name}</li>
            </ul>
          </div>
        ));
    }
    if (!this.props.quizes) {
      quizes = (
        <div className="quizShow">
          <p>There is no quiz available</p>
        </div>
      );
    } else {
      quizes =
        this.props.quizes &&
        this.props.quizes.map((quiz, index) => (
          <div
            className="tutorial-name"
            key={index}
            onClick={() => this.getQuizId(quiz.quizId)}
          >
            <ul>
              <li> {quiz.name}</li>
            </ul>
          </div>
        ));
    }
    return (
      <div className="main-course-container">
        <div className="header">
          <h1>{this.props.course[0].name}</h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <p>
                  {this.props.course[0] && this.props.course[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="displayTutorials">
          <h3>Tutorials</h3>
          <div className="course-content-container">
            <div className="courses-detail-card">
              <div className="card shadow-lg">
                <div className="card-body">
                  <div className="tutorials">{tutorials}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayQuizes">
          <h3>Quizes</h3>
          <div className="course-content-container">
            <div className="courses-detail-card">
              <div className="card shadow-lg">
                <div className="card-body">
                  <div className="quizes">{quizes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    course: state.courseData.course,
    tutorials: state.tutorialData.tutorials,
    quizes: state.quizData.quizes,
    tutorialById: state.getTutorialDataById.tutorialById,
    quizById: state.getQuizDataById.quizById
  };
};
const mapDispatchToProps = dispatch => {
  debugger;
  return {
    getTutorials: id => {
      dispatch(getTutorialById(id));
    },
    getQuizes: id => {
      dispatch(getQuizById(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
