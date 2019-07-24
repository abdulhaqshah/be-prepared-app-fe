import React, { Component } from "react";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";

class CoursePage extends Component {
  render() {
    return (
      <div className="container">
        <img src={image} className="image" alt="logo" />
      </div>
    );
  }
}
export default CoursePage;
