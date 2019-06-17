import React, { Component, Fragment } from "react";
import "./LeftPane.scss";

class LeftPane extends Component {
  render() {
    return (
      <Fragment>
        <div className="about">
          <button className="profile-btn btn-secondary btn-xl">
            HA
            <div className="overlay">
              <a href="./edit">{/* <i className="fa fa-pencil" /> */}</a>
            </div>
          </button>
          <h3 className="profile-name">{this.props.name}</h3>
          <p>{this.props.email}</p>
          <div className="edit-btn">
            <a href="./edit-intro">
              <i className="fa fa-pencil" /> Edit_Intro
            </a>
          </div>
        </div>
        <div className="profile-detail">
          <div className="about-heading">
            <h5>About</h5>
          </div>
          <div className="about-pen-icon">
            <a href="./link">
              <i className="fa fa-pencil" />
            </a>
          </div>
          <div className="user-about-info">
            <span>Expected year of Graduation</span>
            <br />
            <b>2019</b>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
