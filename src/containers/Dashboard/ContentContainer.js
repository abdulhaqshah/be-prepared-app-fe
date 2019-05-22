import React, { Component } from "react";
import "./ContentContainer.scss";
import Card from "./Card";

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-container">
        <header>
          <div className="prac-div ml-5 font-weight-bold">
            <span>practice</span>
          </div>
          <div className="dashboard-heading-div ml-5 font-weight-bold">
            <h5 className="heading">Dashboard</h5>
          </div>
        </header>
        <div className="main-container">
          <h5 className="ml-5">Your Skills</h5>

          <div className="interview-card1 shadow-lg ml-5">
            <div className="card" style={{ width: "35rem", height: "15rem" }}>
              <div className="card-body">
                <p>INTERVIEW PREPARATION</p>
                <h2 className="card-title">Interview Preparation Kit</h2>
                <p className="card-text text-muted">
                  curated challenges and tips based on learnings from 1000+
                  compaanies to help you prepare for your upcoming interviews.
                </p>
                <a href="#" className="btn btn-success btn-lg">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="interview-card2 shadow ml-5">
            <div className="card" style={{ width: "35rem", height: "15rem" }}>
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
                <a href="#" className="btn btn-success btn-lg ">
                  Resend Confirmation Email
                </a>
              </div>
            </div>
          </div>
          <div className="interview-card3 shadow-lg ml-5 mt-5">
            <div
              className="card-div"
              className="card"
              style={{ width: "35rem", height: "15rem" }}
            >
              <div className="card-body">
                <p>PROBLEM SOLVING</p>
                <h2 className="card-title">Problem Solving</h2>
                <div className="progress-div">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: " 25%" }}
                    />
                  </div>
                </div>

                <a href="#" className="btn btn-outline-success btn-lg">
                  Continue Practice
                </a>
              </div>
            </div>
          </div>

          <h5 className="text-muted ml-5 mb-5 mt-5">
            Explore BePrepared Skills
          </h5>

          <div className="container">
            <div className="courses shadow-lg ml-0 mr-5">
              <Card title="POBLEM SOLVING" />
            </div>
            <div className="languages shadow-lg ml-4">
              <Card title="LANGUAGES" />
            </div>
            <div className="specialized-skills shadow-lg ml-3">
              <Card title="SPECIALIZED SKILLS " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContentContainer;
