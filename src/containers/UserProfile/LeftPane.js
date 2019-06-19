import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import "./LeftPane.scss";
import EditIntro from "./EditIntro";
import * as auth from '../../services/Session'

class LeftPane extends Component {
  render() {
  const name= auth.getItem('name');
  const email= auth.getItem('email');
    return (
      <Fragment>
        <div className="about">
          <button className="profile-btn btn-secondary btn-xl">
            {this.props.initials}
            <div className="overlay">
              <a href="./edit">{/* <i className="fa fa-pencil" /> */}</a>
            </div>
          </button>
          <h3 className="profile-name">{this.props.name}</h3>
          <p>{this.props.email}</p>
          <Popup
            trigger={
              <div className="edit-btn">
                <a href>
                  <i className="fa fa-pencil" /> Edit_Intro
                </a>
              </div>
            }
            modal
          >
            {close => (
              <div className="">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="content">
                  <EditIntro name={name} email={email}/>
                </div>
              </div>
            )}
          </Popup>
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
