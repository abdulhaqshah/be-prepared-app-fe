import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addNotification from "../../utilities/index";
import * as auth from "../../services/Session";
import API from "../../api/index";
import * as $ from "jquery";
import "./EditIntro.scss";

class EditInto extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      name: this.props.name,
      email: this.props.email
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.onSave = this.onSave.bind(this);
    this.formRef = null;
  }
  onSave() {
    $("#exampleModal").modal("hide");
    $(".modal-backdrop").remove();
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  submitForm(e) {
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
          //Form reset
          this.formRef.reset();
          auth.setItem("name", result.data.name);
          auth.setItem("email", result.data.email);
          this.props.closeModal();
        } else if (
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500"
        ) {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else if (result.status === "401") {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          addNotification(
            this.notificationDOMRef,
            "Error",
            "warning",
            "Somgthing went wrong"
          );
        }
      }).catch = error => {
        addNotification(this.notificationDOMRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    return (
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
              defaultValue={this.state.name}
              className="edit-field"
              name="name"
              onChange={this.handleUserInput}
            />
            <div className="edit-error-msg">
              {this.validator.message("name", this.state.name, "required")}
            </div>
          </div>
          <div className="email-div">
            <label className="labels vertical-spacing">
              Email <span className="edit-required-indicator">*</span>
            </label>
            <br />
            <input
              defaultValue={this.state.email}
              className="edit-field"
              name="email"
              onChange={this.handleUserInput}
            />
            <div className="edit-error-msg">
              {this.validator.message("email", this.state.email, "required")}
            </div>
          </div>
          <div className="btns-div d-flex flex-row-reverse">
            <div className="modal-body">
              <div className="row d-flex flex-row-reverse">
                <button
                  className="btn btn-success col-lg-3 mt-1 save-details"
                  name="saveBtn"
                  type="submit"
                  onClick={this.onSave}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-success col-lg-3 mt-1"
                  name="cancelBtn"
                  type="submit"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditInto;
