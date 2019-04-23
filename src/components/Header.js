import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {LOGIN} from '../constants';
class Header extends Component {
  render() {
    return (
      <nav id="navigation" className="navigation-nav-container">
        <a className="navigation-logo" href="/Home">Be Prepared</a>

        <div className="navigation-auth">
          <Link to={LOGIN}>
            <button className="navigation-auth-login-button">Log In</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
