import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addNotification from "../../utilities/index";
import API from "../../api/index";

class AboutUser extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      about: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.modalRef = React.createRef();
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { about } = this.state;
      const data = {
        about
      };
      API.aboutUser(data, result => {
        if (result.status === "200") {
          this.props.closeModal();
          this.modalRef.remove();
        } else if (
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500" ||
          result.status === "400"
        ) {
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

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div
        ref={ref => (this.modalRef = ref)}
        className="modal"
        id="Modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <b>Edit Detail</b>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                aria-hidden="true"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>
              <ReactNotification ref={this.notificationDOMRef} />
            </div>
            <div className="container">
              <form className="form" onSubmit={this.submitForm}>
                <div className="modal-body">
                  <label htmlFor="comment">About me</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    name="about"
                    type="text"
                    onChange={this.handleUserInput}
                  />
                  <div className="edit-error-msg">
                    {this.validator.message(
                      "about",
                      this.state.about,
                      "required"
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
                      name="cancelBtn"
                      type="submit"
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
