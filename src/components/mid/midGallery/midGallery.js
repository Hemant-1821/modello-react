import React from 'react';

import './midGallery.css';
import Gallery from '../../gallery/gallery';

function MidGallery(){
    return(
        <div>
            <Gallery/>
            <div className="more-prod">
                <p className="head-more">+ LOAD MORE PRODUCTS</p>
            </div>
        </div>

    );
}

export default MidGallery;