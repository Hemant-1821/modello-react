import React from 'react';

import './navbar.css';

class Navbar extends React.Component{
    state = {

    }

    render(){
        return(
            <div className='navbar-cat'>
                <div className="cat">
                    <p>JACKETS</p>
                </div>
                <div className="cat">
                    <p>SWEATERS</p>
                </div>
                <div className="cat">
                    <p>DRESSES</p>
                </div>
                <div className="cat">
                    <p>SKIRTS</p>
                </div>
                <div className="cat">
                    <p>PANTS</p>
                </div>
                <div className="cat">
                    <p>SHORTS</p>
                </div>
                <div className="cat">
                    <p>SHOES</p>
                </div>
                <div className="cat">
                    <p>ACCESSORIES</p>
                </div>
            </div>
        );   
    }
}

export default Navbar;