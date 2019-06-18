import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./EditIntro.scss";

class EditInto extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      name: "",
      email: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="heading">
            <h5>Edit Intro</h5>
          </div>
        </div>
        <form
          className="form"
          onSubmit={this.submitForm}
          ref={ref => (this.formRef = ref)}
        >
          <div className="feilds" />
          <div className="name">
            <label className="labels vertical-spacing">
              Name <span className="edit-required-indicator">*</span>
            </label>
            <br />
            <input
            //  value={this.props.name}
              className="edit-field"
              name="name"
              onChange={this.handleUserInput}
            />
            <div className="edit-error-msg">
              {this.validator.message("name", this.state.name, "required")}
            </div>
          </div>
          <div className="email-div">
            <label className="labels vertical-spacing">
              Email <span className="edit-required-indicator">*</span>
            </label>
            <br />
            <input
            // value={this.props.email}
              className="edit-field"
              name="email"
              type="email"
              onChange={this.handleUserInput}
            />
            <div className="edit-error-msg">
              {this.validator.message("email", this.state.email, "required")}
            </div>
          </div>
          <div className="btns-div">
            <button
              className="btn btn-outline-success"
              name="cancelBtn"
              type="submit"
            >
              Cancel
            </button>
            <button className="btn btn-success" name="saveBtn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default EditInto;
