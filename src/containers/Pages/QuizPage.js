import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { getQuizById } from "../../store/actions/Actions";
import "./QuizPage.scss";

class QuizPage extends Component {
  componentDidMount() {
    const pathname = this.props.history.location.pathname;
    var id = pathname.split("/");
    console.log(id);
    this.props.getQuizes(id[3]);
  }

  render() {
    return (
      <div className="main-course-container">
        <div className="header">
          <h1>
            {/* {this.props.quizById ? this.props.quizById[0].name : null} */}
          </h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body" />
            </div>
          </div>
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
  )(QuizPage)
);
