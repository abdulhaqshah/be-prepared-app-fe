import React, { Component, Fragment } from "react";
import "./Tutorial.scss";
class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div>
          <h5 className="headings ml-5 mb-5 mt-5">Tutorials</h5>
        </div>
        <div className="row">
          <div className="tutorial-container">
            <div className="interview-prep-tutorial">
              <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">INTERVIEW PREPARATION</h5>
                    <h2 className="card-heading font-weight-bold">
                      Interview Preparation Kit
                    </h2>
                    <p>
                      challenges based on learnings from 1000+ companies to help
                      you prepare
                    </p>
                    <div className="tutorial-link">
                      <a href="#" className=" font-weight-bold">
                        View Tutorial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-code">
              <div className="tutorial-card shadow-lg ml-5 mr-2 mb-5">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">30 DAYS OF CODE</p>
                    <h2 className="card-heading font-weight-bold">
                      Learn to code in 30 days
                    </h2>
                    <p>
                      Learn if-else statements, recursion, data, structure, oop
                      and more.
                    </p>
                    <div className="tutorial-link">
                      <a href="#" className="font-weight-bold">
                        Start Tutorial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics">
              <div className="tutorial-card shadow-lg ml-5 mr-4 mb-5">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">TUTORIAL</p>
                    <h2 className="card-heading font-weight-bold">
                      10 Days of Statistics
                    </h2>
                    <p>
                      Learn Probabilitym distribution, regression and more!{" "}
                    </p>
                    <div className="tutorial-link">
                      <a href="#" className="font-weight-bold">
                        Start Tutorial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="javascript">
              <div className="tutorial-card shadow-lg  ml-5 mb-5">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">TUTORIAL</p>
                    <h2 className="card-heading font-weight-bold">
                      10 Days of Javascript
                    </h2>
                    <p>Learn and improve your Javascript fundamentals"</p>
                    <div className="tutorial-link">
                      <a href="#" className="font-weight-bold">
                        Start Tutorial
                      </a>
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

export default Card;
