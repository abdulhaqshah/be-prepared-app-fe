import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getTutorialsByCourseId,
  getQuizesByCourseId,
  getCourseById
} from "../../store/actions/Actions";
import Footer from "../../components/Footer";
import "./CoursePage.scss";

class CoursePage extends Component {
  getTutorialById = (tutorialId, name) => {
    this.props.history.push(`/tutorial-page/${name}/${tutorialId}`);
  };

  getQuizById = quizId => {
    this.props.getQuizes(quizId);
  };

  componentDidMount() {
    const pathname = this.props.history.location.pathname;
    var id = pathname.split("/");
    this.props.getCourses(id[3]);
    this.props.getTutorials(id[3]);
    this.props.getQuizes(id[3]);
  }

  render() {
    let tutorials, quizes;
    if (!this.props.tutorials) {
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
            onClick={() =>
              this.getTutorialById(tutorial.tutorialId, tutorial.name)
            }
          >
            <ul>
              <li> {tutorial.name}</li>
            </ul>
          </div>
        ));
    }
    if (this.props.quizes.length === 0) {
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
            onClick={() => this.getQuizById(quiz.quizId)}
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
          <h1>{this.props.course ? this.props.course[0].name : null}</h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                {this.props.course ? <div dangerouslySetInnerHTML={{ __html: this.props.course[0].description }} /> : null}
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
    course: state.getDashboardData.course,
    tutorials: state.getDashboardData.tutorials,
    quizes: state.getDashboardData.quizes,
    tutorialById: state.getDashboardData.tutorialById,
    quizById: state.getDashboardData.quizById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCourses: id => {
      dispatch(getCourseById(id));
    },
    getTutorials: id => {
      dispatch(getTutorialsByCourseId(id));
    },
    getQuizes: id => {
      dispatch(getQuizesByCourseId(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoursePage)
);
