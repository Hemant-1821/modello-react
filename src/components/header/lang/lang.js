import React from 'react';

import './lang.css';

function lang(){
    return (
        <div className="lang-container">
            <div className="lang-name">
                <p className="name">ENG</p>
                <p className="name">DE</p>
            </div>  
            <div className="lang-name">
                <p className="name">US</p>
                <p className="name">EUR</p>
            </div>
        </div>
    );    
}

export default lang;