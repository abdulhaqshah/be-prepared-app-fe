import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities/index";
import API from "../../../api/index";
import "./CourseForm.scss";

class QuizForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      name: "",
      courseId: "",
      courses: []
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.getCourses = this.getCourses.bind(this);
    this.formRef = null;
    this.getCourses();
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { name, courseId } = this.state;
      const data = {
        name,
        courseId
      };
      API.quizData(data, result => {
        if (result.status === "201") {
          this.formRef.reset();
          this.validator.hideMessages();
          addNotification(
            this.notificationDOMRef,
            "success",
            "success",
            result.message
          );
          this.setState({
            name: "",
            courseId: ""
          });
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
      this.forceUpdate();
    }
  }

  getCourses() {
    API.getCourses(result => {
      if (result.status === "200") {
        this.setState({
          courses: result.data
        });
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
                Quiz Creation Form
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
                    onChange={this.handleUserInput}
                  />
                  <div className="form-error-msg">
                    {this.validator.message(
                      "name",
                      this.state.name,
                      "required|min:3|max:25"
                    )}
                  </div>
                </div>
                <div>
                  <label className="labels">Course</label>

                  <select
                    className="custom-select"
                    name="courseId"
                    type="text"
                    onChange={this.handleUserInput}
                  >
                    <option defaultValue>Select Course</option>
                    {this.state.courses.map((course, index) => (
                      <option key={index} value={course.courseId}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  <div className="form-error-msg">
                    {this.validator.message(
                      "course",
                      this.state.courseId,
                      "required"
                    )}
                  </div>
                </div>
                <div className="row d-flex flex-row-reverse mt-4">
                  <button
                    className="btn btn-secondary col-lg-4 mt-1"
                    name="addBtn"
                    type="submit"
                  >
                    Submit
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
export default QuizForm;
