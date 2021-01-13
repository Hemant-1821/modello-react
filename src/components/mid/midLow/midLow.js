import React from 'react';

import './midLow.css';
import Ship from '../../../images/freeshipping.jpg';
import Sale from '../../../images/onsale.jpg';
import logo from '../../../images/logo-big.png';

function MidLow(){
    return(
        <div nameclass="">
            <div className="newsletter">
                <div className="newsletter-head">
                    <p className="newsletter-para">Sign up to our newsletter</p>
                    <p>and get $30 coupon</p>
                </div>
                <div className="newsletter-input">
                    <input className="newsletter-input-input" type='text' placeholder="Enter here your email"></input>
                    <button className="newsletter-input-button" type='button'>Sign up</button>
                </div>
            </div>
            <div className="ship-sale">
                <img src={Ship} alt="img" className="ship-img"></img>
                <img src={Sale} alt="img" className="ship-img"></img>
            </div>
            <div className="blog">
                <p className="blog-head">From our blog</p>
                <div className="blog-links">
                    <div className="link-1">
                        <img src={logo} alt="img" className="img-link"/>
                        <div className="link-desc">
                            <p className="link-desc-1">Big Sales Coming Soon</p>
                            <p className="link-desc-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p className="link-desc-3">2 comments</p>
                        </div>
                    </div>  
                    <div className="link-2">
                        <img src={logo} alt="img" className="img-link"/>
                        <div className="link-desc">
                            <p className="link-desc-1">Big Sales Coming Soon</p>
                            <p className="link-desc-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p className="link-desc-3">2 comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MidLow;