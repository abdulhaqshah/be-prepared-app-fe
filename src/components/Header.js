import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {LOGIN} from '../constants';
class Header extends Component {
  render() {
    return (
      <nav id="navigation" className="navigation-nav-container">
        <a className="navigation-logo" href="/Home">Be Prepared</a>
        <Link to={LOGIN}>
          <div className="navigation-auth">
            <button className="navigation-auth-login-button">Log In</button>
          </div>
        </Link>
      </nav>
    );
  }
}

export default Header;
