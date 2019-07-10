import React, { Component, Fragment } from "react";
import "./Quiz.scss";
import QuizCard from "./QuizCard";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";

class Quizzes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    };
    this.getQuizzes();
  }

  getQuizzes () {
    API.getQuizzes(result => {
      if (result.status === "200") {
        this.setState({
          quizzes: result.data.slice(0,6),
        });
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }

  render() {
    const quizCards = this.state.quizzes.map((quiz, index) => (
      <div className="interview-prep-quiz" key={index}>
      <div className="quiz-card shadow-lg ml-5 mr-4 mb-5">
        <QuizCard heading={quiz.name} value={quiz.quizId}/>
      </div>
    </div>
    ))
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Quizzes</h5>
        </div>
        <div className="row">
          <div className="quiz-container">
            {quizCards}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Quizzes;
