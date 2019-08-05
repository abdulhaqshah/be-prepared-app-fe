import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { addNotification } from "../../utilities/index";
import * as auth from "../../services/Session";
import API from "../../api/index";

class AboutUser extends Component {
  constructor(props) {
    super(props);
    this.state = { about: this.props.about };
    this.validator = new SimpleReactValidator();
    this.notificationRef = this.props.notificationRef;
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
    if (this.validator.allValid()) {
      var { about } = this.state;
      const data = {
        about
      };
      API.userAboutInfo(data, result => {
        if (result.status === "200") {
          auth.setItem("about", result.data);
          this.removeBackdrop();
          this.props.closeModal();
        } else if (
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500" ||
          result.status === "400"
        ) {
          addNotification(
            this.notificationRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          let error = API.getErrorMessage(result.message)
          addNotification(this.notificationDOMRef, "Error", "danger", error);
        }
      }).catch = error => {
        addNotification(this.notificationRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="modal fade" id="Modal" data-backdrop="static">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <b>Edit Detail</b>
              <button
                type="button"
                className="close"
                onClick={this.onCancel}
                data-dismiss="modal"
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="container">
              <form
                className="form"
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div className="modal-body">
                  <label htmlFor="comment">About me</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    name="about"
                    type="text"
                    maxLength="300"
                    placeholder="Tell us about yourself...."
                    defaultValue={this.props.about}
                    onChange={this.handleUserInput}
                  />
                  <div className="edit-error-msg">
                    {this.validator.message(
                      "about",
                      this.state.about,
                      "required|min:5|max:300"
                    )}
                  </div>
                  <div className="row d-flex flex-row-reverse mt-4">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUser;
