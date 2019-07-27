import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./TutorialUpdationForm.scss";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class TutorialUpdationForm extends Component {
    constructor(props) {
        super(props);

        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
        this.state = {
            content: "",
            tutorialId: "",
            tutorials: []
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.getAllTutorials = this.getAllTutorials.bind(this);
        this.notificationDOMRef = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.resetState = this.resetState.bind(this);
        this.formRef = null;
        this.getAllTutorials();
    }

    getAllTutorials() {
        API.getTutorials(result => {
            if (result.status === "200") {
                this.setState({
                    tutorials: result.data
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
        let obj = this.state.tutorials.find(tutorial => tutorial.tutorialId === e.target.value);
        this.setState({
            content: obj.content
        })
    }

    resetState() {
        this.setState({
            content: "",
            tutorialId: ""
        })
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

            API.tutorialUpdateContent(this.state.tutorialId, data, result => {
                if (result.status === "200") {
                    this.resetState();
                    self.formRef.reset();
                    self.validator.hideMessages();
                    addNotification(this.notificationDOMRef, "success", "success", result.message);
                    self.getAllTutorials();
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
                                Tutorial Update Form
              </h1>
                            <form
                                onSubmit={this.submitForm}
                                ref={ref => (this.formRef = ref)}
                            >
                                <div>
                                    <div>
                                        <label className="labels">
                                            Tutorial
                  </label>
                                    </div>
                                    <select className="browser-default custom-select custom-select-lg mb-2"
                                        name="tutorialId"
                                        type="text"
                                        onChange={this.handleUserInput}>
                                        <option value="">Select</option>
                                        {this.state.tutorials.map((tutorial, index) => (
                                            <option key={index} value={tutorial.tutorialId}>
                                                {tutorial.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="form-error-msg">
                                        {this.validator.message(
                                            "tutorial",
                                            this.state.tutorialId,
                                            "required"
                                        )}
                                    </div>
                                </div>
                                <div className="content-field">
                                    <label className="labels">
                                        Content
                  </label>
                                    <CKEditor
                                        className="form-control"
                                        data={this.state.content}
                                        config={{
                                            removePlugins: ['MediaEmbed', 'ImageUpload']
                                        }}
                                        editor={ClassicEditor}
                                        onChange={(event, editor) => {
                                            this.setState({ content: editor.getData() });
                                        }}
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
export default TutorialUpdationForm;