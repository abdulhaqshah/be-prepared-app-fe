import React, { Component } from "react";
import "./SignUp.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      emailErrorMessage:"",
      passwordErrorMessage:"",
      formValid: false,
      emailValid: false,
      passwordValid: false
    };
    this.handleUserInput =  this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.showValidationError = this.showValidationError.bind(this);
  }
 
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    this.validateField(name, value);
  }

  submitForm(e) {
    e.preventDefault();
  }

  validateField(fieldName, value) {
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch (fieldName) {
      case 'email':
        emailValid = this.validateEmail(value);
        this.setState({emailErrorMessage : emailValid ? '' : 'email is invalid'});
        break;
      case 'password':
        passwordValid = value.length >= 6;
        this.setState({passwordErrorMessage : passwordValid ? '': ' password is too short'});
        break;
      default:
        break;
    }
    this.validateForm();
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  showValidationError(field) {
    switch (field) {
      case "email":
      return ( !this.state.emailValid ? <label>{this.state.emailErrorMessage}</label> : null)
      case "password":
      return ( !this.state.passwordValid ? <label>{this.state.passwordErrorMessage}</label> : null)
      default:
      break
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="signup-container">
          <div className="inner-container">
            <h1 className="heading" align="center">Sign Up</h1>
            <form onSubmit={this.submitHandler}>
              <div>
                <label className="labels vertical-spacing"> Your name </label>
                <br />
                <input className="field" name="name" type="text" onChange={this.handleUserInput}/>
              </div>
              <div>
                <label className="labels vertical-spacing">Email <span className="required-indicator">*</span></label>
                <br />
                <input className="field" name="email"type="text" onChange={this.handleUserInput}/>
                {this.showValidationError("email")}
              </div>
              <div>
                <label className="labels vertical-spacing">Password <span className="required-indicator">*</span></label>
                <br />
                <input className="field" name="password" type="password" onChange={this.handleUserInput}/>
                {this.showValidationError("password")}
              </div>
              <div>
                <label className="labels vertical-spacing">Confirm Password <span className="required-indicator">*</span></label>
                <br />
                <input className="field" name="confirmPassword" type="password" onChange={this.handleUserInput}/>
              </div>
              <div className="term-conditions">
                By clicking 'Create account', you agree to our Terms and
                Conditions and acknowledge that you have read our Privacy Policy
                and Disclosure Guidelines.
              </div>
              <div>
                <button className="button" name="signUpBtn" type="submit" disabled={!this.state.formValid}>
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
