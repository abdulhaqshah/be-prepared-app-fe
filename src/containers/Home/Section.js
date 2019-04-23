
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SINGUP} from '../../constants';

class Section extends Component{
    render() {
        return (
            <div>
                <section id="intro" className="mainPage_topBar">
                    <h1>Mock interview with engineers</h1>
                    <p>We provide the same experience as real interviews and you'll get real feedback in the end.</p>
                    <Link to={SINGUP}>
                        <button className="navigation-auth_signup-button" >Sign Up</button>
                    </Link>
                </section>

                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Double Your Chance of Getting Hired in 45 Minutes</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container content padding-top-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-group fa-icon-1"></i>
                                    <h3>Get introduced to interviewers</h3>
                                    <p>Tell us about your target companies, preferred time slots, etc. We'll introduce you to experienced interviewers who can help you.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-desktop fa-icon-2"></i>
                                    <h3>Conduct interview online</h3><p>Interviews are conducted via Skype with the help of code-sharing tools.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className="service-box">
                                    <i className="fa fa-4x fa-heart fa-icon-3"></i>
                                    <h3>Get real feedback</h3><p>Get immediate feedback at the end of the interview. You are also encouraged to ask whatever questions you have.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="offers">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="section-heading">Weekly Tips</h2>
                                <p className="section-description">Be Prepare provides weekly tips and tricks to help you prepare your coding interviews. Topics include coding questions, system design interviews, preparation tips etc..</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="join">
                    <div className="container text-center">
                        <div className="row">
                            <p className="section-description col-lg-12">
                                Want to become an interviewer? Shoot us an email about <b>info@beprepared.com</b>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
                
    }

}

export default Section