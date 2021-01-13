import React from 'react';

import './gallery.css';
import pant from '../../images/pant.jpg';
import sweater from '../../images/sweater.jpg';

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
            ],
        }
    }

    render(){
        return(
            <div className="products">
                {this.state.list.map((ele) => {
                    return(
                    <div className="product-card">
                        <div className="product-image">
                            <img src={ele.url} alt="img" />
                        </div>
                        <div className="bar-comp">
                            <div className="bar-hor"></div>
                            <p className="company">{ele.company}</p>
                        </div>
                        <div className="product-info">
                            <p className="product-name">{ele.name}</p>
                            <p className="product-price">$ {ele.price}</p>
                        </div>
                    </div>);
                })}
            </div>
        );
    }
}

export default Gallery