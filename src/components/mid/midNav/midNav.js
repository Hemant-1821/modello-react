import React from 'react';
import { ChevronDown } from 'css.gg'

import './midNav.css';

class MidNav extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ul className="navList">
                    <li className="featured active">FEATURED <ChevronDown className="down"/></li>
                    <li className="bar"></li>
                    <li className="arrivals">ARRIVALS <ChevronDown className="down"/></li>
                </ul>
                <p className="prodIntro">WE HAVE OVER 2000 PRODUCTS IN OUR SHOP</p>
            </React.Fragment>
        );
    }
}

export default MidNav;