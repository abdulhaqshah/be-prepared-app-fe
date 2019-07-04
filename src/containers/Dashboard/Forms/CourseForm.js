import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities/index";
import API from "../../../api/index";
import "./CourseForm.scss";

class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      name: "",
      description: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { name, description } = this.state;
      const data = {
        name,
        description
      };
      API.courseData(data, result => {
        if (result.status === "201") {
          // Form reset
          this.formRef.reset();
          addNotification(
            this.notificationDOMRef,
            "success",
            "success",
            result.message
          );
          // this.setState({
          //   name: "",
          //   description: ""
          // });
        } else if (
          result.status === "404" ||
          result.status === "400" ||
          result.status === "500"
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
            "danger",
            result.message
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
      <div>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="d-flex justify-content-center container">
          <div className="row">
            <div className="form-inner-container">
              <h1 className="heading" align="center">
                Course Creation Form
              </h1>
              <form
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div>
                  <label className="labels">Name</label>
                  <br />
                  <input
                    className="form-field"
                    name="name"
                    type="text"
                    maxLength="30"
                    onChange={this.handleUserInput}
                  />
                  <div className="form-error-msg">
                    {this.validator.message(
                      "name",
                      this.state.name,
                      "min:3|max:25|required"
                    )}
                  </div>
                </div>
                <div>
                  <label className="labels">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    type="text"
                    rows="5"
                    onChange={this.handleUserInput}
                  />
                  <div className="form-error-msg">
                    {this.validator.message(
                      "description",
                      this.state.description,
                      "min:3|required"
                    )}
                  </div>
                </div>
                <div className="row d-flex flex-row-reverse mt-4">
                  <button
                    className="btn btn-secondary col-lg-4 mt-1"
                    name="addBtn"
                    type="submit"
                  >
                    Add Course
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
export default CourseForm;
