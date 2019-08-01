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
        this.setState({
          tutorials: result.data.slice(0, 6),
        });
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }
  
  render() {
    let cards;
    if(this.state.tutorials.length > 0) {
      cards = this.state.tutorials.map((tutorial, index) => (
        <div className="interview-prep-tutorial" key={index}>
          <div className="tutorial-card shadow-lg ml-4 mr-4 mb-4">
            <TutorialCard linkName = "View Tutorial" heading={tutorial.name} description={tutorial.description} value={tutorial.tutorialId}/>
          </div>
        </div>
      ));
    } else {
      cards = (
        <div className="tutorialShow">
          <p>There is no tutorial available</p>
        </div>
      )
    }
    
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Tutorials</h5>
        </div>
        <div className="d-flex justify-content-center row">
          <div className="tutorial-container">
          {cards}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
