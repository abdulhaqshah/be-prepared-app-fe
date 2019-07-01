import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// import addNotification from "../../utilities";
// import API from "../../api";
import "./CourseForm.scss";

class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      description: "",
      content: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    // this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  // submitForm(e) {
  //   e.preventDefault();
  //   if (this.validator.allValid()) {
  //     var { description, content } = this.state;
  //     const data = {
  //       tid: "656964e8-6787-41e2-bd1a-f4e21d007fd1",
  //       topicId: "5cf4c9cff1571b101a2981ac",
  //       lesson: {
  //         description,
  //         content
  //       }
  //     };
  //     API.testData(data, result => {
  //       if (result.status === "200") {
  //         console.log(result.data);
  //         //Form reset
  //         this.formRef.reset();
  //         //   this.props.history.push(DASHBOARD, this.state.email);
  //       } else if (
  //         result.status === "404" ||
  //         result.status === "403" ||
  //         result.status === "500"
  //       ) {
  //         addNotification(
  //           this.notificationDOMRef,
  //           "Error",
  //           "danger",
  //           result.message
  //         );
  //       } else {
  //         addNotification(
  //           this.notificationDOMRef,
  //           "Error",
  //           "warning",
  //           "Somgthing went wrong"
  //         );
  //       }
  //     }).catch = error => {
  //       addNotification(this.notificationDOMRef, "Error", "warning", error);
  //     };
  //   } else {
  //     this.validator.showMessages();
  //     // rerender to show messages for the first time
  //     this.forceUpdate();
  //   }
  // }

  render() {
    return (
      <div>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="container">
          <div className="form-container">
            <div className="form-inner-container">
              <h1 className="heading" align="center">
                Course Creation Form
              </h1>
              <form
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div>
                  <label className="labels vertical-spacing">
                    Name <span className="form-required-indicator" />
                  </label>
                  <br />
                  <input
                    className="form-field"
                    name="name"
                    type="text"
                    onChange={this.handleUserInput}
                  />
                  <div className="form-error-msg">
                    {this.validator.message(
                      "name",
                      this.state.description,
                      "name"
                    )}
                  </div>
                </div>
                <div>
                  <label className="form-field labels vertical-spacing">
                    Description <span className="form-required-indicator" />{" "}
                  </label>
                  <textarea className="form-control" rows="5" id="comment" />
                </div>
                <div className="row d-flex flex-row-reverse mt-5">
                  <button
                    className="btn btn-secondary col-lg-3 mt-2 ml-2 mr-2"
                    name="saveBtn"
                    type="submit"
                  >
                    Add Quiz
                  </button>
                  <button
                    className="btn btn-secondary col-lg-3 mt-2"
                    name="cancelBtn"
                    type="submit"
                    data-dismiss="modal"
                  >
                    Choose Image
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
