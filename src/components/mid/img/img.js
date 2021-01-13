import React from 'react';

import './img.css';
import img from '../../../images/collection.jpg'

function Img(){
    return(
        <div className="img-container">
            <img className="img-collection" src={img} alt="Collection" />
        </div>
    )
}

export default Img;