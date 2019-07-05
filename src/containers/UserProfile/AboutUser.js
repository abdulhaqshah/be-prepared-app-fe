import React, { Component } from "react";
// import EditDetail from "./EditDetail";

class AboutUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: ""
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
      <div>
        <a href="#editdetail" data-toggle="modal" data-target="#Modal">
          <i className="fa fa-pencil" />
        </a>
        <div
          className="modal"
          id="Modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <b>Edit Detail</b>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  aria-hidden="true"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" />
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
              {/* <EditDetail closeModal={this.closeModal} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUser;
