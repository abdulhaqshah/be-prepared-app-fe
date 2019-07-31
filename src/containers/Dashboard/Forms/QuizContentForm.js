import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { addNotification } from "../../../utilities";
import API from "../../../api/index";
import "./QuizContentForm.scss";

class TutorialForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      courseId: "",
      questions : [],
      courses: [],
      quizzes : [],
      quizId : ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleCourseInput = this.handleCourseInput.bind(this);
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
        addNotification(this.notificationRef, "Error", "danger", error);
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

  handleCourseInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value.trim() });
    this.getQuizzes(e.target.value);
  }

  getQuizzes(courseId){
    API.getQuizByCourseId(courseId, result => {
      if (result.status === "200") {
        this.setState({
          quizzes: result.data
        });
      } else {
        let error = API.getErrorMessage(result.message)
        addNotification(this.notificationRef, "Error", "danger", error);
      }
    }).catch = error => {
      addNotification(this.notificationRef, "Error", "warning", error);
    };
  }

  addClick() {
    let quest = {
        question : "",
        options : ["", "", "", ""],
        answer : [],
        selection : ""
    };
    let questions = [...this.state.questions];
    questions.push(quest);
    this.setState({ questions });
  }

  removeClick(i) {
    let questions = [...this.state.questions];
    questions.splice(i, 1);
    this.setState({ questions });
  }

  handleChange(i, event) {
    let questions = [...this.state.questions];
    questions[i].question = event.target.value;
    this.setState({ questions });
  }

  handleSelection(i,event) {
    let questions = [...this.state.questions];
    questions[i].selection = event.target.value;
    if(event.target.value === 'single') {
      questions[i].answer = [];
      questions[i].answer.push("")
    } else {
      if(questions[i].answer.length===0) {
        questions[i].answer.push("");
        questions[i].answer.push("");
      } else if (questions[i].answer.length===1) {
        questions[i].answer.push("");
      }
    }
    this.setState({ questions });
  }

  addOption(index){
      let questions = [...this.state.questions];
      questions[index].options.push("");
      this.setState({ questions });
  }
  addAnswer(index){
    let questions = [...this.state.questions];
    if(questions[index].selection === 'multi') {
      questions[index].answer.push("");
      this.setState({ questions });
    } else {
      alert('Selection Type is Single')
    }
}

  removeOption(i, index) {
    let questions = [...this.state.questions];
    questions[index].options.splice(i, 1);
    this.setState({ questions });
  }

  handleChangeOptions(i, index,  event) {
    let questions = [...this.state.questions];
    questions[index].options[i] = event.target.value;
    this.setState({ questions });
  }

  handleChangeAnswer(i, index,  event) {
    let questions = [...this.state.questions];
    questions[index].answer[i] = event.target.value;
    this.setState({ questions });
  }

  resetState() {
    this.setState({
      courseId: "",
      quizId : "",
      questions : [],
      quizzes : []
    });
  }

  submitForm(e) {
    let self = this;
    e.preventDefault();
    if (this.validator.allValid()) {
      var { quizId, questions } = this.state;
      const data = {
        quizId, 
        questions
      };

      API.quizContentAdd(this.state.quizId, data, result => {
        if (result.status === "200") {
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
          addNotification(this.notificationRef, "Error", "warning", error);
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
                Quiz Content Form
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
                    onChange={this.handleCourseInput}
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
                  <div>
                  <label className="labels">
                    Quiz
                  </label>
                  </div>
                  <select className="browser-default custom-select custom-select-lg mb-2"
                    name="quizId"
                    type="text"
                    onChange={this.handleUserInput}
                  >
                    <option value="">Select</option>
                    {this.state.quizzes.map((quiz, index) => (
                      <option key={index} value={quiz.quizId}>
                        {quiz.name}
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
                  <label className="labels">Question</label>
                </div>
                {this.state.questions.map((question, index) => (
                  <div className="tagholder" key={index}>
                    <div className="row">
                      <div className="col-lg-12 col-lg-12">
                        <div>
                          <textarea
                            className="tag-field"
                            name="questions"
                            type="text"
                            value={question.question}
                            key={index}
                            onChange={this.handleChange.bind(this, index)}
                          />
                        </div>
                        <div className="tagMessage">
                          {this.validator.message(
                            "question",
                            this.state.questions[index].question.trim(),
                            "required"
                          )}
                        </div>
                      </div>
                      {question.options.map((option, ind) => (
                          <div className = "col-lg-12 col-lg-12">
                          <div className="col-lg-8 col-lg-8">
                          <div>
                            <textarea
                              className="option-field"
                              name="options"
                              type="text"
                              value={option}
                              key={ind}
                              onChange={this.handleChangeOptions.bind(this, ind, index)}
                            />
                          </div>
                        </div>
                        <div className="tagMessage">
                            {this.validator.message(
                              "option",
                              this.state.questions[index].options[ind].trim(),
                              "required"
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="col-xs-12 col-sm-12">
                        <div>
                        <div className="col-xs-4 col-sm-4">
                          <select className="browser-default custom-select custom-select-md mb-2"
                          name="selection"
                          type="text"
                          onChange={this.handleSelection.bind(this,index)}
                          >
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="multi">Multi</option>
                          </select>
                        </div>
                        </div>
                        <div>
                        {question.answer.map((answer, inde) => (
                          <div className = "col-lg-12 col-lg-12">
                            <div>
                            <label className="labels">Answer</label>
                            </div>
                          <div className="col-lg-8 col-lg-8">
                          <div>
                            <textarea
                              className="option-field"
                              name="options"
                              type="text"
                              value={answer}
                              key={inde}
                              onChange={this.handleChangeAnswer.bind(this, inde, index)}
                            />
                          </div>
                        </div>
                        <div className="tagMessage">
                            {this.validator.message(
                              "answer",
                              this.state.questions[index].answer[inde].trim(),
                              "required"
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="col-xs-4 col-sm-4">
                        <button
                            type="button"
                            key={index}
                            onClick={this.addAnswer.bind(this, index)}
                            className="small"
                        >
                            Add Anwer
                        </button>
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
                            Remove Question
                          </button>
                        </div>
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
                    Add Question
                  </button>
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
