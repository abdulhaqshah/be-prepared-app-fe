import React, { Component } from "react";
import Popup from "reactjs-popup";
import EditDetail from "./EditDetail";

class DetailPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <a
          href="#/"
          onClick={this.openModal}
          data-toggle="modal"
          data-target="#Modal"
        >
          <i className="fa fa-pencil" />
        </a>
        <div
          class="modal fade"
          id="Modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header ">
                <b> Edit Detail</b>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" />
              <EditDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailPopup;
