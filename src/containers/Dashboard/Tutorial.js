import React, { Component, Fragment } from "react";
import {
  INTERVIEW_PREP_KIT,
  STATISTICS,
  JAVASCRIPT,
  CODE
} from "../../constants";
import "./Tutorial.scss";
import TutorialCard from "./TutorialCard";

class Card extends Component {
  
  render() {
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Tutorials</h5>
        </div>
        <div className="row">
          <div className="tutorial-container">
            <div className="interview-prep-tutorial">
              <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
                <TutorialCard href={INTERVIEW_PREP_KIT} />
              </div>
            </div>
            <div className="learn-code">
              <div className="tutorial-card shadow-lg ml-5 mr-2 mb-5">
                <TutorialCard href={STATISTICS} />
              </div>
            </div>
            <div className="statistics">
              <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
                <TutorialCard href={JAVASCRIPT} />
              </div>
            </div>
            <div className="javascript">
              <div className="tutorial-card shadow-lg  ml-5 mb-5">
                <TutorialCard href={CODE} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
