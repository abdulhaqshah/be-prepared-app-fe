import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./TutorialForm.scss";
import CKEditor from  '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class TutorialForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      name: "",
      content: "",
      courseId: "",
      tags: [],
      courses: []
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationRef = this.props.notificationRef;
    this.submitForm = this.submitForm.bind(this);
    this.resetState = this.resetState.bind(this);
    this.formRef = null;
    
    API.getCourses(result => {
      if (result.status === "200") {
        this.setState({
          courses: result.data
        });
      } else {
        let error = API.getErrorMessage(result.message)
        addNotification(this.notificationDOMRef, "Error", "danger", error);
      }
    }).catch = error => {
      addNotification(this.notificationRef, "Error", "warning", error);
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
  }

  addClick() {
    this.setState(prevState => ({ tags: [...prevState.tags, ""] }));
  }

  removeClick(i) {
    let tags = [...this.state.tags];
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleChange(i, event) {
    let tags = [...this.state.tags];
    tags[i] = event.target.value;
    this.setState({ tags });
  }
  resetState() {
    this.setState({
      name: "",
      content: "",
      courseId: "",
      tags: []
    });
  }

  submitForm(e) {
    let self = this;
    e.preventDefault();
    if (this.validator.allValid()) {
      var { name, content, courseId, tags } = this.state;
      const data = {
        name,
        content,
        courseId,
        tags
      };

      API.tutorialData(data, result => {
        if (result.status === "201") {
          this.resetState();
          self.formRef.reset();
          self.validator.hideMessages();
          addNotification(
            this.notificationRef,
            "success",
            "success",
            result.message
          );
        } else if (
          result.status === "400" ||
          result.status === "404" ||
          result.status === "403" ||
          result.status === "500"
        ) {
          addNotification(
            this.notificationRef,
            "Error",
            "danger",
            result.message
          );
        } else {
          let error = API.getErrorMessage(result.message);
          addNotification(this.notificationDOMRef, "Error", "warning", error);
        }
      }).catch = error => {
        addNotification(this.notificationRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
    }
  }

  render() {
    this.validator.purgeFields();
    return (
      <div>
        <div className="d-flex justify-content-center container">
          <div className="row">
            <div className="col-12 form-inner-container">
              <h1 className="heading" align="center">
                Tutorial Creation Form
              </h1>
              <form
                onSubmit={this.submitForm}
                ref={ref => (this.formRef = ref)}
              >
                <div>
                  <div>
                  <label className="labels">
                    Name
                  </label>
                  </div>
                  <input
                    className="name-field"
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
                  <div>
                  <label className="labels">
                    Course
                  </label>
                  </div>
                  <select className="browser-default custom-select custom-select-lg mb-2"
                    name="courseId"
                    type="text"
                    onChange={this.handleUserInput}
                  >
                    <option value="">Select</option>
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
                  <label className="labels">Tags</label>
                </div>
                {this.state.tags.map((tag, index) => (
                  <div className="tagholder" key={index}>
                    <div className="row">
                      <div className="col-xs-8 col-sm-8">
                        <div>
                          <input
                            className="tag-field"
                            name="tags"
                            type="text"
                            value={tag}
                            key={index}
                            onChange={this.handleChange.bind(this, index)}
                          />
                        </div>
                        <div className="tagMessage">
                          {this.validator.message(
                            "tag",
                            this.state.tags[index],
                            "required"
                          )}
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4">
                        <div className="remove">
                          <button
                            type="button"
                            key={index}
                            onClick={this.removeClick.bind(this, index)}
                            className="small"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="tag-button">
                  <button
                    type="button"
                    onClick={this.addClick.bind(this)}
                    className="btn btn-secondary col-lg-4 mt-1 mr-1 ml-1"
                  >
                    Add Tag
                  </button>
                </div>
                <div className="content-field">
                  <label className="labels">
                    Content
                  </label>
                  <CKEditor
                    className="form-control"
                    config ={{
                      removePlugins: ['MediaEmbed', 'ImageUpload']
                    }}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                      this.setState({ content : editor.getData() });
                    } }
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
                    className="btn btn-secondary col-lg-2 mt-1 mr-1 ml-1"
                    name="saveBtn"
                    type="button"
                    onClick={this.submitForm}
                  >
                    Save
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
