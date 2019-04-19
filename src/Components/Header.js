import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav id="navigation" className="navigation-nav-container">
        <a className="navigation-logo" href="/Home">Be Prepared</a>

        <div className="navigation-auth">
          <button className="navigation-auth-login-button">Log In</button>
        </div>
      </nav>
    );
  }
}

export default Header;
