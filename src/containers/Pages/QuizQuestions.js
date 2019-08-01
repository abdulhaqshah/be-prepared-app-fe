import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { withRouter } from "react-router-dom";
import { getQuizById } from "../../store/actions/Actions";
import "./QuizPage.scss";

class QuizQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
      // nextBtn:"",
      // prevBtn:""
    };
  }
  componentDidMount() {
    const pathname = this.props.location.pathname;
    var id = pathname.split("/");
    this.props.getQuizes(id[4]);
  }

  // nextBtn = () => {
  //   return (
  //     <div align="right" className="next-btn">
  //       <button className="btn btn-secondary">Next</button>
  //     </div>
  //   );
  // };

  onClickNextBtn = () => {
    this.setState({
      index: this.state.index++
    });
  };

  render() {
    console.log(this.props.quizById && this.props.quizById[this.state.index]);
    let options, nextBtn, prevBtn;
    if (this.state.index === 0) {
      nextBtn = (
        <div align="right" className="next-btn">
          <button className="btn btn-secondary" onClick={this.onClickNextBtn}>
            Next
          </button>
        </div>
      );
    } else {
      prevBtn = (
        <div align="left" className="next-btn">
          <button className="btn btn-secondary" onClick={this.onClickNextBtn}>
            Previous
          </button>
        </div>
      );
    }
    if (this.props.quizById[0].questions[this.state.index].selection) {
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
            <h4>
              {this.props.quizById
                ? this.props.quizById[this.state.index].name
                : null}
            </h4>
          </div>
          <div align="center" className="description">
            <p>
              {this.props.quizById
                ? this.props.quizById[this.state.index].description
                : null}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 course-content-container">
              <div className="courses-detail-card">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <div className="question">
                      {this.props.quizById
                        ? this.props.quizById[0].questions[0].question
                        : null}
                    </div>
                    <div className="options">{options}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>{nextBtn}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizById: state.getQuizDataById.quizById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getQuizes: id => {
      dispatch(getQuizById(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizQuestions)
);
