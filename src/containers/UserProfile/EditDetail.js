import React, { Component, Fragment } from "react";
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
      <Fragment>
        {/* <div>
          <ReactNotification ref={this.notificationDOMRef} />
        </div> */}
        <div className="container">
          <div className="header">
            <div className="heading">
              <h5>Edit Detail</h5>
            </div>
          </div>
          <label for="comment">About me:</label>
          <textarea class="form-control" rows="5" id="comment" />

          <form className="form" ref={ref => (this.formRef = ref)}>
            <div className="feilds" />
            <div className="name">
              <label className="labels vertical-spacing">
                I am currently a
                <span className="edit-required-indicator">*</span>
              </label>
              <br />
              <select class="form-control" id="sel1">
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
              <select class="form-control" id="sel1">
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
            <div className="btns-div">
              <button
                className="btn btn-outline-success"
                name="cancelBtn"
                type="submit"
                onClick={this.props.closeModal}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                name="saveBtn"
                type="submit"
                onClick={this.saveData}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default EditDetail;
