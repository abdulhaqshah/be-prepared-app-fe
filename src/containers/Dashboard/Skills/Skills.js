import React, { Component, Fragment } from "react";
import API from "../../../api/index";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities/index";
import "./Skills.scss";
import TutorialCard from '../Tutorials/TutorialCard'
import QuizCard from "../Quizzes/QuizCard";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialProgress: [],
      quizProgress : []
    };
    API.getUserById(result => {
      if (result.status === "200") {
        let tutorialProgress = result.data.tutorialProgress.filter(obj => {
          return (!obj.completed) ? obj : null
        });
        tutorialProgress = tutorialProgress.slice(0, 3);
        let quizProgress = result.data.quizProgress.filter(obj => {
          return (!obj.completed) ? obj : null
        });
        quizProgress = quizProgress.slice(0, 3);
        this.setState({tutorialProgress, quizProgress});
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }
  render() {
    let cards1, cards2;
    if(this.state.tutorialProgress.length === 0 && this.state.quizProgress.length === 0) {
      cards1 = (
        <div className="tutorialShow">
          <p>There is no Progress to show</p>
        </div>
      )
    } else {
      cards1 = this.state.tutorialProgress.map((tutorial, index) => (
        <div className="interview-prep-tutorial" key={index}>
          <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
            <TutorialCard heading={tutorial.name} description = {tutorial.description} value={tutorial.tutorialId}/>
          </div>
        </div>
      ));
      cards2 = this.state.quizProgress.map((quiz, index) => (
        <div className="interview-prep-tutorial" key={index}>
          <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
            <QuizCard value={quiz.quizId}/>
          </div>
        </div>
      ));
    }
    return (
      <Fragment>
        <h5 className="headings ml-5 mb-5 mt-5">Your Progress</h5>
        <div className="d-flex justify-content-center row">
          <div className="tutorial-container">
            {cards1} 
            {cards2} 
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Skills;
