import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addNotification from "../../utilities";
import API from "../../api";
import "./Login.css";

class Test extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      description: "",
      content: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.notificationDOMRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.formRef = null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      var { description, content } = this.state;
      const data = {
        tid: "656964e8-6787-41e2-bd1a-f4e21d007fd1",
        topicId: "5cf4c9cff1571b101a2981ac",
        lesson: {
          description,
          content
        }
      };
      API.testData(data, result => {
        if (result.status === "200") {
          console.log(result.data);
          //Form reset
          this.formRef.reset();
          //   this.props.history.push(DASHBOARD, this.state.email);
        } else if (
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
      <div>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
        <div className="login-container">
          <div className="login-inner-container">
            <h1 className="heading" align="center">
              Test
            </h1>
            <form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
              <div>
                <label className="labels vertical-spacing">
                  Description <span className="login-required-indicator" />
                </label>
                <br />
                <input
                  className="login-field"
                  name="description"
                  type="text"
                  onChange={this.handleUserInput}
                />
                <div className="login-error-msg">
                  {this.validator.message(
                    "description",
                    this.state.description,
                    "required"
                  )}
                </div>
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Content <span className="login-required-indicator" />{" "}
                </label>
                <input
                  className="login-field"
                  name="content"
                  type="text"
                  onChange={this.handleUserInput}
                />
                <div className="login-error-msg">
                  {this.validator.message(
                    "content",
                    this.state.content,
                    "required"
                  )}
                </div>
              </div>
              <div>
                <button className="login-button" name="loginBtn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Test;
