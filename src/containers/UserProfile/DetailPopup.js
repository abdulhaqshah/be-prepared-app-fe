import React, { Component } from "react";
import Popup from "reactjs-popup";
import EditDetail from "./EditDetail";

class DetailPopup extends Component {
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
    return (
      <div>
        <a onClick={this.openModal}>
          <i className="fa fa-pencil" />
        </a>
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
              <EditDetail closeModal={this.closeModal} />
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}
export default DetailPopup;
