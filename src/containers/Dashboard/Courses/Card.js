import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getCourseById,
  getTutorialsByCourseId,
  getQuizesByCourseId
} from "../../../store/actions/Actions";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: "",
      courseName: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.props.history.push("/course-page");
  }

  getCourseId(courseId) {
    this.props.getCourses(courseId);
    this.props.getTutorials(courseId);
    this.props.getQuizes(courseId);
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
                  onClick={() => this.getCourseId(course.courseId)}
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
  )(Card)
);
