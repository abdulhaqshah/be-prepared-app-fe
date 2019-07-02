import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./TutorialForm.scss";

class TutorialForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      name: "",
      content: "",
      courseId: "",
      tags : [],
      courses : []
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
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

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  }

  addClick(){
    this.setState(prevState => ({ tags: [...prevState.tags, '']}))
  }
  
  removeClick(i){
    let tags = [...this.state.tags];
    tags.splice(i,1);
    this.setState({ tags });
  }

  handleChange(i, event) {
    let tags = [...this.state.tags];
    tags[i] = event.target.value;
    this.setState({ tags });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { name, content, courseId, tags } = this.state;
      const data = {
        name,
        content,
        courseId,
        tags
      };
      this.setState({
        name: "",
        content: "",
        courseId: "",
        tags : [],
      })
      API.tutorialData(data, result => {
        if (result.status === "201") {
          this.formRef.reset();
        } else if (
          result.status === "400" ||
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
      <div >
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="d-flex justify-content-center container" >
          <div className="row">
            <div className="col-12 form-inner-container" >
              <h1 className="heading" align="center">
                Tutorial Creation Form
              </h1>
              <form
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div>
                  <label className="labels">
                    Name
                  </label>
                  <input
                    className="form-field"
                    name="name"
                    type="text"
                    maxLength="50"
                    onChange={this.handleUserInput}
                  />
                  <div className="form-error-msg">
                    {this.validator.message(
                      "name",
                      this.state.name,
                      "min:3|required"
                    )}
                  </div>
                </div>
                <div>
                  <label className="labels">
                    Course
                  </label>
                  <select className="browser-default custom-select custom-select-lg mb-2"
                    name="courseId"
                    type="text"
                    onChange={this.handleUserInput}>
                    <option value="Select">Select</option>
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
                <div>
                  <label className="labels">
                    Tags
                  </label>
                </div>
                {this.state.tags.map((tag, index) => (
                  <div className="tagholder">
                    <input
                      className="form-field-1"
                      name="tags"
                      type="text"
                      value={tag}
                      key={index}
                      onChange={this.handleChange.bind(this, index)}
                    />
                    <button
                      type="button"
                      onClick={this.removeClick.bind(this, index)}
                      className="small"
                    >
                      -
                    </button>
                  </div>
                ))}
                <div className="tagholder-1">
                  <button
                    type="button"
                    onClick={this.addClick.bind(this)}
                    className="btn btn-secondary col-lg-4 mt-1 mr-1 ml-1"
                  >
                    Add Tag
                </button>
                </div>
                <div>
                  <label className="labels">
                    Content
                  </label>
                  <textarea className="form-control"
                    rows="4"
                    name="content"
                    onChange={this.handleUserInput}
                  />
                </div>
                <div className="form-error-msg">
                {this.validator.message(
                     "content",
                     this.state.content,
                     "required"
                )}
                </div>
                <div className="row d-flex flex-row-reverse mt-4">
                  <button
                    className="btn btn-secondary col-lg-4 mt-1 mr-1 ml-1"
                    name="saveBtn"
                    type="submit"
                  >
                    Add Tutorial
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
export default TutorialForm;