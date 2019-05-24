
import React, {Component} from 'react';
import Card from "./Card";
import "./Courses.scss"

class Courses extends Component{
    render() {
        return (
            <div>
              <div>
                <h5 className="text-muted font-weight-bold ml-5 mb-5 mt-5">
                  Explore BePrepared Skills
                </h5>
              </div>
              <div>
                <div className="card-container ">
                  <div className="courses shadow-lg ml-5 mr-4 mb-5">
                    <Card title="POBLEM SOLVING" />
                  </div>
                  <div className="languages shadow-lg ml-5 mr-2 mb-5">
                    <Card title="LANGUAGES" />
                  </div>
                  <div className="specialized-skills shadow-lg ml-5 mr-5 mb-5">
                    <Card title="SPECIALIZED SKILLS " />
                  </div>
                </div>
              </div>
            </div>
        )
                
    }

}

export default Courses