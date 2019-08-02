import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { getTutorialById } from "../../store/actions/Actions";
import "./CoursePage.scss";

class TutorialPage extends Component {
  
  componentDidMount() {
    const pathname =this.props.history.location.pathname
    var id = pathname.split("/");
    console.log(id);
    this.props.getTutorials(id[3]);
  }

  render() {
    return (
      <div className="main-course-container">
        <div className="header">
          <h1>
            {this.props.tutorialById ? this.props.tutorialById[0].name : null}
          </h1>
        </div>
        <div className="course-content-container">
          <div className="courses-detail-card">
            <div className="card shadow-lg">
              <div className="card-body">
                <p>
                  {this.props.tutorialById
                    ? <div dangerouslySetInnerHTML={{ __html: this.props.tutorialById[0].content}} />
                    : null}
                </p>
              </div>
            </div>
          </div>
          <div align="right" className="next-btn">
             <button
               className="btn btn-secondary"
               onClick={this.onClickNextBtn}
             >
               Done
             </button>
           </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tutorialById: state.getDashboardData.tutorialById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTutorials: id => {
      dispatch(getTutorialById(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TutorialPage)
);
