import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addNotification from "../../utilities/index";
import * as auth from "../../services/Session";
import API from "../../api/index";
import "./EditIntro.scss";

class EditInto extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      name: this.props.name,
      email: this.props.email
    };
    this.notificationDOMRef = React.createRef();
    this.modalRef = React.createRef();
    this.formRef = null;
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  };

  onCancel = () => {
    this.formRef.reset();
  };

  removeBackdrop = () => {
    var element = document.getElementsByClassName("modal-backdrop fade show");
    if (element && element.length) {
      element[0].remove();
    }
  };

  submitForm = e => {
    e.preventDefault();
    const uuid = auth.getItem("uuid");
    if (this.validator.allValid()) {
      var { name, email } = this.state;
      const data = {
        name,
        email,
        uuid
      };
      API.updateData(data, result => {
        if (result.status === "200") {
          auth.setItem("name", result.data.name);
          auth.setItem("email", result.data.email);
          this.removeBackdrop();
          this.props.closeModal();
        } else if (
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500" ||
          result.status === "401"
        ) {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          let error = API.getErrorMessage(result.message)
          addNotification(this.notificationDOMRef, "Error", "danger", error);
        }
      }).catch = error => {
        addNotification(this.notificationDOMRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div
        ref={ref => (this.modalRef = ref)}
        className="modal fade"
        id="exampleModal"
        data-backdrop="static"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Intro
              </h5>
              <button
                type="button"
                className="close"
                onClick={this.onCancel}
                data-dismiss="modal"
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body" />

            <div className="container">
              <div>
                <ReactNotification ref={this.notificationDOMRef} />
              </div>
              <form
                className="form"
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div className="feilds" />
                <div className="name">
                  <label className="labels vertical-spacing">
                    Name <span className="edit-required-indicator">*</span>
                  </label>
                  <br />
                  <input
                    defaultValue={this.props.name}
                    className="edit-field"
                    name="name"
                    onChange={this.handleUserInput}
                  />
                  <div className="edit-error-msg">
                    {this.validator.message(
                      "name",
                      this.state.name,
                      "required"
                    )}
                  </div>
                </div>
                <div className="email-div">
                  <label className="labels vertical-spacing">
                    Email <span className="edit-required-indicator">*</span>
                  </label>
                  <br />
                  <input
                    defaultValue={this.props.email}
                    className="edit-field"
                    name="email"
                    onChange={this.handleUserInput}
                  />
                  <div className="edit-error-msg">
                    {this.validator.message(
                      "email",
                      this.state.email,
                      "required"
                    )}
                  </div>
                </div>
                <div className="row d-flex flex-row-reverse mt-4 mb-3">
                  <button
                    className="btn btn-success col-lg-3 mt-1 mr-1 ml-1"
                    name="saveBtn"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-outline-success col-lg-3 mr-1 ml-1 mt-1"
                    type="button"
                    name="cancelBtn"
                    onClick={this.onCancel}
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditInto;
