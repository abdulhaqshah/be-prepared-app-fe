import React, { Component, Fragment } from "react";
import Card from "./Card";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./Courses.scss";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      cards : ["", "", ""],
      course : []
    };
  }

  componentWillMount() {
    API.getCourses(result => {
      if (result.status === "200") {
        console.log(result.data.length)
        this.setState({
          course: result.data
        });
        if(this.state.course.length<18) {
          let divider = this.state.course.length/3;
          for(let i = 0; i<this.state.course.length; i++){
            
          }
        } else if (this.state.course.length === 18) {

        } else {

        }
      } else {
        addNotification(
          this.notificationDOMRef,
          "Error",
          "danger",
          result.message
        );
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Explore Be Prepared Courses</h5>
        </div>
        <div className="row">
          <div className="card-container">
          {this.state.cards.map((card, index) => (
            <div className="courses shadow-lg ml-5 mr-4 mb-5" key={index}>
              <Card data={this.state.courses} title="COURSES" />
            </div>
          ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Courses;
