
import React, {Component} from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class Home extends Component{
    render() {
        return (
            <div className="page-landing">
                <Header />
                <Section />
                <Footer />
            </div>
        )
                
    }

}

export default Home