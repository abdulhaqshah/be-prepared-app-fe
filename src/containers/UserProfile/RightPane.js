import React, { Component, Fragment } from "react";
import "./RightPane.scss";

class RightPane extends Component {
  render() {
    return (
      <Fragment>
        <div className="badges shadow-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-heading">Badges</h5>
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
        <div className="work-exp shadow-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-heading">
                  <i className="fa fa-briefcase fa-sm mr-2" />
                  Work Experience
                </h5>
                <div className="work-exp-link">
                  <a>
                    + Add work experience, including contracts and internships
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education shadow-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-heading">
                  <i className="fa fa-graduation-cap fa-sm mr-2" />
                  Education
                </h5>
                <div className="badge-text">
                  <a>+ Add your education history</a>
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
