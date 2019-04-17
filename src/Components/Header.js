import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (

            <nav id="navigation" className="navigation_nav-container">
                <li className="navigation_nav-container">
                    <a className="navigation-logo" href="/Home">Be Prepared</a>
                    <div className="navigation-auth" align="right"> 
                        <button ng-click="login()" className="navigation-auth_login-button" translate="navigation.connect.login">Log In</button> 
                        {/* <button ng-click="signup()" className="navigation-auth_signup-button" translate="navigation.connect.signup">Sign Up</button>  */}
                    </div>
                </li>
            </nav>
            
            
        )
                
    }

}

export default Header