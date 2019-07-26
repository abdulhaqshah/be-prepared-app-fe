import React, { Component } from "react";
import { connect } from "react-redux";
import { addNotification } from "../../../utilities/index";
import API from "../../../api/index";
import { getCourseById } from "../../../store/actions/Actions";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: "",
      courseName: ""
    };
  }

  getCourseId(courseId) {
    this.props.getCourseid(courseId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "200") {
      console.log("courseId", nextProps.courseId);
      console.log("status", nextProps.status);
    } else {
      alert("error");
    }
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
    status: state.course.status,
    courseId: state.course.courseId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourseid: id => {
      dispatch(getCourseById(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
