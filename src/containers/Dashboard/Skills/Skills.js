import React, { Component, Fragment } from "react";
import { INTERVIEW_PREP_KIT,PROBLEM_SOLVING } from "../../../constants";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div className="skill-label ml-5 font-weight-bold">Your Skills</div>
        <div className="row">
          <a href={INTERVIEW_PREP_KIT}>
            <div className="interview-prep shadow-lg mt-5 mr-4 ml-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">INTERVIEW PREPARATION</h5>
                  <div className="card-content">
                    <h3 className="card-heading ">Interview Preparation Kit</h3>
                    <p className="card-text">
                      curated challenges and tips based on learnings from 1000+
                      compaanies to help you prepare for your upcoming
                      interviews.
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
          </a>
          <div className="email shadow ml-5 mt-5">
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fa fa-envelope-o fa-2x" />
                  </div>
                  <div className="email-verficitaion-card-content">
                    <h3 className="card-heading">
                      Confirm your
                      <span className="email-add"> email address</span>.
                    </h3>
                    <p className="email-p">
                      please check your inbox. We've sent a link to confirm your
                      email address. Once you confir, you will be able to access
                      all the features of out site, including
                      <b> Jobs, Leaderboard, Recommendations and more.</b>
                    </p>
                    <div className="email-btn">
                      <button className="card-email-btn shadow btn-success btn-lg">
                        Resend Confirmation Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href={PROBLEM_SOLVING}>
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
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Skills;
