import React, { Component, Fragment } from "react";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div className="skill-label ml-5 font-weight-bold">Your Skills</div>
        <div className="row">
          <div className="prob-sol shadow-lg ml-5 mt-5">
            <div className="card">
              <div className="card-body">
                <p className="card-title">PROBLEM SOLVING</p>
                <h2 className="card-heading">Problem Solving</h2>
                <div className="progress-div">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" />
                  </div>
                </div>
                <div className="btn-div">
                  <button className="card-btn shadow btn-outline-success btn-lg">
                    Continue Practice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Skills;
