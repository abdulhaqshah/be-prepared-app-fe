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
}

export default Quizzes;
