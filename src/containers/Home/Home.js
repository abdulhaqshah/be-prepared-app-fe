
import React, {Component} from 'react';
import Header from '../../components/Header';
import Section from './Section';
import Footer from '../../components/Footer';
import { LOGIN } from "../../constants";

class Home extends Component{
    render() {
        return (
            <div className="page-landing">
                <Header btnName="Log In" redirectTo={LOGIN} />
                <Section />
                <Footer />
            </div>
        )
                
    }

}

export default Home