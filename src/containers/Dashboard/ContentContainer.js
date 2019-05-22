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
          <div className="prac-div">
            <span>practice</span>
          </div>
          <div className="dashboard-heading-div font-weight-bold">
            <h5 className="heading">Dashboard</h5>
          </div>
        </header>
        <div className="main-container">
          <h5>Your Skills</h5>
          <div className="interview-card1">
            <div
              className="card-div shadow-lg"
              className="card"
              style={{ width: "35rem", height: "15rem" }}
            >
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
          <div className="interview2-card-div ">
            <div
              className="card-div shadow"
              className="card"
              style={{ width: "35rem", height: "15rem" }}
            >
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

          <div className="interview-card3 shadow-lg">
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
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <a href="#" className="btn btn-outline-success btn-lg">
                  Continue Practice
                </a>
              </div>
            </div>
          </div>
          <div className="heading-div">
            <h5 className="text-muted">Explore BePrepared Skills</h5>
          </div>
        <div className="container">
        <div className="courses">
          <Card title="POBLEM SOLVING"/>
          </div>
          <div className="languages">
          <Card title="LANGUAGES"/>
          </div> 
          <div className="specialized-skills">
          <Card title="SPECIALIZED SKILLS "/>
          </div> 
        </div>
        
          </div>
      </div>
    );
  }
}
export default ContentContainer;
