import React, { Component, Fragment } from "react";
import API from "../../api/index";
import {Link,withRouter} from "react-router-dom"
import { addNotification } from "../../utilities/index";
import "./RightPanel.scss";

class RightPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialProgress: [],
      quizProgress : []
    };
    API.getUserById(result => {
      if (result.status === "200") {
        let tutorialProgress = result.data.tutorialProgress.filter(obj => {
          return (obj.completed) ? obj : null
        });
        tutorialProgress = tutorialProgress.slice(0, 3);
        let quizProgress = result.data.quizProgress.filter(obj => {
          return (obj.completed) ? obj : null
        });
        quizProgress = quizProgress.slice(0, 3);
        this.setState({tutorialProgress, quizProgress});
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }

  getTutorialById = (tutorialId, name) => {
    this.props.history.push(`/tutorial-page/${name}/${tutorialId}`);
  };
  render() {
    let tutorialCards, quizCards;
    if(this.state.tutorialProgress.length === 0) {
      tutorialCards = (
          <div className="badge-text">
            <p className="card-text">
              You have not completed any tutorials
            </p>
          </div>
      )
    }else {
      tutorialCards = this.state.tutorialProgress.map((tutorial, index) => (
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>{tutorial.name}</p>
            </div>
            <div class="flip-card-back">
            <Link
            onClick={this.getTutorialById.bind(this, tutorial.tutorialId, tutorial.name)} className="back">
             View Tutorial
            </Link>
            </div>
          </div>
        </div>
      ));
    }
    if(this.state.quizProgress.length === 0) {
      quizCards = (
        <div className="badge-text">
          <p className="card-text">
            You have not completed any quizzes
          </p>
        </div>
    )
    } else {
      quizCards = this.state.quizProgress.map((quiz, index) => (
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>{quiz.name}</p>
            </div>
            <div class="flip-card-back">
            <p>You have scored : {(quiz.correct/quiz.attempted) * 100}%</p>
            </div>
          </div>
        </div>
      ));
    }
    return (
      <Fragment>
        <div className="badges shadow-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-heading">Completed Tutorials</h5>
                <div className="d-flex justify-content-around">
                    {tutorialCards}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="badges shadow-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-heading">Completed Quizzes</h5>
                <div className="d-flex justify-content-around">
                  {quizCards}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(RightPane);
