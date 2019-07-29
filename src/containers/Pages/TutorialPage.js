import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import "./CoursePage.scss";

class TutorialPage extends Component {
  render() {
    return (
      <div className="main-course-container">
        <div className="header">
          <h1>
            {this.props.tutorialById[0] && this.props.tutorialById[0].name}
          </h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <p>
                  {this.props.tutorialById[0] &&
                    this.props.tutorialById[0].content}
                </p>
              </div>
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
    tutorialById: state.getTutorialDataById.tutorialById
  };
};
export default withRouter(connect(mapStateToProps)(TutorialPage));
