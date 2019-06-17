import React, { Component, Fragment } from "react";
import "./RightPane.scss";

class RightPane extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="badges shadow-lg">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h3 className="card-heading">Badges</h3>
                  <div align="center">
                    <i className="fa fa-id-badge fa-3x" />
                    <div className="badge-text">
                      <p className="card-text">
                        You have not unlocked any badge yet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default RightPane;
