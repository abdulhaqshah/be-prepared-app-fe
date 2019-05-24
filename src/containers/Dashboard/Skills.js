import React, { Component } from "react";
import "./Skills.scss"

class Skills extends Component {
  render() {
    return (
      <div>
        <div>
          <h5 className="ml-5 font-weight-bold">Your Skills</h5>
        </div>
        <div>
          <div className="interview-prep shadow-lg mt-5 mr-4 ml-5">
            <div className="card">
              <div className="card-body">
                <p className="text-muted">INTERVIEW PREPARATION</p>
                <h2 className="card-title">Interview Preparation Kit</h2>
                <p className="card-text text-muted">
                  curated challenges and tips based on learnings from 1000+
                  compaanies to help you prepare for your upcoming interviews.
                </p>
                <a href="#" className="btn shadow-lg btn-success btn-lg ">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="email shadow ml-5 mt-5">
            <div className="card" >
              <div className="card-body">
                <div className="icon-div">
                  <i className="fa fa-envelope-o fa-lg" />
                </div>
                <h3 className="card-title">Confirm your email address </h3>
                <p className="card-text ">
                  please check your inbox. We've sent a link to confirm your
                  email address. Once you confir, you will be able to access all
                  the features of out site, including
                  <b> Jobs, Leaderboard, Recommendations and more.</b>
                </p>
                <a href="#" className="btn shadow-lg btn-success btn-lg">
                  Resend Confirmation Email
                </a>
              </div>
            </div>
          </div>
          <div className="prob-sol shadow-lg ml-5 mt-5">
            <div
              className="card-div"
              className="card"
            >
              <div className="card-body">
                <p className="text-muted">PROBLEM SOLVING</p>
                <h2 className="card-title">Problem Solving</h2>
                <div className="progress-div">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                    />
                  </div>
                </div>
                <a href="#" className="btn btn-outline-success btn-lg">
                  Continue Practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
