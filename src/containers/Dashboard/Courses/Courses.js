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
      cards : ["Top Courses", "Most Viewed", "Top Rated"],
      course : []
    };
  }

  componentWillMount() {
    API.getCourses(result => {
      if (result.status === "200") {
        this.setState({
          courses: result.data
        });
        if (this.state.courses.length < 6) {
          this.state.courses.map((course, index) => {
            this.setState({
              course: this.state.course.concat(course.name)
            });
          })
        } else {
          for(let i =0 ; i<6; i++) {
            this.setState({
              course: this.state.course.concat(this.state.courses[i].name)
            });
          }
        }
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
              <Card data={this.state.course} key ={index} title={card} />
            </div>
          ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Courses;
