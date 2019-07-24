import React, { Component } from "react";
import image from "../../online-courses.jpeg";
import "./CoursePage.scss";
import Footer from "../../components/Footer";

class CoursePage extends Component {
  render() {
    return (
      <div className="container">
        <img src={image} className="image" alt="logo" />
        <Footer/>
      </div>
    );
  }
}
export default CoursePage;
