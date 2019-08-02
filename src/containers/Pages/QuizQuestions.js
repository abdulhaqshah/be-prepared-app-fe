import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { withRouter } from "react-router-dom";
import {
  getQuizById,
  incrementIndex,
  decrementIndex,
  calculateScore,
  attemptedQuestions
} from "../../store/actions/Actions";
import "./QuizPage.scss";

class QuizQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      showQuestions: "",
      showScore: ""
    };
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    var id = pathname.split("/");
    this.props.getQuizes(id[4]);
  }

  matchAnswers = option => {
    let selectedOption = [...this.state.selectedOption];
    let found = selectedOption.find(soption => soption === option);
    if (found) {
      selectedOption = selectedOption.filter(soption => {
        return soption !== option;
      });
    } else {
      selectedOption.push(option);
    }
    this.setState({
      selectedOption
    });
  };

  score = selectedOption => {
    debugger;
    if (
      JSON.stringify(selectedOption) ===
      JSON.stringify(
        this.props.quizById[0] &&
          this.props.quizById[0].questions[this.props.index].answer
      )
    ) {
      this.props.addScore();
    }
  };

  onClickNextBtn = () => {
    this.score(this.state.selectedOption);
    this.props.incIndex();
    this.setState({
      selectedOption: []
    });
    this.props.attempt();
  };

  onClickDoneBtn = () => {
    this.score(this.state.selectedOption);
    this.props.attempt();
  };

  render() {
    let options;
    if (
      this.props.quizById[0] &&
      this.props.quizById[0].questions[this.props.index].selection === "single"
    ) {
      options =
        this.props.quizById &&
        this.props.quizById[0].questions[this.props.index].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="radio"
                key={this.props.index}
                className="options-name"
                value={option}
                name="answer"
                onChange={() => this.matchAnswers(option)}
              />
              {option}
            </div>
          )
        );
    } else {
      options =
        this.props.quizById &&
        this.props.quizById[0].questions[this.props.index].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                key={this.props.index}
                value={option}
                className="options-name"
                name={option}
                onChange={() => this.matchAnswers(option)}
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
                      ? this.props.quizById[0].questions[this.props.index]
                          .question
                      : null}
                  </div>
                  <div className="options">{options}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.props.index === 0 ? (
            <div align="right" className="next-btn">
              <button
                className="btn btn-secondary"
                onClick={this.onClickNextBtn}
              >
                Next
              </button>
            </div>
          ) : this.props.index <
              (this.props.quizById &&
                this.props.quizById[0].questions.length - 1) &&
            this.props.index > 0 ? (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={this.props.decIndex}
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
          ) : this.props.index ===
            (this.props.quizById &&
              this.props.quizById[0].questions.length - 1) ? (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={this.props.decIndex}
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
  debugger;
  return {
    quizById: state.getQuizDataById.quizById,
    index: state.user.index,
    score: state.user.score,
    attempted: state.user.attempted
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getQuizes: id => {
      dispatch(getQuizById(id));
    },
    incIndex: () => {
      dispatch(incrementIndex());
    },
    decIndex: () => {
      dispatch(decrementIndex());
    },
    addScore: () => {
      dispatch(calculateScore());
    },
    attempt: () => {
      dispatch(attemptedQuestions());
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizQuestions)
);
