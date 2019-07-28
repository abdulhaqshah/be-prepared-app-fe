import React, { Component } from "react";
import { connect } from "react-redux";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";
import Footer from "../../components/Footer";

class CoursePage extends Component {
  getTutorialId = tutorialId => {
    console.log("Tutorial Id", tutorialId);
  };

  getQuizId = quizId => {
    console.log("Quiz id", quizId);
  };

  render() {
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
                  <div className="tutorials">
                    {this.props.tutorials &&
                      this.props.tutorials.map((tutorial, index) => (
                        <div
                          className="tutorial-name"
                          key={index}
                          onClick={() =>
                            this.getTutorialId(tutorial.tutorialId)
                          }
                        >
                          <ul>
                            <li> {tutorial.name}</li>
                          </ul>
                        </div>
                      ))}
                  </div>
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
                  <div className="quizes">
                    {this.props.quizes &&
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
                      ))}
                  </div>
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
    quizes: state.quizData.quizes
  };
};
export default connect(mapStateToProps)(CoursePage);
