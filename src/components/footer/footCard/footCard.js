import React from 'react';

import './footCard.css';

function FootCard(props) {
    return(
        <div className="footCartContainer">
            <img className="footImgClass" src={props.url} alt="img" />
            <div className="footInfo">
                <div className="footCompany">{props.company + ' - ' + props.name}</div>
                <div className="footCutPrice">{ props.cutPrice ? props.cutPrice : '' }</div>
                <div className="footprice">{props.price}</div>
            </div>
        </div>
    );
}

export default FootCard;