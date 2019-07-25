import React, { Component } from "react";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";
import Footer from "../../components/Footer";
import API from "../../api/index";

class CoursePage extends Component {
  getCourseById = () => {
    // API.getCourseById
  };
  render() {
    return (
      <div className="main-course-container">
        <div className="container">
          <div className="zoom">
            <img src={image} className="image" alt="logo" />
          </div>
          <div className="course-content-container">
            <h3>Course Name</h3>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default CoursePage;
