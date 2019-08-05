import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import API from "../../../api/index";
import "./Tutorial.scss";
import { addNotification } from "../../../utilities/index";

class TutorialCard extends Component {
  constructor(props) {
    super(props);
    this.notificationRef = this.props.notificationRef;
  }
  addingTutorialToUser = () => {
    const data = {
      name: this.props.heading,
      description: this.props.description
    };
    API.addingTutorialProgressToUser(
      this.props.value,
      this.props.courseId,
      data,
      result => {
        if (result.status === "200") {
        }
      }
    ).catch = error => {
      addNotification(this.notificationRef, "Error", "warning", error);
    };
  };

  getTutorialById = (tutorialId, name) => {
    this.addingTutorialToUser();
    this.props.history.push(`/tutorial-page/${name}/${tutorialId}`);
  };
  render() {
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
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </div>
          <div className="tutorial-link">
            <Link
              onClick={this.getTutorialById.bind(
                this,
                this.props.value,
                this.props.heading
              )}
              className="font-weight-bold"
            >
              {this.props.linkName}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TutorialCard);
