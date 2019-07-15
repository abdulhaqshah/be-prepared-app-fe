import React, { Component, Fragment } from "react";
import EditIntro from "./EditIntro";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification, getInitials } from "../../utilities/index";
import * as auth from "../../services/Session";
import "./LeftPanel.scss";
import AboutUser from "./AboutUser";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true,
      open: true,
      aboutUser: "Tell us about yourself . . ."
    };
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }

  closeModal = () => {
    this.setState({ open: false });
    addNotification(
      this.notificationDOMRef,
      "success",
      "success",
      "User has been updated"
    );
  };

  setAboutValue = about => {
    if (about === "undefined") {
      return this.state.aboutUser;
    } else {
      return about;
    }
  };

  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
    const about = auth.getItem("about");

    return (
      <Fragment>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="about">
          <button className="profile-btn btn-secondary btn-xl">
            {getInitials(name)}
          </button>
          <h3 className="profile-name">{name}</h3>
          <p>{email}</p>
          <div className="edit-btn">
            <a
              href="#editintro"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-pencil" /> Edit_Intro
            </a>
          </div>
          <EditIntro name={name} email={email} closeModal={this.closeModal} />
        </div>
        <div className="profile-detail">
          <div className="about-heading">
            <h5>About</h5>
          </div>
          <div className="about-pen-icon">
            <div>
              <a href="#editdetail" data-toggle="modal" data-target="#Modal">
                <i className="fa fa-pencil" />
              </a>
              <AboutUser
                about={this.setAboutValue(about)}
                closeModal={this.closeModal}
              />
            </div>
          </div>
        </div>
        <div className="user-about-info">
          <p>{this.setAboutValue(about)}</p>
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
