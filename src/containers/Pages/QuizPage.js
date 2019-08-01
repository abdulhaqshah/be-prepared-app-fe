import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { getQuizById } from "../../store/actions/Actions";
import "./QuizPage.scss";

class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.history.location.pathname
    };
  }
  componentDidMount() {
    var id = this.state.pathname.split("/");
    this.props.getQuizes(id[3]);
  }

  quizQuestion = () => {
    this.props.history.push("/quiz-questions", this.state.pathname);
  };

  render() {
    debugger;
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
        <div align="center" className="quiz-btn">
          <button className="btn btn-secondary" onClick={this.quizQuestion}>
            Start Quiz
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  debugger;
  return {
    quizById: state.getQuizDataById.quizById
  };
};
const mapDispatchToProps = dispatch => {
  debugger;
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
  )(QuizPage)
);
