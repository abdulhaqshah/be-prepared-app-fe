import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./Login.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import postUserData from "../../api";
// import { HOME } from "../../constants";

class Login extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: "",
      loginPass: ""
    };
    this.setLoginUserName = this.setLoginUserName.bind(this);
    this.setLoginPassword = this.setLoginPassword.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }
  setLoginUserName(event) {
    this.setState({ loginUserName: event.target.value });
  }
  setLoginPassword(event) {
    this.setState({ loginPass: event.target.value });
  }
  loginValidation(e) {
    e.preventDefault();
    if (this.state.loginUserName === "" || this.state.loginPass === "") {
      alert("All Feilds Required");
    } else {
      this.props.history.push("/Home");
    }
  }
  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="login-outer-container">
          <div className="login-container">
            <h1 className="login-heading" align="center">
              Login
            </h1>{" "}
            <br />
            <label className="login-labels">UserName</label>
            <br />
            <input
              className="login-field"
=======
        <div className="outer-container">
          <div className="container">
            <h1 className="heading" align="center">
=======
        <div className="login-outer-container">
          <div className="login-container">
            <h1 className="login-heading" align="center">
>>>>>>> a little bit  Modification has made in login page
              Login
            </h1>{" "}
            <br />
            <label className="login-labels">UserName</label>
            <br />
            <input
<<<<<<< HEAD
              className="field"
>>>>>>> Final login form
=======
              className="login-field"
>>>>>>> a little bit  Modification has made in login page
              name="loginUserName"
              type="text"
              placeholder="UserName"
              onChange={this.setLoginUserName}
            />
            <br /> <br />
<<<<<<< HEAD
<<<<<<< HEAD
            <label className="login-labels">Password</label>
            <br />
            <input
              className="login-field"
=======
            <label className="labels">Password</label>
            <br />
            <input
              className="field"
>>>>>>> Final login form
=======
            <label className="login-labels">Password</label>
            <br />
            <input
              className="login-field"
>>>>>>> a little bit  Modification has made in login page
              name="loginPassword"
              type="password"
              placeholder="Password"
              onChange={this.setLoginPassword}
            />
<<<<<<< HEAD
<<<<<<< HEAD
            <br /> <br /> 
            <button
              className="login-button"
=======
            <br /> <br /> <br />
            <button
              className="button"
>>>>>>> Final login form
=======
            <br /> <br /> 
            <button
              className="login-button"
>>>>>>> a little bit  Modification has made in login page
              name="loginBtn"
              type="submit"
              onClick={this.loginValidation}
            >
              Login
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
=======
constructor(props) {
super(props);
this.validator = new SimpleReactValidator({
});
this.state = {
name: "",
password: ""
};
this.handleUserInput = this.handleUserInput.bind(this);
this.submitForm = this.submitForm.bind(this);
this.formRef = null;
>>>>>>> design login form according to signup form
}

handleUserInput(e) {
const name = e.target.name;
const value = e.target.value;
this.setState({ [name]: value });
}
submitForm(e) {
e.preventDefault();
if (this.validator.allValid()) {
alert("Successfully Login");
//post data
var { name, password } = this.state;
const data = {
name,
password
};
postUserData(data)
//Form reset
this.formRef.reset();
this.props.history.push('/home');
} else {
this.validator.showMessages();
// rerender to show messages for the first time
this.forceUpdate();
}
}

render() {
return (
<div>
<Header />
<div className="login-container">
<div className="inner-container">
<h1 className="heading" align="center">
Login
</h1>
<form onSubmit={this.submitForm} ref={ref => (this.formRef = ref)}>
<div>
<label className="labels vertical-spacing"> Your name </label>
<br />
<input
className="field"
name="name"
type="text"
onChange={this.handleUserInput}
/>
<div className="error-msg">
{this.validator.message(
"name",
this.state.name,
"required|name"
)}
</div>
</div>
<div>
<label className="labels vertical-spacing">
Password <span className="required-indicator">*</span>
</label>
<br />
<input
className="field"
name="password"
type="password"
onChange={this.handleUserInput}
/>
<div className="error-msg">
{this.validator.message(
"password",
this.state.password,
"required|password"
)}
</div>
</div>
<div>
<button className="button" name="loginBtn" type="submit">
LOGIN
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
export default Login;