import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { withRouter } from "react-router-dom";
import {
  getQuizById,
  incrementIndex,
  decrementIndex
} from "../../store/actions/Actions";
import "./QuizPage.scss";

class QuizQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    var id = pathname.split("/");
    this.props.getQuizes(id[4]);
  }

  onClickNextBtn = () => {
    debugger;
    this.props.incIndex(this.state.index);
    this.setState({
      index: this.props.index
    });
  };

  onClickPrevBtn = () => {
    debugger;
    this.props.decIndex(this.state.index);
    this.setState({
      index: this.props.index
    });
  };

  render() {
    console.log(this.props.index);
    console.log(this.props.quizById && this.props.quizById[0].questions.length);
    let options, nextBtn, prevBtn, doneBtn;
    if (this.state.index === 0) {
      nextBtn = (
        <div align="right" className="next-btn">
          <button className="btn btn-secondary" onClick={this.onClickNextBtn}>
            Next
          </button>
        </div>
      );
    } else if (
      this.props.index <
      (this.props.quizById && this.props.quizById[0].questions.length)
    ) {
      prevBtn = (
        <div align="left" className="next-btn">
          <button className="btn btn-secondary" onClick={this.onClickPrevBtn}>
            Previous
          </button>
        </div>
      );
      nextBtn = (
        <div align="right" className="next-btn">
          <button className="btn btn-secondary" onClick={this.onClickNextBtn}>
            Next
          </button>
        </div>
      );
    } else {
      doneBtn = (
        <div align="left" className="next-btn">
          <button className="btn btn-secondary" onClick={this.onClickNextBtn}>
            Done
          </button>
        </div>
      );
    }
    if (
      this.props.quizById[0].questions[this.state.index].selection === "single"
    ) {
      options =
        this.props.quizById &&
        this.props.quizById[0].questions[this.state.index].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="radio"
                className="options-name"
                value={option}
                name="answer"
              />
              {option}
            </div>
          )
        );
    } else {
      options =
        this.props.quizById &&
        this.props.quizById[0].questions[this.state.index].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="options-name"
                value={option}
                name={option}
              />
              {option}
            </div>
          )
        );
    }
    return (
      <div>
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
                        ? this.props.quizById[0].questions[this.state.index]
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
            {nextBtn}
            {prevBtn}
            {doneBtn}
          </div>
          {/* <div>{prevBtn}</div>
          <div>{doneBtn}</div> */}
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
    index: state.user.index
  };
};
const mapDispatchToProps = dispatch => {
  debugger;
  return {
    getQuizes: id => {
      dispatch(getQuizById(id));
    },
    incIndex: index => {
      dispatch(incrementIndex(index));
    },
    decIndex: index => {
      dispatch(decrementIndex(index));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizQuestions)
);
