import React, { Component } from "react";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";
import Footer from "../../components/Footer";

class CoursePage extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <img src={image} className="image" alt="logo" />
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
