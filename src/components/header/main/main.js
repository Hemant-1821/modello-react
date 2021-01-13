import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPhoneAlt, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

import './main.css';
import logo from '../../../images/logo-big.png';

class Main extends React.Component{
    render(){
        return(
            <div className="main-head-container">
                <div className="name-number">
                    <p><FontAwesomeIcon icon={faUser} /> WELCOME, YOU CAN LOGIN OR REGISTER</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} /> HOTLINE: +91-987654321</p>
                </div>
                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="Logo" /> 
                    </div>
                </div>
                <div className="search-cart">
                    <div className="cart-wishlist">
                        <p><FontAwesomeIcon icon={faHeart} /> WISHLIST: 2</p>
                        <p className="p-cart"><FontAwesomeIcon icon={faShoppingBag} /> CART: 3 item(s) - $129.0</p>
                    </div>
                    <div className="search">
                        <input type="text" name="search" placeholder="SEARCH" className="search-input"></input>
                        <div className="search-icon"><FontAwesomeIcon icon={faSearch} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;