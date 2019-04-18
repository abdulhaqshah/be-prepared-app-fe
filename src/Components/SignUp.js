import React, { Component } from "react";
import "./Login.css";
// import 'font-awesome/css/font-awesome.min.css';
// import './App.css';
// import './myOwn.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpUserName: "",
      signUpEmail: "",
      signUpPass: "",
      signUpConfirmPass: ""
    };
  }
  setSignUpUserName(event) {
    this.setState({ signUpUserName: event.target.value });
  }
  setSignUpEmail(event) {
    this.setState({ signUpEmail: event.target.value });
  }
  setSignUpPassword(event) {
    this.setState({ signUpPass: event.target.value });
  }
  setSignUpConfirmPass(event) {
    this.setState({ signUpConfirmPass: event.target.value });
  }
  onSignUpBtn() {}
  render() {
    return (
      <div className="outer-container">
        <div className="container">
          <h1 className="labels" align="center">
            Sign Up
          </h1>
          <label className="labels">UserName</label>
          <br />
          <input
            name="signUpUserName"
            type="text"
            onChange={this.setSignUpUserName}
          />
          <br />
          <label className="labels">Email</label>
          <br />
          <input
            name="signUpEmail"
            type="text"
            onChange={this.setSignUpEmail}
          />
          <br />

          <label className="labels">Password</label>
          <br />
          <input
            name="signUpPassword"
            type="password"
            onChange={this.setSignUpPassword}
          />
          <br />

          <label className="labels">Confirm Password</label>
          <br />
          <input
            name="signUpConfirmPass"
            type="password"
            onChange={this.setSignUpConfirmPass}
          />
          <br />
          {/* Accept terms and conditions
        <br/>
        <input name="signUpCheckBox" type="checkbox"/>
        <br/> */}
          <button
            className="button"
            name="signUpBtn"
            type="submit"
            onClick={this.onSignUpBtn}
          >
            SignUp
          </button>
        </div>
      </div>
    );
  }
}
export default SignUp;
