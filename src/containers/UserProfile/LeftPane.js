import React, { Component, Fragment } from "react";
import EditIntro from "../../containers/UserProfile/EditIntro";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification, getInitials } from "../../utilities/index";
import * as auth from "../../services/Session";
import "./LeftPane.scss";
import AboutUser from "./AboutUser";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.closeModal = this.closeModal.bind(this);
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
  }

  closeModal() {
    this.setState({ open: false });
    addNotification(
      this.notificationDOMRef,
      "success",
      "success",
      "User has been updated"
    );
  }

  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");

    return (
      <Fragment>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="about">
          <button className="profile-btn btn-secondary btn-xl">
            {getInitials(name)}
            <div className="overlay">
              <a href="./edit">{/* <i className="fa fa-pencil" /> */}</a>
            </div>
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
            <AboutUser />
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
