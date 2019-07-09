import React, { Component, Fragment } from "react";
import "./Tutorial.scss";
import TutorialCard from "./TutorialCard";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
      tutorial : []
    };
  }

  componentWillMount() {
    API.getTutorials(result => {
      if (result.status === "200") {
        this.setState({
          tutorials: result.data
        });
        if (this.state.tutorials.length < 6) {
          this.state.tutorials.map((tutorial, index) => {
            this.setState({
              tutorial: this.state.tutorial.concat(tutorial)
            });
          })
        } else {
          for(let i =0 ; i<6; i++) {
            this.setState({
              tutorial: this.state.tutorial.concat(this.state.tutorials[i])
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
          <h5 className="headings ml-5 mb-5 mt-5">Tutorials</h5>
        </div>
        <div className="row">
          <div className="tutorial-container">
          {this.state.tutorial.map((tutoria, index) => (
            <div className="interview-prep-tutorial" key={index}>
            <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
              <TutorialCard heading={tutoria.name} para={tutoria.content} value={tutoria.tutorialId}/>
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
