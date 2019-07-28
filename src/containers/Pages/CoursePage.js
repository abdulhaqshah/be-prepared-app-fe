import React, { Component } from "react";
import { connect } from "react-redux";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";
import Footer from "../../components/Footer";

class CoursePage extends Component {
  render() {
    console.log("Courses", this.props.course);
    console.log("Tutorials", this.props.tutorials);
    console.log("quizes", this.props.quizes);

    return (
      <div className="main-course-container">
        <div className="header">
          <h1>{this.props.course[0].name}</h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <p>{this.props.course[0].description}</p>
                <div className="tutorials">
                  {/* <p>{this.props.tutorials[0]}</p> */}
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
