import React, { Component, Fragment } from "react";
import "./LeftPane.scss";

class LeftPane extends Component {
  render() {
    return (
      <Fragment>
        <button className="profile-btn btn-secondary btn-xl">
          HA
          <div className="overlay">
            <a href="./edit">
              {/* <i className="fa fa-pencil" /> */}
            </a>
          </div>
        </button>
        <div className="profile-name">
          <h3>{this.props.name}</h3>
        </div>
        <div className="profile-email">
          <h5>{this.props.email}</h5>
        </div>
        <div className="edit-btn">
          <a href="./edit-intro">
            <i className="fa fa-pencil" /> Edit_Intro
          </a>
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
