
import React, {Component} from 'react';
import Header from './Header'

class Home extends Component{
    render() {
        return (
            <div>
            <Header />
            
            <aside className="supported-languages"> 
                <h4 className="title animated-fade-in fade-in" translate="start.languages">We support them all!</h4> 
                <div className="cg-start-languages-carousel"> 
                    <slick slides-to-show="12" slides-to-scroll="12" infinite="true" responsive="breakpoints" arrows="true" prev-arrow=".prev-arrow-button" next-arrow=".next-arrow-button" className="slider multiple-items slick-initialized slick-slider">
                        <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6780, transform: "translate3d(-1130, 0, 0)"}}>
                            <div className="slick-slide slick-cloned" data-slick-index="-10" aria-hidden="true" style={{width: 113}} tabindex="-1"></div>
                                <div style="width: 100%; display: inline-block;"> 
                                    <div className="language-logo cg-start-languages-carousel-icon_go" title="Go"></div> 
                                </div>
                            </div>
                        </div>
                        <div className="slick-slide slick-cloned" data-slick-index="-9" aria-hidden="true" style="width: 113px;" tabindex="-1"></div>
                        <div style="width: 100%; display: inline-block;"></div>
                    </slick>
                </div>
            </aside>
            </div>
        )
                
    }

}

export default Home