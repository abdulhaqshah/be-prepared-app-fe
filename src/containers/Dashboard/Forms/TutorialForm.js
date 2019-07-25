import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./TutorialForm.scss";
import ClassicEditor from './editor'
import CKEditor from '@ckeditor/ckeditor5-react';
// //import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import Enter from '@ckeditor/ckeditor5-enter/src/enter';
// import Typing from '@ckeditor/ckeditor5-typing/src/typing';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// //import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import Undo from '@ckeditor/ckeditor5-undo/src/undo';
// import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import List from '@ckeditor/ckeditor5-list/src/list';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import CKFinderUploadAdapter from '../../../uploadadapter';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

// const editorConfiguration = {
//   plugins: [
//     Essentials, Heading, Enter, Typing, Paragraph, Undo, Bold, Italic, Clipboard, List, ImageCaption, ImageToolbar,
//     ImageStyle, ImageUpload, CKFinderUploadAdapter
//   ],
//   toolbar: [ 'heading', '|', 'undo', 'redo', 'bold', 'italic', 'bulletedList', 'numberedList', 'imageUpload']
// };


// ClassicEditor
// 	.create( document.querySelector( '#editor1' ), {
// 		ckfinder: {
// 			uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
// 		},
// 		toolbar: [ 'ckfinder', 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo' ]
// 	} )
// 	.catch( error => {
// 		console.error( error );
// 	} );
// ClassicEditor
//     .create( document.querySelector( '#editor' ), {
//         toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
//         Heading: {
//             options: [
//                 { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//                 { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//                 { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
//             ]
//         }
//     } )
//     .catch( error => {
//         console.log( error );
//     } );
class TutorialForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator({autoForceUpdate: this});
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
    this.resetState = this.resetState.bind(this);
    this.formRef = null;
    ClassicEditor
	.create( document.querySelector( '#editor' ), {
		ckfinder: {
			uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
		},
		toolbar: [ 'ckfinder', 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo' ]
	} )
	.catch( error => {
		console.error( error );
  } );
  ClassicEditor.defaultConfig = {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'custombutton' ],

    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};
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
  resetState() {
    this.setState({
      name: "",
      content: "",
      courseId: "",
      tags : [],
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
      
      API.tutorialData(data, result => {
        if (result.status === "201") {
          this.resetState();
          self.formRef.reset();
          self.validator.hideMessages();
          addNotification(this.notificationDOMRef, "success", "success",result.message);
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
                <div>
                  <label className="labels">
                    Tags
                  </label>
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
                    className="editor1"
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
                    className="btn btn-secondary col-lg-4 mt-1 mr-1 ml-1"
                    name="saveBtn"
                    type="button"
                    onClick={this.submitForm}
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