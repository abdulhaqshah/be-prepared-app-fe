import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.onClickLoginBtn = this.onClickLoginBtn.bind(this);
  }
  onClickLoginBtn(e) {
    this.props.history.push("/login");
    e.preventDefault();
  }
  render() {
    return (
      <nav id="navigation" className="navigation-nav-container">
        <a className="navigation-logo" href="/Home">
          Be Prepared
        </a>

        <div className="navigation-auth">
          <button
            className="navigation-auth-login-button"
            onClick={this.onClickLoginBtn}
          >
            Log In
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
