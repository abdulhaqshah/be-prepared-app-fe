import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./EditIntro.scss";

class EditDetail extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      role: "",
      year: ""
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
        <label for="comment">About me:</label>
        <textarea className="form-control" rows="5" id="comment" />

        <form className="form" ref={ref => (this.formRef = ref)}>
          <div className="feilds" />
          <div className="name">
            <label className="labels vertical-spacing">
              I am currently a<span className="edit-required-indicator">*</span>
            </label>
            <br />
            <select className="form-control" id="sel1">
              <option>Student</option>
              <option>Professional</option>
            </select>
          </div>
          <div className="email-div">
            <label className="labels vertical-spacing">
              Expected year of graduation{" "}
              <span className="edit-required-indicator">*</span>
            </label>
            <br />
            <select className="form-control" id="sel1">
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
          <div className="modal-body">
            <div className="row d-flex flex-row-reverse">
              <button
                className="btn btn-success col-lg-3 mt-1"
                name="saveBtn"
                type="submit"
                onClick={this.saveData}
              >
                Save
              </button>
              <button
                className="btn btn-outline-success col-lg-3 mr-1 mt-1"
                name="cancelBtn"
                type="submit"
                onClick={this.props.closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditDetail;
