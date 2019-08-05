import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import API from "../../api/index";
import { addNotification } from "../../utilities/index";
import { withRouter } from "react-router-dom";
import {
  getQuizById,
  calculateScore,
  attemptedQuestions,
  resetIndex
} from "../../store/actions/Actions";
import * as auth from "../../services/Session";
import "./QuizPage.scss";

class QuizQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      index: auth.getItem("index")
    };
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    var id = pathname.split("/");
    this.props.getQuizes(id[4]);
  }

  matchAnswers = (option, type) => {
    let selectedOption = [...this.state.selectedOption];
    let found = selectedOption.find(soption => soption === option);
    if (type === "multi") {
      if (found) {
        selectedOption = selectedOption.filter(soption => {
          return soption !== option;
        });
      } else {
        selectedOption.push(option);
      }
    } else {
      if (option !== null) {
        selectedOption[0] = option;
      }
    }
    this.setState({
      selectedOption
    });
  };

  score = selectedOption => {
    if (
      JSON.stringify(selectedOption) ===
      JSON.stringify(
        this.props.quizById[0] &&
          this.props.quizById[0].questions[auth.getItem("index")].answer
      )
    ) {
      this.props.addScore();
    }
  };

  resetSelectedOption = () => {
    this.setState({
      selectedOption: []
    });
  };
  onClickNextBtn = () => {
    let index = auth.getItem("index");
    auth.setItem("index", ++index);
    this.setState({
      index: ++index
    });
    this.score(this.state.selectedOption);
    this.resetSelectedOption();
    this.props.attempt();
  };
  onClickPrevBtn = () => {
    let index = auth.getItem("index");
    auth.setItem("index", --index);
    this.setState({
      index: --index
    });
  };
  quizProgressUpdate = (attempt, correct) => {
    const data = {
      attempted: attempt,
      correct: correct
    };
    API.quizProgressUpdate(
      this.props.quizById[0].quizId && this.props.quizById[0].quizId,
      data,
      result => {
        if (result.status === "200") {
        }
      }
    ).catch = error => {
      addNotification(this.notificationRef, "Error", "warning", error);
    };
  };

  onClickDoneBtn = () => {
    this.score(this.state.selectedOption);
    this.props.attempt();
    this.resetSelectedOption();
    this.props.resetIndex();
    this.quizProgressUpdate(this.props.attempted, this.props.score);
    this.props.history.push("/quiz-score");
  };

  render() {
    let options;
    let questionIndex = auth.getItem("index");

    if (
      this.props.quizById[0] &&
      this.props.quizById[0].questions[questionIndex].selection === "single"
    ) {
      options =
        this.props.quizById &&
        this.props.quizById[0].questions[questionIndex].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="radio"
                key={questionIndex}
                className="options-name"
                value={option}
                name="answer"
                onChange={() =>
                  this.matchAnswers(
                    option,
                    this.props.quizById[0].questions[questionIndex].selection
                  )
                }
              />
              {option}
            </div>
          )
        );
    } else {
      options =
        this.props.quizById &&
        this.props.quizById[0].questions[questionIndex].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                key={questionIndex}
                value={option}
                className="options-name"
                name={option}
                onChange={() =>
                  this.matchAnswers(
                    option,
                    this.props.quizById[0].questions[questionIndex].selection
                  )
                }
              />
              {option}
            </div>
          )
        );
    }
    return (
      <div className="main-quiz-container">
        <div className="header">
          <h4>{this.props.quizById ? this.props.quizById[0].name : null}</h4>
        </div>
        <div align="center" className="description">
          <p>
            {this.props.quizById ? this.props.quizById[0].description : null}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 course-content-container">
            <div className="courses-detail-card">
              <div className="card shadow-lg">
                <div className="card-body">
                  <div className="question">
                    {this.props.quizById
                      ? this.props.quizById[0].questions[questionIndex].question
                      : null}
                  </div>
                  <div className="options">{options}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {questionIndex === "0" ? (
            <div align="right" className="next-btn">
              <button
                className="btn btn-secondary"
                onClick={this.onClickNextBtn}
              >
                Next
              </button>
            </div>
          ) : questionIndex <
              (this.props.quizById &&
                this.props.quizById[0].questions.length - 1) &&
            questionIndex > 0 ? (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={this.onClickPrevBtn}
              >
                Previous
              </button>
              <button
                className="btn btn-secondary"
                onClick={this.onClickNextBtn}
              >
                Next
              </button>
            </div>
          ) : questionIndex ===
            (this.props.quizById &&
              JSON.stringify(this.props.quizById[0].questions.length - 1)) ? (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={this.onClickPrevBtn}
              >
                Previous
              </button>
              <button
                className="btn btn-secondary"
                onClick={this.onClickDoneBtn}
              >
                done
              </button>
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizById: state.getDashboardData.quizById,
    // index: state.userData.index,
    score: state.userData.score,
    attempted: state.userData.attempted
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getQuizes: id => {
      dispatch(getQuizById(id));
    },
    addScore: () => {
      dispatch(calculateScore());
    },
    attempt: () => {
      dispatch(attemptedQuestions());
    },
    resetIndex: () => {
      dispatch(resetIndex());
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizQuestions)
);
