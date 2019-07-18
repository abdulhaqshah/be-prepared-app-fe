import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { addNotification } from "../../../utilities/index";
import API from "../../../api/index";
import "./CourseForm.scss";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      name: "",
      description: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationRef = this.props.notificationRef;
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
          this.formRef.reset();
          this.validator.hideMessages();
          addNotification(
            this.notificationRef,
            "success",
            "success",
            result.message
          );
          this.setState({
            name: "",
            description: ""
          });
        } else if (
          result.status === "404" ||
          result.status === "400" ||
          result.status === "500"
        ) {
          addNotification(this.notificationDOMRef, "Error", "danger", result.message);
        } else {
          let error = API.getErrorMessage(result.message);
          addNotification(this.notificationDOMRef, "Error", "danger", error);
        }
      }).catch = error => {
        addNotification(this.notificationRef, "Error", "warning", error);
      };
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
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
                    id="nameId"
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
                  <CKEditor
                    className="form-control"
                    config ={{
                      removePlugins: ['MediaEmbed', 'ImageUpload']
                    }}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                      this.setState({ description : editor.getData() });
                    } }
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
                    className="btn btn-secondary col-lg-2 mt-1"
                    name="addBtn"
                    type="submit"
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
export default CourseForm;
