import React, { Component } from "react";
import Popup from "reactjs-popup";
import * as auth from '../../services/Session'
import EditIntro from "./EditIntro";

class EditPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
    return (
      <div>
        <div className="edit-btn">
          <a onClick={this.openModal}>
            <i className="fa fa-pencil" /> Edit_Intro
          </a>
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <div className="content">
              <EditIntro closeModal={this.closeModal} name={name} email={email} />
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}
export default EditPopup;
