import React, { Component } from "react";
import Routes from "../../../routes/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: ""
    };
  }

  getCourseId(courseId, name) {
    this.props.history.push(`course-page/${name}/${courseId}`);
  }

  render() {
    return (
      <div className="courses-card">
        <div className="card shadow-lg">
          <div className="card-body">
            <div className="header">
              <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-content">
              {this.props.data.map((course, index) => (
                <div
                  className="course-name"
                  key={index}
                  onClick={() => this.getCourseId(course.courseId, course.name)}
                >
                  {course.name}
                </div>
              ))}
            </div>
          </div>
        </div>
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
export default withRouter(connect(mapStateToProps)(Card));
