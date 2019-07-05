import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./EditIntro.scss";

class EditDetail extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
    this.state = {
      about: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onSave() {}

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <form className="form" ref={ref => (this.formRef = ref)}>
          <div className="modal-body">
            <label htmlFor="comment">About me:</label>
            <textarea className="form-control" rows="5" id="comment" />
            <div className="row d-flex flex-row-reverse mt-4">
              <button
                className="btn btn-success col-lg-3 mt-1"
                name="saveBtn"
                type="submit"
                onClick={this.onSave}
              >
                Save
              </button>
              <button
                className="btn btn-outline-success col-lg-3 mr-1 mt-1"
                name="cancelBtn"
                type="submit"
                data-dismiss="modal"
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
