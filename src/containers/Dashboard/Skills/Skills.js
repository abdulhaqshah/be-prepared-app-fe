import React, { Component, Fragment } from "react";
import "./Skills.scss";
import SkillCard from './SkillCard'
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialProgress: [],
      quizProgress : []
    };
    this.getUserProgress();
  }

  getUserProgress() {

  }
  render() {
    return (
      <Fragment>
        <div className="skill-label ml-5 font-weight-bold">Your Skills</div>
        <div>
        <SkillCard/>
        </div>
      </Fragment>
    );
  }
}

export default Skills;
