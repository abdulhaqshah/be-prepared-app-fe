import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (

            <nav id="navigation" className="navigation_nav-container">
                <div className="navigation_nav-container">
                    <a className="navigation-logo" href="/Home">Nav Bar</a>
                    <div className="navigation-auth"> 
                        <button ng-click="login()" className="navigation-auth_login-button" translate="navigation.connect.login">Log In</button> 
                        <button ng-click="signup()" className="navigation-auth_signup-button" translate="navigation.connect.signup">Sign Up</button> 
                    </div>
                </div>
             </nav>
        )
                
    }

}

export default Header