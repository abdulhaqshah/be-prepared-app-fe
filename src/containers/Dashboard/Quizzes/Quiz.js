import React, { Component, Fragment } from "react";
import "./Quiz.scss";
import QuizCard from "./QuizCard";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";

class Quizzes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quizzes: [],
      quiz : []
    };
  }

  componentWillMount() {
    API.getQuizzes(result => {
      if (result.status === "200") {
        this.setState({
          quizzes: result.data
        });
        if (this.state.quizzes.length < 6) {
          this.state.quizzes.map((quiz, index) => {
            this.setState({
              quiz: this.state.quiz.concat(quiz.name)
            });
          })
        } else {
          for(let i =0 ; i<6; i++) {
            this.setState({
              quiz: this.state.quiz.concat(this.state.quizzes[i].name)
            });
          }
        }
      } else {
        // addNotification(
        //   this.notificationDOMRef,
        //   "Error",
        //   "danger",
        //   result.message
        // );
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }
}

export default Quizzes;
