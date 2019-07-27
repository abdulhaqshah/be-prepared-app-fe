import React, { Component } from "react";
import { connect } from "react-redux";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";
import Footer from "../../components/Footer";

class CoursePage extends Component {
  render() {
    return (
      <div className="main-course-container">
        <div className="container">
          <div className="zoom">
            <img src={image} className="image" alt="logo" />
          </div>
          <div className="course-content-container">
            <h3>{this.props.course[0].name}</h3>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    status: state.courseData.status,
    course: state.courseData.course
  };
};
export default connect(
  mapStateToProps
)(CoursePage);
