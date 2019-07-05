import React, { Component, Fragment } from "react";
import EditIntro from "./EditIntro";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../utilities/index";
import API from "../../api/index";
import * as auth from "../../services/Session";
import "./LeftPanel.scss";
import AboutUser from "./AboutUser";

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = { readOnly: true, open: true };
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.notificationDOMRef = React.createRef();
    this.formRef = null;
    this.state = {
      selectedFile: ""
    };
  }
  handleSubmit(event) {
    debugger;
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);

    API.uploadImage(data, result => {
      if (result.status === "200") {
        debugger;
        alert("api hit");
      }
    }).catch = error => {
      addNotification(this.notificationDOMRef, "Error", "warning", error);
    };
  }
  // fileChangedHandler = event => {
  //   this.setState({
  //     //  selectedFile: event.target.files[0]
  //     selectedFile: URL.createObjectURL(event.target.files[0])
  //   });
  //   alert(this.state.selectedFile);
  //   var { filePath } = this.state;
  //   const data = {
  //     filePath
  //   };
  //   debugger;
  //   API.uploadImage(data, result => {
  //     if (result.status === "200") {
  //       debugger;
  //       alert("api hit");
  //     }
  //   }).catch = error => {
  //     addNotification(this.notificationDOMRef, "Error", "warning", error);
  //   };
  // };
  closeModal() {
    this.setState({ open: false });
    addNotification(
      this.notificationDOMRef,
      "success",
      "success",
      "User has been updated"
    );
  };

  getAboutValue = about => {
    return about === "" ? "Tell us about yourself . . ." : about;
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
          <div>
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
              <div class="container">
                {/* <button
                className="profile-btn btn-secondary btn-xl image"
                type="image"
                // onClick={this.fileChangedHandler}
              >
                {getInitials(name)}
              </button> */}
                <img src={this.state.selectedFile} />

                <input
                  type="file"
                  // onChange={event => this.fileChangedHandler(event)}
                />
                <div class="middle">
                  <div class="text">{/* <i className="fa fa-pencil" /> */}</div>
                </div>
              </div>
            </form>
          </div>
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
              <AboutUser about={about} closeModal={this.closeModal} />
            </div>
          </div>
        </div>
        <div className="user-about-info">
          <p>{this.getAboutValue(about)}</p>
        </div>
      </Fragment>
    );
  }
}
export default LeftPane;
