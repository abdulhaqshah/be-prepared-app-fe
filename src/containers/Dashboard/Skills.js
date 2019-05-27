import React, { Component, Fragment } from "react";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div className="skill-label ml-5 font-weight-bold">Your Skills</div>
        <div className="row">
          <div className="interview-prep shadow-lg mt-5 mr-4 ml-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">INTERVIEW PREPARATION</h5>
                <div className="card-content">
                  <h3 className="card-heading ">Interview Preparation Kit</h3>
                  <p className="card-text">
                    curated challenges and tips based on learnings from 1000+
                    compaanies to help you prepare for your upcoming interviews.
                  </p>
                  <div className="btn-div">
                    <button className="card-btn shadow btn-success btn-lg">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="email shadow ml-5 mt-5">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <h3 className="card-heading">Confirm your email address </h3>
                  <p>
                    please check your inbox. We've sent a link to confirm your
                    email address. Once you confir, you will be able to access
                    all the features of out site, including
                    <b> Jobs, Leaderboard, Recommendations and more.</b>
                  </p>
                    <button className="card-btn shadow btn-success btn-lg">
                      Resend Confirmation Email
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="prob-sol shadow-lg ml-5 mt-5">
            <div className="card-div" className="card">
              <div className="card-body">
                <p className="card-title">PROBLEM SOLVING</p>
                <h2 className="card-heading">Problem Solving</h2>
                <div className="progress-div">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" />
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
