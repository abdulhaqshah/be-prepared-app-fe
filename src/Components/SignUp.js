import React, { Component } from "react";
import "./SignUp.css";
import Header from "./Header";
import Footer from "./Footer";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpUserName: "",
      signUpEmail: "",
      signUpPass: "",
      signUpConfirmPass: ""
    };
    this.setSignUpUserName = this.setSignUpUserName.bind(this);
    this.setSignUpEmail = this.setSignUpEmail.bind(this);
    this.setSignUpPassword = this.setSignUpPassword.bind(this);
    this.setSignUpConfirmPass = this.setSignUpConfirmPass.bind(this);
    this.signUpValidation = this.signUpValidation.bind(this);
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
  signUpValidation(e) {
     e.preventDefault();
    if (
      this.state.signUpUserName === "" ||
      this.state.signUpEmail === "" ||
      this.state.signUpPass === "" ||
      this.state.signUpConfirmPass === ""
    ) {
      alert("All Feilds Required");
    } else {
      this.props.history.push("/Login");
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="outer-container">
          <div className="container">
            <h1 className="heading" align="center">
              Sign Up
            </h1>
            <label className="labels">UserName</label>
            <br />
            <input
              className="field"
              name="signUpUserName"
              type="text"
              placeholder="UserName"
              onChange={this.setSignUpUserName}
            />
            <br />
            <label className="labels">Email</label>
            <br />
            <input
              className="field"
              name="signUpEmail"
              type="text"
              placeholder="Email"
              onChange={this.setSignUpEmail}
            />
            <br />

            <label className="labels">Password</label>
            <br />
            <input
              className="field"
              name="signUpPassword"
              type="password"
              placeholder="Password"
              onChange={this.setSignUpPassword}
            />
            <br />

            <label className="labels">Confirm Password</label>
            <br />
            <input
              className="field"
              name="signUpConfirmPass"
              type="password"
              placeholder="Confirm Password"
              onChange={this.setSignUpConfirmPass}
            />
            <br />
            <label className="labels">Accept terms and conditions</label>
            <br />
            <input name="signUpCheckBox" type="checkbox" />
            <br />
            <button
              className="button"
              name="signUpBtn"
              type="submit"
              onClick={this.signUpValidation}
            >
              SignUp
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
