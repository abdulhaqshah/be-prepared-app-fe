import React, { Component, Fragment } from "react";
import "./Tutorial.scss";
import TutorialCard from "./TutorialCard";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tutorials: []
    };
    this.getTutorials();
  }

  getTutorials() {
    API.getTutorials(result => {
      if (result.status === "200") {
        let tutorial = result.data;
        tutorial = tutorial.slice(0,6);
        this.setState({
          tutorials: tutorial
        });
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }
  
  render() {
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Tutorials</h5>
        </div>
        <div className="row">
          <div className="tutorial-container">
          {this.state.tutorials.map((tutorial, index) => (
            <div className="interview-prep-tutorial" key={index}>
            <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
              <TutorialCard heading={tutorial.name} para={tutorial.content} value={tutorial.tutorialId}/>
            </div>
          </div>
          ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
