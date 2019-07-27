import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./TutorialUpdationForm.scss";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CourseUpdationForm extends Component {
    constructor(props) {
        super(props);

        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
        this.state = {
            description: "",
            courseId: "",
            courses: []
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.getAllCourses = this.getAllCourses.bind(this);
        this.notificationDOMRef = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.resetState = this.resetState.bind(this);
        this.formRef = null;
        this.getAllCourses();
    }

    getAllCourses() {
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
            addNotification(this.notificationDOMRef, "Error", "warning", error);
          };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value.trim() });
        let obj = this.state.courses.find(course => course.courseId === e.target.value);
        this.setState({
            description: obj.description
        })
    }

    resetState() {
        this.setState({
            description: "",
            courseId: ""
        })
    }

    submitForm(e) {
        let self = this;
        e.preventDefault();
        if (this.validator.allValid()) {
            var { name, description, courseId} = this.state;
            const data = {
                name,
                description,
                courseId
            };

            API.courseUpdateDescription(this.state.courseId, data, result => {
                if (result.status === "200") {
                    this.resetState();
                    self.formRef.reset();
                    self.validator.hideMessages();
                    addNotification(this.notificationDOMRef, "success", "success", result.message);
                    self.getAllCourses();
                } else if (
                    result.status === "400" ||
                    result.status === "404" ||
                    result.status === "403" ||
                    result.status === "500"
                ) {
                    addNotification(this.notificationDOMRef, "Error", "danger", result.message);
                } else {
                    let error = API.getErrorMessage(result.message);
                    addNotification(this.notificationDOMRef, "Error", "warning", error);
                }
            }).catch = error => {
                addNotification(this.notificationDOMRef, "Error", "warning", error);
            };
        } else {
            this.validator.showMessages();
        }
    }

    render() {
      

        this.validator.purgeFields();
        return (
            <div >
                <div>
                    <ReactNotification ref={this.notificationDOMRef} />
                </div>
                <div className="d-flex justify-content-center container" >
                    <div className="row">
                        <div className="col-12 form-inner-container" >
                            <h1 className="heading" align="center">
                                Course Update Form
              </h1>
                            <form
                                onSubmit={this.submitForm}
                                ref={ref => (this.formRef = ref)}
                            >
                                <div>
                                    <div>
                                        <label className="labels">
                                            Course
                  </label>
                                    </div>
                                    <select className="browser-default custom-select custom-select-lg mb-2"
                                        name="courseId"
                                        type="text"
                                        onChange={this.handleUserInput}>
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
                                <div className="content-field">
                                    <label className="labels">
                                        Description
                  </label>
                                    <CKEditor
                                        className="form-control"
                                        data={this.state.description}
                                        config={{
                                            removePlugins: ['MediaEmbed', 'ImageUpload']
                                        }}
                                        editor={ClassicEditor}
                                        onChange={(event, editor) => {
                                            this.setState({ description: editor.getData() });
                                        }}
                                    />
                                </div>
                                <div className="form-error-msg">
                                    {this.validator.message(
                                        "description",
                                        this.state.description,
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
                                        Update
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
export default CourseUpdationForm;