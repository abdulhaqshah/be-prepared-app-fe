import React, { Component } from "react";
import {Link,withRouter} from "react-router-dom"
import LinesEllipsis from 'react-lines-ellipsis'
import "../Tutorials/Tutorial.scss";

class SkillCard extends Component {

  getTutorialById = (tutorialId, name) => {
    this.props.history.push(`/tutorial-page/${name}/${tutorialId}`);
  };
  render() {
    let link;
    if(this.props.skill === "tutorial") {
        link = (
        <div className="tutorial-link">
            <Link
            onClick={this.getTutorialById.bind(this, this.props.value, this.props.heading)} className="font-weight-bold">
            Continue
            </Link>
        </div>
      )
    } else {
        link = (
            <div className="tutorial-link">
                <Link>
                Continue
                </Link>
            </div>
        )
    }
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.title}
            INTERVIEW PREPARATION
          </h5>
          <h2 className="card-heading font-weight-bold">
            {this.props.heading}
          </h2>
          <div className="truncate-lines">
          <LinesEllipsis
            text={this.props.description}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          </div>
          {link}
        </div>
      </div>
    );
  }
}
export default withRouter(SkillCard);
